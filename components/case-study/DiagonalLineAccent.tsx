'use client';

import { motion } from 'framer-motion';

export default function DiagonalLineAccent() {
  return (
    <div className="diagonal-line-accent">
      {/* Diagonal animated line */}
      <motion.div
        className="diagonal-line-primary"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Secondary subtle line for depth */}
      <motion.div
        className="diagonal-line-secondary"
        animate={{
          backgroundPosition: ['100% 100%', '0% 0%'],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  );
}
