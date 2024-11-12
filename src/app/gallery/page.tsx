"use client";
import React, { useState, useEffect, useRef } from "react";
import Appheader from "@/components/Appheader";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

// Image array
const images = [
  "/gallery/1.jpg",
  "/gallery/2.jpg",
  "/gallery/66.jpg",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
  "/gallery/5.jpg",
  "/gallery/6.jpg",
  "/gallery/7.jpg",
  "/gallery/8.jpg",
  "/gallery/9.jpg",
  "/gallery/10.jpg",
  "/gallery/11.jpg",
  "/gallery/12.jpg",
  "/gallery/13.jpg",
  "/gallery/14.jpg",
  "/gallery/15.jpg",
  "/gallery/16.jpg",
  "/gallery/17.jpg",
  "/gallery/18.jpg",
  "/gallery/19.jpg",
  "/gallery/20.jpg",
  "/gallery/21.jpg",
  "/gallery/22.jpg",
  "/gallery/23.jpg",
  "/gallery/24.jpg",
  "/gallery/25.jpg",
  "/gallery/26.jpg",
  "/gallery/27.jpg",
  "/gallery/28.jpg",
  "/gallery/29.jpg",
  "/gallery/30.jpg",
  "/gallery/31.jpg",
  "/gallery/32.jpg",
  "/gallery/33.jpg",
  "/gallery/34.jpg",
  "/gallery/35.jpg",
  "/gallery/36.jpg",
  "/gallery/37.jpg",
  "/gallery/38.jpg",
  "/gallery/39.jpg",
  "/gallery/40.jpg",
  "/gallery/41.jpg",
  "/gallery/42.jpg",
  "/gallery/43.jpg",
  "/gallery/44.jpg",
  "/gallery/45.jpg",
  "/gallery/46.jpg",
  "/gallery/47.jpg",
  "/gallery/48.jpg",
  "/gallery/49.jpg",
  "/gallery/50.jpg",
  "/gallery/51.jpg",
  "/gallery/52.jpg",
  "/gallery/53.jpg",
  "/gallery/54.jpg",
  "/gallery/55.jpg",
  "/gallery/56.jpg",
  "/gallery/57.jpg",
  "/gallery/58.jpg",
  "/gallery/59.jpg",
  "/gallery/60.jpg",
  "/gallery/61.jpg",
  "/gallery/62.jpg",
  "/gallery/63.jpg",
  "/gallery/64.jpg",
  "/gallery/65.jpg",


];


// Function to chunk the array of images
const chunkArray = <T,>(arr: T[], size: number): T[][] => {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

export default function TempleOverview() {
  const imageChunks = chunkArray(images, 6);
  const [visibleChunks, setVisibleChunks] = useState([imageChunks[0]]);
  const [loading, setLoading] = useState(false); // Loading state
  const sentinelRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          loadNextChunk();
        }
      },
      { rootMargin: "100px" }
    );

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => {
      if (sentinelRef.current) {
        observer.unobserve(sentinelRef.current);
      }
    };
  }, [loading]);

  const loadNextChunk = () => {
    setLoading(true); // Set loading state to true while fetching more images
    const nextChunkIndex = visibleChunks.length;

    if (nextChunkIndex < imageChunks.length) {
      setTimeout(() => {
        setVisibleChunks((prevChunks) => [...prevChunks, imageChunks[nextChunkIndex]]);
        setLoading(false); // Reset loading state after images are fetched
      }, 1000); // Simulate network delay
    }
  };

  return (
    <>
      <Appheader />
      <div className="flex flex-col md:mt-4 items-center p-4 sm:p-6 md:p-8 lg:p-12 mt-5 max-w-3xl mx-auto">
        <motion.h1
          className="mb-6 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl md:text-5xl lg:text-6xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Gallery
          </span>
        </motion.h1>
      </div>

      <div className="p-6 grid gap-6 max-w-6xl mx-auto">
        {visibleChunks.map((chunk, chunkIndex) => (
          <motion.div
            key={chunkIndex}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {chunk.map((image, index) => (
              <motion.div
                key={index}
                className="p-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img
                  src={image}
                  alt={`Temple image ${index + 1}`}
                  className="w-full h-auto rounded-lg shadow-lg"
                  loading="lazy" // Lazy load the images
                />
              </motion.div>
            ))}
          </motion.div>
        ))}
      </div>

      {/* Display a loading indicator when more images are being fetched */}
      {loading && <div className="text-center py-4">Loading more images...</div>}

      <div ref={sentinelRef} style={{ height: "20px" }} />
      <Footer />
    </>
  );
}
