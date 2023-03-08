import React, { ReactNode } from "react";

import styles from "../styles.module.scss";
import { TableColumnType, TableFunctionColumnType, TableRowDataType } from "../table.types";

type Props = {
  data: TableRowDataType<Record<string, unknown>>;
  columns: TableColumnType[];
};

const columnDataFormatter = (column: TableColumnType, data: unknown, value: unknown): ReactNode => {
  switch (true) {
    case column.type === "number":
      return Number(value).toLocaleString();
    case column.type === "function":
      return (column as TableFunctionColumnType).valueFormatter(data);
    case column.type === "date":
      return new Date(value as Date).toLocaleString();
    case column.type === "string":
    default:
      return String(value).toString();
  }
};

export default function TableRow(props: Props) {
  const { columns, data } = props;

  return (
    <tr className={styles.tableRow}>
      {columns.map((column, index) => {
        return (
          <td className={styles.tableRowCell} key={`column.name.${index}`}>
            {columnDataFormatter(column, data, data[column.name])}
          </td>
        );
      })}
    </tr>
  );
}
