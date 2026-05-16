import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FolderGit2, Code2, Coffee, Star } from 'lucide-react';

const stats = [
  { label: 'Projects Built', value: 5, suffix: '+', icon: <FolderGit2 size={28} />, color: 'text-cyan-500', bg: 'bg-cyan-500/10' },
  { label: 'Technologies', value: 12, suffix: '+', icon: <Code2 size={28} />, color: 'text-blue-500', bg: 'bg-blue-500/10' },
  { label: 'Cups of Coffee', value: 300, suffix: '+', icon: <Coffee size={28} />, color: 'text-amber-500', bg: 'bg-amber-500/10' },
  { label: 'GitHub Stars', value: 10, suffix: '+', icon: <Star size={28} />, color: 'text-purple-500', bg: 'bg-purple-500/10' },
];

function Counter({ value, suffix, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = Math.ceil(value / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function StatsCounter() {
  return (
    <section className="py-10 md:py-16 relative">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-lg border border-slate-200 dark:border-slate-700/50 rounded-2xl p-4 md:p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className={`${stat.bg} ${stat.color} p-3 rounded-xl mb-4 group-hover:scale-110 transition-transform`}>
                {stat.icon}
              </div>
              <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-1`}>
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
