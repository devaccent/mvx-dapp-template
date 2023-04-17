import { AbiRegistry, Address, SmartContract } from "@multiversx/sdk-core";
import { PartialAbiType } from "./types/partial-abi.type";

export function getContractFromAbi(address: string, abi: PartialAbiType) {
  const abiRegistry = AbiRegistry.create(abi);

  return new SmartContract({
    address: new Address(address),
    abi: abiRegistry,
  });
}
