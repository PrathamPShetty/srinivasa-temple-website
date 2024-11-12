import React, { useState, useEffect } from "react";

const CarouselSlidesOnly: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [
    { src: "/canva/image1.jpg", alt: "Slide 1" },
    { src: "/canva/image2.jpg", alt: "Slide 2" },
    { src: "/canva/image3.jpg", alt: "Slide 3" },
  ];

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Change slides every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div id="default-carousel sm:mt-32" className="relative w-full">
      <div className="relative  sm:my-32 h-56 overflow-hidden rounded-lg md:h-96">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`duration-700 ease-in-out ${index === activeIndex ? "block" : "hidden"}`}
          >
            <img
              src={slide.src}
              className="absolute block w-full sm:w-auto sm:h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt={slide.alt}
            />
          </div>
        ))}
      </div>

      {/* Carousel Indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full ${index === activeIndex ? "bg-white" : "bg-gray-400"}`}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Carousel Navigation */}
      <button
        type="button"
        onClick={handlePrev}
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60">
          <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1L1 5l4 4" />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>

      <button
        type="button"
        onClick={handleNext}
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60">
          <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 9l4-4-4-4" />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default CarouselSlidesOnly;
