import Navbar from "./components/Navbar";
import Home from "./components/Home"
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import WorkExperience from "./components/WorkExperience";
import { HelmetProvider, Helmet } from "react-helmet-async";

function App() {
  return (
    //increasing seo
    <HelmetProvider>
      <Helmet>
        <title>Kagan Rua - Software Developer</title>
        <meta name="description" content="I am a software developer specializing in React, Python, and cloud technologies. I build scalable web applications and optimize performance." />
        <meta name="keywords" content="Software Developer, React, Python, Cloud, AWS, Full Stack" />
        <meta name="author" content="Kagan Rua" />
        
        {/* Open Graph for social media */}
        <meta property="og:title" content="Kagan Rua - Software Developer" />
        <meta property="og:description" content="I build scalable web applications using React, Python, and AWS." />
        <meta property="og:image" content="/professional-photo.jpeg" />
        <meta property="og:url" content="https://kaganrua.netlify.app" />
        <meta property="og:type" content="website" />

        <meta property="og:site_name" content="kagan rua" />
        <meta property="og:locale" content="en_US" />
      </Helmet>

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
    </HelmetProvider>
  )
}

export default App;
