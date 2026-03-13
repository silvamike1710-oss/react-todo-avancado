import { createContext, useState } from "react";

export const TaskContext = createContext();

export function TaskProvider({ children }) {

  const [tasks, setTasks] = useState([]);

  function addTask(text){
    const newTask = {
      id: Date.now(),
      text,
      completed:false
    }

    setTasks([...tasks, newTask]);
  }

  function toggleTask(id){
    setTasks(
      tasks.map(task =>
        task.id === id
          ? {...task, completed: !task.completed}
          : task
      )
    );
  }

  function removeTask(id){
    setTasks(tasks.filter(task => task.id !== id));
  }

  return(
    <TaskContext.Provider
      value={{tasks, addTask, toggleTask, removeTask}}
    >
      {children}
    </TaskContext.Provider>
  )
}