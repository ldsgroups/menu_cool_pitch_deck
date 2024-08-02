import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaGlobeAfrica, FaBuilding } from 'react-icons/fa';
import { SlideWrapper, SlideTitle, Card, Icon } from '@/components';

const Slide12Future: React.FC = () => {
  const milestones = [
    {
      date: "Fin 2024",
      icon: FaRocket,
      title: "Preuve de Concept",
      content: "20 établissements actifs"
    },
    {
      date: "2025",
      icon: FaBuilding,
      title: "Expansion Nationale",
      content: "Acteur incontournable en Côte d'Ivoire"
    },
    {
      date: "2027",
      icon: FaGlobeAfrica,
      title: "Conquête Régionale",
      content: "1000 établissements au Bénin et au Sénégal"
    }
  ];

  return (
    <SlideWrapper>
      <SlideTitle>Notre Vision Ambitieuse</SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {milestones.map((milestone, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.2 + 0.4 }}
          >
            <Card className="flex flex-col items-center h-full">
              <div className="mb-4 bg-primary bg-opacity-10 p-4 rounded-full">
                <Icon Icon={milestone.icon} className="text-primary text-3xl" />
              </div>
              <h3 className="text-2xl font-semibold text-secondary mb-2 text-center">{milestone.title}</h3>
              <p className="text-xl text-primary font-bold mb-2">{milestone.date}</p>
              <p className="text-secondary-light text-center">{milestone.content}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-8 text-center bg-primary bg-opacity-10 p-6 rounded-xl"
      >
        <p className="text-xl text-secondary">
          Avec Menu Cool, nous ne gérons pas simplement des restaurants, nous façonnons l'avenir
          de la gastronomie africaine. Rejoignez-nous dans cette aventure révolutionnaire !
        </p>
      </motion.div>
    </SlideWrapper>
  );
}

export default Slide12Future;
