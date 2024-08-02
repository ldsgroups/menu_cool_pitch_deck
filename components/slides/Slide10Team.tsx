// components/slides/Slide10Team.tsx
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SlideWrapper, SlideTitle, Card, Icon } from '@/components';

const Slide10Team: React.FC = () => {
  const teamMembers = [
    {
      name: "Darius Kassi",
      role: "Fondateur & Développeur",
      image: "/darius-kassi.png",
      bio: "Ancien développeur chez SODISMADCI, passionné par la transformation digitale de la restauration.",
      linkedin: "https://www.linkedin.com/in/darius-kassi"
    },
    {
      name: "Fédilice Yapo",
      role: "Expert en Marketing Digital",
      image: "/fedilice-yapo.png",
      bio: "As du marketing digital, complémente parfaitement les compétences techniques de Darius.",
      linkedin: "https://www.linkedin.com/in/fedilice-yapo"
    }
  ];

  return (
    <SlideWrapper>
      <SlideTitle>Un Duo Imbattable</SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.2 + 0.4 }}
          >
            <Card className="flex flex-col items-center">
              <Image
                src={member.image}
                alt={member.name}
                width={112}
                height={112}
                className="rounded-full mb-4 border-4 border-primary w-28 h-28"
              />
              <h3 className="text-2xl font-semibold text-secondary">{member.name}</h3>
              <p className="text-primary font-medium">{member.role}</p>
              <p className="text-secondary-light mb-6 text-center mt-4">{member.bio}</p>
              {/* <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark transition-colors">
                <Icon Icon={FaLinkedin} />
              </a> */}
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
          Ensemble, nous formons un duo imbattable, alliant expertise technique et marketing
          pour conquérir le marché de la restauration digitale en Afrique de l'Ouest.
        </p>
      </motion.div>
    </SlideWrapper>
  );
}

export default Slide10Team;
