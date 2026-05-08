import MarqueePkg from 'react-fast-marquee';
import { useTheme } from '../context/ThemeContext';
import { FaReact, FaNodeJs, FaGithub, FaHtml5 } from 'react-icons/fa';
import { SiMongodb, SiNextdotjs, SiVite, SiTailwindcss, SiExpress, SiNestjs } from 'react-icons/si';

export default function TechMarquee() {
  const { theme } = useTheme();
  
  // Handle Vite's CJS to ESM import resolution for this specific package
  const Marquee = MarqueePkg.default || MarqueePkg;
  
  const techStack = [
    { name: "Git & GitHub", icon: <FaGithub size={40} />, color: "text-slate-800 dark:text-white" },
    { name: "HTML5", icon: <FaHtml5 size={40} />, color: "text-[#E34F26]" },
    { name: "React", icon: <FaReact size={40} />, color: "text-[#61DAFB]" },
    { name: "Next.js", icon: <SiNextdotjs size={40} />, color: "text-slate-900 dark:text-white" },
    { name: "Vite", icon: <SiVite size={40} />, color: "text-[#646CFF]" },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={40} />, color: "text-[#06B6D4]" },
    { name: "Node.js", icon: <FaNodeJs size={40} />, color: "text-[#339933]" },
    { name: "Express.js", icon: <SiExpress size={40} />, color: "text-slate-900 dark:text-white" },
    { name: "NestJS", icon: <SiNestjs size={40} />, color: "text-[#E0234E]" },
    { name: "MongoDB", icon: <SiMongodb size={40} />, color: "text-[#47A248]" }
  ];

  return (
    <div className="w-full max-w-[1920px] mx-auto py-8 border-y border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-slate-900/20 backdrop-blur-sm overflow-hidden z-20 relative">
      <Marquee 
        gradient={true} 
        gradientColor={theme === 'dark' ? [2, 6, 23] : [248, 250, 252]} 
        speed={40}
        autoFill={true}
      >
        {techStack.map((tech, index) => (
          <div 
            key={index} 
            className="mx-6 md:mx-8 flex flex-col items-center justify-center gap-3 hover:-translate-y-2 transition-transform duration-300 w-24 group"
          >
            <div className={`${tech.color} drop-shadow-sm group-hover:drop-shadow-md transition-all`}>
              {tech.icon}
            </div>
            <span className="text-xs md:text-sm font-semibold text-slate-500 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-white transition-colors whitespace-nowrap">
              {tech.name}
            </span>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
