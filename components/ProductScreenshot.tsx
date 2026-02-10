'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ProductScreenshotProps {
  src: string;
  alt: string;
  priority?: boolean;
}

export default function ProductScreenshot({
  src,
  alt,
  priority = false
}: ProductScreenshotProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className="product-screenshot-container">
      <div className="product-screenshot-wrapper">
        <div className="product-screenshot-inner">
          {/* Loading placeholder */}
          {!isLoaded && !hasError && (
            <div className="product-screenshot-skeleton">
              <div className="skeleton-shimmer" />
            </div>
          )}

          {/* Error fallback - professional placeholder */}
          {hasError && (
            <div className="product-screenshot-placeholder">
              <div className="placeholder-content">
                <div className="placeholder-icon">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                </div>
                <p className="placeholder-text">Product Screenshot</p>
                <p className="placeholder-hint">Add your landing page screenshot</p>
              </div>
            </div>
          )}

          {/* Screenshot */}
          {!hasError && (
            <Image
              src={src}
              alt={alt}
              fill
              className="product-screenshot-image"
              style={{ opacity: isLoaded ? 1 : 0 }}
              onLoad={() => setIsLoaded(true)}
              onError={() => setHasError(true)}
              priority={priority}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}
        </div>
      </div>
    </div>
  );
}