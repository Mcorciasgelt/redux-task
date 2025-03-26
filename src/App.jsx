import { useSelector, useDispatch } from "react-redux"
import { addTask, removeTask } from "./redux/todosSlice"
import { useState } from "react"

const App = () => {
  const tasks = useSelector((state) => state.todos.tasks)
  const dispatch = useDispatch()
  const [newTask, setNewTask] = useState("")

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      dispatch(addTask(newTask))
      setNewTask("")
    }
  }

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Introduce la nueva tarea"
      />
      <button onClick={handleAddTask}>Agregar Tarea</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => dispatch(removeTask(index))}>Eliminar Tarea</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
