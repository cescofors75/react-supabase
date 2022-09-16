import {useEffect} from 'react'
import { useTasks} from '../context/TaskContext'



function TaskList(done=false){
    const {tasks, getTasks} = useTasks();
   
    

    useEffect( () => {
       getTasks(done)
    }, [done]);
   
    return <div>{
        tasks.map(task => (
            
            <div key={task.id}>

                <h3>{task.name}</h3>
                <p>{task.done}</p>
                
            </div>
        ))
    }</div>;   
}

       
           
    

export default TaskList


// Language: javascript
// Path: src\components\TaskList.js
// Compare this snippet from src\pages\Home.js:
// import  { useState, useEffect } from "react"
// import { supabase } from "../supabase/client"
// import {useNavigate} from 'react-router-dom'
// import TaskList from "../components/TaskList"
