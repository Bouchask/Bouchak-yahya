import Navbar from "@/components/Navbar";
import TrainingBackground from "@/components/TrainingBackground";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import TimelineSection from "@/components/TimelineSection";
import ContactSection from "@/components/ContactSection";
import { useLang } from "@/contexts/LangContext";

const Index = () => {
  const { t } = useLang();

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <TrainingBackground />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <TimelineSection />
      <ContactSection />

      <footer className="py-8 text-center border-t border-border">
        <p className="text-xs font-mono text-muted-foreground">
          {t("footer.text")}<span className="text-terminal-cyan">process.exit(0)</span>
        </p>
      </footer>
    </div>
  );
};

export default Index;
