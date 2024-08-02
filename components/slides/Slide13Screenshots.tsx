  import React from 'react';
  import Image from 'next/image';
  import { motion } from 'framer-motion';
  import { SlideWrapper, SlideTitle } from '@/components';

  const screenshots = [
    { src: '/help-screen.jpg', alt: 'Home Screen' },
    { src: '/home-screen.jpg', alt: 'Basket Screen' },
    { src: '/promotion-screen.jpg', alt: 'Promotion Screen' },
  ];

  const Slide13Screenshots: React.FC = () => {
    return (
      <SlideWrapper>
        <div className="h-screen flex flex-col">
          <SlideTitle>Aperçu de l'Application</SlideTitle>
          <div className="flex-grow flex flex-col justify-center">
            <div className="grid grid-cols-3 gap-4 mb-6">
              {screenshots.map((screenshot, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="flex flex-col items-center"
                >
                  <div className="relative w-full aspect-[720/1346] max-w-[180px] mx-auto rounded-lg overflow-hidden shadow-lg bg-gray-100">
                    <Image
                      src={screenshot.src}
                      alt={screenshot.alt}
                      layout="fill"
                      objectFit="contain"
                      className="rounded-lg"
                    />
                  </div>
                  <p className="mt-2 text-sm font-semibold text-secondary">{screenshot.alt}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex items-center justify-center space-x-6"
            >
              <div className="bg-white p-0.5 rounded-2xl shadow-lg">
                <Image
                  src="/menu-cool-qr.png"
                  alt="QR Code Menu Cool"
                  width={100}
                  height={100}
                />
              </div>
              <div className="max-w-[200px]">
                <h3 className="text-lg font-bold text-secondary mb-2">Testez Menu Cool maintenant !</h3>
                <p className="text-sm text-secondary-light">
                  Scannez ce QR code pour découvrir l'expérience Menu Cool sur votre smartphone !
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </SlideWrapper>
    );
  };

  export default Slide13Screenshots;
