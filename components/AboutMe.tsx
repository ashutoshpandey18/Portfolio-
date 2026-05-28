'use client';

import AnimatedDivider from './AnimatedDivider';
import Reveal from './Reveal';
import { motion } from 'framer-motion';

export default function AboutMe() {
  return (
    <section id="about" className="section-spacing bg-surface relative overflow-hidden">
      <div className="container-tight">
        <div className="grid md:grid-cols-[0.3fr_1fr] gap-8 md:gap-16 items-start">
          
          {/* Left Column: Understated Label */}
          <Reveal>
            <div className="flex items-center md:flex-col md:items-start gap-4 md:gap-2">
              <span className="text-[11px] font-semibold tracking-widest uppercase text-neutral-500 font-space">
                About
              </span>
              <div className="h-px w-8 md:w-12 bg-white/10" />
            </div>
          </Reveal>

          {/* Right Column: Statement & Narrative */}
          <div className="max-w-2xl space-y-8">
            <Reveal delay={0.05}>
              <h2 className="font-space text-3xl sm:text-4xl font-medium tracking-tight text-white leading-tight">
                Building the systems behind the product.
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-8 text-neutral-400 text-sm sm:text-base leading-relaxed font-inter font-normal">
                <p>
                  I build software. Usually end-to-end, always fast. I specialize in the intersection of raw systems engineering and high-fidelity product experiences — things like real-time canvas drafting engines, conversational voice systems, and secure SaaS backends.
                </p>
                
                {/* Custom IDE Mockup */}
                <motion.div 
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="relative rounded-xl border border-white/5 bg-[#0A0A0B] overflow-hidden group shadow-2xl"
                >
                  {/* IDE Titlebar */}
                  <div className="flex items-center gap-2.5 px-4 py-3 bg-[#0E0E10] border-b border-white/5">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-white/10 group-hover:bg-[#FF5F56] transition-colors duration-300" />
                      <div className="w-2.5 h-2.5 rounded-full bg-white/10 group-hover:bg-[#FFBD2E] transition-colors duration-300" />
                      <div className="w-2.5 h-2.5 rounded-full bg-white/10 group-hover:bg-[#27C93F] transition-colors duration-300" />
                    </div>
                    <div className="flex items-center gap-1.5 ml-4 bg-[#141416] border border-white/5 px-3 py-1 rounded-md">
                      <span className="text-[10px] font-mono text-neutral-400 tracking-wide">Engineer.tsx</span>
                    </div>
                  </div>

                  {/* IDE Code Area */}
                  <div className="p-5 sm:p-6 font-mono text-[11px] sm:text-xs leading-relaxed overflow-x-auto bg-[#070708]">
                    {[
                      { num: '01', line: <span className="text-neutral-600 italic">// Obsessive builder configuration</span> },
                      { num: '02', line: <span className="text-neutral-300">export const <span className="text-blue-400">config</span> = &#123;</span> },
                      { num: '03', line: <span className="text-neutral-400">  type: <span className="text-emerald-400">"Engineer.tsx"</span>,</span> },
                      { num: '04', line: <span className="text-neutral-400">  sideEffects: [<span className="text-emerald-400">"YC vibes"</span>, <span className="text-emerald-400">"extreme speed"</span>],</span> },
                      { num: '05', line: <span className="text-neutral-400">  corporateBoilerplate: <span className="text-amber-500">false</span>,</span> },
                      { num: '06', line: <span className="text-neutral-400">  highAgency: <span className="text-amber-500">true</span>,</span> },
                      { num: '07', line: <span className="text-neutral-300">  output: &#123;</span> },
                      { num: '08', line: <span className="text-neutral-400">    engine: <span className="text-emerald-400">"solid under the hood"</span>,</span> },
                      { num: '09', line: <span className="text-neutral-400">    visuals: <span className="text-emerald-400">"stunning on the screen"</span></span> },
                      { num: '10', line: <span className="text-neutral-300">  &#125;</span> },
                      { num: '11', line: <span className="text-neutral-300">&#125;;</span> }
                    ].map((row, index) => (
                      <div key={index} className="flex items-start">
                        <span className="text-neutral-600 select-none pr-4 sm:pr-6 text-right w-6 shrink-0 border-r border-white/5 mr-4">{row.num}</span>
                        <span className="whitespace-pre">{row.line}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

              </div>
            </Reveal>
          </div>

        </div>
      </div>
      <AnimatedDivider className="mt-20 md:mt-28" />
    </section>
  );
}
