import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaTimes, FaStar } from 'react-icons/fa';
import { SlideWrapper, SlideTitle, Card, Icon } from '@/components';

const Slide6Competition: React.FC = () => {
  const features = [
    "Menus numériques",
    "Gestion des stocks",
    "Marketing ciblé"
  ];

  const competitors = [
    { name: "Menu Cool", features: [true, true, true] },
    { name: "Apps commande", features: [true, false, false] },
    { name: "Menus papier", features: [false, false, false] }
  ];

  const advantages = [
    "Solution complète intégrée",
    "Personnalisation poussée"
  ];

  return (
    <SlideWrapper>
      <SlideTitle>Concurrence</SlideTitle>
      
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Card className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="px-2 py-1 text-left text-secondary"></th>
                {competitors.map((competitor, index) => (
                  <th key={index} className="px-2 py-1 text-center text-secondary font-bold">{competitor.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, featureIndex) => (
                <tr key={featureIndex}>
                  <td className="border-t border-gray-200 px-2 py-1 text-secondary-light">{feature}</td>
                  {competitors.map((competitor, competitorIndex) => (
                    <td key={competitorIndex} className="border-t border-gray-200 px-2 py-1 text-center">
                      <Icon 
                        Icon={competitor.features[featureIndex] ? FaCheck : FaTimes}
                        className={`text-sm mx-auto ${competitor.features[featureIndex] ? "text-primary" : "text-red-500"}`}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Card className="bg-primary bg-opacity-10">
          <h3 className="text-lg font-bold mb-3 text-center text-secondary">Nos avantages concurrentiels</h3>
          <ul className="space-y-2">
            {advantages.map((advantage, index) => (
              <li key={index} className="flex items-start">
                <Icon Icon={FaStar} className="text-primary mr-2 mt-1 flex-shrink-0 text-sm" />
                <span className="text-sm text-secondary-light">{advantage}</span>
              </li>
            ))}
          </ul>
        </Card>
      </motion.div>
    </SlideWrapper>
  );
}

export default Slide6Competition;
