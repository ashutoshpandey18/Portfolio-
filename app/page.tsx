import Hero from '@/components/Hero';
import AboutMe from '@/components/AboutMe';
import Experience from '@/components/Experience';
import Capabilities from '@/components/Capabilities';
import ProjectHighlights from '@/components/ProjectHighlights';
import FeaturedCaseStudy from '@/components/FeaturedCaseStudy';
import SkillsTools from '@/components/SkillsTools';
import GitHubActivity from '@/components/GitHubActivity';
import ContactMeeting from '@/components/ContactMeeting';
import ContactCTA from '@/components/ContactCTA';

export default function Home() {
  return (
    <main className="min-h-screen bg-surface">
      <Hero />
      <AboutMe />
      <Experience />
      <Capabilities />
      <ProjectHighlights />
      <FeaturedCaseStudy />
      <SkillsTools />
      <GitHubActivity />
      <ContactMeeting />
      <ContactCTA />
    </main>
  );
}
