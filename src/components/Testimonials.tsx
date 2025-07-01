import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import { testimonials } from '../mockData';
import { useTheme } from './theme-provider';
import { colors } from '../colors';
import { getSectionBackground, sectionHeadingClass, sectionIconClass } from '../sectionStyles';

// Duplicate testimonials array for seamless looping
const duplicatedTestimonials = [...testimonials, ...testimonials];

export const Testimonials: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [animationDistance, setAnimationDistance] = useState(0);
  const { theme } = useTheme();
  const backgroundColor = getSectionBackground(theme, colors);

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
      style={{ backgroundColor }}
    >
      <div className="container mx-auto max-w-6xl px-4 text-center">
        {/* Title */}
        <motion.div
          className="flex items-center justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <MessageSquare className={sectionIconClass} />
          <h2 className={sectionHeadingClass}>Testimonials</h2>
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
