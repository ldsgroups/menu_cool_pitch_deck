import React from 'react';
import { motion } from 'framer-motion';
import { FaRegClock, FaTrashAlt, FaChartLine } from 'react-icons/fa';
import { SlideWrapper, SlideTitle, Card, Icon } from '@/components';

const problems = [
  {
    icon: FaRegClock,
    title: "Clients Frustrés",
    description: "20 minutes perdues par visite, réduisant satisfaction et revenus.",
    impact: "Moins de clients fidèles, chiffre d'affaires en baisse."
  },
  {
    icon: FaTrashAlt,
    title: "Gaspillage Alimentaire",
    description: "40% des produits gaspillés, rongeant les bénéfices.",
    impact: "Pertes financières importantes, impact environnemental négatif."
  },
  {
    icon: FaChartLine,
    title: "Difficulté à se Démarquer",
    description: "70% des établissements peinent à sortir du lot.",
    impact: "Concurrence féroce, risque de fermeture accru."
  }
];

const Slide3Problem: React.FC = () => {
  return (
    <SlideWrapper>
      <SlideTitle>Problèmes</SlideTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {problems.map((problem, index) => (
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.3 }}
          >
            <Card className="flex flex-col items-center text-center p-4 h-60">
              <Icon Icon={problem.icon} className="text-primary text-3xl mb-3" />
              <h3 className="text-xl font-semibold mb-2 text-secondary">{problem.title}</h3>
              <p className="text-sm text-secondary-light mb-2">{problem.description}</p>
              {/* <p className="text-xs text-primary italic">{problem.impact}</p> */}
            </Card>
          </motion.div>
        ))}
      </div>
    </SlideWrapper>
  );
}

export default Slide3Problem;
