'use client';
import Appheader from '../components/Appheader';
import Footer from '../components/Footer';
import Hero from '../components/HeroSection';
import Testimonials from '../components/Testimonials';
import Location from '../components/Location';
import Slider from '../components/Slider';
import Management from '../components/Management';
import Form from '../components/form';
import Cards from '../components/Cards';
import Video from '../components/video';
import Video1 from '../components/video1';
import CarouselSlidesOnly from '../components/CarouselSlidesOnly';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

export default function Home() {
  return (
    <div>
      <Appheader />

      <ToastContainer />

      <motion.div initial="hidden" animate="visible" transition={{ duration: 0.6 }} variants={fadeInUp}>
        <Hero />
      </motion.div>

      <motion.div initial="hidden" animate="visible" transition={{ duration: 0.6, delay: 0.4 }} variants={fadeInUp}>
        <Video />
      </motion.div>

      <motion.div initial="hidden" animate="visible" transition={{ duration: 0.6, delay: 0.4 }} variants={fadeInUp}>
        <Location />
      </motion.div>

      <motion.div initial="hidden" animate="visible" transition={{ duration: 0.6, delay: 0.6 }} variants={fadeInUp}>
        <CarouselSlidesOnly />
      </motion.div>

      <motion.div initial="hidden" animate="visible" transition={{ duration: 0.6, delay: 0.8 }} variants={fadeInUp}>
        <Slider />
      </motion.div>

      <motion.div initial="hidden" animate="visible" transition={{ duration: 0.6, delay: 1.0 }} variants={fadeInUp}>
        <Cards />
      </motion.div>

      <motion.div initial="hidden" animate="visible" transition={{ duration: 0.6, delay: 1.2 }} variants={fadeInUp}>
        <Management />
      </motion.div>

      <motion.div initial="hidden" animate="visible" transition={{ duration: 0.6, delay: 1.4 }} variants={fadeInUp}>
        <Testimonials />
      </motion.div>

      <motion.div initial="hidden" animate="visible" transition={{ duration: 0.6, delay: 1.6 }} variants={fadeInUp}>
        <Form />
      </motion.div>
      <motion.div initial="hidden" animate="visible" transition={{ duration: 0.6, delay: 1.6 }} variants={fadeInUp}>
        <Video1/>
      </motion.div>

      <Footer />
    </div>
  );
}
