import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Cards: React.FC = () => {
  const cardData = [
    { id: 1, title: "Gallery", description: "Discover the rich history and serene ambiance of our sacred temple.", tag: "#gallery", link: "/gallery", gradient: "from-sky-400 to-emerald-600" },
    { id: 2, title: "Idol Details", description: "Learn about the sacred idols worshipped in the temple, each with unique significance.", tag: "#idol", link: "/idol-details", gradient: "from-purple-400 to-pink-600" },
    { id: 3, title: "Pooja Timings", description: "Get the schedule of daily poojas and rituals conducted in the temple.", tag: "#pooja", link: "/poojaTimings", gradient: "from-orange-400 to-yellow-600" },
    { id: 4, title: "Temple History", description: "Explore the origins and historical importance of our temple.", tag: "#history", link: "/temple-history", gradient: "from-teal-400 to-blue-600" }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:ml-40 gap-8 mt-8">
      {cardData.map((card) => (
        <Link href={card.link} key={card.id}>
          <motion.div
            className={`max-w-sm rounded overflow-hidden shadow-lg bg-gradient-to-r ${card.gradient} m-4 cursor-pointer`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            aria-label={`Link to ${card.title} page`}
          >
            <div className="px-6 py-4">
              <div className="font-bold text-white text-xl mb-2">{card.title}</div>
              <p className="text-white text-base">{card.description}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {card.tag}
              </span>
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
  );
};

export default Cards;
