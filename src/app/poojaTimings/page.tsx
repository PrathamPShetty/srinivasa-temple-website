'use client';

import Appheader from '@/components/Appheader';
import { useLanguage } from '@/context/LanguageContext';

const table = {
    english: [
      { title1: 'Pooja Name', title2: 'Timing', title3: 'Price' },
    ],
    sanskrit: [
      { title1: 'पूजायाः नाम', title2: 'समयः', title3: 'मूल्यम्' },
    ],
  };
  const title = {
    english: [
      { title1: 'Our Pooja Offerings', title2: 'Choose a Pooja based on your preferences and schedule.' },
    ],
    sanskrit: [
      { title1: 'पूजायाः प्रकरणानि', title2: 'यत्र पूजां निवृत्तिपूर्वकं चयनं कुरुत' },
    ],
  };
  
  
const poojaList = {
  english: [
    { name: 'Ganesh Pooja', timing: '9:00 AM', price: '$50' },
    { name: 'Lakshmi Pooja', timing: '10:30 AM', price: '$75' },
    { name: 'Durga Pooja', timing: '12:00 PM', price: '$100' },
  ],
  sanskrit: [
    { name: 'गणेश पूजा', timing: '९:०० पूर्वाह्न', price: '५०₹' },
    { name: 'लक्ष्मी पूजा', timing: '१०:३० पूर्वाह्न', price: '७५₹' },
    { name: 'दुर्गा पूजा', timing: '१२:०० अपराह्न', price: '१००₹' },
  ],
};

export default function Home() {
  const { language } = useLanguage();

  return (
    <div>
      <Appheader />
      <br/>
      <div className="relative p-4 mt-5 sm:p-6 md:p-8 lg:p-12">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-xs sm:text-sm md:text-base text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <caption className="p-3 sm:p-4 md:p-5 text-base sm:text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
             {title[language][0].title1}
              <p className="mt-1 text-xs sm:text-sm md:text-base font-normal text-gray-500 dark:text-gray-400">
              {title[language][0].title2}
              </p>
            </caption>
            <thead className="text-xs sm:text-sm uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
              <th scope="col" className="px-3 sm:px-6 py-3">{table[language][0].title1}</th>
<th scope="col" className="px-3 sm:px-6 py-3">{table[language][0].title2}</th>
<th scope="col" className="px-3 sm:px-6 py-3">{table[language][0].title3}</th>

              </tr>
            </thead>
            <tbody>
              {poojaList[language].map((pooja, index) => (
                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-3 sm:px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {pooja.name}
                  </th>
                  <td className="px-3 sm:px-6 py-4">{pooja.timing}</td>
                  <td className="px-3 sm:px-6 py-4">{pooja.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="relative p-4 mt-2 sm:p-6 md:p-8 lg:p-12">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-xs sm:text-sm md:text-base text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <caption className="p-3 sm:p-4 md:p-5 text-base sm:text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
             {title[language][0].title1}
              <p className="mt-1 text-xs sm:text-sm md:text-base font-normal text-gray-500 dark:text-gray-400">
              {title[language][0].title2}
              </p>
            </caption>
            <thead className="text-xs sm:text-sm uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
              <th scope="col" className="px-3 sm:px-6 py-3">{table[language][0].title1}</th>
<th scope="col" className="px-3 sm:px-6 py-3">{table[language][0].title2}</th>
<th scope="col" className="px-3 sm:px-6 py-3">{table[language][0].title3}</th>

              </tr>
            </thead>
            <tbody>
              {poojaList[language].map((pooja, index) => (
                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-3 sm:px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {pooja.name}
                  </th>
                  <td className="px-3 sm:px-6 py-4">{pooja.timing}</td>
                  <td className="px-3 sm:px-6 py-4">{pooja.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div aria-hidden="true" className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
        <div className="blur-[106px] h-52 sm:h-100 md:h-70 lg:h-80 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
        <div className="blur-[106px] h-52 sm:h-100 md:h-70 lg:h-80 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
      </div>
    </div>
  );
}
