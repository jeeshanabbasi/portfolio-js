import { motion } from 'framer-motion';
import { Code, Server, Database } from 'lucide-react';
export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="py-12 relative">
      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-lg border border-slate-200 dark:border-slate-700/50 rounded-2xl shadow-xl p-8 relative z-10 transition-all hover:shadow-cyan-500/10">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Hi, I'm Jeeshan! 👋
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                I am a passionate Full Stack Developer specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js). With a keen eye for modern UI/UX design, I craft beautiful, responsive, and highly functional web applications.
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                My journey in web development started with a curiosity for how things work on the internet. Since then, I've built multiple robust applications ranging from service booking platforms to complex task management systems.
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                When I'm not coding, I enjoy learning about new technologies, contributing to open-source projects, and refining my design skills to create intuitive user experiences.
              </p>
            </div>
            {/* Decorative background block */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-cyan-500/20 rounded-2xl z-0 group-hover:border-cyan-500/40 transition-colors duration-500"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div variants={itemVariants} className="bg-white/80 dark:bg-slate-900/50 backdrop-blur-md border border-slate-200 dark:border-white/5 shadow-sm p-6 rounded-2xl flex items-start gap-4 hover:border-cyan-400 dark:hover:border-cyan-500/30 transition-colors group">
              <div className="p-3 bg-cyan-100 dark:bg-cyan-500/10 rounded-xl text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform">
                <Code size={24} />
              </div>
              <div>
                <h4 className="text-slate-900 dark:text-white text-lg font-medium mb-2">Frontend Development</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Building pixel-perfect, interactive, and accessible user interfaces using React, Tailwind CSS, and Framer Motion.</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white/80 dark:bg-slate-900/50 backdrop-blur-md border border-slate-200 dark:border-white/5 shadow-sm p-6 rounded-2xl flex items-start gap-4 hover:border-blue-400 dark:hover:border-blue-500/30 transition-colors group">
              <div className="p-3 bg-blue-100 dark:bg-blue-500/10 rounded-xl text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                <Server size={24} />
              </div>
              <div>
                <h4 className="text-slate-900 dark:text-white text-lg font-medium mb-2">Backend Architecture</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Developing scalable RESTful APIs, secure authentication flows, and robust business logic with Node.js and Express.</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white/80 dark:bg-slate-900/50 backdrop-blur-md border border-slate-200 dark:border-white/5 shadow-sm p-6 rounded-2xl flex items-start gap-4 hover:border-purple-400 dark:hover:border-purple-500/30 transition-colors group">
              <div className="p-3 bg-purple-100 dark:bg-purple-500/10 rounded-xl text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
                <Database size={24} />
              </div>
              <div>
                <h4 className="text-slate-900 dark:text-white text-lg font-medium mb-2">Database Management</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Designing efficient database schemas and managing data flow with MongoDB and MySQL.</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
