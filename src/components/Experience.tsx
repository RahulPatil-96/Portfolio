import React, { useState } from 'react';
import { Calendar, MapPin, Briefcase, Award, Building } from 'lucide-react';
import { useTheme } from './theme-provider';
import { experiences } from '../mockData';
import { colors } from '../colors';

const Experience: React.FC = () => {
  const { theme } = useTheme();
  const [activeExperience, setActiveExperience] = useState<number | null>(null);

  // Theme-based color variables
  const textColorSecondary = theme === 'dark' ? colors.textGray400 : colors.textGray600;
  const textColorPrimary = theme === 'dark' ? colors.textWhite : colors.textGray900;
  const companyColor = theme === 'dark' ? colors.textPrimaryDark : colors.textPrimary;
  const awardColor = theme === 'dark' ? colors.textYellow400 : colors.textYellow600;

  return (
    <section
      id="experience"
      className="py-24 relative overflow-hidden transition-colors duration-500"
      style={{ backgroundColor: theme === 'dark' ? colors.background.dark : colors.background.light }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-indigo-200/30 to-purple-300/30 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-pink-200/30 dark:from-purple-900/20 dark:to-pink-900/20 rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="flex items-center gap-4 mb-16">
          <Briefcase className="text-indigo-600 dark:text-pink-400 drop-shadow animate-bounce" />
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent drop-shadow-lg transition-transform duration-300 hover:scale-105">
            Experience
          </h2>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className={`absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b ${theme === 'dark' ? 'from-primary-dark via-primary-dark to-primary-dark' : 'from-primary via-accent to-highlight'} transform md:-translate-x-0.25 opacity-30`} />

          {/* Experience Cards */}
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:items-start`}
                onMouseEnter={() => setActiveExperience(index)}
                onMouseLeave={() => setActiveExperience(null)}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 z-20 transform md:-translate-x-1/2">
                  <div className={`relative w-4 h-4 rounded-full bg-gradient-to-r ${theme === 'dark' ? exp.colorDark : exp.colorLight} border-4 border-white shadow-lg`}>
                    <div className={`absolute -inset-2 bg-gradient-to-r ${theme === 'dark' ? exp.colorDark : exp.colorLight} rounded-full blur opacity-40 animate-pulse`} />
                  </div>
                </div>

                {/* Card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'} group`}>
                  <div className={`relative ${theme === 'dark' ? 'bg-surface-dark/80 border-border-dark' : 'bg-surface-light/80 border-border-light'} border backdrop-blur-sm rounded-2xl p-8 transition-all duration-500 hover:scale-105 hover:shadow-xl`}>
                    <div className="flex items-start justify-between mb-6">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${theme === 'dark' ? exp.colorDark : exp.colorLight} bg-opacity-10`}>
                        {exp.icon}
                      </div>
                      <div className="text-right">
                        <div className={`flex items-center ${textColorSecondary} text-sm mb-2`}>
                          <Calendar size={14} className="mr-2" />
                          {exp.period}
                        </div>
                        <div className={`flex items-center ${textColorSecondary} text-sm`}>
                          <MapPin size={14} className="mr-2" />
                          {exp.location}
                        </div>
                        {exp.featured && (
                          <div className="absolute -top-3 -right-3 px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold rounded-full">
                            CURRENT
                          </div>
                        )}
                      </div>
                    </div>

                    <h3 className={`${textColorPrimary} text-2xl font-bold mb-2`}>{exp.title}</h3>
                    <div className="flex items-center mb-6">
                      <Building size={16} className={`${textColorSecondary} mr-2`} />
                      <h4 className={`${companyColor} text-lg font-semibold`}>{exp.company}</h4>
                    </div>
                    <p className={`${textColorSecondary} mb-8 leading-relaxed`}>{exp.description}</p>

                    <div className="space-y-4">
                      <h5 className={`${textColorPrimary} text-lg font-bold mb-4 flex items-center space-x-2`}>
                        <Award size={16} className={`${awardColor}`} />
                        <span>Key Achievements</span>
                      </h5>
                      {exp.achievements.map((achievement, i) => (
                        <div
                          key={i}
                          className="flex items-start group/achievement"
                          style={{
                            animationDelay: `${i * 0.1}s`,
                            animation: activeExperience === index ? 'fadeInUp 0.5s ease-out forwards' : 'none'
                          }}
                        >
                          <div className={`w-2 h-2 bg-gradient-to-r ${theme === 'dark' ? exp.colorDark : exp.colorLight} rounded-full mt-2 mr-4 flex-shrink-0`} />
                          <p className={`${textColorSecondary}`}>{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Resume Download CTA */}
        <div className="text-center mt-20">
          <a
            href="/Rahul Patil.pdf"
            className="group relative inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-500 hover:scale-105"
          >
            <Award size={20} />
            <span>View Resume</span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </a>
        </div>
      </div>

      {/* Fade-in Animation for Achievements */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;
