'use client';

import AnimatedDivider from './AnimatedDivider';
import { ExternalLink } from 'lucide-react';

export default function GitHubActivity() {
  return (
    <section id="github" className="section-spacing">
      <div className="container-tight">
        <p className="text-xs font-medium tracking-widest uppercase text-accent mb-6">
          GitHub Contributions
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold font-space tracking-tight mb-4">
          Consistent coding &amp; shipping systems.
        </h2>
        <p className="text-neutral-400 text-base mb-10 max-w-xl">
          I believe in showing up every day. My contribution graph reflects a
          steady practice of building, refining, and pushing production code.
        </p>

        {/* GitHub Streak Graph Panel */}
        <div className="rounded-xl border border-border bg-surface-raised p-6 sm:p-8 space-y-6">
          {/* Embed — replace with your actual GitHub contribution image or use github-readme-streak-stats */}
          <div className="w-full overflow-hidden rounded-lg bg-surface flex items-center justify-center min-h-[160px]">
            {/* Option 1: GitHub Streak Stats embed */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://github-readme-streak-stats.herokuapp.com/?user=ashutoshpandey18&theme=black-ice&hide_border=true&background=0a0a0a&stroke=1e1e1e&ring=3B82F6&fire=3B82F6&currStreakLabel=3B82F6"
              alt="GitHub Streak"
              className="w-full max-w-2xl mx-auto"
              loading="lazy"
            />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { value: '42+', label: 'Repositories' },
              { value: '800+', label: 'Contributions' },
              { value: '120+', label: 'Day Streak' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold font-space text-accent">
                  {stat.value}
                </div>
                <div className="text-xs text-neutral-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <a
              href="https://github.com/ashutoshpandey18"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-border-hover hover:border-accent/40 text-neutral-300 hover:text-white text-sm font-medium rounded-lg transition-all duration-200"
            >
              View GitHub Profile
              <ExternalLink size={14} strokeWidth={2.5} />
            </a>
          </div>
        </div>
      </div>
      <AnimatedDivider className="mt-20 md:mt-28" />
    </section>
  );
}
