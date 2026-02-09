'use client';

import { motion } from 'framer-motion';

interface GlowBlobProps {
  delay?: number;
  color?: 'blue' | 'indigo' | 'purple';
}

export default function GlowBlob({ delay = 0, color = 'blue' }: GlowBlobProps) {
  const colorMap = {
    blue: 'rgba(59, 130, 246, 0.08)',
    indigo: 'rgba(99, 102, 241, 0.1)',
    purple: 'rgba(139, 92, 246, 0.09)',
  };

  return (
    <motion.div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
    >
      <motion.div
        className="absolute w-[200%] h-full left-[-50%]"
        animate={{
          x: ['0%', '8%', '-8%', '0%'],
          y: ['0%', '-5%', '5%', '0%'],
          scale: [1, 1.05, 0.95, 1],
        }}
        transition={{
          duration: 10 + delay * 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 -translate-x-1/2 -translate-y-1/2 blur-3xl rounded-full"
          style={{
            background: `radial-gradient(circle, ${colorMap[color]} 0%, transparent 70%)`,
          }}
        />
      </motion.div>
    </motion.div>
  );
}
