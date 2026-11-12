import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ExploreCards from "@/components/ExploreCards";
import ProfileHeader from "@/components/ProfileHeader";
import WorkedOn from "@/components/WorkedOn";

export default function Home() {
  return (
    <>
      {/* Profile: TikTok-style header with the menu as highlights */}
      <ProfileHeader />
      {/* About: who I am, the short version, platforms, path and skills */}
      <AboutSection />
      {/* Worked on: interactive */}
      <WorkedOn />
      {/* Explore the other pages */}
      <ExploreCards />
      <ContactSection />
    </>
  );
}
