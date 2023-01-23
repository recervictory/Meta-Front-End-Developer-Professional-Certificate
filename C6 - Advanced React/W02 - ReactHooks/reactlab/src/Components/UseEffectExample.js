import React, {useState, useEffect} from "react";

const UseEffectExample = (props) => {
  const [toggle, setToggle] = useState(false);

  const clickHandler = () => {
    setToggle(!toggle);
  };

  useEffect( () => {
    document.title = toggle ? "Welcome to Little Lemon!" : "Using useEffect";
  },[toggle])

  return (
    <div
      style={{
        padding: "40px",
        border: `3px solid ${props.color}`,
        margin: "15px",
      }}
    >
      <h1 style={{ padding: "0px" }}>{props.title} Example</h1>
      <hr style={{ border: `1px solid ${props.color}` }} />
      <h1>Using useEffect hook</h1>
      <button onClick={clickHandler}>Toggle</button>
      {toggle && <h2>Welcome to Little Lemon!</h2>}
    </div>
  );
};

export default UseEffectExample;
