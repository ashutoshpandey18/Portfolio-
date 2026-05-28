'use client';

import { useRef, useState } from 'react';
import Reveal from './Reveal';
import AnimatedDivider from './AnimatedDivider';
import GridBackground from './GridBackground';
import { useCursorSpotlight } from '@/hooks/useCursorSpotlight';
import { IconType } from 'react-icons';
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiSocketdotio,
  SiPostgresql,
  SiMongodb,
  SiSupabase,
  SiPrisma,
  SiGit,
  SiGithub,
  SiVercel,
} from 'react-icons/si';

interface SkillItem {
  name: string;
  icon: IconType;
  category: string;
}

function SymbolCard({ skill }: { skill: SkillItem }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const spotlight = useCursorSpotlight(cardRef);
  const [isHovered, setIsHovered] = useState(false);
  const Icon = skill.icon;

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col items-center justify-center p-6 rounded-xl border border-white/5 bg-white/[0.01] hover:border-blue-500/30 hover:scale-[1.03] transition-all duration-300 ease-out cursor-default"
      style={
        {
          '--spotlight-x': `${spotlight?.x ?? 50}px`,
          '--spotlight-y': `${spotlight?.y ?? 50}px`,
          '--spotlight-opacity': spotlight?.opacity ?? 0,
        } as React.CSSProperties
      }
    >
      {/* Background glow on hover */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"
        style={{
          background: `radial-gradient(100px circle at var(--spotlight-x) var(--spotlight-y), rgba(59, 130, 246, 0.08), transparent 80%)`,
        }}
      />

      {/* Icon display */}
      <div className="relative z-10 text-neutral-500 group-hover:text-white transition-all duration-300 ease-out group-hover:scale-105 group-hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.2)]">
        <Icon size={32} />
      </div>

      {/* Understated minimal label */}
      <span className="relative z-10 text-[10px] font-space font-medium tracking-widest text-neutral-500 group-hover:text-neutral-300 transition-colors duration-300 uppercase mt-4">
        {skill.name}
      </span>
    </div>
  );
}

export default function SkillsTools() {
  const skills: SkillItem[] = [
    // Languages
    { name: 'JavaScript', icon: SiJavascript, category: 'Languages' },
    { name: 'TypeScript', icon: SiTypescript, category: 'Languages' },
    
    // Frontend
    { name: 'React', icon: SiReact, category: 'Frontend' },
    { name: 'Next.js', icon: SiNextdotjs, category: 'Frontend' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, category: 'Frontend' },
    
    // Backend
    { name: 'Node.js', icon: SiNodedotjs, category: 'Backend' },
    { name: 'Express', icon: SiExpress, category: 'Backend' },
    { name: 'NestJS', icon: SiNestjs, category: 'Backend' },
    { name: 'WebSockets', icon: SiSocketdotio, category: 'Backend' },
    
    // Databases
    { name: 'PostgreSQL', icon: SiPostgresql, category: 'Databases' },
    { name: 'MongoDB', icon: SiMongodb, category: 'Databases' },
    { name: 'Supabase', icon: SiSupabase, category: 'Databases' },
    { name: 'Prisma', icon: SiPrisma, category: 'Databases' },
    
    // Tools
    { name: 'Git', icon: SiGit, category: 'Tools' },
    { name: 'GitHub', icon: SiGithub, category: 'Tools' },
    { name: 'Vercel', icon: SiVercel, category: 'Tools' },
  ];

  const categories = ['Languages', 'Frontend', 'Backend', 'Databases', 'Tools'];

  return (
    <section id="skills" className="section-spacing relative overflow-hidden bg-surface">
      <GridBackground />
      
      <div className="container-tight relative z-10">
        <Reveal>
          <div className="space-y-3 mb-16 text-left">
            <p className="text-[11px] font-medium tracking-widest uppercase text-neutral-400">
              Stack &amp; Ecosystem
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold font-space tracking-tight text-white">
              Skills &amp; Tools
            </h2>
            <p className="text-neutral-500 text-sm max-w-md leading-relaxed font-inter">
              A curated selection of technical languages, modern frameworks, data structures, and developer utilities I leverage daily.
            </p>
          </div>
        </Reveal>

        <div className="space-y-12">
          {categories.map((cat, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="space-y-4">
                {/* Minimalist category line label */}
                <div className="flex items-center gap-4">
                  <span className="text-[11px] font-semibold tracking-widest uppercase text-neutral-500 font-space">
                    {cat}
                  </span>
                  <div className="h-px flex-1 bg-white/5" />
                </div>

                {/* Symbols grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
                  {skills
                    .filter((s) => s.category === cat)
                    .map((skill, j) => (
                      <SymbolCard key={j} skill={skill} />
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
