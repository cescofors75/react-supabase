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
    const [adding, setAdding] = useState(false);
    const [Texto, setTexto] = useState(false);
    /*const [admin, setAdmin] = useState();*/

    const FsetTexto = async () => {
     
      await setTexto(true)
      
     }
     /*
     const FsetAdmin= async (p) => {
     
      await setAdmin(p)
      console.log (p)
     
    }
*/

     const getProblems= async (done = false,admin) => {
     await  setLoading(true);
  
      const user = supabase.auth.user();
      console.log (user)
      
      
      if (admin){

        if (user.email === "cescofors75@gmail.com"){
          try {
            const { error, data } = await supabase
              .from("tasks")
              .select("id, name, done, created_at")
              //.eq("userId", user.id)
              .eq("done", done)
              .order("id", { ascending: false });
      
            if (error) {
              throw error;
            }
      
            setTasks(data);
          } catch (error) {
            alert(error.error_description || error.message);
          } finally {
            setLoading(false);
          }
        }
      }
       
      
      else{
      if (user){
      try {
        const { error, data } = await supabase
          .from("tasks")
          .select("id, name, done, created_at")
          .eq("userId", user.id)
          .eq("done", done)
          .order("id", { ascending: false });
  
        if (error) {
          throw error;
        }
  
        setTasks(data);
      } catch (error) {
        alert(error.error_description || error.message);
      } finally {
        setLoading(false);
      }
    }
  }
    };


    const loginWithMagicLink = async (email) => {
      setLoading(true);
      try {
        const { error } = await supabase.auth.signIn({ email ,createUser:false});
        if (error) {
          throw error;
        }
        //alert("check your email for the magic link");
      } catch (error) {
        alert(error.message);
      } finally {
        setLoading(false);
      }
    };





     const createTask = async (taskName) => {
      setAdding(true);
      try {
        const user = supabase.auth.user();
  
        const { error, data } = await supabase.from("tasks").insert({
          name: taskName,
          userId: user.id,
        });
  
        setTasks([...tasks, ...data]);
  
        if (error) {
          throw error;
        }
      } catch (error) {
        alert(error.error_description || error.message);
      } finally {
        setAdding(false);
      }
    };



/*

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
      
    }*/


 

     return (
        <TaskContext.Provider
          value={{
            tasks,
            //getTasks,
            
            getProblems,
            createTask,
            Texto,
            FsetTexto,
            loading,
            adding,
            loginWithMagicLink,
            //admin,
           // FsetAdmin,
            
          }}
        >
          {children}
        </TaskContext.Provider>
      );
    };
    