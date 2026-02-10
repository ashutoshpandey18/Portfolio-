'use client';

import { motion } from 'framer-motion';

interface MovingLineBackgroundProps {
  opacity?: number;
}

export default function MovingLineBackground({ opacity = 0.25 }: MovingLineBackgroundProps) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Moving line animation - extracted from capability-card-border */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `conic-gradient(
            from 0deg,
            transparent 0%,
            transparent 65%,
            rgba(59, 130, 246, 0.5) 82%,
            rgba(96, 165, 250, 0.3) 92%,
            transparent 100%
          )`,
          WebkitMask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          padding: '1px',
          opacity: opacity,
        }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  );
}
