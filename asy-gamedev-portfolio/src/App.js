import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { WebSkills } from './components/WebSkills';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner/>
      <Projects/>
      <Skills/>
      <WebSkills/>
      <Contact/>
    </div>
  );
}

export default App;
