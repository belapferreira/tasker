import styles from "./styles.module.css";

import clipboardIcon from "../../assets/clipboard-icon.svg";

export const EmptyState = () => {
  return (
    <div className={styles.container}>
      <img src={clipboardIcon} />

      <strong>Você ainda não tem tarefas cadastradas</strong>

      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  );
};
