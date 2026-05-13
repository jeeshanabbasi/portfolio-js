import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollToTop from './components/ScrollToTop';
import Preloader from './components/Preloader';
import ScrollProgress from './components/ScrollProgress';
import BackgroundDesign from './components/BackgroundDesign';

function App() {
  return (
    <div className="relative font-sans text-slate-900 dark:text-slate-200 transition-colors duration-300">
      <Preloader />
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      
      <main>
        <BackgroundDesign />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;

