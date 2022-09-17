
import { useTasks} from '../context/TaskContext'



export function Text() {
  const {Texto}= useTasks();
  
 if (Texto){
  return (
     <div>
      Please check your email. We've sent you a link in your email to sign in
      </div> );

 }else{

  return (
    
    <div>
    xxxx
    </div>
  );

 }


}

export default Text;

// 
