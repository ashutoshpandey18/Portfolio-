'use client';

import { useState, useEffect, MouseEvent, RefObject } from 'react';

interface SpotlightPosition {
  x: number;
  y: number;
  opacity: number;
}

export function useCursorSpotlight(ref: RefObject<HTMLElement>) {
  const [spotlight, setSpotlight] = useState<SpotlightPosition>({ x: 0, y: 0, opacity: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  useEffect(() => {
    if (isTouchDevice || !ref.current) return;

    const element = ref.current;

    const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setSpotlight({ x, y, opacity: 1 });
    };

    const handleMouseEnter = () => {
      setSpotlight(prev => ({ ...prev, opacity: 1 }));
    };

    const handleMouseLeave = () => {
      setSpotlight(prev => ({ ...prev, opacity: 0 }));
    };

    element.addEventListener('mousemove', handleMouseMove as any);
    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove as any);
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [ref, isTouchDevice]);

  if (isTouchDevice) {
    return null;
  }

  return spotlight;
}
