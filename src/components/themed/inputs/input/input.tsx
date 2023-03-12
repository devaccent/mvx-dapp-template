import React, { InputHTMLAttributes } from "react";
import styles from "./styles.module.scss";

type Props = InputHTMLAttributes<HTMLInputElement>;

// eslint-disable-next-line react/display-name
const Input = React.forwardRef<HTMLInputElement, Props>((props: Props, ref) => <input ref={ref} {...props} className={styles.input} />);

export default Input;
