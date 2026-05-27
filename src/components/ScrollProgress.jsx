import { motion, useScroll } from 'framer-motion'
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  return <motion.div style={{ scaleX: scrollYProgress }} className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[60] bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-pink" />
}
