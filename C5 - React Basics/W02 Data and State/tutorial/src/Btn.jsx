const Btn = () => {
  const clickHandler = () => {
    console.log("Clicked");
  };

  const hoverHandler = () => {
    console.log("Hovered");
  };
  return (
    <div className="btn btn-Button-Group">
      <button onClick={clickHandler} onMouseOver={hoverHandler}>
         Click Me
      </button>
    </div>
  );
};

export default Btn;
