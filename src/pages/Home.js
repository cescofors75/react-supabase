import { useEffect } from "react";
import { supabase } from "../supabase/client";
import { useNavigate } from "react-router-dom";
import TaskList from "../components/TaskList";
import Search from "../components/Search";
import { Exchange } from "../components/Exchange";

function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!supabase.auth.user()) {
      navigate("/login");
    }
  }, [navigate]
  
  );
  const user =  supabase.auth.user();
  
  let user_mail = user ? user.email : "guest";
  return (
      <div>
        <h1>Home</h1>
        <div className='top'>
        Welcome, {user_mail}

        <button className=" button" onClick={() => supabase.auth.signOut()}>Sign Out</button>

        </div>

        
        <div><Search /></div>
       
        <div><TaskList /></div>
        <div><Exchange /></div>

      </div>
  );
  
  }
 
export default Home;
