import React from "react";
import type { ServerTransactionType } from "@multiversx/sdk-dapp/types";

import { Table } from "../../../themed";
import { TableColumnType } from "../../../themed/table/table.types";

import { ageFormatter, fromFormatter, methodFormatter, toFormatter, txHashFormatter, valueFormatter } from "./cell.formatters";

type Props = {
  transactions: ServerTransactionType[];
};

const columns: TableColumnType[] = [
  { name: "txHash", label: "Tx Hash", type: "function", valueFormatter: txHashFormatter },
  { name: "timestamp", label: "Age", type: "function", valueFormatter: ageFormatter },
  { name: "from", label: "From", type: "function", valueFormatter: fromFormatter },
  { name: "to", label: "To", type: "function", valueFormatter: toFormatter },
  { name: "--", label: "Method", type: "function", valueFormatter: methodFormatter },
  { name: "value", label: "Value", type: "function", valueFormatter: valueFormatter },
];

export default function TransactionsTable(props: Props) {
  const { transactions } = props;

  return (
    <div>
      <Table columns={columns} records={transactions} />
    </div>
  );
}
