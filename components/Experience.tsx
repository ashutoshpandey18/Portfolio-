'use client';

import Reveal from './Reveal';
import AnimatedDivider from './AnimatedDivider';
import GlowBlob from './GlowBlob';
import GridBackground from './GridBackground';

export default function Experience() {
  const timeline = [
    {
      role: 'Full Stack Engineer — Personal Product Experience',
      company: 'Independent Systems & SaaS Builds',
      period: '2025 — Present',
      current: true,
      description:
        'Built production-grade AI voice booking system with state-machine dialogue and admin analytics. Developed SaaS verification platform using OCR, JWT auth, RBAC, and audit logging. Engineered rule-based NLP and automation pipelines without paid AI APIs. Designed and deployed full-stack systems with dashboards and real user workflows. Shipped MERN and NestJS applications with production deployment setups.',
      tech: 'MERN • NestJS • OCR • Voice AI • Auth • SaaS Systems',
    },
    {
      role: 'Full Stack Engineer — Intern',
      company: 'RD Group Of Industries — Web & App Development Agency',
      period: '2024',
      current: false,
      description:
        'Built rate-limiting middleware securing production APIs. Implemented OAuth authentication and secure session workflows. Integrated WebSockets for real-time updates. Improved API reliability and reduced authentication failures. Configured backend security and CORS protections.',
    },
    {
      role: 'Full Stack Developer — Freelance',
      company: 'Freelance Projects',
      period: '2024',
      current: false,
      description:
        'Delivered full-stack real estate platform with advanced search and admin dashboard. Built REST APIs and optimized database query performance. Implemented role-based access and secure media upload flows. Developed responsive frontend and production backend services. Supported client feature delivery and deployment.',
    },
  ];

  return (
    <section id="experience" className="section-spacing relative">
      <GridBackground />
      <div className="container-tight relative z-10">
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
                  {/* Background glow blob */}
                  <GlowBlob
                    delay={i * 0.15}
                    color={i === 0 ? 'indigo' : i === 1 ? 'blue' : 'purple'}
                  />

                  {/* Dot */}
                  <div
                    className={`absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-2 ${
                      item.current
                        ? 'border-accent bg-accent/20'
                        : 'border-border-hover bg-surface'
                    }`}
                  />

                  {/* Experience Card with Animated Border */}
                  <div className="experience-card">
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
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
      <AnimatedDivider className="mt-20 md:mt-28" />
    </section>
  );
}
