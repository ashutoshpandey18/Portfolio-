interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="space-y-3 mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold font-space tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-neutral-400 text-base sm:text-lg max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
