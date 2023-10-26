import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import TechnologiesContainer from "./sections/TechnologiesContainer";
import { inject } from '@vercel/analytics';

inject();
function App() {
  return (
    <div className="flex flex-col items-center text-mytext text-lg font-serif dark:text-mytextd">
      <Home />
      <Navbar />
      <About />
      <TechnologiesContainer />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
