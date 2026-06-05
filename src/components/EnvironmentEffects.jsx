import { motion, useScroll, useTransform } from 'framer-motion';

// --- Inline SVG Components ---

const Cloud = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.5 19c2.485 0 4.5-2.015 4.5-4.5 0-2.43-1.92-4.41-4.326-4.495A7.5 7.5 0 0 0 3.324 13.515 4.5 4.5 0 0 0 4.5 22h13z" opacity="0.8"/>
  </svg>
);

const Bird = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 14S7.5 9 12 11c4.5-2 8 3 8 3" />
  </svg>
);






export default function EnvironmentEffects({ theme }) {
  const { scrollYProgress } = useScroll();

  // Bird flying animations (translating horizontally and slightly vertically on scroll)
  const bird1X = useTransform(scrollYProgress, [0, 1], [-100, window.innerWidth + 100]);
  const bird1Y = useTransform(scrollYProgress, [0, 1], [100, -200]);
  
  const bird2X = useTransform(scrollYProgress, [0.2, 1], [-100, window.innerWidth + 50]);
  const bird2Y = useTransform(scrollYProgress, [0.2, 1], [300, 50]);



  if (theme !== 'light') return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      
      {/* 1. Moving Clouds Layer */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="flex w-[200vw] h-full animate-pan-clouds text-secondary/30">
          <div className="w-[100vw] relative h-full">
            <Cloud className="absolute top-[10%] left-[10%] w-32 h-32" />
            <Cloud className="absolute top-[25%] left-[40%] w-48 h-48" />
            <Cloud className="absolute top-[5%] left-[70%] w-24 h-24" />
            <Cloud className="absolute top-[35%] left-[85%] w-40 h-40" />
          </div>
          <div className="w-[100vw] relative h-full">
            <Cloud className="absolute top-[10%] left-[10%] w-32 h-32" />
            <Cloud className="absolute top-[25%] left-[40%] w-48 h-48" />
            <Cloud className="absolute top-[5%] left-[70%] w-24 h-24" />
            <Cloud className="absolute top-[35%] left-[85%] w-40 h-40" />
          </div>
        </div>
      </div>

      {/* 2. Scrolling Birds Layer */}
      <motion.div style={{ x: bird1X, y: bird1Y }} className="absolute left-0 top-[20%] text-primary/40 z-0">
        <Bird className="w-16 h-16" />
      </motion.div>
      <motion.div style={{ x: bird2X, y: bird2Y }} className="absolute left-0 top-[40%] text-secondary/40 z-0">
        <Bird className="w-12 h-12" />
      </motion.div>



    </div>
  );
}
