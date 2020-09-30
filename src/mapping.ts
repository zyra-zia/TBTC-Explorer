import { Created, RegisteredPubkey, Funded, RedemptionRequested, GotRedemptionSignature, Redeemed, AllowNewDepositsUpdated } from '../generated/TBTCSystem/TBTCSystem'
import {TdtToTbtcCall} from '../generated/VendingMachine/VendingMachine'
import { Deposit, CreationTx, PubKeyTx, FundingTx, MintingTx, Redemption, RequestTx, SignatureTx, RedeemTx } from '../generated/schema'
import { BigInt } from '@graphprotocol/graph-ts'

export function handleCreated(event: Created): void {
  let deposit = new Deposit(event.params._depositContractAddress.toHex())
  deposit.state = "Created"
  deposit.owner = event.transaction.from
  
  //remove method id = 0xb7947b40
  let lotSizeHex = event.transaction.input.toHexString().substr(9);
  let lotSize = parseInt(lotSizeHex, 16);
  deposit.lotSize = BigInt.fromI32(<i32>lotSize)

  deposit.depositContract = event.params._depositContractAddress

  let creationTx = new CreationTx(event.transaction.hash.toHex());
  creationTx.deposit = deposit.id
  creationTx.timestamp = event.params._timestamp
  creationTx.save()

  deposit.creationTx = creationTx.id
  deposit.save()
}


export function handleRegisteredPubkey(event: RegisteredPubkey): void {
  let id = event.params._depositContractAddress.toHex()
  let deposit = Deposit.load(id)
  if (deposit == null) {
    deposit = new Deposit(id)
  }
  deposit.state = "AddressGenerated"
  deposit.publicKeyX = event.params._signingGroupPubkeyX
  deposit.publicKeyY = event.params._signingGroupPubkeyY

  let pubKeyTx = new PubKeyTx(event.transaction.hash.toHex());
  pubKeyTx.deposit = deposit.id
  pubKeyTx.timestamp = event.params._timestamp
  pubKeyTx.save()

  deposit.pubKeyTx = pubKeyTx.id
  deposit.save()
}

export function handleFunded(event: Funded): void {
  let id = event.params._depositContractAddress.toHex()
  let deposit = Deposit.load(id)
  if (deposit == null) {
    deposit = new Deposit(id)
  }
  deposit.state = "Funded"

  let fundingTx = new FundingTx(event.transaction.hash.toHex());
  fundingTx.deposit = deposit.id
  fundingTx.timestamp = event.params._timestamp
  fundingTx.save()

  deposit.fundingTx = fundingTx.id
  deposit.save();
}

export function handleTDTToTBTC(call: TdtToTbtcCall): void {
  let id = call.inputs._tdtId.toHex()
  let deposit = Deposit.load(id)
  if (deposit == null) {
    return
  }
  deposit.state = "Minted"

  let mintingTx = new MintingTx(call.transaction.hash.toHex());
  mintingTx.deposit = deposit.id
  mintingTx.timestamp = call.block.timestamp
  mintingTx.save()

  deposit.mintingTx = mintingTx.id
  deposit.save();
}

export function handleRequested(event: RedemptionRequested): void {
  let redemption = new Redemption(event.params._depositContractAddress.toHex())
  redemption.state = "Requested"
  redemption.owner = event.transaction.from
  
  let requestTx = new RequestTx(event.transaction.hash.toHex());
  requestTx.redemption = redemption.id
  requestTx.save()

  redemption.requestTx = requestTx.id
  redemption.save();

  //link redemption to deposit
  let deposit = Deposit.load(redemption.id)
  deposit.redemption = redemption.id
  deposit.save()
  
  redemption.deposit = deposit.id;
  redemption.save();
}

export function handleSignature(event: GotRedemptionSignature): void {
  let id = event.params._depositContractAddress.toHex()
  let redemption = Redemption.load(id)
  if (redemption == null) {
    redemption = new Redemption(id)
  }
  redemption.state = "Signature"

  let signatureTx = new SignatureTx(event.transaction.hash.toHex());
  signatureTx.timestamp = event.params._timestamp
  //also fill in request tx timestamp
  let requestTx = RequestTx.load(redemption.requestTx);
  requestTx.timestamp = event.params._timestamp
  requestTx.save();
  
  signatureTx.redemption = redemption.id
  signatureTx.save()

  redemption.signatureTx = signatureTx.id
  redemption.save();
}

export function handleRedeemed(event: Redeemed): void {
  let id = event.params._depositContractAddress.toHex()
  let redemption = Redemption.load(id)
  if (redemption == null) {
    redemption = new Redemption(id)
  }
  redemption.state = "Redeemed"

  let redeemTx = new RedeemTx(event.transaction.hash.toHex());
  redeemTx.timestamp = event.params._timestamp
  redeemTx.redemption = redemption.id
  redeemTx.save()

  redemption.redeemTx = redeemTx.id
  redemption.save();
}