import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Star, Trophy } from 'lucide-react';
import { education } from '../mockData';
import { useTheme } from './theme-provider';
import { colors } from '../colors';
import { getSectionBackground, sectionHeadingClass, sectionIconClass } from '../sectionStyles';

const EducationCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  institute: string;
  details: string;
  delay?: number;
}> = ({ icon, title, institute, details, delay = 0 }) => {
  // Split details into parts like percentage, year, etc.
  const parts = details.split(' | ');
  const percentage = parts[0] || '';
  const year = parts[1] || '';

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay }}
      whileHover={{ scale: 1.02 }}
      className="p-6 rounded-xl backdrop-blur-sm shadow-md transition-shadow duration-300 border border-gray-200 dark:border-gray-600 text-text-light dark:text-text-dark"
    >
      <div className="flex items-start gap-4">
        <div className="p-2 rounded-lg bg-primary-light text-primary-dark">
          {icon}
        </div>
        <div>
          <h4 className="text-xl font-bold mb-1 text-text-light dark:text-text-dark">
            {title}
          </h4>
          {institute && (
            <p className="text-sm text-text-light dark:text-text-dark">
              {institute}
            </p>
          )}
          {(percentage || year) && (
            <p className="text-sm text-primary-light dark:text-primary-dark">
              {percentage} {percentage && year ? '|' : ''} {year}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export const Education: React.FC = () => {
  const { theme } = useTheme();
  const backgroundColor = getSectionBackground(theme, colors);

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
    <section
      id="education"
      className="py-24 relative overflow-hidden transition-colors duration-500"
      style={{ backgroundColor }}
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
          {/* Section Heading */}
          <div className="flex items-center gap-4 mb-16">
            <GraduationCap className={sectionIconClass} />
            <h2 className={sectionHeadingClass}>
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
