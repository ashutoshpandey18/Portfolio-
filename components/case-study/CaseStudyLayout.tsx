'use client';

import { ReactNode } from 'react';
import ProgressBar from './ProgressBar';
import EngineeringGridBackground from './EngineeringGridBackground';
import StickyTOC from './StickyTOC';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface CaseStudyLayoutProps {
  children: ReactNode;
  sections: Array<{ id: string; title: string }>;
}

export default function CaseStudyLayout({ children, sections }: CaseStudyLayoutProps) {
  return (
    <div className="relative min-h-screen bg-surface text-white">
      <ProgressBar />
      <EngineeringGridBackground />

      {/* Back Button */}
      <div className="fixed top-6 left-6 z-40">
        <Link
          href="/"
          scroll={true}
          className="case-study-back-button"
        >
          <ArrowLeft size={16} />
          Back
        </Link>
      </div>

      <div className="max-w-[900px] mx-auto px-6 py-16 relative z-10">
        {/* Main Content */}
        <main className="min-w-0">
          {children}
        </main>
      </div>

      {/* Footer Navigation */}
      <footer className="case-study-footer">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <Link
            href="/"
            scroll={true}
            className="inline-flex items-center gap-2 text-neutral-400 hover:text-accent transition-colors text-sm"
          >
            ← Back to all projects
          </Link>
        </div>
      </footer>
    </div>
  );
}
