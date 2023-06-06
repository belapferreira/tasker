import { ButtonHTMLAttributes } from "react";
import { IoAddCircleOutline } from "react-icons/io5";

import styles from "./styles.module.css";

export const Button = ({
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className={styles.button} {...rest}>
      Add
      <IoAddCircleOutline />
    </button>
  );
};
