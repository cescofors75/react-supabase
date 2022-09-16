import { useState } from "react";
import { useTasks } from "../context/TaskContext";
import {TaskList} from './TaskList'

function Search() {
  const [searchOem, setSearchOem] = useState("");
  const {getTasks} = useTasks();
  
  const handleSubmit = async (e) => {
   console.log("Oem",searchOem);
    e.preventDefault();
    try {
      await getTasks(searchOem);
     // alert("Task created");
     setSearchOem("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        value={searchOem}
        name="refsearch"
        onChange={(e) => setSearchOem(e.target.value)}
        required
        placeholder="Enter Oem part number"
      
      />
      
        <button >
         info
        </button>
      
    </form>
    
  );
}

export default Search;

// 
