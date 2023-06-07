import styles from "./styles.module.css";

import clipboardIcon from "../../assets/clipboard-icon.svg";

export const EmptyState = () => {
  return (
    <div className={styles.container}>
      <img src={clipboardIcon} />

      <strong>You don't have any task registered</strong>

      <span>
        Create tasks and organize o what <br /> you have to do
      </span>
    </div>
  );
};
