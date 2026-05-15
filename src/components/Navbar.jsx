import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Education', to: 'education' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Contact', to: 'contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 flex justify-center ${scrolled ? 'top-4 px-4 md:px-0' : 'top-0'}`}>
      <nav
        className={`w-full transition-all duration-500 relative ${
          scrolled 
            ? 'max-w-5xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.1)] border border-slate-200/50 dark:border-white/10 rounded-full py-3 px-6 md:px-8' 
            : 'max-w-7xl bg-transparent py-5 px-6 md:px-12 border-transparent'
        }`}
      >
        <div className="w-full flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-slate-900 dark:text-white tracking-tighter cursor-pointer"
          >
            Jeeshan<span className="text-cyan-400">.</span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 text-sm font-medium transition-colors cursor-pointer"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.a
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              href="#contact"
              className="px-5 py-2 rounded-full bg-cyan-50 text-cyan-600 border border-cyan-200 hover:bg-cyan-500 hover:text-white dark:bg-cyan-500/10 dark:text-cyan-400 dark:border-cyan-500/20 dark:hover:bg-cyan-500 dark:hover:text-slate-900 transition-all font-medium text-sm"
            >
              Hire Me
            </motion.a>
            
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile Toggle & Theme */}
          <div className="md:hidden flex items-center gap-4">
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

        {/* Mobile Nav Menu Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className={`md:hidden absolute left-0 right-0 w-full bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-white/5 overflow-hidden shadow-xl backdrop-blur-xl ${scrolled ? 'top-full mt-4 rounded-3xl' : 'top-full mt-2 rounded-2xl'}`}
            >
              <div className="flex flex-col px-6 py-6 space-y-5 text-center">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => setIsOpen(false)}
                    className="text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 text-lg font-semibold transition-colors cursor-pointer block"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
