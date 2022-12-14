import { useEffect } from "react";
import { supabase } from "../supabase/client";
import { useNavigate,Link } from "react-router-dom";
//import TaskList from "../components/TaskList";
//import Search from "../components/Search";
//import { Exchange } from "../components/Exchange";
import TaskForm from "../components/TaskForm";
import ProblemsList from '../components/ProblemsList'


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
      <div >
         <Link to={`/admin`} className='link'>
          Go to Admin
        </Link>
        <div className="space"> </div>
        <h1>Lloret No problems</h1>
        
        Welcome, {user_mail}

        <div className="space"> </div>

        <div><TaskForm /></div>
        <div className="space"> </div>
        
        <div><ProblemsList valueAdmin={false }/></div>
        <div className="space"> </div>
        <div> <button className=" button" onClick={() => supabase.auth.signOut()}>Sign Out</button></div>
        
       

      </div>
  );
  
  }
 
export default Home;
/*

<div><Search /></div>
       
<div><TaskList /></div>

<div><Exchange /></div>*/