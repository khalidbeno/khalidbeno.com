import type { Locale } from '@/config/locales';
import { PageFrame } from './page-frame';
import { ScrollRailNavigation } from './scroll-rail-navigation';
import { HomeSection } from '@/features/home/home-view';
import { AboutSection } from '@/features/about/about-view';
import { ExperienceSection } from '@/features/experience/experience-view';
import { ProjectsSection } from '@/features/projects/projects-view';
import { LabsSection } from '@/features/labs/labs-view';
import { ContactSection } from '@/features/contact/contact-view';
import { NotesPreviewSection } from '@/features/notes/notes-preview-section';
export function PortfolioLanding({ locale }: { locale: Locale }) {
  return (
    <PageFrame
      locale={locale}
      active="home"
      landing
      navigation={<ScrollRailNavigation locale={locale} />}
    >
      <HomeSection locale={locale} />
      <AboutSection locale={locale} />
      <ExperienceSection locale={locale} />
      <ProjectsSection locale={locale} />
      <LabsSection locale={locale} />
      <ContactSection locale={locale} />
      <NotesPreviewSection locale={locale} />
    </PageFrame>
  );
}
