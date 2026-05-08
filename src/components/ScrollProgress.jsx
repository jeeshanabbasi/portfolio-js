import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  
  // Add a spring physics to make the bar movement smoother
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-[100] bg-gradient-to-r from-cyan-400 to-blue-600 origin-left"
      style={{ scaleX }}
    />
  );
}
