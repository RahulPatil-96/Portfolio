import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import { testimonials } from '../mockData';
import { useTheme } from './theme-provider';
import { colors } from '../colors';

// Duplicate testimonials array for seamless looping
const duplicatedTestimonials = [...testimonials, ...testimonials];

export const Testimonials: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [animationDistance, setAnimationDistance] = useState(0);
  const { theme } = useTheme();

  const calculateDistance = () => {
    if (contentRef.current && containerRef.current) {
      const fullWidth = contentRef.current.scrollWidth;
      setAnimationDistance(fullWidth / 2);
    }
  };

  useEffect(() => {
    calculateDistance();

    // Recalculate on resize
    window.addEventListener('resize', calculateDistance);
    return () => window.removeEventListener('resize', calculateDistance);
  }, []);

  useEffect(() => {
    if (animationDistance > 0) {
      controls.start({
        x: [0, -animationDistance],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: animationDistance / 50, // 50px/sec
            ease: 'linear',
          },
        },
      });
    }
  }, [animationDistance, controls]);

  return (
    <section
      id="testimonials"
      className="py-24 relative overflow-hidden transition-colors duration-500"
      style={{ backgroundColor: theme === 'dark' ? colors.background.dark : colors.background.light, }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-indigo-200/30 to-purple-300/30 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-pink-200/30 dark:from-purple-900/20 dark:to-pink-900/20 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto max-w-6xl px-4 text-center">
        {/* Title */}
        <motion.div
          className="flex items-center justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <MessageSquare className="text-indigo-600 dark:text-pink-400 drop-shadow animate-bounce" />
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent drop-shadow-lg transition-transform duration-300 hover:scale-105">
            Testimonials
          </h2>
        </motion.div>

        {/* Scrolling Testimonials */}
        <div ref={containerRef} className="overflow-hidden pb-4">
          <motion.div
            ref={contentRef}
            className="flex space-x-6"
            animate={controls}
            initial={{ x: 0 }}
          >
            {duplicatedTestimonials.map(({ id, name, role, message, avatarUrl }, index) => (
              <motion.div
                key={`${id}-${index}`}
                className="min-w-[280px] bg-background-light dark:bg-surface-dark rounded-xl shadow-md p-6 flex flex-col items-center text-center flex-shrink-0 border border-border-light dark:border-border-dark"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <img
                  src={avatarUrl || '/default-avatar.png'}
                  alt={name ? `${name}'s avatar` : 'Avatar'}
                  className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-primary-light dark:border-primary-dark"
                />
                <p className="text-text-light dark:text-text-dark italic mb-4">"{message}"</p>
                <p className="font-semibold text-text-light dark:text-text-dark">{name}</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">{role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
