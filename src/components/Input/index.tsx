import { InputHTMLAttributes } from "react";

import styles from "./styles.module.css";

export const Input = ({
  value,
  required,
  onChange,
  onInvalid,
  placeholder,
}: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      placeholder={placeholder}
      className={styles.input}
      onInvalid={onInvalid}
      required={required}
      onChange={onChange}
      value={value}
    />
  );
};
