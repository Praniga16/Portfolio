import Navbar from "./components/Navbar";
import NeuralBackground from "./components/NeuralBackground";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";

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
      </main>

    </div>
  );
}

export default App;