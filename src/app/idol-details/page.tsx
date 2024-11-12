"use client";
import Appheader from '@/components/Appheader';
import Footer from '@/components/Footer';

export default function TempleOverview() {
  return (
    <>
      <Appheader />
      <br />
      <br />

      <div className="flex flex-col md:mt-4 items-center p-4 sm:p-6 md:p-8 lg:p-12 mt-5 max-w-3xl mx-auto">
        <h1 className="mb-6 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Temple Overview
          </span>
        </h1>

        <p className="mb-4 text-gray-500 dark:text-gray-400 text-base sm:text-lg md:text-xl">
          Welcome to our sacred temple, a serene oasis with a rich heritage that spans centuries. Nestled in a tranquil environment, the temple is a place of peace, spirituality, and devotion, drawing visitors and devotees from near and far.
        </p>
        <p className="mb-4 text-gray-500 dark:text-gray-400 text-base sm:text-lg md:text-xl">
          The temple is renowned for its intricate architecture and profound cultural significance. Within its hallowed halls, you&apos;ll find ancient idols, each representing unique aspects of divinity, embodying the timeless essence of faith and tradition.
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-base sm:text-lg md:text-xl">
          Visitors can participate in daily poojas, experience the spiritual ambiance, and immerse themselves in the temple&apos;s rituals and festivals. We invite you to explore, connect, and find solace in this timeless sanctuary dedicated to divine grace and community harmony.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl md:text-4xl">
          The Sacred Srinivas Idol
        </h2>
        <p className="mb-4 text-gray-500 dark:text-gray-400 text-base sm:text-lg md:text-xl">
          At the heart of our temple lies the revered Srinivas Idol, a symbol of divine grace and power. This sacred idol, crafted with exquisite artistry, holds a deep spiritual significance and is revered by devotees for its blessings of prosperity, wisdom, and peace. The idol embodies the essence of Lord Vishnu, the protector, who is worshipped here with utmost devotion and reverence.
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-base sm:text-lg md:text-xl">
          The Srinivas Idol stands as a beacon of hope and faith, drawing visitors to witness its serene presence and partake in the temple&apos;s holy rituals. Join us in celebrating the timeless connection between the divine and the devoted, and experience the blessings of the Srinivas Idol.
        </p>
      </div>

      <Footer />
    </>
  );
}
