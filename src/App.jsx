import Taskform from "./Components/TaskForm";
import TaskList from "./Components/TaskList";
import Progresstracker from "./Components/ProgressTracker";
import { useEffect, useState } from "react";


export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem
    ("tasks", JSON.stringify(tasks))
  });

  const addTask = (task) => {
    setTasks([...tasks,task]);
  };

  const updateTask = (updatedTask, index) => {
    const newtask = [...tasks];
    newtask[index] = updatedTask;
    setTasks(newtask);
  }

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i != index));
  }

  
  return(
    <div className="App">
      <header>
      <h1 className="title">Task Focus</h1>
      <p className="tagline">Our friendly TaskManager</p>
      </header>
      <Taskform addTask = {addTask}/>
      <TaskList tasks={tasks}
      updateTask = {updateTask}
      deleteTask = {deleteTask}/>
      <Progresstracker tasks = {tasks}/>

      
      
    </div>
  )
}