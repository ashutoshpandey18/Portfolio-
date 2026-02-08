export default function ProofMetrics() {
  const metrics = [
    { value: '15+', label: 'Production Systems' },
    { value: '99.9%', label: 'Uptime SLA' },
    { value: '50K+', label: 'Active Users' },
    { value: '3', label: 'AI Agents Built' },
  ];

  return (
    <section className="border-y border-gray-800 bg-gradient-to-b from-black via-deep-blue/30 to-black">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold font-space text-blue-400">
                {metric.value}
              </div>
              <div className="text-sm md:text-base text-gray-400 font-medium">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
