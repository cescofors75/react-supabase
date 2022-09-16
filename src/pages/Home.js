import React, { useEffect } from "react"
import { supabase } from "../supabase/client"
import {useNavigate} from 'react-router-dom'
import TaskForm from "../components/TaskForm"

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
      <input type="text" placeholder="Enter OEM part" />
        <button>Info !!</button>
    </div>
    <div>
    <h1>---------------------</h1>
        <button onClick={() => supabase.auth.signOut()}>Sign Out</button>
    </div>
    <TaskForm />

    </>
  );
}
export default Home
