import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import StatsCounter from './components/StatsCounter';
import GithubStats from './components/GithubStats';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import ScrollProgress from './components/ScrollProgress';
import BackgroundDesign from './components/BackgroundDesign';
import WhatsAppButton from './components/WhatsAppButton';
import AIChatbot from './components/AIChatbot';
import AmbientPlayer from './components/AmbientPlayer';

function App() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div className="relative font-sans text-slate-900 dark:text-slate-200 transition-colors duration-300 overflow-x-hidden">
      <Preloader />
      <ScrollProgress />
      <CustomCursor />
      <Navbar onChatOpen={() => setChatOpen(true)} />
      
      <main>
        <BackgroundDesign />
        <Hero />
        <StatsCounter />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <GithubStats />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
      <AmbientPlayer />
      <AIChatbot isOpenProp={chatOpen} setIsOpenProp={setChatOpen} />
    </div>
  );
}

export default App;


