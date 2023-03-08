import { refreshAccount } from "@multiversx/sdk-dapp/utils";
import { sendTransactions } from "@multiversx/sdk-dapp/services";
import type { SendTransactionsPropsType, TransactionsDisplayInfoType } from "@multiversx/sdk-dapp/types";

export async function sendTransactionsHandler(
  transactions: SendTransactionsPropsType["transactions"],
  displayInfo: TransactionsDisplayInfoType
) {
  await refreshAccount();

  return sendTransactions({
    transactions: transactions,
    transactionsDisplayInfo: displayInfo,
    redirectAfterSign: false,
  });
}
