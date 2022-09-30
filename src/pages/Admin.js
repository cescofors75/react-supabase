
import { useEffect } from "react";
import { supabase } from "../supabase/client";
import { useNavigate } from "react-router-dom";
import ProblemsList from '../components/ProblemsList'


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
         <button onClick={() =>  navigate(-1)}>Return</button>
        <div className="space"> </div>
        <h1>Lloret No problems </h1>
        <h2>****Admin Section****</h2>
        
        Welcome, {user_mail}

        <div className="space"> </div>
        <div><ProblemsList valueAdmin={true }/></div>
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