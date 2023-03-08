import React from "react";
import styles from "./styles.module.scss";

import { Icon } from "../../../../../themed";

type Props = {
  showBackButton: boolean;
  showCloseButton: boolean;
  goBackButtonHandler: () => void;
  closeButtonHandler: () => void;
};

export default function FormHeader(props: Props) {
  const { showBackButton, showCloseButton, goBackButtonHandler, closeButtonHandler } = props;

  if (!showBackButton) {
    return (
      <div className={styles.titleAndButton}>
        <div>Select a login method</div>
        {showCloseButton && (
          <div className={styles.closeButton} onClick={closeButtonHandler}>
            <Icon name={"close"} />
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={styles.backButtonContainer} onClick={goBackButtonHandler}>
      <Icon name={"arrow_back"} />
      <div>Back to login methods</div>
    </div>
  );
}
