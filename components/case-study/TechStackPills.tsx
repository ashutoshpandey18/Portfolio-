'use client';

import { IconType } from 'react-icons';
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiPostgresql,
  SiPrisma,
  SiNestjs,
  SiJsonwebtokens,
  SiTailwindcss,
  SiNextdotjs,
  SiDocker,
  SiRedis,
  SiGithubactions,
  SiOpenai,
  SiFramer,
} from 'react-icons/si';

const techIcons: Record<string, IconType> = {
  MongoDB: SiMongodb,
  'Express.js': SiExpress,
  React: SiReact,
  'Node.js': SiNodedotjs,
  TypeScript: SiTypescript,
  PostgreSQL: SiPostgresql,
  Prisma: SiPrisma,
  NestJS: SiNestjs,
  JWT: SiJsonwebtokens,
  'Tailwind CSS': SiTailwindcss,
  'Next.js': SiNextdotjs,
  Docker: SiDocker,
  Redis: SiRedis,
  'GitHub Actions': SiGithubactions,
  OpenAI: SiOpenai,
  'Framer Motion': SiFramer,
  bcrypt: SiNodedotjs,
  'Web Speech API': SiReact,
  'Tesseract.js': SiNodedotjs,
  'Brevo API': SiNodedotjs,
};

interface TechStackPillsProps {
  technologies: string[];
  variant?: 'default' | 'large';
}

export default function TechStackPills({ technologies, variant = 'default' }: TechStackPillsProps) {
  const isLarge = variant === 'large';

  return (
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech, index) => {
        const Icon = techIcons[tech];
        return (
          <div
            key={index}
            className={`group inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/[0.03] border border-white/10 rounded-md hover:border-blue-500/50 hover:bg-white/[0.05] transition-all duration-200 ${
              isLarge ? 'text-sm' : 'text-xs'
            }`}
          >
            {Icon && (
              <Icon
                className={`tech-stack-pill-icon ${
                  isLarge ? 'text-sm' : 'text-xs'
                }`}
              />
            )}
            <span className="tech-stack-pill-label">
              {tech}
            </span>
          </div>
        );
      })}
    </div>
  );
}
