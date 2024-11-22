//import { useLanguage } from '../context/LanguageContext';
// import { motion } from 'framer-motion';

// const HeroSection: React.FC = () => {
//     const { language } = useLanguage();

//     const text: Record<typeof language, { title: string; description: string }> = {
//         english: {
//             title: "Srinivas Temple",
//             description: `Srinivas Institute of Technology (SIT), Mangalore, is associated with a temple dedicated to Lord Srinivasa. The temple is an integral part of the campus, offering a peaceful environment for students, faculty, and staff. It plays a significant role in campus life, allowing students to connect with spirituality and tradition amidst their academic pursuits.

//             The temple is often visited for prayers and religious functions. Many students and faculty members start their day with a visit to the temple, seeking blessings before classes and exams. Additionally, special occasions and festivals are celebrated with devotion, bringing the college community together.`,
//         },
//         sanskrit: {
//             title: "श्रीनिवास मंदिर",
//             description: `मंगलुरु स्थित श्रीनिवास प्रौद्योगिकी संस्थान (SIT) श्रीनिवास भगवान को समर्पित एक मंदिर से जुड़ा हुआ है। यह मंदिर परिसर का एक अभिन्न हिस्सा है, जो छात्रों, शिक्षकों और कर्मचारियों को शांति और आध्यात्मिकता प्रदान करता है। यह मंदिर संस्थान के जीवन में एक महत्वपूर्ण भूमिका निभाता है, जिससे छात्र अपने शैक्षणिक प्रयासों के बीच परंपरा और आध्यात्मिकता से जुड़ते हैं।

//             प्रार्थना और धार्मिक समारोहों के लिए मंदिर का अक्सर दौरा किया जाता है। कई छात्र और शिक्षक अपनी कक्षाओं और परीक्षाओं से पहले आशीर्वाद प्राप्त करने के लिए दिन की शुरुआत मंदिर से करते हैं। इसके अलावा, विशेष अवसरों और त्योहारों को समर्पण के साथ मनाया जाता है, जो कॉलेज समुदाय को एकजुट करता है।`,
//         },
//     };

//     return (
//         <div>
//             <div className="relative" id="home">
//                 <div className="relative w-full">
//                     <motion.img
//                         src="/hero/5.png"
//                         alt="Description"
//                         className="hidden sm:block w-full object-cover rounded-lg"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ duration: 1 }}
//                     />
//                     <motion.img
//                         className="object-cover w-full rounded-t-lg h-96 sm:hidden"
//                         src="/slider/images/10.jpg"
//                         alt="Noteworthy technology acquisitions"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ duration: 1 }}
//                     />  

//                     <div className="flex flex-col pt-4 md:absolute md:inset-0 md:flex-row justify-end items-center md:p-6 p-4 text-white bg-black bg-opacity-50 md:rounded-lg md:bg-opacity-0">
//                         <div className="mt-0 md:mt-0 flex flex-col items-center max-w-full md:max-w-lg lg:max-w-xl text-center">
//                             <motion.h2 
//                                 className="text-2xl sm:px-4 md:text-3xl lg:text-4xl font-bold"
//                                 initial={{ y: -50, opacity: 0 }}
//                                 animate={{ y: 0, opacity: 1 }}
//                                 transition={{ duration: 1 }}
//                             >
//                                 {text[language].title}
//                             </motion.h2>
//                             <motion.p
//                                 className="mt-2 text-base sm:px-4 md:text-lg lg:text-xl"
//                                 initial={{ y: 50, opacity: 0 }}
//                                 animate={{ y: 0, opacity: 1 }}
//                                 transition={{ duration: 1, delay: 0.5 }}
//                             >
//                                 {text[language].description}
//                             </motion.p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div aria-hidden="true" className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
//                 <div className="blur-[106px] h-70 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
//                 <div className="blur-[106px] h-75 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
//             </div>
//         </div>
//     );
// };

// export default HeroSection;



import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
    const { language } = useLanguage();

    const text: Record<typeof language, { title: string; description: string }> = {
        english: {
            title: "Srinivas Temple",
            description: `Srinivas Institute of Technology (SIT), Mangalore, is associated with a temple dedicated to Lord Srinivasa. The temple is an integral part of the campus, offering a peaceful environment for students, faculty, and staff. It plays a significant role in campus life, allowing students to connect with spirituality and tradition amidst their academic pursuits.

            The temple is often visited for prayers and religious functions. Many students and faculty members start their day with a visit to the temple, seeking blessings before classes and exams. Additionally, special occasions and festivals are celebrated with devotion, bringing the college community together.`,
        },
        sanskrit: {
            title: "श्रीनिवास मंदिर",
            description: `मंगलुरु स्थित श्रीनिवास प्रौद्योगिकी संस्थान (SIT) श्रीनिवास भगवान को समर्पित एक मंदिर से जुड़ा हुआ है। यह मंदिर परिसर का एक अभिन्न हिस्सा है, जो छात्रों, शिक्षकों और कर्मचारियों को शांति और आध्यात्मिकता प्रदान करता है। यह मंदिर संस्थान के जीवन में एक महत्वपूर्ण भूमिका निभाता है, जिससे छात्र अपने शैक्षणिक प्रयासों के बीच परंपरा और आध्यात्मिकता से जुड़ते हैं।

            प्रार्थना और धार्मिक समारोहों के लिए मंदिर का अक्सर दौरा किया जाता है। कई छात्र और शिक्षक अपनी कक्षाओं और परीक्षाओं से पहले आशीर्वाद प्राप्त करने के लिए दिन की शुरुआत मंदिर से करते हैं। इसके अलावा, विशेष अवसरों और त्योहारों को समर्पण के साथ मनाया जाता है, जो कॉलेज समुदाय को एकजुट करता है।`,
        },
    };

    return (
        <div>
            <div className="relative" id="home">
                <div className="relative w-full">
                    <motion.video
                        src="/hero/hero-video.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="hidden sm:block w-full object-cover rounded-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    />
                    <motion.video
                        src="/slider/videos/mobile-video.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="object-cover w-full rounded-t-lg h-96 sm:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    />  

                    <div className="flex flex-col pt-4 md:absolute md:inset-0 md:flex-row justify-end items-center md:p-6 p-4 text-white bg-black bg-opacity-50 md:rounded-lg md:bg-opacity-0">
                        <div className="mt-0 md:mt-0 flex flex-col items-center max-w-full md:max-w-lg lg:max-w-xl text-center">
                            <motion.h2 
                                className="text-2xl sm:px-4 md:text-3xl lg:text-4xl font-bold"
                                initial={{ y: -50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1 }}
                            >
                                {text[language].title}
                            </motion.h2>
                            <motion.p
                                className="mt-2 text-base sm:px-4 md:text-lg lg:text-xl"
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1, delay: 0.5 }}
                            >
                                {text[language].description}
                            </motion.p>
                        </div>
                    </div>
                </div>
            </div>
            <div aria-hidden="true" className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
                <div className="blur-[106px] h-70 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
                <div className="blur-[106px] h-75 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
            </div>
        </div>
    );
};

export default HeroSection;
