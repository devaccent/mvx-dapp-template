import json from "./ping-pong.abi.json";
import { getContractFromAbi } from "../../../libs/mvx";
import { AppEnvironment } from "../../../app/environment";

export const pingPongContract = getContractFromAbi(AppEnvironment.contracts.pingPong, json);
