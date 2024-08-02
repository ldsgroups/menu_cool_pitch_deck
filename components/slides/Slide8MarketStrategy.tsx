import React from 'react';
import { motion } from 'framer-motion';
import { FaHandshake, FaBullhorn, FaRocket, FaCheckCircle } from 'react-icons/fa';
import { SlideWrapper, SlideTitle, Card, Icon } from '@/components';

const Slide8MarketStrategy: React.FC = () => {
  const strategies = [
    {
      icon: FaHandshake,
      title: "Partenariats Stratégiques",
      description: "Collaborations avec associations de restaurateurs"
    },
    {
      icon: FaBullhorn,
      title: "Marketing Ciblé",
      description: "Campagnes sur réseaux sociaux et événements locaux"
    },
    {
      icon: FaRocket,
      title: "Stratégie d'Expansion",
      description: "Déploiement progressif par secteur d'activité"
    }
  ];

  const objectives = [
    "100 établissements clients d'ici fin d'année",
    "Expansion vers 2 pays voisins en 2025"
  ];

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: 'spring',
        stiffness: 100
      }
    })
  };

  return (
    <SlideWrapper>
      <SlideTitle>Stratégie de Marché</SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {strategies.map((strategy, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={index}
          >
            <Card className="h-full bg-gradient-to-br from-white to-primary-50 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-primary bg-opacity-20 p-3 rounded-full mr-4">
                  <Icon Icon={strategy.icon} className="text-primary text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-secondary">{strategy.title}</h3>
              </div>
              <p className="text-secondary-light">{strategy.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <Card className="bg-gradient-to-r from-primary-50 to-primary-100">
          <h3 className="text-2xl font-bold mb-4 text-secondary">Objectifs Clés</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {objectives.map((objective, index) => (
              <motion.div
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8 + index * 0.2, duration: 0.5 }}
              >
                <div className="flex items-start bg-white rounded-lg p-4 shadow-md">
                  <Icon Icon={FaCheckCircle} className="text-primary mr-3 mt-1 flex-shrink-0 text-xl" />
                  <span className="text-secondary-light">{objective}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </Card>
      </motion.div>
    </SlideWrapper>
  );
}

export default Slide8MarketStrategy;
