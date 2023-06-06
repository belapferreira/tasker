import * as Checkbox from "@radix-ui/react-checkbox";
import { IoTrashOutline } from "react-icons/io5";
import { BiCheck } from "react-icons/bi";

import styles from "./styles.module.css";

interface TaskProps {
  description: string;
  isCompleted: boolean;
  onDelete: () => void;
  onToogleStatus: () => void;
}

export const Task = ({
  description,
  isCompleted,
  onDelete,
  onToogleStatus,
}: TaskProps) => {
  return (
    <div className={styles.container}>
      <Checkbox.Root className={styles.checkbox} onClick={onToogleStatus}>
        <Checkbox.Indicator>
          <BiCheck size={12} />
        </Checkbox.Indicator>
      </Checkbox.Root>

      <p>{description}</p>

      <button
        className={styles.deleteButton}
        onClick={onDelete}
        disabled={isCompleted}
      >
        <IoTrashOutline />
      </button>
    </div>
  );
};
