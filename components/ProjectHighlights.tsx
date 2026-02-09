'use client';

import VideoPreview from './VideoPreview';
import AnimatedDivider from './AnimatedDivider';
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
} from 'react-icons/si';
import { IconType } from 'react-icons';

// Tech icon mapping
const techIcons: Record<string, IconType> = {
  MongoDB: SiMongodb,
  'Express.js': SiExpress,
  React: SiReact,
  'Node.js': SiNodedotjs,
  TypeScript: SiTypescript,
  'Web Speech API': SiReact, // Using React icon as fallback
  JWT: SiJsonwebtokens,
  bcrypt: SiNodedotjs, // Using Node icon as fallback
  NestJS: SiNestjs,
  PostgreSQL: SiPostgresql,
  Prisma: SiPrisma,
  'Tesseract.js': SiNodedotjs, // Using Node icon as fallback
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
  video: string;
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
    title: 'AI Voice Booking Agent',
    tag: 'Conversational AI',
    date: 'JAN 2026',
    description:
      'A production-ready voice agent that handles appointment bookings via natural language, with state machine logic and conflict prevention.',
    video: '',
    features: [
      'State machine voice agent with 12 states and 40+ transitions',
      'Rule-based NLP for intent recognition and entity extraction',
      'Time slot conflict prevention with pessimistic locking',
      'Admin analytics dashboard with conversation insights',
      'Comprehensive conversation logging and replay system',
    ],
    tech: [
      'MongoDB',
      'Express.js',
      'React',
      'Node.js',
      'TypeScript',
      'Web Speech API',
      'JWT',
      'bcrypt',
    ],
    links: { live: '#', github: '#', caseStudy: '#' },
  },
  {
    title: 'Institutional Email Automation SaaS',
    tag: 'Document Intelligence',
    date: 'NOV 2025',
    description:
      'Enterprise SaaS platform that automates institutional email credential workflows with OCR, AI scoring, and secure delivery.',
    video: '',
    features: [
      'OCR extraction from PDFs and scanned documents',
      'AI confidence scoring for extracted data validation',
      'Admin approval workflow with manual override capability',
      'Secure credential delivery via encrypted channels',
      'Full audit logging for compliance and tracking',
    ],
    tech: ['NestJS', 'PostgreSQL', 'Prisma', 'React', 'Tesseract.js', 'Brevo API', 'JWT'],
    links: { live: '#', github: '#', caseStudy: '#' },
  },
  {
    title: 'UDAASH Job Intelligence Platform',
    tag: 'Marketplace System',
    date: 'SEP 2025',
    description:
      'AI-powered job intelligence platform with match scoring, kanban workflows, voice input, and a full PWA experience.',
    video: '',
    features: [
      'AI-powered match scoring for optimal candidate pairing',
      'Kanban workflow management with drag-and-drop',
      'Voice input for accessibility and speed',
      'Real-time analytics dashboard with actionable insights',
      'Progressive Web App for seamless mobile experience',
    ],
    tech: ['Next.js', 'TypeScript', 'Prisma', 'Tailwind CSS', 'PWA'],
    links: { live: '#', github: '#', caseStudy: '#' },
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="yc-project-card group">
      <div className="yc-card-border" />
      <VideoPreview src={project.video} />

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
              <span className="text-accent text-xs mt-1.5">▸</span>
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
              Demo ↗
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
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      </div>
      <AnimatedDivider className="mt-20 md:mt-28" />
    </section>
  );
}
