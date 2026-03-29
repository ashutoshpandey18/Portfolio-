'use client';

import ProductScreenshot from './ProductScreenshot';
import AnimatedDivider from './AnimatedDivider';
import { ChevronRight, ExternalLink } from 'lucide-react';
import {
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiPostgresql,
  SiPrisma,
  SiNestjs,
  SiJsonwebtokens,
} from 'react-icons/si';
import { IconType } from 'react-icons';

// Tech icon mapping
const techIcons: Record<string, IconType> = {
  'MERN Stack': SiMongodb,
  JavaScript: SiJavascript,
  MongoDB: SiMongodb,
  'Express.js': SiExpress,
  React: SiReact,
  'React.js': SiReact,
  'Node.js': SiNodedotjs,
  TypeScript: SiTypescript,
  'Web Speech API': SiReact, // Using React icon as fallback
  Recharts: SiReact,
  PDFKit: SiNodedotjs,
  JWT: SiJsonwebtokens,
  bcrypt: SiNodedotjs, // Using Node icon as fallback
  NestJS: SiNestjs,
  PostgreSQL: SiPostgresql,
  Prisma: SiPrisma,
  OCR: SiNodedotjs,
  'Tesseract.js': SiNodedotjs, // Using Node icon as fallback
  'Tesseract OCR': SiNodedotjs,
  'Brevo API': SiNodedotjs, // Using Node icon as fallback
};

// Tech tag component with icon
function TechTag({ tech }: { tech: string }) {
  const Icon = techIcons[tech];

  return (
    <span className="tech-tag group">
      {Icon && <Icon className="tech-tag-icon" />}
      <span className="tech-tag-label">{tech}</span>
    </span>
  );
}

interface Project {
  title: string;
  tag: string;
  date: string;
  description: string;
  screenshot: string;
  features: string[];
  tech: string[];
  links: {
    live?: string;
    github?: string;
    caseStudy?: string;
  };
}

const projects: Project[] = [
  {
    title: 'InventoryAI — AI-Powered Inventory Decision System',
    tag: 'Inventory Intelligence',
    date: 'MAR 2026',
    description:
      'SaaS platform transforming inventory management into a data-driven decision system for retail stores.',
    screenshot: '/screenshots/InventoryAI.png',
    features: [
      'Built a SaaS platform transforming inventory management into a data-driven decision system for retail stores',
      'Implemented stockout prediction using sales velocity and automated reorder recommendations',
      'Designed dead stock detection and demand-based product insights to optimize inventory decisions',
      'Developed a natural language inventory assistant for querying stock and insights',
      'Architected scalable backend with modular services enabling future ML-based demand forecasting',
      'Frontend is live showcasing product experience',
      'Backend services and prediction engine are actively being developed',
    ],
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'Recharts', 'Framer Motion', 'JWT Auth', 'Zod'],
    links: { live: '#', github: '#' },
  },
  {
    title: 'AI Voice Restaurant Booking Agent',
    tag: 'Conversational AI',
    date: 'JAN 2026',
    description:
      'Built production-grade voice booking system handling 200+ requests/hour with a 9-state conversation flow.',
    screenshot: '/screenshots/voice-booking-agent.png',
    features: [
      'Built production-grade voice booking system handling 200+ requests/hour with 9-state flow',
      'Engineered rule-based NLP replacing LLM APIs, saving $200+/month',
      'Built analytics dashboard with CSV/PDF export reducing manual effort by 70%',
    ],
    tech: [
      'MERN Stack',
      'TypeScript',
      'Web Speech API',
      'JWT',
      'Recharts',
      'PDFKit',
    ],
    links: { live: 'https://ai-voice-agent-sigma-six.vercel.app/', github: 'https://github.com/ashutoshpandey18/AI-Voice-Agent_', caseStudy: '/case-study/voice-booking-agent' },
  },
  {
    title: 'College Email SaaS Platform',
    tag: 'Document Intelligence',
    date: 'NOV 2025',
    description:
      'Built SaaS platform automating email provisioning using OCR-based ID extraction.',
    screenshot: '/screenshots/college-email-saas.png',
    features: [
      'Built SaaS platform automating email provisioning using OCR-based ID extraction',
      'Reduced verification time from 15 minutes to 30 seconds (85%+ accuracy)',
      'Built retry-based email system achieving 98% delivery success',
      'Developed admin dashboard with RBAC, audit logging, and real-time management',
    ],
    tech: ['NestJS', 'React.js', 'PostgreSQL', 'Prisma', 'Tesseract OCR', 'Brevo API'],
    links: { live: 'https://xyz-4lq7.vercel.app/', github: 'https://github.com/ashutoshpandey18/XYZ', caseStudy: '/case-study/college-email-saas' },
  },
];

function ProjectCard({ project, priority }: { project: Project; priority?: boolean }) {
  return (
    <article className="yc-project-card group">
      <div className="yc-card-border" />
      <ProductScreenshot
        src={project.screenshot}
        alt={`${project.title} landing page`}
        priority={priority}
      />

      {/* Content */}
      <div className="p-5 sm:p-6 space-y-5 bg-surface-raised rounded-b-xl">
        {/* Header */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-semibold tracking-widest uppercase text-neutral-500">
              {project.date}
            </span>
            <span className="px-2.5 py-1 text-[10px] font-semibold tracking-wide uppercase rounded-full bg-accent/10 text-accent border border-accent/20">
              {project.tag}
            </span>
          </div>
          <h3 className="text-xl font-bold font-space text-white leading-snug">
            {project.title}
          </h3>
          <p className="text-sm text-neutral-400 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Features */}
        <ul className="space-y-2">
          {project.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2.5 text-neutral-300">
              <ChevronRight className="text-accent flex-shrink-0" size={16} strokeWidth={2.5} />
              <span className="text-[13px] leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Tech Chips */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, i) => (
            <TechTag key={i} tech={tech} />
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-2.5 pt-1">
          {project.links.live && (
            <a
              href={project.links.live}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-accent hover:bg-accent-glow text-white text-xs font-semibold rounded-lg transition-colors duration-200"
            >
              Demo
              <ExternalLink size={14} strokeWidth={2.5} />
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              className="inline-flex items-center gap-1.5 px-4 py-2 border border-border-hover hover:border-accent/40 text-neutral-300 hover:text-white text-xs font-semibold rounded-lg transition-all duration-200"
            >
              Code
            </a>
          )}
          {project.links.caseStudy && (
            <a
              href={project.links.caseStudy}
              className="inline-flex items-center gap-1.5 px-4 py-2 border border-border-hover hover:border-accent/40 text-neutral-300 hover:text-white text-xs font-semibold rounded-lg transition-all duration-200"
            >
              Case Study
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function ProjectHighlights() {
  return (
    <section id="projects" className="section-spacing">
      <div className="container-tight">
        <p className="text-xs font-medium tracking-widest uppercase text-accent mb-6">
          Featured Projects
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold font-space tracking-tight mb-4">
          A selection of systems I&apos;ve shipped.
        </h2>
        <p className="text-neutral-400 text-base sm:text-lg mb-12 max-w-2xl">
          Production platforms engineered for scale, performance, and real-world impact.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} priority={i === 0} />
          ))}
        </div>
      </div>
      <AnimatedDivider className="mt-20 md:mt-28" />
    </section>
  );
}
