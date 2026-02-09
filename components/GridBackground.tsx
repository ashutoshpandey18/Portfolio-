'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function GridBackground() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute inset-0 tech-grid opacity-[0.04]"
        style={{ y }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
    </div>
  );
}
