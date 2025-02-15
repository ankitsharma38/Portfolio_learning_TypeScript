
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <>
      <Navbar />
      <main className="bg-gradient-to-b from-white to-accent-soft/20 pt-16">
        <HeroSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
