import { useContext, useMemo } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskItem from "./TaskItem";

export default function TaskList({filter}){

  const { tasks } = useContext(TaskContext);

  const filteredTasks = useMemo(()=>{

    if(filter === "completed")
      return tasks.filter(t => t.completed)

    if(filter === "pending")
      return tasks.filter(t => !t.completed)

    return tasks

  },[tasks, filter])

  return(
    <ul>
      {filteredTasks.map(task => (
        <TaskItem key={task.id} task={task}/>
      ))}
    </ul>
  )
}