import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { Link } from 'react-scroll';
import MagneticButton from './MagneticButton';
import TechMarquee from './TechMarquee';

export default function Hero() {
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const fullText = "Full Stack Developer (MERN)";
  
  useEffect(() => {
    let i = 0;
    let timer;
    if (isTyping) {
      timer = setInterval(() => {
        setText(fullText.substring(0, i + 1));
        i++;
        if (i === fullText.length) {
          setIsTyping(false);
          clearInterval(timer);
        }
      }, 100);
    }
    return () => clearInterval(timer);
  }, [isTyping]);

  return (
    <section id="home" className="relative flex flex-col overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" />
      </div>

      <div className="w-full pt-28 pb-16">
        <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 rounded-full glass border-cyan-500/30 text-cyan-400 text-sm font-medium mb-6">
              Welcome to my portfolio
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
              Hi, I'm <br />
              <span className="text-gradient">Jeeshan</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-slate-700 dark:text-slate-300 font-medium mb-6 h-10">
              {text}
              <span className="animate-pulse text-cyan-400">|</span>
            </h2>
            
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-lg mb-8 leading-relaxed">
              I build modern, scalable, and visually stunning web applications. Let's turn your ideas into digital reality with clean code and creative design.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="projects" smooth={true} duration={500} offset={-70}>
                <MagneticButton className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium flex items-center gap-2 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all">
                  View Projects <ArrowRight size={18} />
                </MagneticButton>
              </Link>
              
              <Link to="contact" smooth={true} duration={500} offset={-70}>
                <MagneticButton className="px-6 py-3 rounded-full bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/5 text-slate-700 dark:text-white font-medium hover:bg-slate-50 dark:hover:bg-white/10 transition-all flex items-center gap-2 shadow-sm">
                  Contact Me
                </MagneticButton>
              </Link>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-5 mt-10">
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Follow Me:</p>
              <a href="https://github.com/jeeshanabbasi/" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors">
                <FaGithub size={22} />
              </a>
              <a href="https://www.linkedin.com/in/jeeshan-abbasi-67aa7638a/" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors">
                <FaLinkedin size={22} />
              </a>
              <a href="http://instagram.com/jeeshan_abbasi18" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors">
                <FaInstagram size={22} />
              </a>
              <a href="mailto:jeeshanabbasi055@gmail.com" className="text-slate-500 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors">
                <Mail size={22} />
              </a>
            </div>
          </motion.div>
          
          {/* Visual Content / Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:flex justify-center relative"
          >
            <div className="w-80 h-80 relative">
              {/* Outer rotating ring */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-dashed border-cyan-500/30 rounded-full"
              />
              
              {/* Inner container with Image */}
              <div className="absolute inset-4 rounded-full overflow-hidden bg-slate-100 dark:bg-slate-800 border-4 border-white dark:border-slate-800 shadow-xl z-10">
                <img 
                  src="/profile.jpg" 
                  alt="Profile" 
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    e.target.onerror = null;
                    // Fallback avatar incase image is missing
                    e.target.src = "https://ui-avatars.com/api/?name=Jeeshan&background=06B6D4&color=fff&size=400";
                  }}
                />
              </div>
              
              {/* Floating tech badges */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 -left-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl p-3.5 rounded-full text-[#61DAFB] flex items-center justify-center z-20"
              >
                <FaReact size={32} />
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 -left-8 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl p-3.5 rounded-full text-[#339933] flex items-center justify-center z-20"
              >
                <FaNodeJs size={32} />
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-20 -right-8 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl p-3.5 rounded-full text-[#06B6D4] flex items-center justify-center z-20"
              >
                <SiTailwindcss size={32} />
              </motion.div>
            </div>
          </motion.div>
          
        </div>
      </div>
      </div>
      
      {/* Infinite Tech Marquee at the bottom of Hero */}
      <div className="w-full relative z-20">
        <TechMarquee />
      </div>
    </section>
  );
}
