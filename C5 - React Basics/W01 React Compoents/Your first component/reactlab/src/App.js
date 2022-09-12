import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <h1>Task: Add three Card elements</h1>
      <Card h2="First card's h2" h3="First card's h3" backgroundColor='#FCB900'/>
      <Card h2="Second card's h2" h3="Second card's h3" backgroundColor='#00D084'/>
      <Card h2="Third card's h2" h3="Third card's h3" backgroundColor='#9900EF'/>
    </div>
  );
}

export default App;
