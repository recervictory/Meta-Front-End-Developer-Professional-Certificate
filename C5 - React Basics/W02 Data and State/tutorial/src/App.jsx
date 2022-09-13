import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Btn from './Btn';
import HookUse from './HookUse';
import RegisterForm from './RegisterForm';
import PropDrilling from './PropDrilling';

function App() {
  

  return (
    <div className="App">
     <Btn/>
     <HookUse/>
     <RegisterForm/>
     <PropDrilling/>
    </div>

  )
}

export default App
