import React, { AllHTMLAttributes, ReactNode } from "react";

import styles from "./styles.module.scss";

type Props = Partial<Omit<AllHTMLAttributes<HTMLDivElement>, "children">> & {
  children: ReactNode | ReactNode[] | undefined;
  border?: boolean;
  shadow?: boolean;
};

export default function Card(props: Props) {
  const { children, className, border, shadow = false, ...rest } = props;
  return (
    <div className={`${styles.card} ${className}`} data-border={border} data-shadow={shadow} {...rest}>
      {children}
    </div>
  );
}
