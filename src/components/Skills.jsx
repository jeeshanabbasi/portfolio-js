import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaGithub, FaHtml5, FaDatabase, FaCss3Alt
} from 'react-icons/fa';
import { 
  SiJavascript, SiTailwindcss, SiFramer, SiExpress, 
  SiJsonwebtokens, SiMongodb, SiMysql, SiMongoose,
  SiPostman, SiVite, SiNestjs
} from 'react-icons/si';
import { Layout, Code2, Server, Database, Wrench } from 'lucide-react';

const skills = [
  {
    category: 'Frontend',
    icon: <Code2 size={22} />,
    gradient: 'from-cyan-500 to-blue-500',
    glowColor: 'cyan',
    items: [
      { name: 'React', icon: <FaReact size={28} />, color: '#61DAFB' },
      { name: 'JavaScript', icon: <SiJavascript size={28} />, color: '#F7DF1E' },
      { name: 'Tailwind CSS', icon: <SiTailwindcss size={28} />, color: '#06B6D4' },
      { name: 'HTML5 / CSS3', icon: <FaHtml5 size={28} />, color: '#E34F26' },
      { name: 'Framer Motion', icon: <SiFramer size={28} />, color: '#0055FF' },
    ]
  },
  {
    category: 'Backend',
    icon: <Server size={22} />,
    gradient: 'from-emerald-500 to-teal-500',
    glowColor: 'emerald',
    items: [
      { name: 'Node.js', icon: <FaNodeJs size={28} />, color: '#339933' },
      { name: 'Express.js', icon: <SiExpress size={28} />, color: '#64748b' },
      { name: 'NestJS', icon: <SiNestjs size={28} />, color: '#E0234E' },
      { name: 'REST APIs', icon: <Layout size={28} />, color: '#8B5CF6' },
      { name: 'JWT Auth', icon: <SiJsonwebtokens size={28} />, color: '#FB015B' },
    ]
  },
  {
    category: 'Database',
    icon: <Database size={22} />,
    gradient: 'from-violet-500 to-purple-500',
    glowColor: 'violet',
    items: [
      { name: 'MongoDB', icon: <SiMongodb size={28} />, color: '#47A248' },
      { name: 'MySQL', icon: <SiMysql size={28} />, color: '#4479A1' },
      { name: 'Mongoose', icon: <FaDatabase size={28} />, color: '#880000' },
    ]
  },
  {
    category: 'Tools & Others',
    icon: <Wrench size={22} />,
    gradient: 'from-amber-500 to-orange-500',
    glowColor: 'amber',
    items: [
      { name: 'Git / GitHub', icon: <FaGithub size={28} />, color: '#64748b' },
      { name: 'Postman', icon: <SiPostman size={28} />, color: '#FF6C37' },
      { name: 'Vite', icon: <SiVite size={28} />, color: '#646CFF' },
      { name: 'Responsive', icon: <FaCss3Alt size={28} />, color: '#2965F1' },
    ]
  }
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const skillItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, delay: i * 0.08 }
    })
  };

  return (
    <section id="skills" className="py-12 relative">
      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Technical <span className="text-cyan-400">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-600 dark:text-slate-400 max-w-lg mx-auto">
            Technologies & tools I use to bring ideas to life
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((skillGroup, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="group relative"
            >
              {/* Glow effect on hover */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${skillGroup.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-lg transition-all duration-500`}></div>
              
              <div className="relative bg-white/80 dark:bg-slate-800/50 backdrop-blur-lg border border-slate-200 dark:border-slate-700/50 rounded-2xl shadow-lg p-6 h-full transition-all duration-500 group-hover:border-transparent group-hover:shadow-xl overflow-hidden">
                
                {/* Subtle background pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
                  <div className={`w-full h-full bg-gradient-to-br ${skillGroup.gradient} rounded-full blur-2xl`}></div>
                </div>

                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-br ${skillGroup.gradient} text-white shadow-lg`}>
                    {skillGroup.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {skillGroup.category}
                  </h3>
                </div>

                {/* Divider */}
                <div className={`w-full h-px bg-gradient-to-r ${skillGroup.gradient} opacity-20 mb-6`}></div>

                {/* Skill items */}
                <div className="space-y-3">
                  {skillGroup.items.map((skill, i) => (
                    <motion.div
                      key={i}
                      custom={i}
                      variants={skillItemVariants}
                      whileHover={{ x: 4, scale: 1.02 }}
                      className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50/80 dark:bg-slate-900/30 border border-slate-100 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/10 hover:bg-white dark:hover:bg-slate-800/50 transition-all duration-300 group/item"
                    >
                      <div 
                        className="flex-shrink-0 transition-transform duration-300 group-hover/item:scale-110 group-hover/item:rotate-6"
                        style={{ color: skill.color }}
                      >
                        {skill.icon}
                      </div>
                      <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 group-hover/item:text-slate-900 dark:group-hover/item:text-white transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
