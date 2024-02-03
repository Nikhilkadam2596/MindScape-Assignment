import Login from './components/Login';
import Signup from './components/Signup';

import './App.css';
import { useState } from 'react';

function App() {

  const [current, setCurrent]=useState('login')

  const toggle = (e) =>{
    setCurrent(e);
  }
  return (
    <div className="App">
      { current === "login"? <Login onSwitch={toggle}/> : <Signup onSwitch={toggle}/>}
    </div>
  );
}

export default App;
