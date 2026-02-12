'use client';

import AnimatedBorder from './AnimatedBorder';
import AnimatedDivider from './AnimatedDivider';
import ProductScreenshot from './ProductScreenshot';
import { ArrowRight } from 'lucide-react';

export default function FeaturedCaseStudy() {
  return (
    <section className="section-spacing">
      <div className="container-tight">
        <AnimatedBorder>
          <div className="p-6 sm:p-10">
            {/* Featured Image */}
            <div className="mb-8">
              <ProductScreenshot
                src="/screenshots/Voice-Booking Agent.png"
                alt="AI Voice Booking Agent Interface"
                priority={true}
              />
            </div>

            <div className="grid lg:grid-cols-2 gap-10">
              {/* Left */}
              <div className="space-y-6">
                <span className="inline-flex px-3 py-1.5 rounded-full bg-accent/10 text-accent text-[10px] font-semibold tracking-widest uppercase border border-accent/20">
                  Featured Case Study
                </span>

                <h3 className="text-2xl sm:text-3xl font-bold font-space leading-snug">
                  Building an AI Voice Agent from Scratch
                </h3>

                <p className="text-sm text-neutral-400 leading-relaxed">
                  A deep dive into architecting a production-ready conversational AI
                  system — from state machine design to handling real-time voice
                  interactions with zero booking conflicts.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  {[
                    { v: '3K+', l: 'Conversations' },
                    { v: '95%', l: 'Intent Accuracy' },
                    { v: '2.3s', l: 'Avg Response' },
                    { v: 'Zero', l: 'Conflicts' },
                  ].map((m, i) => (
                    <div key={i}>
                      <div className="text-xl font-bold text-accent font-space">{m.v}</div>
                      <div className="text-[11px] text-neutral-500 mt-0.5">{m.l}</div>
                    </div>
                  ))}
                </div>

                <a
                  href="/case-study/voice-booking-agent"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent hover:bg-accent-glow text-white text-sm font-semibold rounded-lg transition-colors duration-200 mt-2"
                >
                  Read Case Study
                  <ArrowRight size={16} strokeWidth={2.5} />
                </a>
              </div>

              {/* Right */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold tracking-widest uppercase text-neutral-500 mb-4">
                  Technical Implementation
                </h4>
                {[
                  {
                    title: 'State Machine Architecture',
                    desc: 'Finite state machine with 12 states and 40+ transitions managing conversation flow.',
                  },
                  {
                    title: 'NLP Pipeline',
                    desc: 'Custom rule-based intent classifier with entity extraction — 95% accuracy.',
                  },
                  {
                    title: 'Conflict Resolution',
                    desc: 'Pessimistic locking with real-time availability checking prevents double bookings.',
                  },
                  {
                    title: 'Analytics Engine',
                    desc: 'Event-driven analytics with conversation replay and sentiment analysis.',
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-lg bg-surface border border-border"
                  >
                    <h5 className="text-sm font-semibold text-accent mb-1">{item.title}</h5>
                    <p className="text-xs text-neutral-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedBorder>
      </div>
      <AnimatedDivider className="mt-20 md:mt-28" />
    </section>
  );
}
