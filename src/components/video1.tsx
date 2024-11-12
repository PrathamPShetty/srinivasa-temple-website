import React from 'react';
import { motion } from 'framer-motion';

const video = [
  '/videos/11.mp4',
  '/videos/3.mp4',
  '/videos/5.mp4',
  '/videos/6.mp4',
  '/videos/7.mp4',
  '/videos/22.mp4',
  '/videos/11.mp4',

  
]

const VideoComponent = () => {
  return (
    <div className="max-w-full p-4">
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {video.map((videoSrc, index) => (
          <motion.div
            key={index}
            className="h-64 lg:h-80 flex-none bg-cover rounded-lg text-center overflow-hidden"
            style={{ padding: '10px' }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <video
              className="object-cover w-full h-full"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default VideoComponent;
