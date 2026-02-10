'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import DiagonalLineAccent from './DiagonalLineAccent';

interface SectionBlockProps {
  id: string;
  title: string;
  children: ReactNode;
}

export default function SectionBlock({ id, title, children }: SectionBlockProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className="mb-20 scroll-mt-24"
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-white tracking-tight">
        {title}
      </h2>

      {/* Content block with diagonal line accent */}
      <div className="case-study-section-block">
        <DiagonalLineAccent />

        {/* Content above animation */}
        <div className="relative z-10 prose prose-invert prose-lg max-w-none">
          {children}
        </div>
      </div>
    </motion.section>
  );
}
