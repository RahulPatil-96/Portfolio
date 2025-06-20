import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Star, Trophy } from 'lucide-react';
import { EducationCard } from './EducationCard';
import { education } from '../mockData';

export const Education: React.FC = () => {
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Star':
        return <Star className="w-5 h-5" />;
      case 'Trophy':
        return <Trophy className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <section className="py-20 relative transition-colors duration-500 ease-in-out bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-200">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Section Heading */}
          <div className="flex items-center gap-4 mb-16">
            <GraduationCap className="w-8 h-8 text-[#7f7fff] animate-bounce" />
            <h2
              className="text-4xl font-bold bg-clip-text text-transparent drop-shadow-lg transition-transform duration-300 hover:scale-105"
              style={{
                backgroundImage: 'linear-gradient(to right, #7f7fff, #a78bfa)',
              }}
            >
              Education
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* B.Tech Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-8 rounded-xl backdrop-blur-sm border border-gray-200 dark:border-gray-600 shadow-lg transition-shadow duration-300 bg-white dark:bg-surface-dark text-gray-800 dark:text-text-dark"
            >
              <h3 className="text-2xl font-bold mb-4 text-text-light dark:text-text-dark">
                B.Tech <br /> Computer Science and Business Systems
              </h3>
              <p className="mb-2 text-text-light dark:text-text-dark">
                JSPM’s Rajarshi Shahu College of Engineering, Pune
              </p>
              <p className="mb-6 text-primary-light dark:text-primary-dark">
                CGPA: 8.49 | Expected Graduation: 2026
              </p>
            </motion.div>

            {/* Dynamic Education Cards */}
            <div className="grid grid-cols-1 gap-6">
              {education.map((item, index) => (
                <EducationCard
                  key={index}
                  icon={renderIcon(item.icon)}
                  title={item.title}
                  institute={item.institute}
                  details={item.details}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
