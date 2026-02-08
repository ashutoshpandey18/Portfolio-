'use client';

import Reveal from './Reveal';

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
    <section id="skills" className="section-spacing">
      <div className="container-tight">
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
                    <span
                      key={j}
                      className="px-3 py-1.5 text-xs font-medium rounded-lg bg-surface-raised text-neutral-300 border border-border hover:border-accent/30 hover:text-white transition-colors duration-200"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <div className="section-divider mt-20 md:mt-28" />
    </section>
  );
}
