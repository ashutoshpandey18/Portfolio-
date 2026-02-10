'use client';

import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  // Reusing exact GlowBlob animation logic from Capabilities section
  const createGlowBlob = (
    initialX: string,
    initialY: string,
    color: string,
    duration: number,
    delay: number = 0
  ) => {
    return (
      <motion.div
        className="absolute inset-0 pointer-events-none overflow-hidden opacity-60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 0.8, delay }}
      >
        <motion.div
          className="absolute w-[200%] h-full left-[-50%]"
          style={{
            top: initialY,
            left: initialX,
          }}
          animate={{
            x: ['0%', '8%', '-8%', '0%'],
            y: ['0%', '-5%', '5%', '0%'],
            scale: [1, 1.05, 0.95, 1],
          }}
          transition={{
            duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div
            className="absolute top-1/2 left-1/2 w-64 h-64 -translate-x-1/2 -translate-y-1/2 blur-3xl rounded-full"
            style={{
              background: color,
            }}
          />
        </motion.div>
      </motion.div>
    );
  };

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base gradient layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface to-surface-raised" />

      {/* Multiple animated glow blobs - exact same pattern as capability cards */}
      {createGlowBlob(
        '25%',
        '20%',
        'radial-gradient(circle, rgba(99, 102, 241, 0.06) 0%, transparent 70%)',
        10,
        0
      )}
      {createGlowBlob(
        '60%',
        '40%',
        'radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%)',
        12,
        0.3
      )}
      {createGlowBlob(
        '40%',
        '65%',
        'radial-gradient(circle, rgba(139, 92, 246, 0.055) 0%, transparent 70%)',
        14,
        0.6
      )}
    </div>
  );
}
