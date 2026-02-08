'use client';

import { motion } from 'framer-motion';

export default function AnimatedDivider({ className = '' }: { className?: string }) {
  return (
    <motion.div
      className={`section-divider ${className}`}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      style={{ transformOrigin: 'left' }}
    />
  );
}
