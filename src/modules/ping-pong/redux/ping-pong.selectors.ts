import { RootState } from "../../../app/redux/root-reducer";

export function selectPingPongState(state: RootState) {
  return state.pingPongData;
}
