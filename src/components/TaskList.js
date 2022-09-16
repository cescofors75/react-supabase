import {useEffect} from 'react'
import { useTasks} from '../context/TaskContext'



function TaskList(done=false){
    const {tasks, getTasks} = useTasks();
   
    

    useEffect( () => {
       getTasks(done)
       // eslint-disable-next-line
    }, []);
   
    return <div>{
        tasks.map(task => (
            
            <div key={task.id}>

                
                <h3>OEM Parts: {task.oemnumbers}</h3>
                <p>EAN Code: {task.eancode}</p>
                
            </div>
        ))
    }</div>;   
}

       
           
    

export default TaskList


/*<h3>{task.name}</h3>
                <p>{task.done}</p>
                */
