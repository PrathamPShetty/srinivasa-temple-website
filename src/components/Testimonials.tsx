import React from 'react';
import { motion } from 'framer-motion';






const testimonialsData = [
  {
    name: 'Daniella Doe',
    role: 'Mobile dev',
    image: './images/avatars/avatar.webp',
    testimonial: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid quo eum quae quos illo earum ipsa doloribus nostrum minus libero aspernatur laborum cum, a suscipit, ratione ea totam ullam!',
  },
  {
    name: 'Jane Doe',
    role: 'Marketing',
    image: './images/avatars/avatar-1.webp',
    testimonial: 'Lorem ipsum dolor laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.',
  },
  {
    name: 'Yanick Doe',
    role: 'Developer',
    image: './images/avatars/avatar-2.webp',
    testimonial: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.',
  },
  {
    name: 'Jane Doe',
    role: 'Mobile dev',
    image: './images/avatars/avatar-3.webp',
    testimonial: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.',
  },
  {
    name: 'Andy Doe',
    role: 'Manager',
    image: './images/avatars/avatar-4.webp',
    testimonial: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.',
  },
  {
    name: 'Yanndy Doe',
    role: 'Mobile dev',
    image: './images/avatars/avatar-2.webp',
    testimonial: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.',
  },
];

const Testimonials = () => {
  return (
    <div className="text-gray-600 dark:text-gray-300 p-6" id="testimonials">
      <div className="mb-10 space-y-4">
        <div className="blur-[106px] h-5 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
        <div className="blur-[106px] h-3 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
        <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
        Spiritual Gatherings
        </h2>
      </div>

      <motion.div 
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {testimonialsData.map((testimonial, index) => (
          <motion.div
            key={index}
            className="p-6 mb-6 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="flex gap-4">
              <img
                className="w-12 h-12 rounded-full"
                src={testimonial.image}
                alt={`${testimonial.name} avatar`}
                width="400"
                height="400"
                loading="lazy"
              />
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-white">{testimonial.name}</h6>
                <p className="text-sm text-gray-500 dark:text-gray-300">{testimonial.role}</p>
              </div>
            </div>
            <p className="mt-4">{testimonial.testimonial}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Testimonials;
