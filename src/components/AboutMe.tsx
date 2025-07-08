import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import CountUp from 'react-countup';
import {
  Coffee, Brain,
  Award,
  Code,
  Target,
  Users,
  Zap,
  Cloud,
  GitBranch,
} from 'lucide-react';
import { useTheme } from './theme-provider';
import { colors } from '../colors';

interface Interest {
  icon: React.ReactNode;
  number: string;
  label: string;
  color: string;
  description: string;
  countUp: number;
  trend: string;
}

export const AboutMe: React.FC = () => {
  const { theme } = useTheme();

  const interests: Interest[] = [
    { 
      icon: <Zap size={32} />, 
      number: '3+', 
      label: 'Years of Learning', 
      color: theme === 'dark' ? 'text-purple-400' : 'text-purple-600',
      description: 'In the industry',
      countUp: 3,
      trend: 'Since 2023'
    },
    { 
      icon: <GitBranch size={32} />, 
      number: '10+', 
      label: 'Technologies', 
      color: theme === 'dark' ? 'text-teal-400' : 'text-teal-600',
      description: 'Technologies I work with',
      countUp: 10,
      trend: 'React, Node.js, Tailwind, and more'
    },
    { 
      icon: <Code size={32} />, 
      number: '100K+', 
      label: 'Lines of Code', 
      color: theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600',
      description: 'Written & reviewed',
      countUp: 100,
      trend: 'Quality focused'
    },
    { 
      icon: <Target size={32} />, 
      number: '10+', 
      label: 'Projects Completed', 
      color: theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600',
      description: 'Successful deliveries',
      countUp: 10,
      trend: '+2 this year'
    },
    { 
      icon: <Cloud size={32} />, 
      number: '5+', 
      label: 'Deployed Projects', 
      color: theme === 'dark' ? 'text-blue-400' : 'text-blue-600',
      description: 'Projects deployed to cloud platforms',
      countUp: 5,
      trend: 'Supabase, Electron, and more'
    },
    { 
      icon: <Award size={32} />, 
      number: '10+', 
      label: 'Awards Won', 
      color: theme === 'dark' ? 'text-amber-400' : 'text-amber-600',
      description: 'Recognition received',
      countUp: 10,
      trend: '+3 this year'
    },
    { 
      icon: <Users size={32} />, 
      number: '25+', 
      label: 'Happy Clients', 
      color: theme === 'dark' ? 'text-pink-400' : 'text-pink-600',
      description: 'Satisfied customers',
      countUp: 25,
      trend: '100% satisfaction'
    },  
    { 
      icon: <Coffee size={32} />, 
      number: '2K+', 
      label: 'Cups of Coffee', 
      color: theme === 'dark' ? 'text-orange-400' : 'text-orange-600',
      description: 'Fuel for creativity',
      countUp: 2,
      trend: '3 cups/day avg'
    },    
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
  <section
    id="about"
    className="relative overflow-hidden transition-colors duration-500"
    style={{
      backgroundColor: theme === 'dark' ? colors.background.dark : colors.background.light,
    }}
  >
    {/* Background Gradients */}
    <div className="absolute inset-0 pointer-events-none">
      <div
        className={`absolute top-20 left-10 w-72 h-72 bg-gradient-to-br ${theme === 'dark' ? 'from-indigo-900/20 to-purple-900/20' : 'from-indigo-200/30 to-purple-300/30'} rounded-full blur-3xl`}
      />
      <div
        className={`absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br ${theme === 'dark' ? 'from-purple-900/20 to-pink-900/20' : 'from-purple-200/30 to-pink-200/30'} rounded-full blur-3xl`}
      />
    </div>

    <div className="py-20 relative z-10 max-w-7xl mx-auto px-6">
      {/* Section Title */}
      <div className="flex justify-center mb-12">
        <h2
          id="about-label"
          className={`flex items-center gap-3 text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text drop-shadow-lg transition-transform duration-300 hover:scale-105`}
        >
          <Brain size={40} className={`text-${theme === 'dark' ? 'indigo-600' : 'pink-400'} drop-shadow animate-bounce`} />
          About Me
        </h2>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Column - Avatar + Name */}
        <div className="flex justify-center items-center col-span-1">
          <div className="flex flex-col items-center text-center">
            <div className="relative w-56 h-56 md:w-60 md:h-60 mb-6">
              <div
                className={`absolute inset-0 rounded-full bg-gradient-to-br ${theme === 'dark' ? 'from-primary-light via-secondary-light to-primary-dark' : 'from-primary-dark via-secondary-dark to-primary-light'} p-1 shadow-2xl`}
              />
              <div className="relative w-full h-full rounded-full bg-surface-light dark:bg-surface-dark p-1 z-10">
                <div className="relative group w-full h-full rounded-full" style={{ perspective: 1000 }}>
                  <motion.div
                    whileHover={{ scale: 1.05, rotateX: 2, rotateY: -2 }}
                    transition={{ type: 'spring', stiffness: 150, damping: 12 }}
                    className="rounded-full overflow-hidden shadow-xl relative z-50"
                    style={{
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    <img
                      src="https://img.freepik.com/premium-photo/3d-avatar-cartoon-character_113255-103382.jpg"
                      alt="3D Avatar"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Name */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 hover:from-yellow-400 hover:to-orange-400 dark:from-yellow-400 dark:to-orange-400 dark:hover:from-orange-500 dark:hover:to-red-500 transition-transform duration-500 ease-in-out`}
            >
              Rahul Vijay Patil
            </motion.div>
          </div>
        </div>

        {/* Right Column - Typing + Interests */}
        <div className="md:col-span-2 flex flex-col gap-10">
          {/* Type Animation Intro */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className={`text-base md:text-lg ${theme === 'dark' ? 'text-text-dark' : 'text-text-light'} leading-relaxed`}
          >
            <TypeAnimation
              sequence={[
                'Full-stack MERN developer crafting responsive interfaces and scalable APIs.',
                2000,
                'React, Node.js, Tailwind — creating reliable apps with beautiful UIs.',
                2000,
                'Always learning, always building — I turn ideas into code.',
                2000,
              ]}
              wrapper="p"
              cursor
              repeat={Infinity}
            />
          </motion.div>

          {/* Interests */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {interests.map((interest, index) => (
              <div
                key={interest.label}
                className="group relative flex flex-col h-full"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="absolute -inset-3 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>

                <div
                  className={`relative flex flex-col items-center justify-between h-full p-6 rounded-2xl border border-white/50 
                  ${theme === 'dark' ? 'bg-surface-dark text-neutral-100' : 'bg-white/90 text-neutral-900'} 
                  backdrop-blur-xl group-hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-110`}
                >
                  {/* Icon */}
                  <div className={`w-16 h-16 flex items-center justify-center rounded-xl ${interest.color} mb-4 transform group-hover:scale-125 transition-transform duration-300`}>
                    {interest.icon}
                  </div>

                  {/* Number */}
                  <div className={`text-3xl font-black ${theme === 'dark' ? 'text-neutral-100' : 'text-neutral-900'} mb-2`}>
                    {hoveredIndex === index ? (
                      <CountUp
                        start={0}
                        end={interest.countUp}
                        duration={1.5}
                        suffix={interest.number.replace(/[0-9]/g, '')}
                        redraw={true}
                      />
                    ) : (
                      interest.number
                    )}
                  </div>

                  {/* Label */}
                  <div className={`text-sm font-bold ${theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'} mb-2`}>
                    {interest.label}
                  </div>

                  {/* Description */}
                  <div className={`text-xs ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'} mb-1`}>
                    {interest.description}
                  </div>

                  {/* Trend */}
                  <div className="text-xs text-emerald-600 font-medium">
                    {interest.trend}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
)};