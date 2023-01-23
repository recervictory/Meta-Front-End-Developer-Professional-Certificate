import React, { useState, useEffect, useRef } from "react";

function usePrevious(val) {
  const ref = useRef();
  useEffect(() => {
    ref.current = val;
  }, [val]);

  return ref.current;
}

const UseRefExample = (props) => {
  const [day, setDay] = useState("Monday");
  const prevDay = usePrevious(day);

  const getNextDay = () => {
    if (day === "Monday") {
      setDay("Tuesday");
    } else if (day === "Tuesday") {
      setDay("Wednesday");
    } else if (day === "Wednesday") {
      setDay("Thursday");
    } else if (day === "Thursday") {
      setDay("Friday");
    } else if (day === "Friday") {
      setDay("Monday");
    }
  };
  return (
    <div style={{ padding: "40px", border: `3px solid ${props.color}`, margin: "15px" }}>
      <h1 style={{ padding: "0px" }}>{props.title} Example</h1>
      <hr style={{border: `1px solid ${props.color}` }}/>
      <h2>
        Today is: {day}
        <br />
        {prevDay && <span>Previous work day was: {prevDay}</span>}
      </h2>
      <button onClick={getNextDay}>Get next day</button>
    </div>
  );
};

export default UseRefExample;
