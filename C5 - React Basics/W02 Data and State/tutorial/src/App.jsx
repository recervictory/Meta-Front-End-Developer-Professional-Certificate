import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Btn from './Btn';
import HookUse from './HookUse';
import RegisterForm from './RegisterForm';
import PropDrilling from './PropDrilling';
import FruitApp from './FruitApp';

function App() {
  

  return (
    <div className="App">
     <Btn/>
     <HookUse/>
     <RegisterForm/>
     <PropDrilling/>
     <FruitApp />
    </div>

  )
}

export default App
