import { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import { supabase } from "../supabase/client";

function Login() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    //e.preventDefault(); no refresh on submit

    try {
      await supabase.auth.signIn({ email });
    } catch (error) {
      console.log("error", error);
    }
  };
    useEffect(() => {
        if (supabase.auth.user()) {
            navigate('/');
        }
    }, [navigate]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="your email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button>Send</button>
      </form>
    </div>
  );
}

export default Login;
