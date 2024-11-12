import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const Management = () => {
  const { language } = useLanguage();
  
  const content: Record<typeof language, { title: string; name: string; position: string; description: string }> = {
    sanskrit: {
      title: "भक्तिसमिति",
      name: "श्री डॉ. सी. ए. राघवेंद्र राव",
      position: "चांसलर, श्रीनिवास विश्वविद्यालय एवं अध्यक्ष, ए. शामा राव फाउंडेशन, मंगलुरु",
      description: "मम लक्ष्यं समाजं शिक्षायाम् रूपांतरितुम् अस्ति, गतिशील संतुलनस्य समवायेन शैक्षिक संस्थानानि स्थापनं कृत्वा, शिक्षायाम्, अनुसंधानं च प्रौद्योगिकी सेवायाः क्षेत्रे निरंतर उत्कर्षं साधयन्ति।"
    },
    english: {
      title: "Devotional Committee",
      name: "Shri Dr. CA A. Raghavendra Rao",
      position: "Chancellor, Srinivas University & President A. Shama Rao Foundation, Mangaluru",
      description: "My aim is to transform Society through education by setting up academic institutions in dynamic equilibrium with its social, ecological and economic environment striving continuously for excellence in education, research and technological service to the nation."
    },
  };

  return (
    <div className="flex flex-col mt-16 items-center p-2">
      {/* Animated Title */}
      <motion.h1
        className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          {content[language].title}
        </span>
      </motion.h1>

      {/* Animated Card with Image and Text */}
      <motion.a 
        href="#" 
        className="m-4 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Image Section */}
        <motion.img
          className="object-cover w-full z-40 rounded-t-lg h-96 md:h-auto md:w-52 md:rounded-none md:rounded-s-lg"
          src="/hero/President.png"
          alt="Noteworthy technology acquisitions"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
        
        {/* Text Section */}
        <div className="flex flex-col justify-between p-4 leading-normal">
          <motion.h5
            className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {content[language].name}
          </motion.h5>

          <motion.p
            className="mb-3 font-normal text-gray-700 dark:text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {content[language].position}
          </motion.p>

          <motion.p
            className="mb-3 font-normal text-white-700 dark:text-white-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {content[language].description}
          </motion.p>
        </div>
      </motion.a>
    </div>
  );
}

export default Management;
