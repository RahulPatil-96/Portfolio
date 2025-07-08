import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { useTheme } from './theme-provider';
import { colors } from '../colors';
import { certifications } from '../mockData';

export const Certifications: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section
      id="certifications"
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
          <div className="flex items-center gap-4 mb-16">
            <Award className="text-indigo-600 dark:text-pink-400 drop-shadow animate-bounce" />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent drop-shadow-lg transition-transform duration-300 hover:scale-105">
              Certifications
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6">

            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="rounded-xl overflow-hidden group backdrop-blur-sm shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-600"
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = '#FF3B30';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = '#E0E0E0';
                }}
              >
                <div className="h-40 overflow-hidden relative">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t "
                    style={{
                      backgroundImage: `linear-gradient(to top, ${colors.text.dark}, transparent)`,
                    }}
                  ></div>
                </div>

                <div className="p-6">
                  <h3
                    className="text-xl font-bold mb-2 text-black dark:text-white"
                  >
                    {cert.title}
                  </h3>
                  <p className="mb-4 text-gray-600 dark:text-gray-400">
                    {cert.issuer}
                  </p>
                  <div className="flex items-center justify-between ">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {cert.date}
                    </span>
                    <motion.a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors"
                    >
                      <ExternalLink
                        className="w-5 h-5"
                        style={{ color: '#4DD0E1' }}
                      />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://github.com"
              className="group relative inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-500 hover:scale-105"
            >
              <ExternalLink size={20} />
              <span>View All Certifications</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
};
