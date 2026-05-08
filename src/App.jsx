import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollToTop from './components/ScrollToTop';
import ParticlesBackground from './components/ParticlesBackground';
import Preloader from './components/Preloader';
import ScrollProgress from './components/ScrollProgress';

function App() {
  return (
    <div className="relative font-sans text-slate-900 dark:text-slate-200 transition-colors duration-300">
      <Preloader />
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      
      <main>
        <ParticlesBackground />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
