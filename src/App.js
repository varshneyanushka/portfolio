
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Projects,Title } from "./components/Projects";
import { SkillsTitle,Skills } from "./components/Skills";
import { ContactTitle,Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <SkillsTitle />
      <Skills/>
      <Title />
      <Projects />
      <ContactTitle/>
      <Contact/>
      <Footer />
      
    </div>
  );
}

export default App;



        