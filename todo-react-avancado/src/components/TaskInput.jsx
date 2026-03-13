import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskInput(){

  const [text, setText] = useState("");
  const { addTask } = useContext(TaskContext);

  function handleSubmit(e){
    e.preventDefault();

    if(!text.trim()) return;

    addTask(text);
    setText("");
  }

  return(
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nova tarefa..."
        value={text}
        onChange={(e)=>setText(e.target.value)}
      />

      <button>Adicionar</button>
    </form>
  )
}