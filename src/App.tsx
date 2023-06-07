import {
  ChangeEvent,
  FormEvent,
  InvalidEvent,
  useEffect,
  useState,
} from "react";
import { v4 as uuidv4 } from "uuid";

import { Task } from "./components/Task";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { Header } from "./components/Header";
import { Summary } from "./components/Summary";
import { EmptyState } from "./components/EmptyState";

import styles from "./App.module.css";

import "./global.css";

interface Task {
  id: string;
  createdAt: Date;
  description: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");

  const tasksOrdered =
    tasks &&
    tasks?.sort((a, b) => {
      return (
        Number(a?.isCompleted) - Number(b?.isCompleted) ||
        Number(a?.createdAt) - Number(b?.createdAt)
      );
    });

  const tasksRegistered = tasks?.length;

  const tasksCompleted = tasks.filter((task) => !!task.isCompleted)?.length;

  const shouldShowEmpty = tasksRegistered === 0;
  const isNewTaskEmpty = newTask?.length === 0;

  const handleNewTaskChanges = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.setCustomValidity("");
    setNewTask(event.target.value);
  };

  const handleNewTaskInvalid = (event: InvalidEvent<HTMLInputElement>) => {
    event?.target.setCustomValidity("Esse campo é obrigatório");
  };

  const handleCreateNewTask = (event: FormEvent) => {
    event.preventDefault();

    const newItem: Task = {
      id: uuidv4(),
      isCompleted: false,
      description: newTask,
      createdAt: new Date(),
    };

    const tasksJoined = [...tasks, newItem];

    setTasks(tasksJoined);
    setNewTask("");
  };

  const handleDeleteTask = (id: string) => {
    const tasksToKeep = tasks?.filter((task) => task?.id !== id);

    setTasks(tasksToKeep);
  };

  const handleToggleTaskStatus = (id: string) => {
    const taskToUpdate = tasks?.find((task) => task?.id === id);
    const tasksToMaintain = tasks?.filter((task) => task?.id !== id);

    const taskUpdated = {
      ...taskToUpdate,
      isCompleted: !taskToUpdate?.isCompleted,
    } as Task;

    const tasksUpdated = [...tasksToMaintain, taskUpdated];

    setTasks(tasksUpdated);
  };

  useEffect(() => {
    const storedTasks = localStorage.getItem("@tasker:tasks");

    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    if (tasks.length) {
      localStorage.setItem("@tasker:tasks", JSON.stringify(tasks));
    }

    if (!tasks.length) {
      localStorage.setItem("@tasker:tasks", "");
    }
  }, [tasks, setTasks]);

  return (
    <div>
      <Header />

      <main className={styles.main}>
        <div className={styles.content}>
          <form className={styles.newTask} onSubmit={handleCreateNewTask}>
            <Input
              placeholder="Add a task"
              onChange={handleNewTaskChanges}
              onInvalid={handleNewTaskInvalid}
              value={newTask}
              required
            />

            <Button type="submit" disabled={isNewTaskEmpty} />
          </form>

          <Summary total={tasksRegistered} completedAmount={tasksCompleted} />

          {shouldShowEmpty ? (
            <EmptyState />
          ) : (
            <div className={styles.tasks}>
              {tasksOrdered?.map(({ id, description, isCompleted }) => (
                <Task
                  key={id}
                  isCompleted={isCompleted}
                  description={description}
                  onDelete={() => handleDeleteTask(id)}
                  onToogleStatus={() => handleToggleTaskStatus(id)}
                />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
