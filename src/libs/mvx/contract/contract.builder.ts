import { AbiRegistry, Address, SmartContract, SmartContractAbi } from "@multiversx/sdk-core/out";
import { PartialAbiType } from "./types/partial-abi.type";

export function getContractFromAbi(address: string, abi: PartialAbiType) {
  const abiRegistry = AbiRegistry.create(abi);

  return new SmartContract({
    address: new Address(address),
    abi: new SmartContractAbi(abiRegistry),
  });
}
