import { useState } from "React";

const HookUse = () => {
  const [text, setText] = useState("Hello");
  function handleChange(e) {
    setText(e.target.value);
  }
  return (
    <div className="useHook-form" style={{
        padding: "10px"
    }}>
      <input
        value={text}
        onChange={handleChange}
        style={{
          width: "100%",
          padding: "12px 20px",
          margin: "8px 0",
          boxSizing: "border-box",
          borderBottom: "2px solid red",
        }}
      />
      <p style={{color: "red"}}>You Typed : {text}</p>
      <button onClick={() => setText("Hello")}>Reset</button>
    </div>
  );
};

export default HookUse;
