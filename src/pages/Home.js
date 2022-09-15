import React, { useEffect } from "react";
import { supabase } from "../supabase/client";
import {useNavigate} from 'react-router-dom';

function Home () {
    const navigate = useNavigate();
    useEffect(() => {
        if (!supabase.auth.user()) {
            navigate('/login');
        }
    }, [navigate]);
  return (
    <div>
      <h1>Home</h1>
        <button onClick={() => supabase.auth.signOut()}>Sign Out</button>
    </div>
  );
}
export default Home;
