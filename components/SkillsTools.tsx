'use client';

import { useRef, useState } from 'react';
import Reveal from './Reveal';
import AnimatedDivider from './AnimatedDivider';
import GridBackground from './GridBackground';
import { useCursorSpotlight } from '@/hooks/useCursorSpotlight';

function SkillChip({ children }: { children: string }) {
  const chipRef = useRef<HTMLSpanElement>(null);
  const spotlight = useCursorSpotlight(chipRef);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span
      ref={chipRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`skill-chip group relative transition-transform duration-200 ${
        isHovered ? 'scale-[1.02] shadow-[0_0_18px_rgba(59,130,246,0.18)]' : ''
      }`}
      style={
        {
          '--spotlight-x': `${spotlight?.x ?? 50}%`,
          '--spotlight-y': `${spotlight?.y ?? 50}%`,
          '--spotlight-opacity': spotlight?.opacity ?? 0,
        } as React.CSSProperties
      }
    >
      {/* Light sweep animation */}
      <span className="skill-chip-sweep" />

      {/* Cursor spotlight */}
      <span className="skill-chip-spotlight" />

      {/* Border sheen */}
      <span className="skill-chip-sheen" />

      {/* Content */}
      <span className="relative z-10">{children}</span>
    </span>
  );
}

export default function SkillsTools() {
  const coreExpertise = [
    {
      label: 'Backend Systems',
      tools: ['Node.js', 'Express', 'NestJS'],
    },
    {
      label: 'Full-Stack Apps',
      tools: ['Next.js'],
    },
    {
      label: 'API Design',
      tools: ['REST', 'WebSockets'],
    },
    {
      label: 'Database Design',
      tools: ['PostgreSQL', 'MongoDB'],
    },
    {
      label: 'Auth & Security',
      tools: ['JWT', 'OAuth2', 'RBAC'],
    },
  ];

  const technologies = [
    {
      label: 'Languages',
      tools: ['JavaScript', 'TypeScript'],
    },
    {
      label: 'Frontend',
      tools: ['React.js', 'Next.js', 'Tailwind CSS'],
    },
    {
      label: 'Backend',
      tools: ['Node.js', 'Express', 'NestJS'],
    },
    {
      label: 'Databases',
      tools: ['PostgreSQL', 'MongoDB'],
    },
    {
      label: 'Tools',
      tools: ['Git', 'GitHub', 'Vercel', 'Railway'],
    },
  ];

  const appliedConcepts = [
    'Built SSR/SSG apps using Next.js',
    'Designed secure auth systems using JWT & RBAC',
    'Implemented real-time features using WebSockets',
    'Built scalable APIs with rate limiting',
    'Integrated OCR/NLP features',
  ];

  return (
    <section id="skills" className="section-spacing relative">
      <GridBackground />
      <div className="container-tight relative z-10">
        <Reveal>
          <p className="text-xs font-medium tracking-widest uppercase text-accent mb-6">
            Tech Stack
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold font-space tracking-tight mb-10">
            Skills &amp; Tools
          </h2>
        </Reveal>

        <div className="space-y-8">
          <Reveal>
            <div className="space-y-4">
              <h3 className="text-base sm:text-lg font-bold font-space tracking-tight text-white">
                Core Expertise
              </h3>
              <div className="space-y-4">
                {coreExpertise.map((cat, i) => (
                  <Reveal key={i} delay={i * 0.06}>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                      <span className="text-xs font-semibold tracking-widest uppercase text-neutral-500 sm:w-36 shrink-0">
                        {cat.label}
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {cat.tools.map((tool, j) => (
                          <SkillChip key={j}>{tool}</SkillChip>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="space-y-4">
              <h3 className="text-base sm:text-lg font-bold font-space tracking-tight text-white">
                Technologies
              </h3>
              <div className="space-y-4">
                {technologies.map((cat, i) => (
                  <Reveal key={i} delay={i * 0.06}>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                      <span className="text-xs font-semibold tracking-widest uppercase text-neutral-500 sm:w-28 shrink-0">
                        {cat.label}
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {cat.tools.map((tool, j) => (
                          <SkillChip key={j}>{tool}</SkillChip>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="space-y-4">
              <h3 className="text-base sm:text-lg font-bold font-space tracking-tight text-white">
                Concepts I&apos;ve Applied
              </h3>
              <div className="flex flex-wrap gap-2">
                {appliedConcepts.map((concept, i) => (
                  <Reveal key={i} delay={i * 0.06}>
                    <SkillChip>{concept}</SkillChip>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>

        </div>
      </div>
      <AnimatedDivider className="mt-20 md:mt-28" />
    </section>
  );
}
