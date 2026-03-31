import ProfileOrb from './ProfileOrb';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.06)_0%,_transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full relative z-10 pt-20 lg:pt-0">
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
              <a href="#projects" className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl px-6 py-3 font-medium bg-gradient-to-b from-blue-500 to-blue-600 text-white shadow-md shadow-blue-500/25 border border-blue-400/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/30 active:translate-y-px active:shadow-sm relative overflow-hidden group">
                <span className="relative z-10">View Projects</span>
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </a>
              <a href="#contact" className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl px-6 py-3 font-medium bg-white/5 dark:bg-white/5 backdrop-blur-sm border border-neutral-200/20 dark:border-neutral-700/30 shadow-sm transition-all duration-200 hover:bg-white/10 hover:shadow-md hover:-translate-y-px active:translate-y-px">
                <span className="relative z-10">Contact</span>
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end order-first lg:order-last mt-6 lg:mt-0">
            <ProfileOrb
              src="/Ashu.jpeg"
              alt="Ashutosh Pandey"
              size="w-[120px] h-[120px] lg:w-[180px] lg:h-[180px]"
              githubStreakPercent={78}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
