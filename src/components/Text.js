
import { useTasks} from '../context/TaskContext'



export function Text() {
  const {Texto}= useTasks();
  
 if (!Texto){
  return (
     <div>
      Please see your email for a magic link to sign in
      </div> );

 }else{

  return (
    
    <div>
    
    </div>
  );

 }


}

export default Text;

// 
