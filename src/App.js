
import {Routes, Route, useNavigate} from 'react-router-dom';
import {useEffect} from 'react';
import {supabase } from './supabase/client';	

import Login from './pages/Login';
import Home from './pages/Home';
import Notfound from './pages/NotFound';

import './App.css';


function App() {
  const navigate = useNavigate();
  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session) => {
      if(!session){
        navigate('/login');
      }else{
        navigate('/');
      }
    });
  }, [navigate]);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Notfound/>} />
      </Routes>

    </div>
  );
}

export default App;
