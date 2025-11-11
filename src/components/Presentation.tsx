import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

interface SlideProps {
  children: React.ReactNode;
}

const Slide = ({ children }: SlideProps) => (
  <motion.div
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -100 }}
    transition={{ duration: 0.5, ease: 'easeInOut' }}
    className="w-full h-full flex items-center justify-center p-8"
  >
    {children}
  </motion.div>
);

interface PresentationProps {
  slides: React.ReactNode[];
}

export const Presentation = ({ slides }: PresentationProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const progress = ((currentSlide + 1) / slides.length) * 100;

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 right-0 z-50">
        <Progress value={progress} className="h-1 rounded-none" />
      </div>

      {/* Slide Content */}
      <div className="w-full h-full flex items-center justify-center">
        <AnimatePresence mode="wait">
          <Slide key={currentSlide}>{slides[currentSlide]}</Slide>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-0 right-0 flex items-center justify-center gap-4 z-50">
        <Button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          variant="secondary"
          size="icon"
          className="rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 disabled:opacity-30"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </Button>

        <div className="text-white font-medium bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
          {currentSlide + 1} / {slides.length}
        </div>

        <Button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          variant="secondary"
          size="icon"
          className="rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 disabled:opacity-30"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </Button>
      </div>

      {/* Keyboard Hint */}
      <div className="absolute bottom-20 right-8 text-white/50 text-sm">
        Use arrow keys to navigate
      </div>
    </div>
  );
};
