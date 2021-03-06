// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class CreationTx extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save CreationTx entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save CreationTx entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("CreationTx", id.toString(), this);
  }

  static load(id: string): CreationTx | null {
    return store.get("CreationTx", id) as CreationTx | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get deposit(): string {
    let value = this.get("deposit");
    return value.toString();
  }

  set deposit(value: string) {
    this.set("deposit", Value.fromString(value));
  }

  get timestamp(): BigInt | null {
    let value = this.get("timestamp");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set timestamp(value: BigInt | null) {
    if (value === null) {
      this.unset("timestamp");
    } else {
      this.set("timestamp", Value.fromBigInt(value as BigInt));
    }
  }
}

export class PubKeyTx extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save PubKeyTx entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save PubKeyTx entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("PubKeyTx", id.toString(), this);
  }

  static load(id: string): PubKeyTx | null {
    return store.get("PubKeyTx", id) as PubKeyTx | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get deposit(): string {
    let value = this.get("deposit");
    return value.toString();
  }

  set deposit(value: string) {
    this.set("deposit", Value.fromString(value));
  }

  get timestamp(): BigInt | null {
    let value = this.get("timestamp");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set timestamp(value: BigInt | null) {
    if (value === null) {
      this.unset("timestamp");
    } else {
      this.set("timestamp", Value.fromBigInt(value as BigInt));
    }
  }
}

export class FundingTx extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save FundingTx entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save FundingTx entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("FundingTx", id.toString(), this);
  }

  static load(id: string): FundingTx | null {
    return store.get("FundingTx", id) as FundingTx | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get deposit(): string {
    let value = this.get("deposit");
    return value.toString();
  }

  set deposit(value: string) {
    this.set("deposit", Value.fromString(value));
  }

  get timestamp(): BigInt | null {
    let value = this.get("timestamp");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set timestamp(value: BigInt | null) {
    if (value === null) {
      this.unset("timestamp");
    } else {
      this.set("timestamp", Value.fromBigInt(value as BigInt));
    }
  }
}

export class MintingTx extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save MintingTx entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save MintingTx entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("MintingTx", id.toString(), this);
  }

  static load(id: string): MintingTx | null {
    return store.get("MintingTx", id) as MintingTx | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get deposit(): string {
    let value = this.get("deposit");
    return value.toString();
  }

  set deposit(value: string) {
    this.set("deposit", Value.fromString(value));
  }

  get timestamp(): BigInt | null {
    let value = this.get("timestamp");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set timestamp(value: BigInt | null) {
    if (value === null) {
      this.unset("timestamp");
    } else {
      this.set("timestamp", Value.fromBigInt(value as BigInt));
    }
  }
}

export class Deposit extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Deposit entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Deposit entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Deposit", id.toString(), this);
  }

  static load(id: string): Deposit | null {
    return store.get("Deposit", id) as Deposit | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get state(): string {
    let value = this.get("state");
    return value.toString();
  }

  set state(value: string) {
    this.set("state", Value.fromString(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get lotSize(): BigInt {
    let value = this.get("lotSize");
    return value.toBigInt();
  }

  set lotSize(value: BigInt) {
    this.set("lotSize", Value.fromBigInt(value));
  }

  get depositContract(): Bytes | null {
    let value = this.get("depositContract");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set depositContract(value: Bytes | null) {
    if (value === null) {
      this.unset("depositContract");
    } else {
      this.set("depositContract", Value.fromBytes(value as Bytes));
    }
  }

  get publicKeyX(): Bytes | null {
    let value = this.get("publicKeyX");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set publicKeyX(value: Bytes | null) {
    if (value === null) {
      this.unset("publicKeyX");
    } else {
      this.set("publicKeyX", Value.fromBytes(value as Bytes));
    }
  }

  get publicKeyY(): Bytes | null {
    let value = this.get("publicKeyY");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set publicKeyY(value: Bytes | null) {
    if (value === null) {
      this.unset("publicKeyY");
    } else {
      this.set("publicKeyY", Value.fromBytes(value as Bytes));
    }
  }

  get creationTx(): string {
    let value = this.get("creationTx");
    return value.toString();
  }

  set creationTx(value: string) {
    this.set("creationTx", Value.fromString(value));
  }

  get pubKeyTx(): string | null {
    let value = this.get("pubKeyTx");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set pubKeyTx(value: string | null) {
    if (value === null) {
      this.unset("pubKeyTx");
    } else {
      this.set("pubKeyTx", Value.fromString(value as string));
    }
  }

  get fundingTx(): string | null {
    let value = this.get("fundingTx");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set fundingTx(value: string | null) {
    if (value === null) {
      this.unset("fundingTx");
    } else {
      this.set("fundingTx", Value.fromString(value as string));
    }
  }

  get mintingTx(): string | null {
    let value = this.get("mintingTx");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set mintingTx(value: string | null) {
    if (value === null) {
      this.unset("mintingTx");
    } else {
      this.set("mintingTx", Value.fromString(value as string));
    }
  }

  get redemption(): string | null {
    let value = this.get("redemption");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set redemption(value: string | null) {
    if (value === null) {
      this.unset("redemption");
    } else {
      this.set("redemption", Value.fromString(value as string));
    }
  }
}

export class RequestTx extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save RequestTx entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save RequestTx entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("RequestTx", id.toString(), this);
  }

  static load(id: string): RequestTx | null {
    return store.get("RequestTx", id) as RequestTx | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get redemption(): string {
    let value = this.get("redemption");
    return value.toString();
  }

  set redemption(value: string) {
    this.set("redemption", Value.fromString(value));
  }

  get timestamp(): BigInt | null {
    let value = this.get("timestamp");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set timestamp(value: BigInt | null) {
    if (value === null) {
      this.unset("timestamp");
    } else {
      this.set("timestamp", Value.fromBigInt(value as BigInt));
    }
  }
}

export class SignatureTx extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save SignatureTx entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save SignatureTx entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("SignatureTx", id.toString(), this);
  }

  static load(id: string): SignatureTx | null {
    return store.get("SignatureTx", id) as SignatureTx | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get redemption(): string {
    let value = this.get("redemption");
    return value.toString();
  }

  set redemption(value: string) {
    this.set("redemption", Value.fromString(value));
  }

  get timestamp(): BigInt | null {
    let value = this.get("timestamp");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set timestamp(value: BigInt | null) {
    if (value === null) {
      this.unset("timestamp");
    } else {
      this.set("timestamp", Value.fromBigInt(value as BigInt));
    }
  }
}

export class RedeemTx extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save RedeemTx entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save RedeemTx entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("RedeemTx", id.toString(), this);
  }

  static load(id: string): RedeemTx | null {
    return store.get("RedeemTx", id) as RedeemTx | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get redemption(): string {
    let value = this.get("redemption");
    return value.toString();
  }

  set redemption(value: string) {
    this.set("redemption", Value.fromString(value));
  }

  get timestamp(): BigInt | null {
    let value = this.get("timestamp");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set timestamp(value: BigInt | null) {
    if (value === null) {
      this.unset("timestamp");
    } else {
      this.set("timestamp", Value.fromBigInt(value as BigInt));
    }
  }
}

export class Redemption extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Redemption entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Redemption entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Redemption", id.toString(), this);
  }

  static load(id: string): Redemption | null {
    return store.get("Redemption", id) as Redemption | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get state(): string {
    let value = this.get("state");
    return value.toString();
  }

  set state(value: string) {
    this.set("state", Value.fromString(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get requestTx(): string {
    let value = this.get("requestTx");
    return value.toString();
  }

  set requestTx(value: string) {
    this.set("requestTx", Value.fromString(value));
  }

  get signatureTx(): string | null {
    let value = this.get("signatureTx");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set signatureTx(value: string | null) {
    if (value === null) {
      this.unset("signatureTx");
    } else {
      this.set("signatureTx", Value.fromString(value as string));
    }
  }

  get redeemTx(): string | null {
    let value = this.get("redeemTx");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set redeemTx(value: string | null) {
    if (value === null) {
      this.unset("redeemTx");
    } else {
      this.set("redeemTx", Value.fromString(value as string));
    }
  }

  get deposit(): string | null {
    let value = this.get("deposit");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set deposit(value: string | null) {
    if (value === null) {
      this.unset("deposit");
    } else {
      this.set("deposit", Value.fromString(value as string));
    }
  }
}
