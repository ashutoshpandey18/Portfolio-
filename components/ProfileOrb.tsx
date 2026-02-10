'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface ProfileOrbProps {
  src: string;
  alt: string;
  size?: string;
  githubStreakPercent?: number;
}

export default function ProfileOrb({
  src,
  alt,
  size = 'w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56',
  githubStreakPercent = 78
}: ProfileOrbProps) {
  const orbRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  useEffect(() => {
    const orb = orbRef.current;
    if (!orb || isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = orb.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const rotateY = (x / rect.width) * 12;
      const rotateX = -(y / rect.height) * 12;

      setTilt({ x: rotateX, y: rotateY });
    };

    const handleMouseLeave = () => {
      setTilt({ x: 0, y: 0 });
    };

    orb.addEventListener('mousemove', handleMouseMove);
    orb.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      orb.removeEventListener('mousemove', handleMouseMove);
      orb.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isTouchDevice]);

  return (
    <div
      ref={orbRef}
      className={`relative ${size} mb-8 sm:mb-0`}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: 'transform 0.15s ease-out',
        transformStyle: 'preserve-3d'
      }}
    >
      {/* Layer 1: Ambient halo - soft blue radial gradient with heavy blur */}
      <div
        className="absolute -inset-6 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.18) 0%, rgba(96, 165, 250, 0.12) 35%, rgba(147, 197, 253, 0.06) 60%, transparent 100%)',
          filter: 'blur(32px)',
          opacity: 0.2,
          animation: 'breathe 6s ease-in-out infinite alternate',
          willChange: 'transform'
        }}
      />

      {/* Layer 2: Blurred accent glow ring - sits behind image */}
      <div
        className="absolute -inset-2 rounded-full pointer-events-none blur-lg"
        style={{
          background: 'radial-gradient(circle, transparent 45%, rgba(59, 130, 246, 0.4) 48%, rgba(59, 130, 246, 0.42) 52%, transparent 55%)',
          opacity: 0.42,
          animation: 'breathe 6s ease-in-out infinite alternate',
          willChange: 'transform'
        }}
      />

      {/* Image container with Layer 3: Feathered edge mask + Layer 4: Breathing motion */}
      <div
        className="relative w-full h-full rounded-full overflow-hidden"
        style={{
          animation: 'breathe 6s ease-in-out infinite alternate',
          willChange: 'transform'
        }}
      >
        {/* White background for light theme blending */}
        <div className="absolute inset-0 bg-white dark:bg-transparent rounded-full" />

        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover relative z-10"
          style={{
            maskImage: 'radial-gradient(circle, black 60%, rgba(0, 0, 0, 0.95) 70%, rgba(0, 0, 0, 0.8) 80%, rgba(0, 0, 0, 0.5) 90%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(circle, black 60%, rgba(0, 0, 0, 0.95) 70%, rgba(0, 0, 0, 0.8) 80%, rgba(0, 0, 0, 0.5) 90%, transparent 100%)'
          }}
          priority
        />
      </div>

      {/* Global animation keyframes injected via style tag */}
      <style jsx>{`
        @keyframes breathe {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.03);
          }
        }
      `}</style>
    </div>
  );
}
