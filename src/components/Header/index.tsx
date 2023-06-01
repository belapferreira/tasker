import styles from "./styles.module.css";

import taskerLogo from "../../assets/tasker-logo.svg";

export const Header = () => {
  return (
    <header className={styles.header}>
      <img
        src={taskerLogo}
        alt="Image with word 'tasker' and a symbol with a list"
      />
    </header>
  );
};
