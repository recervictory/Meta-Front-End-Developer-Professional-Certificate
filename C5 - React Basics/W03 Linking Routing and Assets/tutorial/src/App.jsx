import "./App.css";
import Homepage from "./Homepage";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav className="navbar">
          <Link to="/" className="nav-item">
            Homepage
          </Link>
          <Link to="/about-me" className="nav-item">
            About me
          </Link>
          <Link to="/contact" className="nav-item">
            Contact
          </Link>
        </nav>
        <section>
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/about-me" element={<AboutMe />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
