import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import CollectionSection from "@/components/CollectionSection";
import LiverpoolSection from "@/components/LiverpoolSection";
import StorySection from "@/components/StorySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <CollectionSection />
      <LiverpoolSection />
      <StorySection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
