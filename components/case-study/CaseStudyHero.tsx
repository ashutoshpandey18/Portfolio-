'use client';

import { motion } from 'framer-motion';
import TechStackPills from './TechStackPills';
import { ExternalLink, Github } from 'lucide-react';

interface CaseStudyHeroProps {
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  tag: string;
  date: string;
}

export default function CaseStudyHero({
  title,
  description,
  technologies,
  liveUrl,
  githubUrl,
  tag,
  date,
}: CaseStudyHeroProps) {
  return (
    <section className="relative pt-24 pb-16">
      <div className="max-w-[900px] mx-auto">
        {/* Meta Info */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="text-xs font-medium tracking-wide text-neutral-500">
            {date}
          </span>
          <span className="case-study-meta-divider" />
          <span className="case-study-meta-tag">
            {tag}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-4xl sm:text-5xl font-bold leading-tight mb-6 tracking-tight"
        >
          {title}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-lg text-neutral-400 leading-relaxed mb-12"
        >
          {description}
        </motion.p>

        {/* Tech Stack & Actions */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col sm:flex-row sm:items-center gap-6 pb-12 case-study-hero-divider"
        >
          <div className="flex flex-wrap gap-2">
            <TechStackPills technologies={technologies} variant="default" />
          </div>

          <div className="flex gap-3 sm:ml-auto">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="case-study-button-secondary"
              >
                <Github size={16} />
                Code
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="case-study-button-primary"
              >
                <ExternalLink size={16} />
                Demo
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
