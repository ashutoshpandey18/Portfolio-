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
      period: 'Dec 2025 — Present',
      current: true,
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
    <section id="experience" className="section-spacing relative overflow-x-clip bg-surface">
      <GridBackground />
      
      <div className="container-tight relative z-10">
        <div className="grid md:grid-cols-[0.3fr_1fr] gap-8 md:gap-16 items-start">
          
          {/* Left Column: Asymmetric Category Label */}
          <Reveal>
            <div className="flex items-center md:flex-col md:items-start gap-4 md:gap-2">
              <span className="text-[11px] font-semibold tracking-widest uppercase text-neutral-500 font-space">
                Timeline
              </span>
              <div className="h-px w-8 md:w-12 bg-white/10" />
            </div>
          </Reveal>

          {/* Right Column: Timeline blocks */}
          <div className="space-y-10 w-full max-w-2xl relative">
            
            {/* Timeline vertical track line */}
            <div className="absolute left-[7px] top-6 bottom-6 w-px bg-white/5" />

            {timeline.map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="relative pl-8 group">
                  {/* Ambient background glow blob */}
                  <GlowBlob
                    delay={i * 0.15}
                    color={i === 0 ? 'indigo' : 'blue'}
                  />

                  {/* Minimal track dot */}
                  <div className="absolute left-[3.5px] top-4 w-2 h-2 rounded-full bg-blue-500 group-hover:scale-125 transition-transform duration-300 ring-4 ring-blue-500/10" />

                  {/* Experience Card with Conic Border Sweep */}
                  <div className="experience-card bg-white/[0.005] hover:bg-white/[0.015] border border-white/5 rounded-xl p-6 transition-all duration-300">
                    <div className="space-y-4">
                      
                      {/* Card Header */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                        <div className="flex min-w-0 items-start gap-3.5">
                          <img
                            src={item.logo}
                            alt={`${item.company} Logo`}
                            className="h-10 w-10 rounded-lg object-contain bg-white/[0.02] border border-white/5 p-1 shrink-0"
                          />
                          <div className="min-w-0">
                            <h3 className="text-base font-semibold text-white font-space tracking-tight">
                              {item.role}
                            </h3>
                            <p className="text-xs text-blue-400 font-medium font-space tracking-wide uppercase mt-0.5">
                              {item.company}
                            </p>
                          </div>
                        </div>
                        
                        <span className="text-[10px] font-space font-medium tracking-widest uppercase text-neutral-500 shrink-0 sm:text-right pt-1">
                          {item.period}
                        </span>
                      </div>
                      
                      {/* Description */}
                      <p className="text-sm text-neutral-400 leading-relaxed font-inter font-normal">
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
