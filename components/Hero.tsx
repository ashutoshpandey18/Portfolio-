import ProfileOrb from './ProfileOrb';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.06)_0%,_transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="max-w-xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-medium tracking-wide uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Available for Projects
            </div>

            <div className="space-y-3">
              <h1 className="font-space text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
                Ashutosh Pandey
              </h1>
              <p className="text-xl sm:text-2xl text-accent font-space font-medium tracking-tight">
                Product Engineer — AI &amp; Systems
              </p>
            </div>

            <p className="text-lg text-neutral-300 leading-relaxed">
              I build real AI and SaaS systems — voice agents, verification platforms, and secure backend workflows — designed for reliability, not just demos.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a href="#projects" className="premium-button-primary group">
                <span className="relative z-10">View Projects</span>
                <span className="button-shine" />
              </a>
              <a href="#contact" className="premium-button-secondary group">
                <span className="relative z-10">Contact</span>
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end order-first lg:order-last">
            <ProfileOrb
              src="/Uday.jpeg"
              alt="Ashutosh Pandey"
              size="w-56 h-56"
              githubStreakPercent={78}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
