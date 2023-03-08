import React from "react";

import styles from "./styles.module.scss";
import { TableHeader, TableRow } from "./components";
import { TableColumnType, TableRowDataType } from "./table.types";

type Props = {
  columns: TableColumnType[];
  records: TableRowDataType<unknown>[];
  pagination?: boolean;
};

export default function ThemedTable(props: Props) {
  const { records, columns } = props;

  return (
    <table className={styles.table}>
      <TableHeader columns={columns} />
      <tbody>
        {records.map((record, index: number) => (
          <TableRow key={index} data={record as Record<"string", unknown>} columns={columns} />
        ))}
      </tbody>
    </table>
  );
}
