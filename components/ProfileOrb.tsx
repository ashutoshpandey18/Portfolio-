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
    // Detect touch device
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  useEffect(() => {
    const orb = orbRef.current;
    if (!orb || isTouchDevice) return; // Disable tilt on touch devices

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

  // GitHub streak ring calculation:
  // circumference = 2 * π * radius (for r=110: ~691)
  // offset = circumference - (percent / 100 * circumference)
  // Example: (95 days / 120 days) * 100 = 79.17%
  const radius = 110;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (githubStreakPercent / 100) * circumference;

  return (
    <div
      ref={orbRef}
      className={`profile-orb-container ${size} relative mb-8 sm:mb-0`}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: 'transform 0.15s ease-out'
      }}
    >
      {/* Multi-layer radial glow */}
      <div className="orb-glow-1" />
      <div className="orb-glow-2" />
      <div className="orb-glow-3" />

      {/* Rotating tech ring - hidden on mobile */}
      <div className="orb-tech-ring hidden sm:block" />

      {/* Breathing pulse */}
      <div className="orb-pulse" />

      {/* GitHub streak progress ring */}
      <svg className="orb-progress-ring" viewBox="0 0 240 240">
        <circle
          cx="120"
          cy="120"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-border opacity-20"
        />
        <circle
          cx="120"
          cy="120"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="text-accent orb-progress-stroke"
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: offset,
          }}
        />
      </svg>

      {/* Glass backdrop layer */}
      <div className="orb-glass-shell">
        {/* Profile image */}
        <div className="orb-image-wrapper">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}
