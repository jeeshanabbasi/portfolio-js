import { cloneElement } from 'react';
import { Mail, Heart, ArrowUpRight, MapPin, Phone, Sparkles } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  const services = [
    'Full Stack Development',
    'Frontend (React)',
    'Backend (Node.js)',
    'REST API Design',
    'Database Architecture',
  ];

  const socialLinks = [
    { icon: <FaGithub size={20} />, href: 'https://github.com/jeeshanabbasi/', label: 'GitHub', colorClass: 'text-[#333] dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800' },
    { icon: <FaLinkedin size={20} />, href: 'https://www.linkedin.com/in/jeeshan-abbasi-67aa7638a/', label: 'LinkedIn', colorClass: 'text-[#0A66C2] hover:bg-blue-50 dark:hover:bg-blue-900/20' },
    { icon: <div className="w-[22px] h-[22px] rounded-[5px] flex items-center justify-center" style={{ background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)' }}><FaInstagram size={14} className="text-white" /></div>, href: 'http://instagram.com/jeeshan_abbasi18', label: 'Instagram', colorClass: 'hover:bg-pink-50 dark:hover:bg-pink-900/20' },
  ];

  return (
    <footer className="relative border-t border-slate-200 dark:border-white/5 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-[#020817] overflow-hidden transition-colors duration-300">
      
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[300px] bg-cyan-500/5 dark:bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[200px] bg-blue-500/5 dark:bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      {/* Decorative top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>

      {/* ── Desktop Footer ── */}
      <div className="hidden md:block w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* Main Footer Content */}
        <div className="pt-12 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tighter mb-4">
                Jeeshan<span className="text-cyan-500 dark:text-cyan-400">.</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 text-sm">
                Passionate Full Stack Developer crafting modern, scalable, and visually stunning web applications that make a difference.
              </p>
              
              {/* Status badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-emerald-700 dark:text-emerald-400 text-xs font-semibold">Available for Work</span>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-widest mb-6 flex items-center gap-2">
                <div className="w-8 h-px bg-cyan-500"></div>
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.to}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      className="group flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all cursor-pointer text-sm"
                    >
                      <span className="w-0 group-hover:w-3 h-px bg-cyan-500 transition-all duration-300"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Services */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-widest mb-6 flex items-center gap-2">
                <div className="w-8 h-px bg-cyan-500"></div>
                Services
              </h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service} className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                    <Sparkles size={12} className="text-cyan-500 flex-shrink-0" />
                    {service}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-widest mb-6 flex items-center gap-2">
                <div className="w-8 h-px bg-cyan-500"></div>
                Get In Touch
              </h3>
              <ul className="space-y-4">
                <li>
                  <a href="mailto:jeeshanabbasi055@gmail.com" className="group flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors text-sm">
                    <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-white/5 group-hover:border-cyan-300 dark:group-hover:border-cyan-500/30 transition-colors">
                      <Mail size={14} />
                    </div>
                    <span className="break-all">jeeshanabbasi055@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a href="tel:8079024831" className="group flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors text-sm">
                    <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-white/5 group-hover:border-cyan-300 dark:group-hover:border-cyan-500/30 transition-colors">
                      <Phone size={14} />
                    </div>
                    8079024831
                  </a>
                </li>
                <li className="flex items-center gap-3 text-slate-600 dark:text-slate-400 text-sm">
                  <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-white/5">
                    <MapPin size={14} />
                  </div>
                  Bikaner, Rajasthan
                </li>
              </ul>
            </motion.div>
          </div>

        </div>

        {/* Social Links Bar */}
        <div className="border-t border-slate-200 dark:border-white/5 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className={`p-3 rounded-xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${social.colorClass}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* CTA */}
            <a
              href="mailto:jeeshanabbasi055@gmail.com"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-sm hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all duration-300 hover:-translate-y-0.5"
            >
              Let's Work Together
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 dark:border-white/5 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 dark:text-slate-500 text-sm flex items-center gap-1.5">
              © {currentYear} Jeeshan. Crafted with
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Heart size={14} className="text-red-500 fill-red-500" />
              </motion.span>
              & lots of ☕
            </p>
            <p className="text-slate-400 dark:text-slate-600 text-xs">
              Designed & Developed by <span className="text-cyan-600 dark:text-cyan-400 font-medium">Jeeshan</span>
            </p>
          </div>
        </div>

      </div>

      {/* ── Mobile Footer ── */}
      <div className="block md:hidden w-full px-4 py-6 relative z-10 text-center">
        {/* Brand & Compact Info */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tighter">
            Jeeshan<span className="text-cyan-500 dark:text-cyan-400">.</span>
          </h2>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 max-w-[280px] mx-auto leading-relaxed">
            Full Stack Developer crafting modern, scalable, and visually stunning web applications.
          </p>
        </div>

        {/* Quick Links Horizontal Wrapper */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mb-4 text-xs font-semibold text-slate-600 dark:text-slate-400">
          {quickLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-70}
              className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors cursor-pointer"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Social Icons row */}
        <div className="flex items-center justify-center gap-3 mb-4">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className={`p-2.5 rounded-lg bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/5 shadow-sm transition-all duration-300 hover:shadow-md ${social.colorClass}`}
            >
              {social.label === 'Instagram' ? (
                social.icon
              ) : (
                cloneElement(social.icon, { size: 16 })
              )}
            </a>
          ))}
        </div>

        <div className="w-full h-px bg-slate-200 dark:bg-white/5 my-4"></div>

        {/* Copyright info */}
        <div className="text-[10px] text-slate-400 dark:text-slate-500 space-y-1">
          <p className="flex items-center justify-center gap-1.5">
            © {currentYear} Jeeshan. Crafted with 
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Heart size={10} className="text-red-500 fill-red-500" />
            </motion.span>
            & ☕
          </p>
          <p>
            Designed & Developed by <span className="text-cyan-600 dark:text-cyan-400 font-medium">Jeeshan</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
