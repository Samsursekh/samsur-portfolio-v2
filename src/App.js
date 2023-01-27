import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import GithubCalender from "./Components/GithubCalender";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Project from "./Components/Project";
import Skills from "./Components/Skills";
import Statistics from "./Components/Statistics";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Statistics />
      <GithubCalender />
      <Project />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
