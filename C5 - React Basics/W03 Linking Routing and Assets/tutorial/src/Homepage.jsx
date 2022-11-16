import { useState, useEffect } from "react";

const Homepage = () => {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        let TimeId = setInterval(() => setTime(new Date()),1000);
        return () => {
            clearInterval(TimeId);
        };
    },[time]);

    const seconds = time.getSeconds() * Math.random()  + 10;
    
  return (<div>
        <h1 style={{color:`rgb(${seconds },${seconds * 3},${seconds * 6})`}}>{time.toLocaleTimeString()}</h1>
       
    </div>);
};

export default Homepage;
