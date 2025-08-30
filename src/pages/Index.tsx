import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import ImpactSection from "@/components/ImpactSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import DemoSection from "@/components/DemoSection";
import TechStackSection from "@/components/TechStackSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesGrid />
      <ImpactSection />
      <HowItWorksSection />
      <DemoSection />
      <TechStackSection />
      <Footer />
    </div>
  );
};

export default Index;
