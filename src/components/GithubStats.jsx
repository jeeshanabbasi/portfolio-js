import { cloneElement } from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import { GitFork, Star, GitCommitHorizontal, Users } from 'lucide-react';

export default function GithubStats() {
  const { theme } = useTheme();

  const customTheme = {
    light: ['#f1f5f9', '#cffafe', '#67e8f9', '#06b6d4', '#0891b2'],
    dark: ['#1e293b', '#164e63', '#0891b2', '#06b6d4', '#22d3ee'],
  };

  const githubCards = [
    { label: 'Repositories', value: '10+', icon: <GitFork size={20} />, color: 'text-cyan-500', bg: 'bg-cyan-500/10' },
    { label: 'Total Commits', value: '41+', icon: <GitCommitHorizontal size={20} />, color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { label: 'GitHub Stars', value: '5+', icon: <Star size={20} />, color: 'text-amber-500', bg: 'bg-amber-500/10' },
    { label: 'Followers', value: '3+', icon: <Users size={20} />, color: 'text-purple-500', bg: 'bg-purple-500/10' },
  ];

  return (
    <section className="py-6 md:py-20 relative z-10">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-12">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            GitHub <span className="text-cyan-400">Activity</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mb-4" />
          <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base max-w-md mx-auto">
            My open source contributions and coding activity over the last year.
          </p>
        </motion.div>

        {/* Mini stat cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 mb-5 md:mb-10"
        >
          {githubCards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-lg border border-slate-200 dark:border-slate-700/50 rounded-xl md:rounded-2xl p-3 md:p-4 flex flex-col items-center text-center shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 group"
            >
              <div className={`${card.bg} ${card.color} p-2 md:p-2.5 rounded-lg md:rounded-xl mb-1.5 md:mb-2 group-hover:scale-110 transition-transform`}>
                {cloneElement(card.icon, { className: "w-4 h-4 md:w-5 md:h-5" })}
              </div>
              <div className={`text-lg md:text-2xl font-bold ${card.color}`}>{card.value}</div>
              <p className="text-slate-500 dark:text-slate-400 text-[10px] md:text-xs font-medium mt-0.5">{card.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* GitHub Calendar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-lg border border-slate-200 dark:border-slate-700/50 rounded-xl md:rounded-3xl p-4 md:p-8 shadow-xl overflow-x-auto no-scrollbar"
        >
          <p className="text-xs text-slate-400 dark:text-slate-500 mb-4 font-medium text-center">
            Contribution graph — jeeshanabbasi
          </p>
          <div className="flex justify-start md:justify-center min-w-[700px] md:min-w-0 pb-2">
            <GitHubCalendar
              username="jeeshanabbasi"
              colorScheme={theme}
              theme={customTheme}
              fontSize={12}
              blockSize={11}
              blockMargin={4}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
