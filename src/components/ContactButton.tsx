import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from './theme-provider';

interface ContactButtonProps {
  icon: ReactNode;
  href: string;
  label: string;
}

export const ContactButton: React.FC<ContactButtonProps> = ({ icon, href, label }) => {
  const { theme } = useTheme();

  const isDark = theme === 'dark';

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
    group inline-flex items-center gap-3 px-6 py-3 rounded-full
    text-sm sm:text-base font-semibold tracking-tight backdrop-blur-md border transition-all duration-300
    shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2
    ${isDark
          ? 'bg-gradient-to-br from-gray-800/60 to-gray-900/60 text-white border-gray-700 hover:from-gray-700/60 hover:to-gray-800/60 focus:ring-gray-500'
          : 'bg-gradient-to-br from-white/70 to-gray-100/70 text-gray-800 border-gray-200 hover:from-white/90 hover:to-gray-200/80 focus:ring-gray-400'
        }
  `}
      whileHover={{ scale: 1.07 }}
      whileTap={{ scale: 0.95 }}
    >
      <div
        className={`
      flex items-center justify-center w-9 h-9 rounded-full bg-white/20 transition-all duration-300
      group-hover:shadow-md group-hover:scale-105
      ${isDark ? 'text-white' : 'text-gray-700'}
    `}
      >
        {icon}
      </div>
      <span className="transition-colors duration-200">
        {label}
      </span>
    </motion.a>

  );
};
