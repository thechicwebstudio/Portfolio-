'use client';
import { motion, MotionValue, useTransform } from 'framer-motion';

export default function Overlay({ progress }: { progress: MotionValue<number> }) {
  // Section 1: 0% to 25% (fade out after)
  const opacity1 = useTransform(progress, [0, 0.15, 0.25], [1, 1, 0]);
  const y1 = useTransform(progress, [0, 0.25], [0, -100]);

  // Section 2: 25% to 55%
  const opacity2 = useTransform(progress, [0.2, 0.3, 0.45, 0.55], [0, 1, 1, 0]);
  const y2 = useTransform(progress, [0.2, 0.55], [100, -100]);

  // Section 3: 55% to 90%
  const opacity3 = useTransform(progress, [0.5, 0.6, 0.8, 0.9], [0, 1, 1, 0]);
  const y3 = useTransform(progress, [0.5, 0.9], [100, -100]);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none w-full h-full flex flex-col justify-center">
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute w-full flex justify-center items-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-center tracking-tight text-glow drop-shadow-2xl">
          Favour Egbokhan.<br />
          <span className="text-white/70 font-light text-4xl md:text-6xl mt-4 block">UI/UX & Visual Designer.</span>
        </h1>
      </motion.div>

      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute left-[10%] md:left-[15%] max-w-lg"
      >
        <h2 className="text-4xl md:text-6xl font-medium leading-tight text-glow drop-shadow-2xl">
          I design scalable, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-amber-300">responsive interfaces.</span>
        </h2>
      </motion.div>

      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute right-[10%] md:right-[15%] max-w-lg text-right"
      >
        <h2 className="text-4xl md:text-6xl font-medium leading-tight text-glow drop-shadow-2xl">
          Bridging <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-rose-400">usability</span> <br />
          and aesthetic brilliance.
        </h2>
      </motion.div>
    </div>
  );
}
