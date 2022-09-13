import { useState } from "react";
import Fruits from "./Fruits";
import FruitCount from "./FruitsCount";

const FruitApp = () => {
  const [fruits] = useState([
    { fruitName: "apple", id: 1 },
    { fruitName: "apple", id: 2 },
    { fruitName: "plum", id: 3 },
  ]);
  return (
    <div className="fruit-app">
      <h1> Where should the state go?</h1>
      <Fruits fruits={fruits}/>
      <FruitCount fruits={fruits}/>
    </div>
  );
};

export default FruitApp;
