import * as Checkbox from "@radix-ui/react-checkbox";
import { IoTrashOutline } from "react-icons/io5";
import { BiCheck } from "react-icons/bi";

import styles from "./styles.module.css";

export const Task = () => {
  return (
    <div className={styles.container}>
      <Checkbox.Root className={styles.checkbox}>
        <Checkbox.Indicator>
          <BiCheck size={12} />
        </Checkbox.Indicator>
      </Checkbox.Root>

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, quo
        commodi id eveniet culpa voluptatibus.
      </p>

      <button className={styles.deleteButton}>
        <IoTrashOutline />
      </button>
    </div>
  );
};
