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
   // const [loading, setLoading] = useState(false);
   // const [adding, setAdding] = useState(false);

    const getTasks = async (done = false) => {
       // setLoading(true);
    
      // const user = supabase.auth.user();
    

   
        try {
          const { error, data } = await supabase
          // .from("tasks")
          // .select("id, name, done");

            .from("oemean2023")
           .select("id, oemnumbers, eancode")
         //  .eq("oemnumbers", "2706087201000");
            //.eq("done", done)
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
    