'use client';

import React from 'react';

interface AnimatedBorderProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function AnimatedBorder({
  children,
  className = '',
  hover = false,
}: AnimatedBorderProps) {
  return (
    <div
      className={`${hover ? 'animated-border-hover' : 'animated-border'} rounded-xl ${className}`}
    >
      {children}
    </div>
  );
}
