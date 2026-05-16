import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    type: 'education',
    title: 'Bachelor of Computer Applications (BCA)',
    organization: 'University',
    location: 'Bikaner, Rajasthan',
    period: '2023 - Present',
    description: 'Currently pursuing BCA with focus on web development, data structures, and modern software engineering practices.',
    skills: ['DSA', 'Web Dev', 'DBMS', 'OOP'],
  },
  {
    type: 'work',
    title: 'Full Stack Developer',
    organization: 'Freelance / Self Projects',
    location: 'Remote',
    period: '2024 - Present',
    description: 'Building modern full-stack web applications using the MERN stack. Developed service booking platforms, task managers, and portfolio websites with premium UI/UX.',
    skills: ['React', 'Node.js', 'MongoDB', 'Express'],
  },
  {
    type: 'education',
    title: 'Higher Secondary (12th)',
    organization: 'Senior Secondary School',
    location: 'Bikaner, Rajasthan',
    period: '2021 - 2023',
    description: 'Completed higher secondary education with a focus on science and mathematics, building a strong analytical foundation.',
    skills: ['Mathematics', 'Science', 'Computer Science'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-12 md:py-20 relative">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            My <span className="text-cyan-400">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
          <p className="mt-6 text-slate-600 dark:text-slate-400 max-w-lg mx-auto text-sm md:text-base">
            A timeline of my educational background and professional experience that shaped my skills.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">

          {/* Center Line — hidden on mobile, left-side on sm, center on md */}
          <div className="absolute left-5 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 opacity-30" />

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className={`relative flex mb-10 last:mb-0 ${
                // On md+ alternate sides; on mobile always left-aligned
                idx % 2 === 0
                  ? 'md:flex-row'
                  : 'md:flex-row-reverse'
              } md:items-center`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-5 md:left-1/2 -translate-x-1/2 z-20 flex-shrink-0">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center border-4 border-slate-50 dark:border-slate-950 shadow-lg ${
                  exp.type === 'education'
                    ? 'bg-gradient-to-br from-blue-500 to-purple-600'
                    : 'bg-gradient-to-br from-cyan-500 to-blue-600'
                }`}>
                  {exp.type === 'education'
                    ? <GraduationCap size={14} className="text-white" />
                    : <Briefcase size={14} className="text-white" />
                  }
                </div>
              </div>

              {/* Content Card — full width on mobile, half on md */}
              <div className={`
                w-full ml-16 
                md:ml-0 md:w-[calc(50%-2.5rem)] 
                ${idx % 2 === 0 ? 'md:pr-10' : 'md:pl-10'}
              `}>
                <div className="group bg-white/80 dark:bg-slate-800/50 backdrop-blur-lg border border-slate-200 dark:border-slate-700/50 shadow-md rounded-2xl p-5 hover:border-cyan-400/50 dark:hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg">

                  {/* Type Badge */}
                  <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold mb-3 ${
                    exp.type === 'education'
                      ? 'bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400'
                      : 'bg-cyan-50 text-cyan-600 dark:bg-cyan-500/10 dark:text-cyan-400'
                  }`}>
                    {exp.type === 'education' ? <GraduationCap size={11} /> : <Briefcase size={11} />}
                    {exp.type === 'education' ? 'Education' : 'Experience'}
                  </div>

                  <h3 className="text-base md:text-xl font-bold text-slate-900 dark:text-white mb-1 leading-snug">
                    {exp.title}
                  </h3>
                  <p className="text-cyan-600 dark:text-cyan-400 font-medium text-sm mb-2">
                    {exp.organization}
                  </p>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-slate-500 dark:text-slate-400 text-xs mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={11} /> {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={11} /> {exp.location}
                    </span>
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Skill Tags — wrap properly */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600/30 whitespace-nowrap"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Spacer for opposite side on desktop */}
              <div className="hidden md:block md:w-[calc(50%-2.5rem)]" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
