'use client'

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { slides } from '@/data/slides';
import { Button } from '@/components/shared/Button';
import { useKeyPress } from '@/hooks/useKeyPress';

const NavigationBar: React.FC<{
  currentSlide: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
  isVisible: boolean;
}> = ({ currentSlide, totalSlides, onPrev, onNext, isVisible }) => {
  return (
    <motion.nav
      className="fixed bottom-0 left-0 right-0 bg-white bg-opacity-70 backdrop-blur-sm shadow-lg"
      initial={{ y: '100%' }}
      animate={{ y: isVisible ? 0 : '100%' }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
        <Button onClick={onPrev} disabled={currentSlide === 0}>
          &#8592; Précédent
        </Button>
        <span className="text-primary font-bold">
          {currentSlide + 1} / {totalSlides}
        </span>
        <Button onClick={onNext} disabled={currentSlide === totalSlides - 1}>
          Suivant &#8594;
        </Button>
      </div>
    </motion.nav>
  );
};

const Presentation: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? prev : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? prev : prev - 1));
  };

  useKeyPress('ArrowRight', nextSlide);
  useKeyPress('ArrowLeft', prevSlide);

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div
      className="min-h-screen flex flex-col bg-gradient-to-br from-gray-100 to-white text-secondary relative"
      onMouseMove={(e) => {
        const threshold = window.innerHeight - 100; // 100px from bottom
        setIsNavVisible(e.clientY > threshold);
      }}
      onMouseLeave={() => setIsNavVisible(false)}
    >
      <main className="flex-grow flex items-center justify-center p-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-4xl"
          >
            <CurrentSlideComponent />
          </motion.div>
        </AnimatePresence>
      </main>
      <NavigationBar
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onPrev={prevSlide}
        onNext={nextSlide}
        isVisible={isNavVisible}
      />
    </div>
  );
};

export default Presentation;
