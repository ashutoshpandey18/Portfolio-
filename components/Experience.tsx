'use client';

import Reveal from './Reveal';

export default function Experience() {
  const timeline = [
    {
      role: 'Product Engineer — AI & Systems',
      company: 'Independent / Freelance',
      period: '2025 — Present',
      current: true,
      description:
        'Building production-grade AI voice agents, SaaS platforms, and intelligent automation systems for clients and personal products.',
    },
    {
      role: 'Full-Stack Developer',
      company: 'UDAASH Platform',
      period: '2024 — 2025',
      current: false,
      description:
        'Architected and shipped the UDAASH job intelligence platform with AI match scoring, kanban workflows, and PWA support.',
    },
    {
      role: 'Backend & AI Engineer',
      company: 'Email Automation SaaS',
      period: '2024',
      current: false,
      description:
        'Built OCR-powered credential extraction pipeline with AI confidence scoring and admin approval workflows.',
    },
    {
      role: 'Systems Developer',
      company: 'Voice Agent Project',
      period: '2024',
      current: false,
      description:
        'Designed and deployed a conversational voice booking agent with state machine architecture and real-time slot management.',
    },
  ];

  return (
    <section id="experience" className="section-spacing">
      <div className="container-tight">
        <Reveal>
          <p className="text-xs font-medium tracking-widest uppercase text-accent mb-6">
            Experience
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold font-space tracking-tight mb-10">
            Timeline
          </h2>
        </Reveal>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />

          <div className="space-y-8">
            {timeline.map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="relative pl-8">
                  {/* Dot */}
                  <div
                    className={`absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-2 ${
                      item.current
                        ? 'border-accent bg-accent/20'
                        : 'border-border-hover bg-surface'
                    }`}
                  />

                  <div className="space-y-1.5">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <h3 className="text-base font-semibold text-white font-space">
                        {item.role}
                      </h3>
                      <span className="text-[11px] font-medium tracking-widest uppercase text-neutral-500">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-sm text-accent/80 font-medium">{item.company}</p>
                    <p className="text-sm text-neutral-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
      <div className="section-divider mt-20 md:mt-28" />
    </section>
  );
}
