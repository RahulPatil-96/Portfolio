import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import {
  BookOpen, Coffee, Heart, Music, Server, LayoutDashboard, TerminalSquare, GitMerge, Brain
} from 'lucide-react';
import { useTheme } from './theme-provider';
import { colors } from '../colors';
import { getSectionBackground, sectionHeadingClass, sectionIconClass } from '../sectionStyles';

const interestIcons = {
  frontend: <LayoutDashboard className="w-6 h-6 stroke-current" aria-hidden="true" />,
  backend: <Server className="w-6 h-6 stroke-current" aria-hidden="true" />,
  devops: <TerminalSquare className="w-6 h-6 stroke-current" aria-hidden="true" />,
  collaboration: <GitMerge className="w-6 h-6 stroke-current" aria-hidden="true" />,
  learning: <BookOpen className="w-6 h-6 stroke-current" aria-hidden="true" />,
  coffee: <Coffee className="w-6 h-6 stroke-current" aria-hidden="true" />,
  passion: <Heart className="w-6 h-6 stroke-current" aria-hidden="true" />,
  focus: <Music className="w-6 h-6 stroke-current" aria-hidden="true" />,
};

interface Interest {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const AboutMe: React.FC = () => {
  const { theme } = useTheme();
  const backgroundColor = getSectionBackground(theme, colors);
  const [selectedInterest, setSelectedInterest] = useState<number | null>(null);

  const interests: Interest[] = [
    { icon: interestIcons.frontend, title: 'Frontend', description: 'Building beautiful, responsive UIs with React, TailwindCSS, and TypeScript.' },
    { icon: interestIcons.backend, title: 'Backend', description: 'Designing RESTful APIs and services with Node.js, Express, and PostgreSQL.' },
    { icon: interestIcons.devops, title: 'DevOps', description: 'Comfortable with CI/CD, Docker, and deployment workflows.' },
    { icon: interestIcons.collaboration, title: 'Collaboration', description: 'Version control and teamwork using Git & Agile practices.' },
    { icon: interestIcons.learning, title: 'Learning', description: 'Always exploring modern stacks, frameworks, and design patterns.' },
    { icon: interestIcons.coffee, title: 'Coffee', description: 'Fuel for late-night debugging and ideation.' },
    { icon: interestIcons.passion, title: 'Passion', description: 'Driven by curiosity and love for solving real problems.' },
    { icon: interestIcons.focus, title: 'Focus', description: 'Music helps me code better—lofi beats and instrumentals.' },
  ];

  const toggleInterest = useCallback((idx: number) => {
    setSelectedInterest((prev) => (prev === idx ? null : idx));
  }, []);

  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden transition-colors duration-500"
      style={{ backgroundColor }}
      aria-labelledby="about-title"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-indigo-200/30 to-purple-300/30 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-pink-200/30 dark:from-purple-900/20 dark:to-pink-900/20 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Header */}
        <motion.header
          className="text-center max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center">
            <h2
              id="about-title"
              className={`flex items-center gap-3 text-5xl md:text-6xl font-extrabold tracking-tight mb-6 drop-shadow-lg transition-transform duration-300 hover:scale-105 ${sectionHeadingClass}`}
            >
              <Brain size={40} className={sectionIconClass} />
              About Me
            </h2>
          </div>
          <TypeAnimation
            sequence={[
              'I’m a full-stack developer focused on building modern, scalable web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).',
              800,
              'I specialize in creating clean, responsive front-end experiences combined with robust, efficient back-end architectures.',
              800,
              'From API design to deployment and UI refinement, I’m passionate about delivering elegant, high-performance solutions at every layer of the stack.',
              800,
            ]}
            wrapper="p"
            cursor={true}
            repeat={0}
            className="text-base md:text-lg max-w-3xl mx-auto text-text-light dark:text-text-dark leading-relaxed"
          />
        </motion.header>

        <div className="flex flex-col md:flex-row items-center gap-20">
          {/* 3D Pop-Out Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative w-60 h-60 md:w-64 md:h-64 mx-auto"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-light via-secondary-light to-primary-dark p-1 shadow-2xl z-0" />

            <div className="relative w-full h-full rounded-full bg-surface-light dark:bg-surface-dark p-1 z-10">
              <motion.div
                whileHover={{ scale: 1.05, rotateX: 2, rotateY: -2 }}
                transition={{ type: 'spring', stiffness: 150, damping: 12 }}
                className="w-full h-full overflow-hidden rounded-full shadow-xl"
                style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
              >
                <img
                  src="https://img.freepik.com/premium-photo/3d-avatar-cartoon-character_113255-103382.jpg"
                  alt="3D Avatar"
                  className="object-cover w-full h-full rounded-full"
                  draggable={false}
                  loading="lazy"
                />
              </motion.div>
              <div className="mt-6 text-center text-3xl md:text-2xl font-bold text-text-light dark:text-text-dark tracking-tight drop-shadow-xl transform transition-transform duration-500 ease-in-out hover:scale-105 hover:text-primary-dark dark:hover:text-primary-dark">
                Rahul Vijay Patil
              </div>
            </div>
          </motion.div>

          {/* Interests */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 flex-1">
            {interests.map((interest, idx) => {
              const selected = selectedInterest === idx;
              return (
                <motion.button
                  key={interest.title}
                  type="button"
                  onClick={() => toggleInterest(idx)}
                  aria-pressed={selected}
                  aria-label={`${interest.title} interest ${selected ? 'selected' : 'not selected'}`}
                  className={`
                    flex flex-col items-center gap-3 p-6 rounded-2xl border
                    transition-shadow duration-300 focus:outline-none focus:ring-4 focus:ring-primary-light
                    text-text-light dark:text-text-dark
                    bg-background-light dark:bg-surface-dark
                    border-border-light dark:border-gray-600
                    ${selected ? 'shadow-xl border-primary-dark bg-primary-light dark:bg-primary-dark' : 'hover:shadow-lg hover:bg-surface-light dark:hover:bg-surface-dark'}
                    cursor-pointer select-none
                  `}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="text-primary-dark dark:text-primary-light">{interest.icon}</div>
                  <h3 className="text-base font-semibold tracking-wide">{interest.title}</h3>
                  {selected && (
                    <TypeAnimation
                      sequence={[interest.description, 4000, '']}
                      wrapper="p"
                      cursor
                      repeat={Infinity}
                      className="mt-2 text-text-light dark:text-text-dark max-w-[240px]"
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
