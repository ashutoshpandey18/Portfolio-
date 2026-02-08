'use client';

import { LucideIcon } from 'lucide-react';

type IconSize = 'sm' | 'md' | 'lg';

interface ProIconProps {
  icon: LucideIcon;
  size?: IconSize;
  className?: string;
  hover?: boolean;
}

const sizeMap = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
};

export default function ProIcon({
  icon: Icon,
  size = 'md',
  className = '',
  hover = true
}: ProIconProps) {
  const baseClasses = 'transition-transform duration-200 ease-out';
  const hoverClasses = hover ? 'group-hover:scale-110 group-hover:translate-y-[-1px]' : '';

  return (
    <Icon
      className={`${sizeMap[size]} ${baseClasses} ${hoverClasses} ${className}`}
      strokeWidth={1.8}
      aria-hidden="true"
    />
  );
}
