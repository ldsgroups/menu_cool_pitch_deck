// components/slides/Slide9Traction.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaUtensils, FaChartLine, FaSmile, FaUsers } from 'react-icons/fa';
import { SlideWrapper, SlideTitle, Card, Icon } from '@/components';

const Slide9Traction: React.FC = () => {
  const tractionData = [
    { icon: FaUtensils, value: "4", label: "Restaurants Actifs" },
    { icon: FaChartLine, value: "+15%", label: "Augmentation CA Clients" },
    { icon: FaSmile, value: "95%", label: "Satisfaction Client" },
  ];

  return (
    <SlideWrapper>
      <SlideTitle>Des Résultats Concrets et Tangibles</SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {tractionData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.4 }}
          >
            <Card className="text-center">
              <Icon Icon={item.icon} className="mb-4 text-primary mx-auto" />
              <p className="text-3xl font-bold mb-2 text-primary">{item.value}</p>
              <p className="text-sm text-secondary-light">{item.label}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-12 text-center bg-primary bg-opacity-10 p-6 rounded-xl"
      >
        <p className="text-xl text-secondary">
          Ces chiffres parlent d'eux-mêmes : Menu Cool apporte des résultats concrets et
          tangibles, transformant réellement l'expérience des restaurants et de leurs clients.
        </p>
      </motion.div>
    </SlideWrapper>
  );
}

export default Slide9Traction;
