// components/SlideWrapper.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface SlideWrapperProps {
  children: React.ReactNode;
}

export const SlideWrapper: React.FC<SlideWrapperProps> = ({ children }) => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="w-full max-w-6xl mx-auto px-4"
  >
    {children}
  </motion.div>
);
