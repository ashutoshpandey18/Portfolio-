export default function Capabilities() {
  const items = [
    { label: 'AI Workflow', icon: '⚡' },
    { label: 'Voice Systems', icon: '🎙' },
    { label: 'Secure Auth', icon: '🔐' },
    { label: 'Realtime APIs', icon: '🔄' },
    { label: 'OCR Pipelines', icon: '📄' },
    { label: 'SaaS Platforms', icon: '🚀' },
    { label: 'Analytics', icon: '📊' },
    { label: 'PWA Systems', icon: '📱' },
  ];

  return (
    <section id="capabilities" className="section-spacing">
      <div className="container-tight">
        <p className="text-xs font-medium tracking-widest uppercase text-accent mb-6">
          What I Do
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold font-space tracking-tight mb-10">
          Capabilities
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {items.map((item, i) => (
            <div
              key={i}
              className="group flex items-center gap-3 px-4 py-3.5 rounded-xl bg-surface-raised border border-border hover:border-accent/30 transition-colors duration-200"
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm font-medium text-neutral-300 group-hover:text-white transition-colors duration-200">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="section-divider mt-20 md:mt-28" />
    </section>
  );
}
