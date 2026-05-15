import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Calendar, Award } from 'lucide-react';

const educationData = [
  {
    degree: 'Bachelor of Computer Application (BCA)',
    institution: 'Government College, Bikaner',
    duration: '2022 – Present',
    status: 'Pursuing',
    cgpa: '7.40 CGPA',
    icon: <GraduationCap size={28} />,
    color: 'cyan',
    highlights: ['Full Stack Web Development', 'Data Structures & Algorithms', 'Database Management', 'Software Engineering'],
  },
  {
    degree: 'Senior Secondary (12th – Commerce)',
    institution: 'Sr. Sec. School, Bikaner',
    duration: '2021 – 2022',
    status: 'Completed',
    cgpa: '72.40%',
    icon: <BookOpen size={28} />,
    color: 'blue',
    highlights: ['Accountancy', 'Business Studies', 'Economics', 'Mathematics'],
  },
];

const colorMap = {
  cyan: {
    bg: 'bg-cyan-100 dark:bg-cyan-500/10',
    text: 'text-cyan-600 dark:text-cyan-400',
    border: 'border-cyan-400/40',
    badge: 'bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-500/20',
    dot: 'bg-cyan-500',
    line: 'from-cyan-500 to-blue-500',
    pill: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400',
  },
  blue: {
    bg: 'bg-blue-100 dark:bg-blue-500/10',
    text: 'text-blue-600 dark:text-blue-400',
    border: 'border-blue-400/40',
    badge: 'bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-500/20',
    dot: 'bg-blue-500',
    line: 'from-blue-500 to-purple-500',
    pill: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
  },
};

export default function Education() {
  return (
    <section id="education" className="py-20 relative">
      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            My <span className="text-cyan-400">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mb-4" />
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-sm md:text-base">
            My academic background that shaped my technical foundation and problem-solving mindset.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/50 via-blue-500/30 to-transparent hidden sm:block" />

          <div className="space-y-10">
            {educationData.map((edu, index) => {
              const c = colorMap[edu.color];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 md:gap-10 items-start md:items-center`}
                >
                  {/* Timeline dot */}
                  <div className={`hidden sm:flex absolute left-6 md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full ${c.dot} border-4 border-white dark:border-slate-950 shadow-lg z-10`} />

                  {/* Card */}
                  <div className={`flex-1 ml-10 sm:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className={`bg-white/80 dark:bg-slate-800/50 backdrop-blur-lg border ${c.border} dark:border-slate-700/50 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 group`}>
                      
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`p-3 ${c.bg} ${c.text} rounded-xl group-hover:scale-110 transition-transform`}>
                          {edu.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${c.badge}`}>
                              {edu.status}
                            </span>
                            <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                              <Calendar size={11} /> {edu.duration}
                            </span>
                          </div>
                          <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
                            {edu.degree}
                          </h3>
                          <p className={`text-sm font-medium ${c.text} mt-0.5`}>{edu.institution}</p>
                        </div>
                      </div>

                      {/* CGPA badge */}
                      <div className="flex items-center gap-2 mb-4">
                        <Award size={15} className={c.text} />
                        <span className={`text-sm font-semibold ${c.text}`}>{edu.cgpa}</span>
                      </div>

                      {/* Highlights */}
                      <div className="flex flex-wrap gap-2">
                        {edu.highlights.map((h) => (
                          <span key={h} className={`text-xs px-2.5 py-1 rounded-full ${c.pill} font-medium`}>
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
