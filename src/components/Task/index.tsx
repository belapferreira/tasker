import * as Checkbox from "@radix-ui/react-checkbox";
import { IoTrashOutline } from "react-icons/io5";
import { BiCheck } from "react-icons/bi";

import styles from "./styles.module.css";

interface TaskProps {
  description: string;
}

export const Task = ({ description }: TaskProps) => {
  return (
    <div className={styles.container}>
      <Checkbox.Root className={styles.checkbox}>
        <Checkbox.Indicator>
          <BiCheck size={12} />
        </Checkbox.Indicator>
      </Checkbox.Root>

      <p>{description}</p>

      <button className={styles.deleteButton}>
        <IoTrashOutline />
      </button>
    </div>
  );
};
