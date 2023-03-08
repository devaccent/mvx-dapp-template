import { AppEnvironment } from "../../../../app/environment";
import { sendTransactionsHandler } from "../../../../libs/mvx";

export async function pongTransaction() {
  const transaction = {
    value: "0",
    data: "pong",
    gasLimit: 60000000,
    receiver: AppEnvironment.contracts.pingPong,
  };

  return sendTransactionsHandler(transaction, {
    successMessage: "Pong transaction successful",
    processingMessage: "Processing Pong transaction",
    errorMessage: "An error has occurred during Pong",
  }).then(({ sessionId }) => sessionId);
}
