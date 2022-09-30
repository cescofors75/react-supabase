
import { useTasks} from '../context/TaskContext'



export function Text() {
  const {Texto}= useTasks();
  return <div>{Texto} </div>
}




export default Text;

// 
