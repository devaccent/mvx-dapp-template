import { useDebounce } from "@multiversx/sdk-dapp/hooks";
import React, { useEffect, useMemo, useRef, useState } from "react";

import styles from "./token-picker-overlay.module.scss";

import { Icon, Input } from "../../../../../themed";
import { Token } from "../../../../../../modules/tokens";

import TokenPickerItem from "./token-picker-item";
import TokenPickerVirtualizedList from "./token-picker-virtual-list";

type Props = {
  selected?: Token;
  tokens: Token[];
  showBalance?: boolean;
  onClose: () => void;
  onSelect: (token: Token) => void;
};

const filterOption = (token: Token, searchValue: string) => {
  const getSafeValue = (value?: string) => (value || "").toLowerCase();
  const safelyIncludesInput = (value?: string) => getSafeValue(value).includes(getSafeValue(searchValue));

  return safelyIncludesInput(token.name) || safelyIncludesInput(token.ticker) || safelyIncludesInput(token.identifier);
};

export default function TokenPickerOverlay(props: Props) {
  const { tokens, showBalance, onSelect, onClose, selected } = props;

  const [search, setSearch] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const debouncedSearchValue = useDebounce(search, 300);

  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  const contentClickCallback = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const shownTokens = useMemo(() => tokens.filter((item) => filterOption(item, debouncedSearchValue)), [debouncedSearchValue, tokens]);

  return (
    <div className={styles.container} onClick={onClose}>
      <div className={styles.content} onClick={contentClickCallback}>
        <div className={styles.inputContainer}>
          <Icon name={"close"} className={styles.icon} onClick={onClose} />
          <Input ref={inputRef} value={search} placeholder={"Search tokens"} onChange={(e) => setSearch(e.target.value)} />
        </div>

        <div className={styles.list}>
          <TokenPickerVirtualizedList>
            {shownTokens.map((token) => (
              <TokenPickerItem
                token={token}
                onClick={onSelect}
                key={token.identifier}
                showBalance={showBalance}
                isSelected={!!selected && selected.identifier === token.identifier}
              />
            ))}
          </TokenPickerVirtualizedList>

          {search.length === 0 && tokens.length === 0 && <div className={styles.emptyContainer}>No tokens found</div>}

          {search.length > 0 && shownTokens.length === 0 && (
            <div className={styles.emptyContainer}>No tokens matching &quot;{search}&quot;</div>
          )}
        </div>
      </div>
    </div>
  );
}
