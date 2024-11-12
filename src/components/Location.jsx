import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Location = () => {
  return (
    <div className="flex flex-col p-6 md:p-8 lg:p-12">
      {/* Background gradients */}
      <motion.div
        className="blur-[106px] h-5 sm:h-100 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
      />
      <motion.div
        className="blur-[106px] h-3 sm:h-75 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
      />

      {/* Content section with space between elements */}
      <motion.div
        className="space-y-6 justify-between text-gray-600 md:flex flex-row-reverse md:gap-6 md:space-y-0 lg:gap-12 lg:items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        {/* Video section */}
        <motion.div
          className="md:w-5/12 lg:w-1/2 mb-6 md:mb-0"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="relative w-full h-0" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/usGayJwad5M?controls=1&autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
        </motion.div>

        {/* Text content */}
        <motion.div
          className="md:w-7/12 lg:w-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white mb-4">
            Discover the Spiritual Serenity of Srinivas Temple
          </h2>
          <p className="my-8 text-gray-600 dark:text-gray-300">
            Located within the Valachil campus, the Srinivas Temple is a center of spiritual peace and cultural heritage. The temple is renowned for its serene environment and intricate architecture that reflects traditional styles.
            <br /><br />
            Experience the daily rituals, connect with a vibrant community, and immerse yourself in the tranquil surroundings that inspire devotion and unity.
          </p>

          {/* Features section with margin */}
          <div className="divide-y space-y-4 divide-gray-100 dark:divide-gray-800">
            <motion.div
              className="mt-8 flex gap-4 md:items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <Link
                href="/poojaTimings"
                className="w-full flex gap-4 items-center"
              >
                <div className="w-12 h-12 flex gap-4 rounded-full bg-indigo-100 dark:bg-indigo-900/20">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 m-auto text-indigo-500 dark:text-indigo-400">
                    <path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="w-5/6">
                  <h4 className="font-semibold text-lg text-gray-700 dark:text-indigo-300">Pooja Timings</h4>
                  <p className="text-gray-500 dark:text-gray-400">View the daily pooja schedule for the Srinivas Temple.</p>
                </div>
              </Link>
            </motion.div>

            <motion.div
              className="pt-4 flex gap-4 md:items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              <a
                href="https://maps.app.goo.gl/cFrkLRAYJUU72pmD6"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex gap-4 items-center"
              >
                <div className="w-12 h-12 flex rounded-full bg-teal-100 dark:bg-teal-900/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 m-auto text-teal-600 dark:text-teal-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="w-5/6">
                  <h4 className="font-semibold text-lg text-gray-700 dark:text-teal-300">
                    Real-Time Location
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400">
                    Find directions to the Srinivas Temple in Valachil campus.
                  </p>
                </div>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Location;
