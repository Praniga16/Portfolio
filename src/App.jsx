import Navbar from "./components/Navbar";
import NeuralBackground from "./components/NeuralBackground";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  return (
    <div className="portfolio">

      <NeuralBackground />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact/>
        <Footer/>
      </main>

    </div>
  );
}

export default App;