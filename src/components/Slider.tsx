import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const images = [
  '/slider/images/11.jpg',
  '/slider/images/4.jpg',
  '/slider/images/3.jpg',
  '/slider/images/7.jpg',
  '/slider/images/5.jpg',
  '/slider/images/6.jpg',
  '/hero/1.png',
  '/slider/images/8.jpg',
  '/slider/images/2.jpg',
  '/slider/images/10.jpg',
  '/hero/2.jpg',
];

const ImageSlider: React.FC = () => {
  const marqueeStyles = {
    display: 'flex',
    animation: 'marquee 30s linear infinite',
  };

  const marqueeItemStyles = {
    padding: '0 10px', // Space between items
    flexShrink: 0,
  };

  return (
    <>
      {/* Slider Container */}
      <motion.div className="flex justify-center mb-8">
        <Link href="/dashavatara">
          <motion.button
            className="px-6 py-2 text-white font-semibold rounded-full bg-gradient-to-r from-sky-400 to-emerald-600 hover:from-emerald-600 hover:to-sky-400 transition duration-300"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            About Dashavatara
          </motion.button>
        </Link>
      </motion.div>
      <motion.div 
        style={{ width: '100%', overflow: 'hidden' }} 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Link href="/dashavatara">
          {/* Animated Marquee */}
          <motion.div 
            style={marqueeStyles}
            initial={{ x: '100%' }}
            animate={{ x: '-100%' }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          >
            {images.map((image, index) => (
              <motion.div
                key={index}
                style={marqueeItemStyles}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex justify-center items-center">
                  <motion.img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-72 md:h-72 object-cover rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Link>
      </motion.div>

      {/* Animated Button */}


      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </>
  );
};

export default ImageSlider;
