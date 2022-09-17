import {useEffect} from 'react'
import { useTasks} from '../context/TaskContext'



export function TaskList({ref="27060-87201"}) {
    const {tasks, getTasks} = useTasks();
   
    

    useEffect( () => {
       getTasks(ref)
       // WARNING
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



