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
   
    const [loading, setLoading] = useState(false);
    const [Texto, setTextoo] = useState(true);


    const setTexto = async () => {
     console.log("Texto", Texto)
      setTextoo(false)
      console.log("Texto", Texto)
    }

    const getTasks = async (ref ) => {
        setLoading(true);
    
      // const user = supabase.auth.user();
    

   
        try {
          const { error, data } = await supabase
         
          .from("oemean2023")
          .select("id, oemnumbers, eancode")
          .eq("oemnumbers",ref)
          
          //.limit(10)
          //.order("id", { ascending: false });
    
          if (error) {
            throw error;
          }
         // console.log("original: ",data);
         // delete duplicates from data.
            let result = data.filter(
              (person, index) => index === data.findIndex(
                other => person.oemnumbers === other.oemnumbers
                  && person.eancode === other.eancode
              ));
             // console.log("filtered: ",result);
              setTasks(result);
          
        } catch (error) {
        //alert(error.error_description || error.message);
        
        } finally {
          setLoading(false);
        }
      
    }


 

     return (
        <TaskContext.Provider
          value={{
            tasks,
            getTasks,
            Texto,
            setTexto,
            loading,
           // adding,
            
          }}
        >
          {children}
        </TaskContext.Provider>
      );
    };
    