import { ReactNode } from "react";

type TableDefaultColumnType = {
  name: string;
  label: string;
  minWidth?: number;
  type: "string" | "number" | "date";
};

export type TableFunctionColumnType = Omit<TableDefaultColumnType, "type"> & {
  type: "function";
  valueFormatter: (data: TableRowDataType<any>) => ReactNode;
};

export type TableColumnType = TableDefaultColumnType | TableFunctionColumnType;

export type TableRowDataType<T> = T;
