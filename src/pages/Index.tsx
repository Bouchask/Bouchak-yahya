
import { useState } from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Internship from '@/components/Internship';
import Contact from '@/components/Contact';
import Navbar from '@/components/Navbar';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-purple-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Internship />
        <Contact />
      </div>
    </div>
  );
};

export default Index;
