'use client';
import { motion } from 'framer-motion';
import Appheader from '@/components/Appheader';
import { useLanguage } from '@/context/LanguageContext';

const images = [
  '/dasha/1.jpg',
  '/dasha/2.jpg',
  '/dasha/3.jpg',
  '/dasha/4.jpg',
  '/dasha/5.jpg',
  '/dasha/6.jpg',
  '/dasha/7.jpg',
  '/dasha/8.jpg',
  '/dasha/9.jpg',
  '/dasha/10.jpg',
];

const title = {
  english: [
    'Matsya - The Fish Avatar',
    'Kurma - The Tortoise Avatar',
    'Varaha - The Boar Avatar',
    'Narasimha - The Man-Lion Avatar',
    'Vamana - The Dwarf Avatar',
    'Parashurama - The Warrior Avatar',
    'Rama - The Prince of Ayodhya',
    'Krishna - The Divine Statesman',
    'Buddha - The Enlightened One',
    'Kalki - The Future Warrior',
  ],
  sanskrit: [
    'मत्स्य - मीनावतार',
    'कूर्म - कूर्मावतार',
    'वराह - वराहावतार',
    'नरसिंह - नरसिंहावतार',
    'वामन - वामनावतार',
    'परशुराम - योद्धावतार',
    'राम - अयोध्या के राजकुमार',
    'कृष्ण - दिव्य राजनीतिज्ञ',
    'बुद्ध - बुद्धावतार',
    'कल्कि - भविष्य के योद्धा',
  ],
};

const poojaList = {
  english: [
    'The avatar who saved the world from a great flood',
    'The avatar who supported Mount Mandara',
    'The avatar who rescued the earth from Hiranyaksha',
    'The avatar who defeated the demon Hiranyakashipu',
    'The dwarf who humbled the king Bali',
    'The warrior who protected the sages',
    'The prince who fought for dharma',
    'The diplomat who guided the Pandavas',
    'The sage who taught compassion',
    'The future avatar who will end the Kali Yuga',
  ],
  sanskrit: [
    'जिसने महाप्रलय से संसार की रक्षा की',
    'जिसने मन्दर पर्वत को समर्थन दिया',
    'जिसने हिरण्याक्ष से पृथ्वी की रक्षा की',
    'जिसने हिरण्यकशिपु का संहार किया',
    'जिसने बलि को अभिमान से मुक्त किया',
    'जिसने ऋषियों की रक्षा की',
    'धर्म के लिए लड़ने वाले राजकुमार',
    'पांडवों का मार्गदर्शक',
    'करुणा का उपदेश देने वाले',
    'कलियुग का अंत करने वाले भविष्य के अवतार',
  ],
};

export default function Home() {
  const { language } = useLanguage();
  return (
    <div>
      <Appheader />
      <br />
      <br />
      <br />

      <div className="flex flex-col items-center p-2">
        <motion.h1
          className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: -20 }} // Start with opacity 0 and slightly above
          animate={{ opacity: 1, y: 0 }}   // Fade in and move into place
          transition={{ duration: 1 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Dashavatara
          </span>
        </motion.h1>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              initial={{ opacity: 0, scale: 0.8 }} // Start with smaller and hidden
              animate={{ opacity: 1, scale: 1 }}   // Fade in and scale up
              transition={{ duration: 0.5, delay: index * 0.1 }} // Add slight delay for each item
            >
              <a href="#">
                <img className="rounded-t-lg w-full h-80 object-cover" src={image} alt={title[language][index]} />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {title[language][index]}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {poojaList[language][index]}
                </p>
                <a
                  href={`/dashavatara/information/${index}`}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}