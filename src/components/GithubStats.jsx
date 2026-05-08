import { GitHubCalendar } from 'react-github-calendar';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

export default function GithubStats() {
  const { theme } = useTheme();
  
  // Custom theme colors for the calendar
  const customTheme = {
    light: ['#f1f5f9', '#cffafe', '#67e8f9', '#06b6d4', '#0891b2'],
    dark: ['#1e293b', '#164e63', '#0891b2', '#06b6d4', '#22d3ee'],
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-20 flex flex-col items-center"
    >
      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
        Days I <span className="text-cyan-500 dark:text-cyan-400">Code</span>
      </h3>
      
      <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-lg border border-slate-200 dark:border-slate-700/50 rounded-3xl p-6 md:p-10 shadow-xl overflow-x-auto w-full max-w-5xl flex justify-center">
        <GitHubCalendar 
          username="jeeshanabbasi" 
          colorScheme={theme}
          theme={customTheme}
          fontSize={14}
          blockSize={12}
          blockMargin={4}
        />
      </div>
    </motion.div>
  );
}
