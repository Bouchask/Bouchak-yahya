import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Internship from '@/components/Internship';
import Contact from '@/components/Contact';
import Navbar from '@/components/Navbar';
import AnimatedBackground from '@/components/AnimatedBackground';

const Index = () => {
  return (
    <div className="min-h-screen bg-transparent transition-colors duration-300">
      <AnimatedBackground />
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-24 pb-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Internship />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
