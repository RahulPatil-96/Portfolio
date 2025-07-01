import React from 'react';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';
import { skillsData } from '../mockData';
import { useTheme } from './theme-provider';
import { colors } from '../colors';
import { getSectionBackground, sectionHeadingClass, sectionIconClass } from '../sectionStyles';

// SkillCard Component
interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  items: string[];
  color: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, items, color }) => {
  return (
    <div className="group relative">
      {/* Glow effect on hover */}
      <div
        className={`absolute -inset-1 bg-gradient-to-r ${color} rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500`}
      />
      
      <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-white/50 dark:border-slate-700/40 hover:shadow-xl transition-all duration-500 hover:scale-105 min-h-[250px] flex flex-col">
        {/* Icon and Title */}
        <div className="flex items-center mb-6">
          <div
            className={`p-4 rounded-xl bg-gradient-to-r ${color} bg-opacity-10 mr-4 group-hover:scale-110 transition-transform duration-300`}
          >
           <div className={`text-3xl text-${color}`}>
  {icon}
</div>

          </div>
          <h3 className="text-xl font-bold text-neutral-900 dark:text-white">{title}</h3>
        </div>

        {/* Tech items */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {items.map((item, index) => (
            <motion.span
              key={item}
              className="px-3 py-1 bg-neutral-100 dark:bg-slate-700 text-neutral-700 dark:text-neutral-200 text-sm rounded-lg hover:bg-neutral-200 dark:hover:bg-slate-600 transition-all duration-200 hover:scale-105"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              {item}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
};

// TechStack Component
const TechStack: React.FC = () => {
  const { theme } = useTheme();
  const backgroundColor = getSectionBackground(theme, colors);

  return (
    <section
      id="skills"
      className="py-20 relative transition-colors duration-500"
      style={{ backgroundColor }}
    >
      <div className="container mx-auto max-w-6xl px-4">
        {/* Section Title */}
        <div className="flex items-center gap-4 mb-16">
          <Code2 className={sectionIconClass} />
          <h2 className={sectionHeadingClass}>
            TechStack
          </h2>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <SkillCard
                icon={skill.icon}
                title={skill.title}
                items={skill.items}
                color={skill.color}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;