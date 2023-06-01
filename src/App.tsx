import { Header } from "./components/Header";
import { EmptyState } from "./components/EmptyState";

import styles from "./App.module.css";

import "./global.css";

function App() {
  return (
    <div>
      <Header />

      <main className={styles.main}>
        <div className={styles.content}>
          <EmptyState />
        </div>
      </main>
    </div>
  );
}

export default App;
