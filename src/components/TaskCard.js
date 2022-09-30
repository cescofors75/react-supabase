import { useTasks } from "../context/TaskContext";
import {Link} from 'react-router-dom'
import '../css/index.css'

function TaskCard({ task }) {
  const { deleteTask, updateTasks } = useTasks();

  const handleDelete = async (id) => {
    await deleteTask(id);
  };

  const handleToggleDone = async (id, doneState) => {
    await updateTasks(id, { done: !doneState });
  };
  const id = task.id;

  return (
    <div className="card card-body">
      
       <Link to={`/detail/${id}`} className='link'>
      <h3 className="h5">
        <p>Date: {task.created_at}</p>
         Problem: {task.name}
      </h3>
      </Link>
      <span>{task.done ? "Done" : "Not done"}</span>
      <div className="ms-auto">
        <button
          onClick={() => handleDelete(task.id)}
          className="btn btn-danger btn-sm me-1"
        >
          Delete
        </button>
        <button
          onClick={() => handleToggleDone(task.id, task.done)}
          className="btn btn-secondary btn-sm"
        >
          Done
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
