import type { AccountType } from "@multiversx/sdk-dapp/types";

export default class BlockchainAccount {
  address = "";
  balance = "";
  nonce = undefined;
  username = "";

  constructor(params: Partial<AccountType>) {
    Object.assign(this, params);

    this.setUsername();
  }

  getAddressClipped = () => this.address.slice(0, 4) + "..." + this.address.slice(-4);

  private setUsername() {
    if (this.username) {
      this.username = this.username.replace(".elrond", "");
    } else {
      this.username = this.getAddressClipped();
    }
  }
}
