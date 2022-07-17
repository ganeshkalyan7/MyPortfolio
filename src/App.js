import "./App.css";
import Header from "./components/Header/Header";
import TopContainer from "./components/TopContainer/TopContainer";
import SkillContainer from "./components/SkillContainer/SkillContainer";
import Contact from "./components/Contact/Contact";
import Intrest from "./components/Intrests/Intrest";
import Projects from "./components/Project/Projects";

function App() {
  return (
    <div className="App">
      <Header />
      <TopContainer />
      <SkillContainer />
      <Projects />
      <Intrest />
      <Contact />
    </div>
  );
}

export default App;
