import  { useEffect } from "react"
import { supabase } from "../supabase/client"
import {useNavigate} from 'react-router-dom'
import TaskList from "../components/TaskList"
import Search from "../components/Search"
import { Exchange } from "../components/Exchange"

function Home () {
    const navigate = useNavigate()
    useEffect(() => {
        if (!supabase.auth.user()) {
            navigate('/login')
        }
    }, [navigate]);
  return (
    <>
    <div>
      <h1>OemApi</h1>
      <Search/>
      <TaskList />
      <Exchange/>
        <button onClick={() => supabase.auth.signOut()}>Sign Out</button>
    </div>
    

    </>
  );
}
export default Home
