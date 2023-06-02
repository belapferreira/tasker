import { Task } from "./components/Task";
import { Header } from "./components/Header";
import { Summary } from "./components/Summary";
// import { EmptyState } from "./components/EmptyState";

import styles from "./App.module.css";

import "./global.css";

function App() {
  return (
    <div>
      <Header />

      <main className={styles.main}>
        <div className={styles.content}>
          <Summary />

          <div className={styles.tasks}>
            <Task />
            <Task />
            <Task />
          </div>
          {/* <EmptyState /> */}
        </div>
      </main>
    </div>
  );
}

export default App;
