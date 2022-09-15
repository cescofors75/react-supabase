import React   from "react";

import {useNavigate} from 'react-router-dom';
function Notfound () {
  const navigate = useNavigate();
  return (
    
    <div>
      <h1>404</h1>
        <button onClick={() =>  navigate('/login')}>Login</button>
    </div>
  );
}
export default Notfound;
