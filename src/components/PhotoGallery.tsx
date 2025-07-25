import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './theme-provider';
import { colors } from '../colors';
import { Camera } from 'lucide-react';

interface Photo {
  src: string;
  title: string;
  description?: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
  autoPlayInterval?: number; // in milliseconds, optional
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({
  photos,
  autoPlayInterval = 5000,
}) => {
  const { theme } = useTheme();

  const [currentIndex, setCurrentIndex] = useState(0);

  // Use useCallback for memoization of nav handlers
  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  }, [photos.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  }, [photos.length]);

  // Auto-play effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [photos.length, autoPlayInterval]);

  // Keyboard navigation for accessibility
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'ArrowLeft') {
        goToPrevious();
      } else if (event.key === 'ArrowRight') {
        goToNext();
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToPrevious, goToNext]);

  const currentPhoto = photos[currentIndex];

  return (
    <section
      id="gallery"
      className="py-24 relative overflow-hidden transition-colors duration-500"
      style={{ backgroundColor: theme === 'dark' ? colors.background.dark : colors.background.light, }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-indigo-200/30 to-purple-300/30 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-pink-200/30 dark:from-purple-900/20 dark:to-pink-900/20 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Header */}
          <div className="flex items-center gap-4 mb-16">
            <Camera className="text-indigo-600 dark:text-pink-400 drop-shadow animate-bounce" />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent drop-shadow-lg transition-transform duration-300 hover:scale-105">
              Photo Gallery
            </h2>
          </div>

          {/* Image container */}
          <div className="relative max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg border border-border-light dark:border-border-dark select-none">
            <div className="relative h-[384px]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={currentPhoto.src}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                  className="absolute top-0 left-0 w-full h-full"
                  aria-live="polite"
                  aria-atomic="true"
                >
                  <img
                    src={currentPhoto.src}
                    alt={currentPhoto.title}
                    className="w-full h-96 object-cover"
                    style={{ width: '100%', height: '384px', objectFit: 'cover' }}
                    draggable={false}
                  />

                  {currentPhoto.description && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white text-sm">
                      {currentPhoto.description}
                    </div>
                  )}

                  <div className="p-4 bg-surface-light dark:bg-surface-dark">
                    <h3
                      className="text-xl font-bold mb-1 bg-clip-text text-transparent"
                      style={{
                        backgroundImage: `linear-gradient(to right, ${colors.primary.light}, ${colors.accent.light})`,
                      }}
                    >
                      {currentPhoto.title}
                    </h3>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={goToPrevious}
              aria-label="Previous photo"
              className="absolute top-1/2 left-4 transform -translate-y-1/2 
                         bg-gradient-to-br from-purple-500 to-indigo-600 
                         text-white rounded-full p-3 shadow-xl 
                         hover:from-indigo-600 hover:to-purple-500 
                         focus:outline-none focus:ring-4 focus:ring-indigo-300 
                         transition-all duration-300 ease-in-out"
              type="button"
              tabIndex={0}
            >
              &#8592;
            </button>

            <button
              onClick={goToNext}
              aria-label="Next photo"
              className="absolute top-1/2 right-4 transform -translate-y-1/2 
                         bg-gradient-to-br from-purple-500 to-indigo-600 
                         text-white rounded-full p-3 shadow-xl 
                         hover:from-indigo-600 hover:to-purple-500 
                         focus:outline-none focus:ring-4 focus:ring-indigo-300 
                         transition-all duration-300 ease-in-out"
              type="button"
              tabIndex={0}
            >
              &#8594;
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

