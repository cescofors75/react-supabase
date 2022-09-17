import {useEffect} from 'react'
import { useTasks} from '../context/TaskContext'



export function Currency() {
    const {tasks, getTasks} = useTasks();
   
    
    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch('https://v6.exchangerate-api.com/v6/b1c79e722136aa3fa32e5909/latest/EUR')
            .then(response => console.log(response))
           // .then(data => setTotalReactPackages(data.total));
    
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);
    
   
    return <div>
     

                
                <h3>currency</h3>
               
                
          
       
    </div>;   
}

       
           
    

export default Currency



