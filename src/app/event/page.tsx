'use client';
import { motion } from 'framer-motion';
import Appheader from '@/components/Appheader';
import { useLanguage } from '@/context/LanguageContext';

const images = [
    '/images/1.jpeg',
    '/images/2.jpeg',
    '/images/3.jpeg',
    '/images/4.jpeg',
    '/images/5.jpeg',
    '/images/6.png',
    '/images/7.jpeg',
    '/images/8.jpeg',
    '/images/9.jpg',
    '/images/10.jpg',
    '/images/11.jpg',
    '/images/12.jpg',
    '/images/13.jpg',
    '/images/14.jpg',
    '/images/15.jpg',
    '/images/16.jpg',
    '/images/17.jpg',
    '/images/18.jpg',
    '/images/19.jpg',
    '/images/20.jpg',
    '/images/21.jpg',
    '/images/22.jpg',
    '/images/23.jpg',
    '/images/24.jpg',
    '/images/25.jpg',
    '/images/26.jpg',
    '/images/27.jpg',
    '/images/28.jpg',
    '/images/29.jpg',
    '/images/30.jpg',
    '/images/31.jpg'
  ];
  
  

const title = {
    english: [
      'Makar Sankranti',
      'Pongal',
      'Vasant Panchami (Saraswati Puja)',
      'Maha Shivaratri',
      'Holi',
      'Chaitra Navratri',
      'Gudi Padwa / Ugadi',
      'Rama Navami',
      'Hanuman Jayanti',
      'Mahavir Jayanti',
      'Akshaya Tritiya',
      'Narasimha Jayanti',
      'Ganga Dussehra',
      'Jyeshtha Purnima',
      'Guru Purnima',
      'Nag Panchami',
      'Raksha Bandhan',
      'Krishna Janmashtami',
      'Ganesh Chaturthi',
      'Pitru Paksha',
      'Sharad Navratri',
      'Durga Ashtami',
      'Dussehra (Vijayadashami)',
      'Karva Chauth',
      'Dhanteras',
      'Diwali (Lakshmi Puja)',
      'Govardhan Puja',
      'Bhai Dooj',
      'Kartik Purnima',
      'Geeta Jayanti',
      'Dhanu Sankranti'
    ],
    sanskrit: [
      'मकर संक्रांति',
      'पोंगल',
      'वसंत पंचमी (सरस्वती पूजा)',
      'महाशिवरात्रि',
      'होली',
      'चैत्र नवरात्रि',
      'गुड़ी पड़वा / उगादी',
      'राम नवमी',
      'हनुमान जयंती',
      'महावीर जयंती',
      'अक्षय तृतीया',
      'नरसिंह जयंती',
      'गंगा दशहरा',
      'ज्येष्ठ पूर्णिमा',
      'गुरु पूर्णिमा',
      'नाग पंचमी',
      'रक्षा बंधन',
      'कृष्ण जन्माष्टमी',
      'गणेश चतुर्थी',
      'पितृ पक्ष',
      'शरद नवरात्रि',
      'दुर्गा अष्टमी',
      'दशहरा (विजयादशमी)',
      'करवा चौथ',
      'धनतेरस',
      'दीवाली (लक्ष्मी पूजा)',
      'गोवर्धन पूजा',
      'भाई दूज',
      'कार्तिक पूर्णिमा',
      'गीता जयंती',
      'धनु संक्रांति'
    ]
  };
  
  const poojaList = {
    english: [
      'Harvest festival celebrating the sun\'s shift into Capricorn.',
      'Tamil harvest festival thanking the Sun God.',
      'Celebration of the goddess Saraswati, marking the arrival of spring.',
      'Dedicated to Lord Shiva, observed with fasting and night vigils.',
      'Festival of colors celebrating love and the victory of good over evil.',
      'Nine-day festival honoring the goddess Durga.',
      'Marathi and South Indian New Year, marking the arrival of spring.',
      'Birthday of Lord Rama.',
      'Birthday of Lord Hanuman.',
      'Birth anniversary of Lord Mahavira, founder of Jainism.',
      'Auspicious day for starting new ventures.',
      `Celebration of Lord Vishnu's Narasimha incarnation.`,
      'Celebrates the descent of the River Ganges from heaven to earth.',
      'Full moon day dedicated to Lord Vishnu and his consort, Goddess Lakshmi.',
      'Honors spiritual teachers and mentors.',
      'Worship of serpent deities for protection and prosperity.',
      'Celebration of sibling bonds with a protective thread.',
      'Marks the birth of Lord Krishna.',
      'Celebrates the birth of Lord Ganesha with grand processions and prayers.',
      'Fortnight dedicated to honoring ancestors.',
      'Nine-day festival celebrating Goddess Durga.',
      'Eighth day of Navratri honoring Goddess Durga’s power.',
      'Marks the victory of Lord Rama over Ravana.',
      'Fasting by married women for their husbands\' health and longevity.',
      'Start of Diwali, dedicated to wealth and prosperity.',
      'Festival of lights honoring Goddess Lakshmi.',
      'Worship of Lord Krishna and nature.',
      'Celebrates sibling bonds with prayers for protection.',
      'Auspicious day associated with Lord Vishnu and charity.',
      'Celebrates the teachings of the Bhagavad Gita.',
      'Transition of the Sun into Sagittarius, marking the harvest season in Odisha.'
    ],
    sanskrit: [
      'सूर्य का मकर राशि में प्रवेश का पर्व।',
      'सूर्य देव का आभार व्यक्त करने का तमिल पर्व।',
      'वसंत ऋतु के आगमन पर देवी सरस्वती की पूजा।',
      'भगवान शिव को समर्पित, उपवास और रात्रि जागरण के साथ।',
      'प्रेम और अच्छाई की बुराई पर विजय का पर्व।',
      'देवी दुर्गा को समर्पित नौ दिनों का पर्व।',
      'वसंत का आगमन, मराठी और दक्षिण भारतीय नव वर्ष।',
      'भगवान राम का जन्मदिवस।',
      'भगवान हनुमान का जन्मदिवस।',
      'जैन धर्म के संस्थापक भगवान महावीर की जन्म जयंती।',
      'नए कार्य प्रारंभ करने का शुभ दिन।',
      'भगवान विष्णु के नरसिंह अवतार का उत्सव।',
      'स्वर्ग से पृथ्वी पर गंगा नदी का अवतरण।',
      'भगवान विष्णु और देवी लक्ष्मी को समर्पित पूर्णिमा का दिन।',
      'आध्यात्मिक गुरुओं और शिक्षकों का सम्मान।',
      'सर्प देवताओं की पूजा और समृद्धि के लिए।',
      'रक्षा सूत्र के साथ भाई-बहन के बंधन का उत्सव।',
      'भगवान कृष्ण का जन्म उत्सव।',
      'भगवान गणेश का जन्मदिवस, भव्य शोभायात्रा और प्रार्थनाओं के साथ।',
      'पूर्वजों के सम्मान के लिए समर्पित पखवाड़ा।',
      'देवी दुर्गा का नौ दिनों का उत्सव।',
      'नवरात्रि का आठवां दिन, देवी दुर्गा की शक्ति का सम्मान।',
      'भगवान राम की रावण पर विजय का पर्व।',
      'पति की लंबी उम्र और स्वास्थ्य के लिए विवाहित महिलाओं का व्रत।',
      'धन और समृद्धि को समर्पित दीपावली का प्रारंभ।',
      'दीपों का त्योहार, देवी लक्ष्मी की पूजा।',
      'भगवान कृष्ण और प्रकृति की पूजा।',
      'प्रोटेक्शन के लिए भाई-बहन का पवित्र संबंध।',
      'भगवान विष्णु और दान के साथ जुड़ा शुभ दिन।',
      'भगवद गीता के उपदेशों का उत्सव।',
      'धनु राशि में सूर्य का प्रवेश, ओडिशा का फसल पर्व।'
    ]
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
          Spiritual Gatherings
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
               
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}