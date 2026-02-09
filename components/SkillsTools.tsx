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
      className="skill-chip group relative"
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
  const categories = [
    {
      label: 'Frontend',
      tools: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS'],
    },
    {
      label: 'Backend',
      tools: ['Node.js', 'NestJS', 'FastAPI', 'Express', 'Python'],
    },
    {
      label: 'Database',
      tools: ['PostgreSQL', 'MongoDB', 'Prisma', 'Redis'],
    },
    {
      label: 'AI / ML',
      tools: ['OpenAI', 'NLP', 'Tesseract OCR', 'LangChain'],
    },
    {
      label: 'DevOps',
      tools: ['Docker', 'AWS', 'CI/CD', 'Vercel', 'Git'],
    },
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

        <div className="space-y-6">
          {categories.map((cat, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                <span className="text-xs font-semibold tracking-widest uppercase text-neutral-500 sm:w-24 shrink-0">
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
      <AnimatedDivider className="mt-20 md:mt-28" />
    </section>
  );
}
