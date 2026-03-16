import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const TaskContext = createContext();

export function TaskProvider({ children }) {

  const [tasks, setTasks] = useLocalStorage("tasks", []);

  function addTask(text){
    const newTask = {
      id: Date.now(),
      text,
      completed: false
    };

    setTasks(prev => [...prev, newTask]);
  }

  function toggleTask(id){
    setTasks(prev =>
      prev.map(task =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  function removeTask(id){
    setTasks(prev => prev.filter(task => task.id !== id));
  }

  return(
    <TaskContext.Provider
      value={{ tasks, addTask, toggleTask, removeTask }}
    >
      {children}
    </TaskContext.Provider>
  );
}