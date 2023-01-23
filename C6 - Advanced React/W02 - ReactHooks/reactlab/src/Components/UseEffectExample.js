import React, { useState, useEffect } from "react";

const UseEffectExample = (props) => {
  const [toggle, setToggle] = useState(false);

  const clickHandler = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    document.title = toggle ? "Welcome to Little Lemon!" : "Using useEffect";
  }, [toggle]);

  return (
    <div>
      <button onClick={clickHandler}>Toggle</button>
      {toggle && <h2>Welcome to Little Lemon!</h2>}
    </div>
  );
};

export default UseEffectExample;
