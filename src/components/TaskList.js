import {useEffect} from 'react'
import { useTasks} from '../context/TaskContext'

function TaskList(){
    const {tasks, getTasks} = useTasks();
   
    

    useEffect(() => {
      getTasks()
    }, [getTasks]);
    
    return <div>{
        tasks.map(task => (

            <div key={task.id}>
                <h3>{task.oemnumber}</h3>
                <p>{task.eancode}</p>
            </div>
        ))
    }</div>;   
}

       
           
    

export default TaskList


/*     tasks.map(task => (
                <div key={task.id}>
                    <p>{task.eancode}</p>
                </div>
            ))

            */