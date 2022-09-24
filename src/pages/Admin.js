
import { useEffect } from "react";
import { supabase } from "../supabase/client";
import { useNavigate } from "react-router-dom";
import ProblemsListAdmin from '../components/ProblemsListAdmin'


function Admin() {
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
      <div >
        <div className="space"> </div>
        <h1>Lloret No problems</h1>
        <h2>Admin Section</h2>
        
        Welcome, {user_mail}

        <div className="space"> </div>
        <div><ProblemsListAdmin /></div>
        <div className="space"> </div>
        <div> <button className=" button" onClick={() => supabase.auth.signOut()}>Sign Out</button></div>

       

      </div>
  );
  
  }
 
export default Admin;
/*
 <div><TaskForm /></div>
<div><ProblemsList /></div>
<div><Search /></div>
       
<div><TaskList /></div>

<div><Exchange /></div>*/