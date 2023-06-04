import { IoAddCircleOutline } from "react-icons/io5";

import styles from "./styles.module.css";

export const Button = () => {
  return (
    <button className={styles.button}>
      Criar
      <IoAddCircleOutline />
    </button>
  );
};
