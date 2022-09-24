import { useEffect } from "react";
import { useTasks } from "../context/TaskContext";
import TaskCard from "./TaskCard";


function ProblemsListAdmin({ done = false }) {
  const { loading, getProblems, tasks } = useTasks();

  useEffect(()=>   {
    
    getProblems(done,true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [done]);
 
  function renderTasks() {
    if (loading) {
      return <p>Loading...</p>;
    } else if (tasks.length === 0) {
      return <p>No tasks</p>;
    } else {
      return tasks.map((task) => {
        return <TaskCard key={task.id} task={task} />;
      });
    }
  }

  return <div>{renderTasks()}</div>;
}

export default ProblemsListAdmin;
