import styles from "./styles.module.css";

export const Summary = () => {
  return (
    <div className={styles.heading}>
      <div>
        <strong>Tarefas criadas</strong>

        <div className={styles.amount}>
          <strong>5</strong>
        </div>
      </div>
      <div>
        <strong>Concluídas</strong>

        <div className={styles.amount}>
          <strong>2 de 5</strong>
        </div>
      </div>
    </div>
  );
};
