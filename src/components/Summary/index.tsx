import styles from "./styles.module.css";

interface SummaryProps {
  total: number;
  completedAmount: number;
}

export const Summary = ({ total, completedAmount }: SummaryProps) => {
  return (
    <div className={styles.heading}>
      <div>
        <strong>Created tasks</strong>

        <div className={styles.amount}>
          <strong>{total}</strong>
        </div>
      </div>
      <div>
        <strong>Done</strong>

        <div className={styles.amount}>
          <strong>
            {completedAmount} de {total}
          </strong>
        </div>
      </div>
    </div>
  );
};
