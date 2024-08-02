// components/slides/Slide1Introduction.tsx
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { SlideWrapper } from '@/components';

const Slide1Introduction: React.FC = () => {
  return (
    <SlideWrapper>
      <div className="flex flex-col items-center justify-center h-full max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 260, damping: 20 }}
          className="mb-12"
        >
          <Image
            src="/menu-cool-logo.png"
            alt="Menu Cool Logo"
            width={300}
            height={300}
            priority
            className="drop-shadow-xl"
          />
        </motion.div>

        <motion.p
          className="text-3xl text-secondary-light max-w-2xl mb-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          On fait quoi aujourd'hui ? On scan !
        </motion.p>

        <motion.p
          className="text-4xl font-bold text-primary"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          Avec Menu Cool, tu gères !
        </motion.p>
      </div>
    </SlideWrapper>
  );
}

export default Slide1Introduction;
