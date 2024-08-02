import React from 'react';
import { motion } from 'framer-motion';
import { FaMoneyBillWave, FaUserPlus, FaChartLine, FaCoins } from 'react-icons/fa';
import { SlideWrapper, SlideTitle, Card, Icon } from '@/components';

const Slide7BusinessModel: React.FC = () => {
  const economicData = [
    { title: "Coût d'acquisition client", value: "55 000", unit: "FCFA", icon: FaUserPlus },
    { title: "Abonnement mensuel", value: "15 000", unit: "FCFA", icon: FaMoneyBillWave },
    { title: "Revenus marketplace/an", value: "750 000", unit: "FCFA", icon: FaChartLine },
    { title: "Revenu total/restaurant/an", value: "930 000", unit: "FCFA", icon: FaCoins },
  ];

  return (
    <SlideWrapper>
      <SlideTitle>Un Modèle Économique Solide et Attractif</SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {economicData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.4 }}
          >
            <Card className="flex items-center">
              <div className="mr-6 bg-primary bg-opacity-10 p-4 rounded-full">
                <Icon Icon={item.icon} className="text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary mb-1">{item.title}</h3>
                <p className="text-3xl font-bold text-primary">{item.value} <span className="text-lg text-secondary-light">{item.unit}</span></p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-12 text-center bg-primary bg-opacity-10 p-6 rounded-xl"
      >
        <p className="text-xl text-secondary">
          Notre modèle économique assure une croissance durable avec des revenus récurrents
          et une forte valeur ajoutée, générant une coquette somme de 930 000 FCFA par an et par restaurant.
        </p>
      </motion.div>
    </SlideWrapper>
  );
}

export default Slide7BusinessModel;
