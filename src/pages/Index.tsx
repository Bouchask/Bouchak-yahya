import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Internship from '@/components/Internship';
import Contact from '@/components/Contact';
import Navbar from '@/components/Navbar';

const Index = () => {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <div className="fixed inset-0 -z-10 h-full w-full bg-white dark:bg-slate-950 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px]"></div>
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
