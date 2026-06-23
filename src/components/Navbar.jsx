import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Sun, Moon, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Contact', to: 'contact' },
];

export default function Navbar({ onChatOpen }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Active section detection
      const sections = navLinks.map(l => document.getElementById(l.to));
      const scrollPos = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navLinks[i].to);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 flex justify-center ${scrolled ? 'top-2 px-2 md:top-4 md:px-4' : 'top-0'}`}>
      <nav
        className={`w-full transition-all duration-500 relative ${
          scrolled
            ? 'max-w-5xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.1)] border border-slate-200/50 dark:border-white/10 rounded-full py-2 px-4 md:py-3 md:px-5 lg:px-8'
            : 'max-w-7xl bg-transparent py-3 px-4 md:py-5 md:px-6 lg:px-12 border-transparent'
        }`}
      >
        <div className="w-full flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl lg:text-2xl font-bold text-slate-900 dark:text-white tracking-tighter cursor-pointer flex-shrink-0"
          >
            Jeeshan<span className="text-cyan-400">.</span>
          </motion.div>

          {/* Desktop Nav — lg+ only */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className="relative"
              >
                <Link
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onSetActive={() => setActiveSection(link.to)}
                  className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer block ${
                    activeSection === link.to
                      ? 'text-cyan-600 dark:text-cyan-400'
                      : 'text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400'
                  }`}
                >
                  {/* Active underline indicator */}
                  {activeSection === link.to && (
                    <motion.span
                      layoutId="navActive"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-cyan-500"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  {link.name}
                </Link>
              </motion.div>
            ))}

            <motion.a
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              href="#contact"
              className="ml-3 px-4 py-2 rounded-full bg-cyan-50 text-cyan-600 border border-cyan-200 hover:bg-cyan-500 hover:text-white dark:bg-cyan-500/10 dark:text-cyan-400 dark:border-cyan-500/20 dark:hover:bg-cyan-500 dark:hover:text-slate-900 transition-all font-medium text-sm whitespace-nowrap"
            >
              Hire Me
            </motion.a>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex-shrink-0 ml-1"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* AI Chatbot Button — Desktop */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              onClick={onChatOpen}
              title="Ask AI about Jeeshan"
              className="relative p-2 rounded-full ml-1 flex items-center justify-center transition-all"
              style={{
                background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
                boxShadow: '0 0 14px rgba(6,182,212,0.35)',
              }}
            >
              <Bot size={18} className="text-white" />
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-white dark:border-slate-900 animate-pulse" />
            </motion.button>
          </div>

          {/* Mobile/Tablet Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            {/* AI Chatbot Button — Mobile */}
            <button
              onClick={onChatOpen}
              title="Ask AI"
              className="relative p-2 rounded-full flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
                boxShadow: '0 0 12px rgba(6,182,212,0.3)',
              }}
            >
              <Bot size={17} className="text-white" />
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-emerald-400 rounded-full border border-white dark:border-slate-900 animate-pulse" />
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className={`lg:hidden absolute left-0 right-0 w-full bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-white/5 overflow-hidden shadow-xl backdrop-blur-xl ${scrolled ? 'top-full mt-2 rounded-2xl' : 'top-full mt-2 rounded-2xl'}`}
            >
              <div className="flex flex-col px-4 py-4 space-y-0.5 text-center">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-semibold transition-colors cursor-pointer block py-1.5 rounded-xl ${
                      activeSection === link.to
                        ? 'text-cyan-500 bg-cyan-50 dark:bg-cyan-500/10'
                        : 'text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="mt-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm hover:opacity-90 transition-all"
                >
                  Hire Me
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
