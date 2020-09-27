import { Created, RegisteredPubkey, Funded } from '../generated/TBTCSystem/TBTCSystem'
import { Deposit } from '../generated/schema'
import { BigInt } from '@graphprotocol/graph-ts'

export function handleCreated(event: Created): void {
  let deposit = new Deposit(event.params._depositContractAddress.toString() + "-" + event.transaction.from.toHex())
  deposit.state = "Created"
  deposit.owner = event.transaction.from
  deposit.lotSize = BigInt.fromUnsignedBytes(event.transaction.input)
  deposit.depositContract = event.params._depositContractAddress
  deposit.creationTimestamp = event.params._timestamp
  deposit.save()
}

export function handleRegisteredPubkey(event: RegisteredPubkey): void {
  let id = event.params._depositContractAddress.toString() + "-" + event.transaction.from.toHex()
  let deposit = Deposit.load(id)
  if (deposit == null) {
    deposit = new Deposit(id)
  }
  deposit.state = "AddressGenerated"
  deposit.publicKeyX = event.params._signingGroupPubkeyX
  deposit.publicKeyY = event.params._signingGroupPubkeyY
  deposit.pubKeyTimestamp = event.params._timestamp
  deposit.save()
}

export function handleFunded(event: Funded): void {
  let id = event.params._depositContractAddress.toString() + "-" + event.transaction.from.toHex()
  let deposit = Deposit.load(id)
  if (deposit == null) {
    deposit = new Deposit(id)
  }
  deposit.state = "Funded"
  deposit.fundingTx = event.params._txid
  deposit.fundingTimestamp = event.params._timestamp
  deposit.save()
}
