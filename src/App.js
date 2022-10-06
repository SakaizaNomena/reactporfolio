import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Skills from './pages/Skills';
import Experiences from './pages/Experiences';
import Contact from './pages/Contact';
import ProjectComponent from "./components/Project/ProjectComponent";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/experiences' element={<Experiences />} />
          <Route path='/project' element={<ProjectComponent />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
