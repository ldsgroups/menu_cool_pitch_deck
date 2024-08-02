// components/slides/Slide2Context.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaHistory, FaMobileAlt, FaUtensils } from 'react-icons/fa';
import { SlideWrapper, SlideTitle, Card, Icon } from '@/components';

const contextItems = [
    {
      icon: FaHistory,
      title: "Notre Histoire",
      description: "Fondée en avril 2024 par Darius Kassi, ex développeur chez SODISMADCI, pour révolutionner la restauration."
    },
    {
      icon: FaMobileAlt,
      title: "Vision Audacieuse",
      description: "Transformer chaque smartphone en porte d'entrée vers une expérience culinaire exceptionnelle."
    },
    {
      icon: FaUtensils,
      title: "Marché de la Restauration",
      description: "Un secteur en pleine croissance, prêt pour une transformation digitale radicale.\n"
    }
  ];

const Slide2Context: React.FC = () => {
  return (
    <SlideWrapper>
      <SlideTitle>Contexte</SlideTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {contextItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.2 + 0.4 }}
          >
            <Card className="flex flex-col items-center text-center h-72">
              <Icon Icon={item.icon} className="mb-4 text-primary" />
              <h3 className="text-2xl font-semibold mb-4 text-secondary">{item.title}</h3>
              <p className="text-secondary-light">{item.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </SlideWrapper>
  );
}

export default Slide2Context;
