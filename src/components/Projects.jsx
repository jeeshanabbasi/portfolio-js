import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import episyncImg from '../assets/episync.png';
import taskManagerImg from '../assets/task-manager.png';
import servicioImg from '../assets/servicio.png';

const projects = [
  {
    title: 'Episync',
    category: 'Full Stack',
    description: 'A modern media streaming platform featuring co-watching capabilities, AI chat integration, and a comprehensive catalog. Built with a sleek, immersive dark-mode interface for the ultimate viewing experience.',
    tech: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    liveLink: 'https://episync.vercel.app/',
    githubLink: 'https://github.com/jeeshanabbasi',
    image: episyncImg
  },
  {
    title: 'Service Booking App',
    category: 'Full Stack',
    description: 'A comprehensive platform for booking services. Includes user authentication, provider management panel, cart, and checkout functionalities. Features a robust admin dashboard with dark mode UI.',
    tech: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
    liveLink: 'https://service-management-system-eosin.vercel.app/',
    githubLink: 'https://github.com/jeeshanabbasi',
    image: servicioImg
  },
  {
    title: 'Task Manager',
    category: 'Full Stack',
    description: 'A productivity application designed to help users organize their daily workflows. Includes drag-and-drop task management, category filtering, and progress tracking with a modern glassmorphism interface.',
    tech: ['React', 'Framer Motion', 'Node.js', 'MongoDB'],
    liveLink: 'https://dipanshu-taskboard.vercel.app/',
    githubLink: 'https://github.com/jeeshanabbasi',
    image: taskManagerImg
  },
  {
    title: 'Print Point Website',
    category: 'Frontend',
    description: 'An elegant e-commerce front-end for a printing business. Showcases rotating hero banners, product catalogs, and smooth scroll animations. Fully responsive for all devices.',
    tech: ['React', 'Tailwind CSS', 'Vite'],
    liveLink: '#',
    githubLink: 'https://github.com/jeeshanabbasi',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop'
  }
];

const tabs = ['All', 'Full Stack', 'Frontend', 'Backend'];

export default function Projects() {
  const [activeTab, setActiveTab] = useState('All');
  const [showAll, setShowAll] = useState(false);
  const projectsScrollRef = useRef(null);

  const scrollProjects = (direction) => {
    if (projectsScrollRef.current) {
      const scrollAmount = 306; // Card width 290px + gap 16px (1rem)
      projectsScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const filtered = activeTab === 'All'
    ? projects
    : projects.filter(p => p.category === activeTab);

  return (
    <section id="projects" className="py-12 md:py-20 relative">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-10"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mb-8" />

          {/* ── Filter Tabs ── */}
          <div className="flex items-center justify-center flex-wrap gap-2">
            {tabs.map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeTab === tab
                    ? 'text-white shadow-lg'
                    : 'text-slate-600 dark:text-slate-400 bg-white/80 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 hover:border-cyan-400 dark:hover:border-cyan-500/50'
                }`}
              >
                {activeTab === tab && (
                  <motion.span
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* No results */}
        <AnimatePresence mode="wait">
          {filtered.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center text-slate-500 dark:text-slate-400 py-16"
            >
              No projects in this category yet. Coming soon! 🚀
            </motion.p>
          )}
        </AnimatePresence>

        {/* ── Mobile: horizontal scrollable carousel ── */}
        <AnimatePresence mode="wait">
          <motion.div
            ref={projectsScrollRef}
            key={activeTab + '-mobile'}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-row overflow-x-auto gap-4 pb-6 snap-x snap-mandatory -mx-4 px-4 md:hidden no-scrollbar"
          >
            {filtered.map((project, idx) => (
              <div
                key={project.title}
                className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-lg border border-slate-200 dark:border-slate-700/50 rounded-2xl overflow-hidden shadow-md flex-shrink-0 w-[290px] snap-start flex flex-col justify-between"
              >
                <div>
                  <div className="relative overflow-hidden bg-slate-100 dark:bg-slate-900/50 h-36">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                    {project.title !== 'Task Manager' && project.title !== 'Service Booking App' && (
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                    )}
                    <span className="absolute top-2.5 right-2.5 text-[10px] font-semibold bg-cyan-500/90 text-white px-2 py-0.5 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">{project.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed mb-3 line-clamp-3">{project.description}</p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="p-4 pt-0">
                  <div className="flex gap-2">
                    <a href={project.liveLink} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-full bg-cyan-500 text-white font-semibold text-xs hover:bg-cyan-600 transition-colors">
                      <ExternalLink size={12} /> Live Demo
                    </a>
                    <a href={project.githubLink} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-full bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/5 text-slate-700 dark:text-white font-medium text-xs hover:bg-slate-50 dark:hover:bg-white/10 transition-colors">
                      <FaGithub size={12} /> GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Mobile Navigation Arrows */}
        {filtered.length > 0 && (
          <div className="flex md:hidden items-center justify-center gap-4 mt-2 mb-8">
            <button 
              onClick={() => scrollProjects('left')}
              className="p-2.5 rounded-full bg-white/85 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/50 text-slate-700 dark:text-slate-300 shadow-md active:scale-95 transition-all duration-200"
              aria-label="Scroll Left"
            >
              <ChevronLeft size={18} />
            </button>
            <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 tracking-wider uppercase">
              Swipe or Use Arrows
            </span>
            <button 
              onClick={() => scrollProjects('right')}
              className="p-2.5 rounded-full bg-white/85 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/50 text-slate-700 dark:text-slate-300 shadow-md active:scale-95 transition-all duration-200"
              aria-label="Scroll Right"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}

        {/* ── Desktop: alternating layout ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab + '-desktop'}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="hidden md:flex flex-col gap-14 lg:gap-20"
          >
            {filtered.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5 }}
                className={`flex flex-row gap-10 items-center ${idx % 2 !== 0 ? 'flex-row-reverse' : ''}`}
              >
                {/* Image */}
                <div className="w-1/2 group relative">
                  <div className="absolute inset-0 bg-cyan-500/10 dark:bg-cyan-500/20 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-lg bg-slate-100 dark:bg-slate-900/50">
                    <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 flex items-center justify-center backdrop-blur-[2px]">
                      <a href={project.liveLink} target="_blank" rel="noreferrer" className="px-6 py-3 bg-cyan-500 text-white rounded-full font-semibold flex items-center gap-2 translate-y-8 group-hover:translate-y-0 transition-all duration-500 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:bg-cyan-400">
                        <ExternalLink size={18} /> View Live
                      </a>
                    </div>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="w-1/2 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">Featured Project</span>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-500/20">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-4">{project.title}</h3>
                  <div className="bg-white/80 dark:bg-slate-900/50 backdrop-blur-md border border-slate-200 dark:border-white/5 shadow-sm p-5 rounded-xl mb-5">
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">{project.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-sm font-medium text-slate-600 dark:text-slate-400">
                        {tech}{i < project.tech.length - 1 && <span className="mx-2 text-slate-400">/</span>}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <a href={project.liveLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition-colors shadow-sm text-sm">
                      <ExternalLink size={16} /> Live Demo
                    </a>
                    <a href={project.githubLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/5 hover:bg-slate-50 dark:hover:bg-white/10 text-slate-700 dark:text-white font-medium transition-colors shadow-sm text-sm">
                      <FaGithub size={16} /> Source Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
