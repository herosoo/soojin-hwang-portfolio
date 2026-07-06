import ResponsiveNav from "./components/ResponsiveNav";
import HeroSection from "./components/HeroSection";
import MetricStrip from "./components/MetricStrip";
import ScrollStorySection from "./components/ScrollStorySection";
import FeaturedProjects from "./components/FeaturedProjects";
import SecondaryProjects from "./components/SecondaryProjects";
import SpecialtyPillars from "./components/SpecialtyPillars";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <>
      <ResponsiveNav />
      <main id="main">
        <HeroSection />
        <MetricStrip />
        <ScrollStorySection />
        <FeaturedProjects />
        <SecondaryProjects />
        <SpecialtyPillars />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
