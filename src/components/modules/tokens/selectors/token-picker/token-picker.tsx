import React, { useState } from "react";
import { createPortal } from "react-dom";

import styles from "./token-picker.module.scss";
import TokenPickerOverlay from "./token-picker-overlay";

import { Icon } from "../../../../themed";
import TokenImage from "../../token-image";

import { Token } from "../../../../../modules/tokens";

export type TokenPickerProps = {
  label?: string;
  value?: Token;
  tokens: Token[];
  placeholder: string;
  onChange: (token: Token | undefined) => void;
  showBalance?: boolean;
};

export default function TokenPicker(props: TokenPickerProps) {
  const { label, value, tokens, placeholder, onChange, showBalance } = props;
  const [overlayVisible, setOverlayVisible] = useState(false);

  const closeOverlayCallback = () => setOverlayVisible(false);
  const selectTokenCallback = (token: Token) => {
    setOverlayVisible(false);
    onChange(token);
  };

  const clearIconClickCallback = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();

    onChange(undefined);
  };

  return (
    <div className={styles.container}>
      {(label || "").length ? <div>{label}</div> : null}

      <>
        {overlayVisible &&
          createPortal(
            <TokenPickerOverlay
              tokens={tokens}
              selected={value}
              showBalance={showBalance}
              onClose={closeOverlayCallback}
              onSelect={selectTokenCallback}
            />,
            document.body
          )}
      </>

      <div className={styles.picker} onClick={() => setOverlayVisible(true)}>
        <div>
          {value && (
            <div className={styles.valueContainer}>
              <TokenImage size={16} token={value} />
              <div className={styles.valueText}>
                {value.name} ({value.ticker})
              </div>
            </div>
          )}
          {!value && <div>{placeholder}</div>}
        </div>

        <div className={styles.iconContainer}>
          {!!value && <Icon name={"clear"} onClick={clearIconClickCallback} />}
          {!value && <Icon className={styles.expandIcon} name={"expand_more"} />}
        </div>
      </div>
    </div>
  );
}
