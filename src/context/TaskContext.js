import { createContext, useContext, useState } from "react";
import { supabase } from "../supabase/client";

export const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (context === undefined) {
    throw new Error("useTasks must be used within a TaskProvider");
  }
  return context;
};






export const TaskContextProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const [search, setSearch] = useState("");
   // const [loading, setLoading] = useState(false);
   // const [adding, setAdding] = useState(false);

    const getTasks = async (done ) => {
       // setLoading(true);
    
      // const user = supabase.auth.user();
    

   console.log("done",done);
        try {
          const { error, data } = await supabase
         

            .from("oemean2023")
           .select("id, oemnumbers, eancode")
          .eq("oemnumbers",done)
          .limit(10)
  
          //.distinct("oemnumbers");
          
            //.order("id", { ascending: false });
    
          if (error) {
            throw error;
          }
           console.log(data);
          setTasks(data);
        } catch (error) {
        //alert(error.error_description || error.message);
        //console.log(error);
        } /*finally {
          setLoading(false);
        }*/
      
    }
     return (
        <TaskContext.Provider
          value={{
            tasks,
            getTasks,
            
            //loading,
            //adding,
            
          }}
        >
          {children}
        </TaskContext.Provider>
      );
    };
    