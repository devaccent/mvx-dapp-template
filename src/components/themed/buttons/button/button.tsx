import { useNavigate } from "react-router-dom";
import React, { ButtonHTMLAttributes, MouseEvent } from "react";

import styles from "./styles.module.scss";
import Icon, { IconProps } from "../../icon/icon";

export type ButtonProps = Partial<ButtonHTMLAttributes<HTMLButtonElement>> & {
  size?: "small" | "tiny";
  mode?: "contained" | "outlined" | "text";
  color?: "primary" | "secondary" | "warning";
  loading?: boolean;
  iconLeftProps?: IconProps;
  iconRightProps?: IconProps;
  className?: string;
  to?: string;
};

export default function Button(props: ButtonProps) {
  const navigate = useNavigate();

  const {
    children,
    size = "default",
    mode = "contained",
    loading = false,
    disabled,
    iconLeftProps,
    iconRightProps,
    color = "default",
    to,
    onClick,
    className = "",
    ...rest
  } = props;

  const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    if (to) {
      navigate(to);
    }

    onClick && onClick(e);
  };

  return (
    <button
      onClick={clickHandler}
      disabled={disabled}
      className={`${styles.button} ${className}`}
      data-mode={mode}
      data-disabled={disabled}
      data-size={size}
      data-color={color}
      {...rest}
    >
      {iconLeftProps !== undefined && <Icon className={styles.icon} {...iconLeftProps} />}
      {loading ? "Please wait..." : children}
      {iconRightProps !== undefined && <Icon className={styles.icon} {...iconRightProps} />}
    </button>
  );
}
