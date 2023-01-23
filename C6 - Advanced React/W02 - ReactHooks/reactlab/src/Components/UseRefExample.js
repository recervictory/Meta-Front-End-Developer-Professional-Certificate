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
    <div>
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
