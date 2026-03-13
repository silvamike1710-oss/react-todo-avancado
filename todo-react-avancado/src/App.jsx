import { useState } from "react";
import { TaskProvider } from "./context/TaskContext";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import Filter from "./components/Filter";

function App(){

  const [filter,setFilter] = useState("all");

  return(

    <TaskProvider>

      <h1>Lista de Tarefas</h1>

      <TaskInput />

      <Filter setFilter={setFilter}/>

      <TaskList filter={filter}/>

    </TaskProvider>

  )
}

export default App;