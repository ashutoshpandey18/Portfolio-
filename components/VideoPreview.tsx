import { Play } from 'lucide-react';

interface VideoPreviewProps {
  src: string;
  poster?: string;
}

export default function VideoPreview({ src, poster }: VideoPreviewProps) {
  return (
    <div className="relative w-full h-52 sm:h-56 bg-surface rounded-t-lg overflow-hidden">
      {/* Placeholder — swap with real <video> when assets are ready */}
      {src ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={poster}
          className="w-full h-full object-cover"
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <div className="w-full h-full flex items-center justify-center text-neutral-700 text-sm">
          <div className="text-center space-y-1">
            <Play className="mx-auto opacity-40" size={32} strokeWidth={1.5} />
            <span className="text-xs text-neutral-800">Video preview</span>
          </div>
        </div>
      )}
    </div>
  );
}
