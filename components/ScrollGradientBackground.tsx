'use client';

import { useEffect, useRef } from 'react';

export default function ScrollGradientBackground() {
  const layer1Ref = useRef<HTMLDivElement>(null);
  const layer2Ref = useRef<HTMLDivElement>(null);
  const layer3Ref = useRef<HTMLDivElement>(null);
  const layer4Ref = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>();

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        rafRef.current = requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
          const scrollProgress = Math.min(scrollY / scrollHeight, 1);

          if (layer1Ref.current) {
            const offset1 = scrollProgress * 120;
            layer1Ref.current.style.transform = `translate3d(0, ${offset1}px, 0)`;
          }

          if (layer2Ref.current) {
            const offset2 = scrollProgress * -80;
            const rotate2 = scrollProgress * 15;
            layer2Ref.current.style.transform = `translate3d(0, ${offset2}px, 0) rotate(${rotate2}deg)`;
          }

          if (layer3Ref.current) {
            const offset3 = scrollProgress * 100;
            const offsetX3 = scrollProgress * -40;
            layer3Ref.current.style.transform = `translate3d(${offsetX3}px, ${offset3}px, 0)`;
          }

          if (layer4Ref.current) {
            const offset4 = scrollProgress * -60;
            const offsetX4 = scrollProgress * 30;
            layer4Ref.current.style.transform = `translate3d(${offsetX4}px, ${offset4}px, 0)`;
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <div className="gradient-mesh-background">
      <div ref={layer1Ref} className="gradient-layer gradient-layer-1" />
      <div ref={layer2Ref} className="gradient-layer gradient-layer-2" />
      <div ref={layer3Ref} className="gradient-layer gradient-layer-3" />
      <div ref={layer4Ref} className="gradient-layer gradient-layer-4" />
    </div>
  );
}
