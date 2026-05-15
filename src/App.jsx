import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import StatsCounter from './components/StatsCounter';
import GithubStats from './components/GithubStats';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import CustomCursor from './components/CustomCursor';
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
        <StatsCounter />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <section className="py-12 relative z-10">
          <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12">
            <GithubStats />
          </div>
        </section>
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;

