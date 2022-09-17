import { useState, useEffect } from "react"
import {useNavigate} from 'react-router-dom'
import { supabase } from "../supabase/client"



function Login() {
  const [email, setEmail] = useState("")
  const [user, setUser] = useState(null);
  const navigate = useNavigate()



  const handleSubmit = async (e) => {
   e.preventDefault(); //no refresh on submit

    try {
      await supabase.auth.signIn({ email })
    } catch (error) {
      console.log("error", error)
    }
  };
  useEffect(() => {
    if (supabase.auth.user()) {
        navigate('/')
    }
}, [navigate]);
/*
useEffect(() => {
  checkUser();
  window.addEventListener('hashchange', function() {
    checkUser();
  });
}, [])



async function checkUser() {
  const user = supabase.auth.user();
  setUser(user);
}

*/
async function signInWithGithub (e) {
  e.preventDefault(); //no refresh on submit
    await supabase.auth.signIn({
      // provider can be 'github', 'google', 'gitlab', and more
      provider: 'github',
    })
  };

  

  return (
    <div class="container">
      
      <div class="titleApp">Please sign in with Magick Mail</div>        
      <div class="child">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          class="form-control"
        />

        
      </form>
      <button  class="btn btn-primary">Send Magick Mail</button>
      </div>
      <div class="child"> <div class="titleApp">o </div></div>
      <div class="child">
      <img src='../images/github_logo.png' width="50" height="50" alt='github' onClick={signInWithGithub}/>
      </div>
    
    </div>
  );
}

export default Login