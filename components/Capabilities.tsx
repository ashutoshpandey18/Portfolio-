'use client';

import { Zap, Mic, Lock, RefreshCw, FileText, Rocket, BarChart3, Smartphone, LucideIcon } from 'lucide-react';
import ProIcon from './ProIcon';

export default function Capabilities() {
  const items: Array<{ label: string; icon: LucideIcon }> = [
    { label: 'AI Workflow', icon: Zap },
    { label: 'Voice Systems', icon: Mic },
    { label: 'Secure Auth', icon: Lock },
    { label: 'Realtime APIs', icon: RefreshCw },
    { label: 'OCR Pipelines', icon: FileText },
    { label: 'SaaS Platforms', icon: Rocket },
    { label: 'Analytics', icon: BarChart3 },
    { label: 'PWA Systems', icon: Smartphone },
  ];

  return (
    <section id="capabilities" className="section-spacing">
      <div className="container-tight">
        <p className="text-xs font-medium tracking-widest uppercase text-accent mb-6">
          What I Do
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold font-space tracking-tight mb-10">
          Capabilities
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {items.map((item, i) => (
            <div
              key={i}
              className="capability-card group"
              style={{
                animationDelay: `${i * 0.4}s`,
              }}
            >
              {/* Animated border sweep */}
              <div className="capability-card-border" />

              {/* Inner gradient tint */}
              <div className="capability-card-glow" />

              {/* Card content */}
              <div className="capability-card-content">
                <div className="capability-icon-wrapper">
                  <ProIcon icon={item.icon} size="md" />
                </div>
                <span className="capability-label">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="section-divider mt-20 md:mt-28" />
    </section>
  );
}
