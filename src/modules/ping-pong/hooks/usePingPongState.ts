import { useSelector } from "react-redux";
import { selectPingPongState } from "../redux";

export function usePingPongState() {
  return useSelector(selectPingPongState);
}
