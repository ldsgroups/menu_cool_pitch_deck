// components/SlideTitle.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface SlideTitleProps {
  children: React.ReactNode;
}

export const SlideTitle: React.FC<SlideTitleProps> = ({ children }) => (
  <motion.h2 
    className="text-5xl font-bold mb-12 text-center text-gradient"
    initial={{ y: -50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.2 }}
  >
    {children}
  </motion.h2>
);
