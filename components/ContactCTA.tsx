'use client';

import { Mail, Github, Linkedin, LucideIcon } from 'lucide-react';
import ProIcon from './ProIcon';
import Reveal from './Reveal';

export default function ContactCTA() {
  const links: Array<{ label: string; href: string; icon: LucideIcon }> = [
    { label: 'Email', href: 'mailto:your.email@example.com', icon: Mail },
    { label: 'GitHub', href: 'https://github.com', icon: Github },
    { label: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
  ];

  return (
    <section id="contact" className="section-spacing pb-12">
      <div className="container-tight">
        <Reveal>
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <p className="text-xs font-medium tracking-widest uppercase text-accent">
              Get in Touch
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold font-space tracking-tight">
              Say hi — let&apos;s build something great.
            </h2>
            <p className="text-neutral-400 text-base leading-relaxed max-w-lg mx-auto">
              I&apos;m open to freelance projects, product collaborations, and
              full-time opportunities. Drop me a message and I&apos;ll get back to
              you promptly.
            </p>

            <div className="flex flex-wrap justify-center gap-3 pt-2">
              {links.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border-hover hover:border-accent/40 text-neutral-300 hover:text-white text-sm font-medium transition-all duration-200 hover:bg-surface-raised"
                >
                  <ProIcon icon={link.icon} size="sm" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      {/* Footer */}
      <footer className="container-tight mt-20 pt-8 border-t border-border text-center">
        <p className="text-xs text-neutral-600 tracking-wide uppercase">
          © 2026 Ashutosh Pandey. Handcrafted with precision.
        </p>
      </footer>
    </section>
  );
}
