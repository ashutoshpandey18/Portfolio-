'use client';

import { motion } from 'framer-motion';
import ProfileOrb from './ProfileOrb';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as any, // easeOutExpo
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-surface">
      {/* Extremely clean, subtle background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.015)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 w-full relative z-10 py-20 lg:py-0">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 lg:gap-24 items-center">
          
          {/* Minimalist Intro Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8 text-left"
          >
            {/* Status indicator */}
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-2.5"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
              </span>
              <span className="text-[10px] font-space font-medium tracking-widest uppercase text-neutral-500">
                Available for projects
              </span>
            </motion.div>

            {/* Name and Tagline */}
            <div className="space-y-3">
              <motion.h1 
                variants={itemVariants}
                className="font-space text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white leading-tight"
              >
                Ashutosh Pandey
              </motion.h1>
              
              <motion.p 
                variants={itemVariants}
                className="text-xs font-space font-semibold tracking-widest uppercase text-blue-400"
              >
                Product Engineer — AI &amp; Systems
              </motion.p>
            </div>

            {/* Minimal Description */}
            <motion.p 
              variants={itemVariants}
              className="text-sm sm:text-base text-neutral-400 max-w-md leading-relaxed font-normal font-inter"
            >
              I build software. Usually end-to-end, always fast. Specializing in high-agency systems, canvas-level interfaces, and natural voice workflows.
            </motion.p>

            {/* Minimal actions */}
            <motion.div 
              variants={itemVariants}
              className="flex items-center gap-8 pt-2"
            >
              <a 
                href="#projects" 
                className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-blue-400 transition-colors duration-300 group"
              >
                <span>Explore projects</span>
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              
              <a 
                href="#contact" 
                className="text-sm font-medium text-neutral-400 hover:text-white transition-colors duration-300"
              >
                Get in touch
              </a>
            </motion.div>
          </motion.div>

          {/* Minimalist Profile Placement */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <ProfileOrb
              src="/Ashu.jpeg"
              alt="Ashutosh Pandey"
              size="w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] lg:w-[280px] lg:h-[280px]"
              githubStreakPercent={78}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
