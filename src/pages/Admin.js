
import { supabase } from "../supabase/client";

import ProblemsList from '../components/ProblemsListadmin'

function admin() {
  /*const navigate = useNavigate();
  useEffect(() => {
    if (!supabase.auth.user()) {
      navigate("/login");
    }
  }, [navigate]
  
  );*/
  const user =  supabase.auth.user();
  
  let user_mail = user ? user.email : "guest";
  return (
      <div >
        <div className="space"> </div>
        <h1>Lloret No problems</h1>
        <h2>Admin Section</h2>
        
        Welcome, {user_mail}

        <div className="space"> </div>
        <div><ProblemsList /></div>
        <div className="space"> </div>
        <div> <button className=" button" onClick={() => supabase.auth.signOut()}>Sign Out</button></div>

       

      </div>
  );
  
  }
 
export default admin;
/*
 <div><TaskForm /></div>
<div><ProblemsList /></div>
<div><Search /></div>
       
<div><TaskList /></div>

<div><Exchange /></div>*/