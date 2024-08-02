import React from 'react';
import { motion } from 'framer-motion';
import { FaMobileAlt, FaChartBar, FaBullhorn, FaHandshake } from 'react-icons/fa';
import { SlideWrapper, SlideTitle, Card, Icon } from '@/components';

const solutions = [
  {
    icon: FaMobileAlt,
    title: "Menus Numériques Interactifs",
    description: "Accessibles par simple scan de QR code, révolutionnant la commande.",
    impact: "Expérience client améliorée, temps d'attente réduit."
  },
  {
    icon: FaChartBar,
    title: "Gestion Intelligente des Stocks",
    description: "Système en temps réel pour dire adieu au gaspillage.",
    impact: "Réduction des pertes, optimisation des approvisionnements."
  },
  {
    icon: FaBullhorn,
    title: "Outils Marketing Intégrés",
    description: "Transforme les clients occasionnels en fidèles ambassadeurs.",
    impact: "Augmentation de la fidélisation et des revenus."
  },
  {
    icon: FaHandshake,
    title: "Marketplace",
    description: "Connexion directe entre restaurateurs et producteurs locaux.",
    impact: "Création d'un écosystème vertueux, approvisionnement optimisé."
  }
];

const Slide4Solution: React.FC = () => {
  return (
    <SlideWrapper>
      <SlideTitle>Notre Solution</SlideTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {solutions.map((solution, index) => (
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.3 }}
          >
            <Card className="flex flex-col items-center text-center p-4 h-72">
              <div className="bg-primary bg-opacity-10 p-3 rounded-full mb-3">
                <Icon Icon={solution.icon} className="text-primary text-2xl" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-secondary">{solution.title}</h3>
              <p className="text-sm text-secondary-light mb-2">{solution.description}</p>
              {/* <p className="text-xs text-primary italic">{solution.impact}</p> */}
            </Card>
          </motion.div>
        ))}
      </div>
    </SlideWrapper>
  );
}

export default Slide4Solution;
