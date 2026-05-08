import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';

const projects = [
  {
    title: 'Service Booking App',
    description: 'A comprehensive platform for booking services. Includes user authentication, provider management panel, cart, and checkout functionalities. Features a robust admin dashboard with dark mode UI.',
    tech: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
    liveLink: '#',
    githubLink: '#',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Task Manager',
    description: 'A productivity application designed to help users organize their daily workflows. Includes drag-and-drop task management, category filtering, and progress tracking with a modern glassmorphism interface.',
    tech: ['React', 'Framer Motion', 'Node.js', 'MySQL'],
    liveLink: 'https://frontend-task-nine-lake.vercel.app/',
    githubLink: '#',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Print Point Website',
    description: 'An elegant e-commerce front-end for a printing business. Showcases rotating hero banners, product catalogs, and smooth scroll animations. Fully responsive for all devices.',
    tech: ['React', 'Tailwind CSS', 'Vite'],
    liveLink: '#',
    githubLink: '#',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-20">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col md:flex-row gap-10 items-center ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              
              <div className="w-full md:w-1/2 group relative">
                <Tilt 
                  tiltMaxAngleX={5} 
                  tiltMaxAngleY={5} 
                  scale={1.02}
                  transitionSpeed={2500}
                  className="w-full"
                >
                  <div className="absolute inset-0 bg-cyan-500/10 dark:bg-cyan-500/20 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <div className="relative rounded-2xl overflow-hidden bg-white/80 dark:bg-slate-800/50 backdrop-blur-lg border border-slate-200 dark:border-white/10 aspect-video shadow-lg">
                  {/* Base overlay for dark mode */}
                  <div className="absolute inset-0 bg-slate-900/10 dark:bg-slate-900/40 transition-colors duration-500 z-10"></div>
                  
                  {/* Hover Overlay with Button */}
                  <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 flex items-center justify-center backdrop-blur-[2px]">
                    <a 
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="px-6 py-3 bg-cyan-500 text-white rounded-full font-semibold flex items-center gap-2 transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:bg-cyan-400"
                    >
                      <ExternalLink size={18} /> View Live Project
                    </a>
                  </div>

                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                </Tilt>
              </div>

              {/* Content Side */}
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <div className="mb-2 text-cyan-400 text-sm font-semibold tracking-wider uppercase">
                  Featured Project
                </div>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                  {project.title}
                </h3>
                
                <div className="bg-white/80 dark:bg-slate-900/50 backdrop-blur-md border border-slate-200 dark:border-white/5 shadow-sm p-6 rounded-xl mb-6 relative z-20">
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-sm font-medium text-slate-600 dark:text-slate-400">
                      {tech}
                      {i < project.tech.length - 1 && <span className="mx-2 text-slate-600">/</span>}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a href={project.liveLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-500 text-white dark:text-slate-900 font-semibold hover:bg-cyan-600 dark:hover:bg-cyan-400 transition-colors shadow-sm">
                    <ExternalLink size={18} /> Live Demo
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/5 hover:bg-slate-50 dark:hover:bg-white/10 text-slate-700 dark:text-white font-medium transition-colors shadow-sm">
                    <FaGithub size={18} /> Source Code
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
