import React from 'react';
import { motion } from 'framer-motion';
import { FaChartPie, FaUsers, FaStore } from 'react-icons/fa';
import { SlideWrapper, SlideTitle, Card, Icon } from '@/components';

const Slide5MarketPotential: React.FC = () => {
  const marketData = [
    { title: "TAM", value: "300", description: "Marché Total Adressable", icon: FaChartPie },
    { title: "SAM", value: "60", description: "Marché Accessible", icon: FaUsers },
    { title: "SOM", value: "20", description: "Marché Utilisable", icon: FaStore }
  ];

  return (
    <SlideWrapper>
      <SlideTitle>Un Marché Colossal</SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {marketData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.2 + 0.4 }}
          >
            <Card className="text-center">
              <Icon Icon={item.icon} className="mb-4 text-primary mx-auto" />
              {/* <h3 className="text-2xl font-bold text-secondary mb-2">{item.title}</h3> */}
              <p className="text-4xl font-bold text-primary my-2">{item.value} Mds FCFA</p>
              <p className="text-sm text-secondary-light">{item.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-12 text-center bg-primary bg-opacity-10 p-6 rounded-xl"
      >
        <p className="text-xl text-secondary">
          Un marché impressionnant de 300 milliards de FCFA, dont 60 milliards à portée de main.
          Menu Cool est positionné pour capturer une part significative de cette opportunité colossale.
        </p>
      </motion.div>
    </SlideWrapper>
  );
}

export default Slide5MarketPotential
