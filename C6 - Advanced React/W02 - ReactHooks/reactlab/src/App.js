import { useState, useEffect, useRef } from "react";
import UseEffectExample from "./Components/UseEffectExample";
import UseRefExample from "./Components/UseRefExample";
export default function App() {
  
  return (
    <div>
    <UseEffectExample title="useEffect" color="red"/>
    <UseRefExample title="useRef" color="green"/>
    </div>
  );
}

