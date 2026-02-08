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
      {/* Outer glow layer */}
      <div className="absolute -inset-[40%] sm:-inset-[35%] lg:-inset-[30%] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.12)_0%,rgba(59,130,246,0.06)_40%,transparent_70%)] blur-[30px] sm:blur-[35px] lg:blur-[40px] opacity-60 sm:opacity-80 lg:opacity-100 animate-[orb-breathe_4s_ease-in-out_infinite]" />

      {/* Animated ring - perfectly fitted outside image */}
      <div className="absolute -inset-[2px] sm:-inset-[2.5px] lg:-inset-[3px] rounded-full opacity-50 sm:opacity-60 animate-[orb-spin_12s_linear_infinite] sm:animate-[orb-spin_10s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0%,transparent_65%,rgba(59,130,246,0.4)_78%,rgba(96,165,250,0.5)_88%,rgba(59,130,246,0.4)_96%,transparent_100%)]" />

      {/* Image container */}
      <div className="relative w-full h-full rounded-full overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}
