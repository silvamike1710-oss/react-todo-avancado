import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import React from "react";

function TaskItem({task}){

  const { toggleTask, removeTask } = useContext(TaskContext);

  return(
    <li>

      <span
        style={{
          textDecoration: task.completed ? "line-through":"none"
        }}
        onClick={()=>toggleTask(task.id)}
      >
        {task.text}
      </span>

      <button onClick={()=>removeTask(task.id)}>
        remover
      </button>

    </li>
  )
}

export default React.memo(TaskItem);