import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Download } from 'lucide-react';
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
      {/* Background blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 left-4 md:left-10 w-48 h-48 md:w-72 md:h-72 bg-cyan-500/20 rounded-full blur-[80px]" />
        <div className="absolute bottom-20 right-4 md:right-10 w-56 h-56 md:w-96 md:h-96 bg-blue-600/20 rounded-full blur-[80px]" />
      </div>

      <div className="w-full pt-20 pb-4 md:pt-28 md:pb-16">
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
          <div className="grid md:grid-cols-2 gap-4 md:gap-12 items-center">

            {/* ── Text Content ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center md:text-left order-2 md:order-1 mt-4 md:mt-0"
            >
              <div className="inline-block px-4 py-2 md:px-3 md:py-1.5 rounded-full glass border border-cyan-500/30 text-cyan-400 text-sm md:text-sm font-medium mb-4 md:mb-6 shadow-[0_0_15px_rgba(6,182,212,0.15)] md:shadow-none">
                Welcome to my portfolio
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-3 md:mb-4 tracking-tight leading-tight">
                Hi, I'm <br />
                <span className="text-gradient">Jeeshan</span>
              </h1>

              <h2 className="text-lg sm:text-xl md:text-xl lg:text-2xl text-slate-700 dark:text-slate-300 font-medium mb-3 md:mb-6 min-h-[28px] md:min-h-[32px]">
                {text}<span className="animate-pulse text-cyan-400">|</span>
              </h2>

              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base md:text-base max-w-md mb-6 md:mb-8 leading-relaxed mx-auto md:mx-0">
                I build modern, scalable, and visually stunning web applications. Let's turn your ideas into digital reality with clean code and creative design.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3 md:gap-3 justify-center md:justify-start">
                <Link to="projects" smooth={true} duration={500} offset={-70}>
                  <MagneticButton className="px-5 py-2.5 md:px-5 md:py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium flex items-center gap-2 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all text-sm md:text-sm shadow-md md:shadow-none">
                    View Projects <ArrowRight size={16} className="md:w-[16px] md:h-[16px]" />
                  </MagneticButton>
                </Link>

                <Link to="contact" smooth={true} duration={500} offset={-70}>
                  <MagneticButton className="px-5 py-2.5 md:px-5 md:py-2.5 rounded-full bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/5 text-slate-700 dark:text-white font-medium hover:bg-slate-50 dark:hover:bg-white/10 transition-all flex items-center gap-2 shadow-md md:shadow-sm text-sm md:text-sm">
                    Contact Me
                  </MagneticButton>
                </Link>

                <a href="/resume.html" target="_blank" rel="noreferrer">
                  <MagneticButton className="px-5 py-2.5 md:px-5 md:py-2.5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-medium hover:bg-emerald-500 hover:text-white transition-all flex items-center gap-2 shadow-md md:shadow-sm text-sm md:text-sm">
                    <Download size={16} className="md:w-[15px] md:h-[15px]" /> Download CV
                  </MagneticButton>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4 md:gap-4 mt-6 md:mt-8 justify-center md:justify-start flex-wrap">
                <p className="text-slate-500 dark:text-slate-400 text-sm md:text-sm font-medium">Follow Me:</p>
                <a href="https://github.com/jeeshanabbasi/" target="_blank" rel="noreferrer" className="text-[#333] dark:text-white hover:scale-110 transition-transform">
                  <FaGithub size={22} className="md:w-[22px] md:h-[22px]" />
                </a>
                <a href="https://www.linkedin.com/in/jeeshan-abbasi-67aa7638a/" target="_blank" rel="noreferrer" className="text-[#0A66C2] hover:scale-110 transition-transform">
                  <FaLinkedin size={22} className="md:w-[22px] md:h-[22px]" />
                </a>
                <a href="http://instagram.com/jeeshan_abbasi18" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform">
                  <div className="w-[22px] h-[22px] md:w-[24px] md:h-[24px] rounded-[5px] flex items-center justify-center" style={{ background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)' }}>
                    <FaInstagram size={14} className="text-white md:w-[15px] md:h-[15px]" />
                  </div>
                </a>
                <a href="mailto:jeeshanabbasi055@gmail.com" className="text-[#EA4335] hover:scale-110 transition-transform">
                  <Mail size={22} className="md:w-[22px] md:h-[22px]" />
                </a>
              </div>
            </motion.div>

            {/* ── Avatar / Visual ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center relative order-1 md:order-2 py-4"
            >
              <div className="w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[360px] lg:h-[360px] relative">
                {/* Rotating dashed ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-2 border-dashed border-cyan-500/30 rounded-full"
                />

                {/* Profile image with subtle gradient border */}
                <div className="absolute inset-2.5 md:inset-4 rounded-full overflow-hidden bg-slate-100 dark:bg-slate-800 border-2 md:border-4 border-white dark:border-slate-800 shadow-xl z-10">
                  <img
                    src="/profile.jpg"
                    alt="Jeeshan"
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://ui-avatars.com/api/?name=Jeeshan&background=06B6D4&color=fff&size=400";
                    }}
                  />
                </div>

                {/* Floating badges - visible and scaled on mobile */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-2 -left-1 md:top-0 md:-left-5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl p-2 md:p-3 rounded-full text-[#61DAFB] flex items-center justify-center z-20"
                >
                  <FaReact className="w-5 h-5 md:w-7 md:h-7" />
                </motion.div>

                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-4 -left-2 md:bottom-6 md:-left-7 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl p-2 md:p-3 rounded-full text-[#339933] flex items-center justify-center z-20"
                >
                  <FaNodeJs className="w-5 h-5 md:w-7 md:h-7" />
                </motion.div>

                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute top-12 -right-1 md:top-14 md:-right-7 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl p-2 md:p-3 rounded-full text-[#06B6D4] flex items-center justify-center z-20"
                >
                  <SiTailwindcss className="w-5 h-5 md:w-7 md:h-7" />
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Tech Marquee */}
      <div className="w-full relative z-20">
        <TechMarquee />
      </div>
    </section>
  );
}
