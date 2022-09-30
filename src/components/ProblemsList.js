import { useEffect } from "react";
import { useTasks } from "../context/TaskContext";
import TaskCard from "./TaskCard";


function ProblemsList({ done = false , valueAdmin}) {
  const { loading, getProblems, tasks } = useTasks();

  useEffect(()=>   {
    
    getProblems(done,valueAdmin);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [done,valueAdmin]);
 
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

export default ProblemsList;
