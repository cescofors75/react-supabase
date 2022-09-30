import { useState, useEffect } from "react"
import {useNavigate} from 'react-router-dom'
import { supabase } from "../supabase/client"
import Text from "../components/Text"
import { useTasks } from "../context/TaskContext"




function Login() {
  const [mail, setEmail] = useState({})
  const [mensaje, setMensaje]= useState('');
  const navigate = useNavigate()
  const { loading, loginWithMagicLink, setTexto} = useTasks();
   

  useEffect(() => {
    
    if (supabase.auth.user()) {
      navigate('/')
    
    }
    
}, [navigate]);





  const handleSubmit = async (e) => {
   e.preventDefault(); //no refresh on submit
   
   loginWithMagicLink(mail);

   
    
    await setTexto(' Please check your email. We\'ve sent you a link in your email to sign in')
    setMensaje('xxxxx');

   
   
    
    
  };


async function signInWithGithub (e) {
  e.preventDefault(); //no refresh on submit
    await supabase.auth.signIn({
      // provider can be 'github', 'google', 'gitlab', and more
      provider: 'github',
    })
  };

  

  return (
    <div className="container">
      
    <div className="titleApp">Please sign in  (Magic Link)</div>   

    <div className="child">
    <form onSubmit={handleSubmit}>
      <input
        /*type="email"
        placeholder="Enter your email"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
        className="form-control"*/
        type="email"
       // value={mail}
        name="email"
        onChange={(e) => setEmail(e.target.value)}
        className="form-control mb-2"
        placeholder="youremail@site.com"
        required
      />
 <button disabled={loading} className="btn btn-primary">  {loading ? "Loading..." : "Login"}</button>
      
    </form>
   
    < Text/>
    </div>
    <div className="child"> <div className="titleApp">o </div></div>
    <div className="child">
    <img src='../images/github_logo.png' width="50" height="50" alt='github' onClick={signInWithGithub}/>
    </div>
    <div>{mensaje}</div>
  </div>
  );
}

export default Login