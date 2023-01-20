import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Project from "./Components/Project";
import Skills from "./Components/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Project />
      <Skills />
      <Contact />
      
    </div>
  );
}

export default App;
