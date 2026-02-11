'use client';

import { motion, useReducedMotion } from 'framer-motion';
import AnimatedDivider from './AnimatedDivider';
import { GitBranch, Rocket, Layers, BrainCircuit, ArrowUpRight } from 'lucide-react';

const shippingSignals = [
  {
    icon: GitBranch,
    title: 'Active Public Repositories',
    description: 'Clean codebases, structured commits, and maintained projects',
  },
  {
    icon: Rocket,
    title: 'Production Deployments',
    description: 'Systems deployed on Vercel, Railway, and cloud platforms',
  },
  {
    icon: Layers,
    title: 'Full-Stack Systems',
    description: 'Backend APIs, auth, databases, and frontend apps shipped',
  },
  {
    icon: BrainCircuit,
    title: 'AI + Voice Systems',
    description: 'Real AI, OCR, and voice agents — not demo-only builds',
  },
];

export default function GitHubActivity() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  return (
    <section id="github" className="section-spacing">
      <div className="container-tight">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={itemVariants}
          className="mb-10"
        >
          <p className="text-xs font-medium tracking-widest uppercase text-accent mb-3">
            GITHUB CONTRIBUTIONS
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold font-space tracking-tight mb-4">
            Consistent coding &amp; shipping systems.
          </h2>
          <p className="text-neutral-400 text-base max-w-2xl">
            I focus on continuous building, production systems, and real-world deployments — not vanity metrics.
          </p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
          className="group relative rounded-xl bg-surface-raised border border-border p-6 sm:p-8 lg:p-10 overflow-hidden transition-all duration-300 hover:scale-[1.01]"
          style={{
            boxShadow: '0 0 0 1px rgba(59, 130, 246, 0.1)',
          }}
        >
          {/* Subtle background gradient */}
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <div
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(96, 165, 250, 0.06) 0%, transparent 50%)',
              }}
            />
          </div>

          {/* Animated border glow on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div
              className="absolute inset-0 rounded-xl"
              style={{
                background:
                  'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.3), transparent)',
                animation: 'sweep 3s linear infinite',
              }}
            />
          </div>

          {/* Shipping Signals Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10"
          >
            {shippingSignals.map((signal, index) => {
              const Icon = signal.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group/card relative"
                >
                  <div className="flex flex-col gap-3">
                    {/* Icon */}
                    <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center transition-all duration-300 group-hover/card:bg-accent/20 group-hover/card:border-accent/40 group-hover/card:scale-110">
                      <Icon size={20} className="text-accent" strokeWidth={2} />
                    </div>

                    {/* Title */}
                    <h3 className="text-sm font-semibold text-white leading-tight">
                      {signal.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {signal.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div variants={itemVariants} className="mt-10 text-center relative z-10">
            <a
              href="https://github.com/ashutoshpandey18"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-surface-overlay hover:bg-accent/10 border border-border-hover hover:border-accent/40 text-neutral-300 hover:text-white text-sm font-medium rounded-lg transition-all duration-300 group/btn"
            >
              View GitHub Profile
              <ArrowUpRight
                size={16}
                strokeWidth={2.5}
                className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
              />
            </a>
          </motion.div>
        </motion.div>
      </div>
      <AnimatedDivider className="mt-20 md:mt-28" />

      {/* Sweep animation keyframes */}
      <style jsx>{`
        @keyframes sweep {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          @keyframes sweep {
            0%,
            100% {
              transform: translateX(0);
            }
          }
        }
      `}</style>
    </section>
  );
}
