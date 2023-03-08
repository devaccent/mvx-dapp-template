import { AppEnvironment } from "../../../../app/environment";
import { sendTransactionsHandler } from "../../../../libs/mvx";

export async function pingTransaction(pingAmount: string) {
  const transaction = {
    data: "ping",
    value: pingAmount,
    gasLimit: 60000000,
    receiver: AppEnvironment.contracts.pingPong,
  };

  return sendTransactionsHandler(transaction, {
    successMessage: "Ping transaction successful",
    processingMessage: "Processing Ping transaction",
    errorMessage: "An error has occurred during Ping",
  }).then(({ sessionId }) => sessionId);
}
