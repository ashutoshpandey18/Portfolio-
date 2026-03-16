'use client';

import Reveal from './Reveal';
import AnimatedDivider from './AnimatedDivider';
import GlowBlob from './GlowBlob';
import GridBackground from './GridBackground';

export default function Experience() {
  const timeline = [
    {
      role: 'Software Engineer',
      company: 'DentalScan',
      logo: '/logo/dentalscan.png',
      period: 'Dec 2025 — Mar 2026',
      current: false,
      description:
        'Built and maintained backend systems supporting dental scan processing workflows • Collaborated with ML and backend teams to investigate scan data inconsistencies • Debugged production issues and improved reliability of internal services',
    },
    {
      role: 'Software Engineer',
      company: 'Momentum Labs',
      logo: '/logo/momentum-labs.png',
      period: 'Sep 2025 — Nov 2025',
      current: false,
      description:
        'Contributed to backend product features and internal service architecture • Assisted in API development and debugging workflows • Collaborated with engineers to build internal tools and integrations',
    },
    {
      role: 'Full Stack Engineer Intern',
      company: 'RD Group Of Industries',
      logo: '/logo/rd-industries.png',
      period: 'Jun 2025 — Aug 2025',
      current: false,
      description:
        'Built rate limiting middleware protecting 8+ API endpoints • Configured CORS policies and integrated WebSockets for real time updates • Implemented secure authentication using NextAuth with Google OAuth • Improved API reliability and reduced authentication errors',
    },
    {
      role: 'Full Stack Developer (Freelance)',
      company: 'Ayush Realtors',
      logo: '/logo/ayush-realtors.png',
      period: '2024 — 2025',
      current: false,
      description:
        'Built full stack real estate platform with advanced property search • Developed REST APIs using Node.js and Express • Optimized MongoDB queries reducing response time significantly • Implemented role based access control and secure media uploads',
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
