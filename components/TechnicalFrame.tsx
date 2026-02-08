import { ReactNode } from 'react';

interface TechnicalFrameProps {
  children: ReactNode;
  className?: string;
}

export default function TechnicalFrame({ children, className = '' }: TechnicalFrameProps) {
  return (
    <div className={`technical-frame-container ${className}`}>
      {/* Outer Frame System */}
      <div className="technical-frame">
        {/* Corner Rails - L-shaped accents */}
        <div className="corner-rail corner-rail-tl" />
        <div className="corner-rail corner-rail-tr" />
        <div className="corner-rail corner-rail-bl" />
        <div className="corner-rail corner-rail-br" />

        {/* Edge Rails - Segmented borders */}
        {/* Top Edge */}
        <div className="edge-rail edge-rail-t edge-rail-t1" />
        <div className="edge-rail edge-rail-t edge-rail-t2" />
        <div className="edge-rail edge-rail-t edge-rail-t3" />

        {/* Right Edge */}
        <div className="edge-rail edge-rail-r edge-rail-r1" />
        <div className="edge-rail edge-rail-r edge-rail-r2" />
        <div className="edge-rail edge-rail-r edge-rail-r3" />

        {/* Bottom Edge */}
        <div className="edge-rail edge-rail-b edge-rail-b1" />
        <div className="edge-rail edge-rail-b edge-rail-b2" />
        <div className="edge-rail edge-rail-b edge-rail-b3" />

        {/* Left Edge */}
        <div className="edge-rail edge-rail-l edge-rail-l1" />
        <div className="edge-rail edge-rail-l edge-rail-l2" />
        <div className="edge-rail edge-rail-l edge-rail-l3" />

        {/* Signal Sweep Animation */}
        <div className="signal-sweep" />
      </div>

      {/* Inner Shell Panel */}
      <div className="technical-shell">
        {children}
      </div>
    </div>
  );
}
