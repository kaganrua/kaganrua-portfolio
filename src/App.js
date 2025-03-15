import Navbar from "./components/Navbar";
import Home from "./components/Home"
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import WorkExperience from "./components/WorkExperience";

function App() {
  return (
    //increasing seo
      <div>
        <Navbar />
        <Home />
        <About />
        <WorkExperience />
        <Portfolio />
        <Skills />
        <Contact />
        <SocialLinks />
      </div>
    
  )
}

export default App;
