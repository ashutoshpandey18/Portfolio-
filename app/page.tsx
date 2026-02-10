import Hero from '@/components/Hero';
import AboutMe from '@/components/AboutMe';
import Capabilities from '@/components/Capabilities';
import ProjectHighlights from '@/components/ProjectHighlights';
import FeaturedCaseStudy from '@/components/FeaturedCaseStudy';
import SkillsTools from '@/components/SkillsTools';
import Experience from '@/components/Experience';
import GitHubActivity from '@/components/GitHubActivity';
import ContactMeeting from '@/components/ContactMeeting';
import ContactCTA from '@/components/ContactCTA';

export default function Home() {
  return (
    <main className="min-h-screen bg-surface">
      <Hero />
      <AboutMe />
      <Capabilities />
      <ProjectHighlights />
      <FeaturedCaseStudy />
      <SkillsTools />
      <Experience />
      <GitHubActivity />
      <ContactMeeting />
      <ContactCTA />
    </main>
  );
}
