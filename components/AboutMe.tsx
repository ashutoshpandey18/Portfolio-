'use client';

import AnimatedDivider from './AnimatedDivider';

export default function AboutMe() {
  return (
    <section id="about" className="section-spacing">
      <div className="container-tight">
        <div className="max-w-3xl">
          <p className="text-xs font-medium tracking-widest uppercase text-accent mb-6">
            About
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold font-space tracking-tight mb-6">
            Building the Systems Behind the Product.
          </h2>
          <div className="space-y-4 text-neutral-400 text-base leading-relaxed">
            <p>
              I&apos;m a product-focused full-stack engineer who ships end-to-end —
              from system design to production deployment. I specialize in building
              AI-powered SaaS platforms, voice agents, and intelligent automation
              pipelines that operate at scale with clean, maintainable architecture.
            </p>
            <p>
              My work spans conversational AI systems with rule-based NLP, secure
              document processing with OCR, real-time analytics dashboards, and
              multi-tenant SaaS platforms. Every system I build is designed to be
              production-ready from day one — optimized for performance, security,
              and real user workflows.
            </p>
          </div>
        </div>
      </div>
      <AnimatedDivider className="mt-20 md:mt-28" />
    </section>
  );
}
