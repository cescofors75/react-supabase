import { useState } from "react";
import { useTasks } from "../context/TaskContext";


function Search() {
  const [searchOem, setSearchOem] = useState("");
  const {getTasks, loading} = useTasks();
  
  const handleSubmit = async (e) => {
  
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
    <div>
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        value={searchOem}
        name="refsearch"
        onChange={(e) => setSearchOem(e.target.value)}
        required
        placeholder="Enter Oem part number"
        class="form-control"
      />
      
       
        <button disabled={loading} className="btn btn-primary btn-sm">
          {loading ? "Loading..." : "Search"}
        </button>
        
    </form>
    </div>
  );
}

export default Search;

// 
