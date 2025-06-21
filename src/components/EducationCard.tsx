import React from 'react';
import { motion } from 'framer-motion';

export interface EducationCardProps {
  icon: React.ReactNode;
  title: string;
  institute: string;
  details: string;
  delay?: number;
}

export const EducationCard: React.FC<EducationCardProps> = ({
  icon,
  title,
  institute,
  details,
  delay = 0,
}) => {
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
