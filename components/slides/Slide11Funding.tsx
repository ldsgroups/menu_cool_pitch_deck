import React from 'react';
import { motion } from 'framer-motion';
import { FaCodeBranch, FaBullhorn, FaUsers, FaPiggyBank } from 'react-icons/fa';
import { SlideWrapper, SlideTitle, Card, Icon } from '@/components';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const Slide11Funding: React.FC = () => {
  const fundingAllocation = [
    { name: 'Développement produit', value: 40, color: '#8CC63F', icon: FaCodeBranch },
    { name: 'Marketing', value: 35, color: '#4CAF50', icon: FaBullhorn },
    { name: 'Opérations', value: 15, color: '#FFC107', icon: FaUsers },
    { name: 'Réserve stratégique', value: 10, color: '#2196F3', icon: FaPiggyBank },
  ];

  return (
    <SlideWrapper>
      <SlideTitle>Investissement pour l'Avenir</SlideTitle>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <Card className="mb-6">
          <h3 className="text-xxl font-bold text-secondary">Montant Recherché</h3>
          <p className="text-2xl font-bold text-primary mb-2">4 000 000 FCFA</p>
          <p className="text-sm text-secondary-light">
            Pour passer à la vitesse supérieure et révolutionner la restauration en Afrique de l'Ouest.
          </p>
        </Card>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Card>
            <h3 className="text-2xl font-bold mb-4 text-secondary">Allocation des Fonds</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={fundingAllocation}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {fundingAllocation.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {fundingAllocation.map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 + index * 0.1 }}
            >
              <Card className="flex flex-col items-center justify-center h-full">
                <div className="mb-3 bg-primary bg-opacity-10 p-3 rounded-full">
                  <Icon Icon={item.icon} className="text-primary text-2xl" />
                </div>
                <p className="font-semibold text-secondary text-center">{item.name}</p>
                <p className="text-2xl font-bold text-primary">{item.value}%</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}

export default Slide11Funding;
