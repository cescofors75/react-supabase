
import React from "react";
import { useState } from "react";
import { useTasks } from "../context/TaskContext";
import { useGeolocated } from "react-geolocated";
function TaskForm() {
  const [taskName, setTaskName] = useState("");
  const { createTask, adding } = useTasks();
 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createTask(taskName);
      alert("Task created");
      setTaskName("");
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <form onSubmit={handleSubmit} className="card card-body">
      <input
        type="text"
        value={taskName}
        name="taskName"
        onChange={(e) => setTaskName(e.target.value)}
        required
        placeholder="Write a problem"
        className="form-control"
      />
    
      <div >
        
       

        <button disabled={adding} className="btn btn-primary btn-sm">
          {adding ? "Loading..." : "Add"}
        </button>
      </div>
    </form>
  );
}

export default TaskForm;
