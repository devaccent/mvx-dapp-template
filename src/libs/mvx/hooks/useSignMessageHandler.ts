import { useSignMessage as useMxSignMessage } from "@multiversx/sdk-dapp/hooks/signMessage";

export default function useSignMessageHandler() {
  const { signMessage } = useMxSignMessage();

  return (message: string) =>
    signMessage({
      message,
      callbackRoute: window.location.href,
    }).then((result) => result.payload.signedSession);
}
