import React, { useState } from "react";

export default function ProjectCard({ images, link, description }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="w-full max-w-md my-4 mx-auto sm:mx-3 flex-shrink-0 rounded-lg flex flex-col overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-700 dark:via-purple-700 dark:to-pink-700 shadow-lg transform hover:scale-105 transition-all duration-300"
    >
      <div className="relative w-full flex items-center">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute left-0 z-10 p-2 bg-black bg-opacity-50 rounded-full text-white dark:bg-white dark:bg-opacity-50 dark:text-black"
        >
          &#60;
        </button>

        <div className="flex w-full overflow-x-auto scroll-smooth snap-x">
          {images.map((image, index) => (
            <div
              key={index}
              className={`flex-none w-full snap-start`}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              <img
                src={image.url}
                alt={`Project ${index}`}
                className="w-full h-full object-contain rounded-md"
              />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute right-0 z-10 p-2 bg-black bg-opacity-50 rounded-full text-white dark:bg-white dark:bg-opacity-50 dark:text-black"
        >
          &#62;
        </button>
      </div>

      <p className="text-white text-center px-4 py-2 text-sm sm:text-base dark:text-gray-300">
        {description}
      </p>
    </a>
  );
}
