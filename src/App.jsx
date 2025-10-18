import ProgressTracker from "./Components/ProgressTracker"
import TaskForm from "./Components/TaskForm"
import TaskList from "./Components/TaskList"

export default function App() {
  return(
    <div>
        <h1>Planora</h1>
        <p>Plan.Flow.Grow </p>
        <TaskForm />
        <TaskList />
        <ProgressTracker />
        <button>Clear all tasks</button>
    </div>
  )
}

