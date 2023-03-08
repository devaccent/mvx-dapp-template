import React from "react";

import styles from "../styles.module.scss";
import { TableColumnType } from "../table.types";

type Props = {
  columns: TableColumnType[];
};

export default function TableHeader(props: Props) {
  const { columns } = props;

  return (
    <thead className={styles.tableHead}>
      <tr className={styles.tableHeadRow}>
        {columns.map((column, index) => (
          <th className={styles.tableHeadCell} key={`column.name.${index}`} style={{ minWidth: column.minWidth }}>
            {column.label}
          </th>
        ))}
      </tr>
    </thead>
  );
}
