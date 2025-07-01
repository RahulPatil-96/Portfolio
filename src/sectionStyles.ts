export const getSectionBackground = (theme: string, colors: any) =>
  theme === 'dark' ? colors.background.dark : colors.background.light;

export const sectionHeadingClass =
  'text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent drop-shadow-lg transition-transform duration-300 hover:scale-105';

export const sectionIconClass =
  'text-indigo-600 dark:text-pink-400 drop-shadow animate-bounce';
