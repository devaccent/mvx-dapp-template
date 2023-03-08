import React from "react";
import moment from "moment/moment";
import { FormatAmount } from "@multiversx/sdk-dapp/UI";
import { getNetworkConfig } from "@multiversx/sdk-dapp/utils";
import type { ServerTransactionType } from "@multiversx/sdk-dapp/types";
import { getTransactionValue } from "@multiversx/sdk-dapp/utils/transactions/getInterpretedTransaction/helpers";

import styles from "./styles.module.scss";
import { ExternalLink } from "../../../common";
import { TableRowDataType } from "../../../themed/table/table.types";

import { stringElipsis } from "../../../../app/helpers";

const { explorerAddress } = getNetworkConfig();

export function txHashFormatter(data: TableRowDataType<ServerTransactionType>) {
  const content = stringElipsis(data.txHash, 8);
  const href = `${explorerAddress}/transactions/${data.txHash}`;

  return (
    <ExternalLink className={styles.externalLink} href={href}>
      {content}
    </ExternalLink>
  );
}

export function addressCellFormatter(address: string) {
  const content = stringElipsis(address, 8);
  const href = `${explorerAddress}/address/${address}`;

  return (
    <ExternalLink className={styles.externalLink} href={href}>
      {content}
    </ExternalLink>
  );
}

export function fromFormatter(data: TableRowDataType<ServerTransactionType>) {
  return addressCellFormatter(data.sender);
}

export function toFormatter(data: TableRowDataType<ServerTransactionType>) {
  return addressCellFormatter(data.receiver);
}

export function methodFormatter(data: TableRowDataType<ServerTransactionType>) {
  const { action } = data;
  const { name = "" } = action || {};

  return <span className={styles.scCallName}>{name}</span>;
}

export function ageFormatter(data: TableRowDataType<ServerTransactionType>) {
  const { timestamp } = data;
  return moment(new Date(timestamp * 1000)).fromNow();
}

export function valueFormatter(data: TableRowDataType<ServerTransactionType>) {
  const valueData = getTransactionValue({ transaction: data });
  return <FormatAmount value={valueData.egldValueData.value} digits={0} />;
}
