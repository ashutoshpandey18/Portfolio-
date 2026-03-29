'use client';

import Reveal from './Reveal';
import AnimatedDivider from './AnimatedDivider';
import GlowBlob from './GlowBlob';
import GridBackground from './GridBackground';

export default function Experience() {
  const timeline = [
    {
      role: 'Software Engineer',
      company: 'DentalScan | Florida, United States',
      logo: '/logo/dentalscan.png',
      period: 'Dec 2025 — Mar 2026',
      current: false,
      description:
        'Owned backend services for dental scan processing workflows, improving system reliability • Investigated inconsistencies in patient scan data pipelines across distributed backend and ML systems • Debugged production issues and improved stability of distributed services handling critical data',
    },
    {
      role: 'Full-Stack Engineer Intern',
      company: 'Arinova Studio | Lucknow, Uttar Pradesh',
      logo: '/Companyexp-logos/arinova.webp',
      period: 'Oct 2025 — Nov 2025',
      current: false,
      description:
        'Built rate-limiting middleware protecting 8+ API endpoints, blocking 2,000+ malicious requests/day • Implemented real-time communication using WebSockets and configured secure CORS policies • Designed authentication using NextAuth and Google OAuth for 500+ users • Reduced authentication errors by 40% and improved API consistency across 12+ endpoints',
    },
  ];

  return (
    <section id="experience" className="section-spacing relative overflow-x-clip">
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

        <div className="relative mx-auto w-full max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-5xl">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />

          <div className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-8 xl:space-y-9">
            {timeline.map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="relative w-full pl-8 sm:pl-9 md:pl-10">
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
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-3 md:gap-4">
                        <div className="flex min-w-0 items-start gap-3">
                          <img
                            src={item.logo}
                            alt={`${item.company} Logo`}
                            className="h-9 w-9 sm:h-10 sm:w-10 rounded-md object-contain shrink-0"
                          />
                          <div className="min-w-0">
                            <h3 className="text-base font-semibold text-white font-space">
                              {item.role}
                            </h3>
                            <p className="text-sm text-accent/80 font-medium">{item.company}</p>
                          </div>
                        </div>
                        <span className="text-[11px] font-medium tracking-widest uppercase text-neutral-500 shrink-0 sm:text-right">
                          {item.period}
                        </span>
                      </div>
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
