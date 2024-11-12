import React from 'react';
import { motion } from 'framer-motion';

// Define the shape of dashavatara data
interface DashavataraData {
  name: string;
  description: string;
  paragraph1: string;
  paragraph2: string;
  paragraph3: string;
  paragraph4: string;
  paragraph5: string;
}

// Define props expected by the Display component
interface DisplayProps {
  dashavatara: DashavataraData;
  imageSrc: string;
}

const Display: React.FC<DisplayProps> = ({ dashavatara, imageSrc }) => {
  return (
    <div className="flex flex-col items-center p-4 mt-10">
      <motion.h1
        className="mb-4 mt5 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          {dashavatara.name}
        </span>
      </motion.h1>

      {/* Animated Card Container */}
      <motion.div
        className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Animated Image */}
        <motion.img
          className="rounded-t-lg h-80 object-cover"
          src={imageSrc}
          alt={`${dashavatara.name} avatar`}
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        />
      </motion.div>

      {/* Animated Description and Paragraphs */}
      <motion.div
        className="mt-8 text-center text-lg text-gray-500 dark:text-gray-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="mb-4 text-base sm:text-lg md:text-xl">
          {dashavatara.description}
        </p>
        <p className="mb-4 text-base sm:text-lg md:text-xl">
          {dashavatara.paragraph1}
        </p>
        <p className="mb-4 text-base sm:text-lg md:text-xl">
          {dashavatara.paragraph2}
        </p>
        <p className="mb-4 text-base sm:text-lg md:text-xl">
          {dashavatara.paragraph3}
        </p>
        <p className="mb-4 text-base sm:text-lg md:text-xl">
          {dashavatara.paragraph4}
        </p>
        <p className="mb-4 text-base sm:text-lg md:text-xl">
          {dashavatara.paragraph5}
        </p>
      </motion.div>
    </div>
  );
};

export default Display;
