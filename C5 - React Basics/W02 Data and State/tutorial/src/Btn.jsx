const Btn = () => {
  const clickHandler = () => {
    console.log("Clicked");
  };

  const hoverHandler = () => {
    console.log("Hovered");
  };

  function handleClick() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    console.log(randomNumber);
    let userInput = prompt("Enter a number: ");
    alert(`Computer Number: ${randomNumber}, User: ${userInput}`);
  }

  return (
    <div className="btn btn-Button-Group">
      <button onClick={clickHandler} onMouseOver={hoverHandler}>
        Click Me
      </button>
      <h1>Task: Add a button and handle a click event</h1>
      <button onClick={handleClick}>Guess a Number Between 1 and 3</button>
    </div>
  );
};

export default Btn;
