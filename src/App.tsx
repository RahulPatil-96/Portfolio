import { useTheme } from './components/theme-provider';
import { motion, useScroll } from 'framer-motion';
import { Sparkles, ChevronDown, Download, MoonIcon, SunIcon, Code2, Palette, Zap } from 'lucide-react';
import ProjectsSection from './components/Project.tsx';
import TechStack from './components/TechStack';
import { AboutMe } from './components/AboutMe';
import { Education } from './components/Education';
import Experience from './components/Experience';
import { Certifications } from './components/Certifications';
import { Testimonials } from './components/Testimonials';
import { PhotoGallery } from './components/PhotoGallery';
import Contact from './components/Contact.tsx';
import { useState, useEffect } from 'react';
import { photoGallery } from './mockData';
import { TypeAnimation } from 'react-type-animation';

function AppContent() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background-light text-gray-800 dark:bg-background-dark dark:text-gray-200 relative transition-colors duration-500 ease-in-out">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Navigation */}
      <nav
  className={`fixed w-full z-40 transition-all duration-300 ${isScrolled
    ? 'bg-white/70 dark:bg-background-dark/80 backdrop-blur-xl border-b border-gradient-to-r from-blue-400/30 via-purple-400/30 to-pink-400/30 shadow-lg'
    : 'bg-transparent'
  }`}
  style={{
    boxShadow: isScrolled ? '0 8px 32px 0 rgba(31, 38, 135, 0.15)' : 'none',
  }}
>
  <div className="container mx-auto px-6 py-2 max-w-7xl"> {/* Reduced py-4 to py-2 */}
    <div className="flex items-center justify-between px-4 py-2">
      <div className="group relative">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500">
                  <Code2 size={20} className="text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-slate-100 dark:to-slate-200 bg-clip-text text-transparent">
                Portfolio
              </span>
            </div>
          </div>

      <div className="hidden md:flex items-center gap-10 font-semibold text-lg">
        {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="relative group transition"
            whileHover={{ scale: 1.13 }}
          >
            <span className="hover:text-blue-600 dark:hover:text-violet-400 transition-colors duration-200">
              {item}
            </span>
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-full"></span>
          </motion.a>
        ))}
      </div>
      <div className="flex items-center gap-5">
        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-xl bg-white/10 dark:bg-black/10 backdrop-blur-sm border border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 group"
          aria-label="Toggle theme"
        >
          <div className="relative w-5 h-5">
            <SunIcon
              size={20}
              className={`absolute inset-0 text-amber-500 transition-all duration-500 ${theme === 'light' ? 'opacity-100 rotate-0' : 'opacity-0 rotate-180'
                }`}
            />
            <MoonIcon
              size={20}
              className={`absolute inset-0 text-indigo-400 transition-all duration-500 ${theme === 'dark' ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
                }`}
            />
          </div>
        </button>
        <motion.a
          href="/Rahul Patil.pdf"
          download
          aria-label="Download Rahul Patil's Resume"
          className="hidden md:inline-flex items-center px-8 py-2.5 rounded-full font-bold shadow-xl hover:shadow-violet-400/40 transition duration-300 border-2 border-transparent hover:border-violet-400/70 focus:ring-4 focus:ring-violet-300 focus:outline-none animate-glow text-black dark:text-white"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Download className="mr-3 w-6 h-6 text-black dark:text-white" aria-hidden="true" />
          <span>Resume</span>
        </motion.a>
      </div>
    </div>
  </div>
</nav>


      {/* Hero Section */}
      <header className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6">
        {/* Background gradient blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-indigo-200/50 to-purple-300/50 dark:from-indigo-900/30 dark:to-purple-900/40 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-200/50 to-pink-200/50 dark:from-purple-900/30 dark:to-pink-900/40 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl w-full mx-auto px-6 lg:px-8 pt-10 pb-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="absolute inset-0">
              <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-indigo-100/60 to-purple-100/60 dark:from-indigo-800/40 dark:to-purple-800/50 rounded-full blur-3xl"></div>
              <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-100/60 to-pink-100/60 dark:from-purple-800/40 dark:to-pink-800/50 rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-indigo-50/40 to-purple-50/40 dark:from-indigo-700/30 dark:to-purple-700/40 rounded-full blur-3xl"></div>
            </div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

            {/* Content Section */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
              <div className="text-center max-w-4xl mx-auto">
                {/* Floating Tech Icons */}
                <div className="flex justify-center items-center space-x-8 mb-12">
                  {[
                    {
                      icon: Code2,
                      color: 'from-indigo-500 to-blue-500',
                      delay: '0s',
                      lightIconColor: 'text-indigo-500',
                      darkIconColor: 'text-indigo-700',
                      lightBoxColor: 'bg-indigo-100',
                      darkBoxColor: 'bg-indigo-800',
                    },
                    {
                      icon: Palette,
                      color: 'from-purple-500 to-pink-500',
                      delay: '0.5s',
                      lightIconColor: 'text-purple-500',
                      darkIconColor: 'text-purple-700',
                      lightBoxColor: 'bg-purple-100',
                      darkBoxColor: 'bg-purple-800',
                    },
                    {
                      icon: Zap,
                      color: 'from-orange-500 to-red-500',
                      delay: '1s',
                      lightIconColor: 'text-orange-500',
                      darkIconColor: 'text-orange-700',
                      lightBoxColor: 'bg-orange-100',
                      darkBoxColor: 'bg-orange-800',
                    }
                  ].map(({ icon: Icon, color, delay, lightIconColor, darkIconColor, lightBoxColor, darkBoxColor }, index) => (
                    <div
                      key={index}
                      className="group relative animate-float"
                      style={{ animationDelay: delay, animationDuration: '6s' }}
                    >
                      {/* Background box with gradient */}
                      <div className={`absolute -inset-2 bg-gradient-to-r ${color} rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>

                      {/* Main box with color change for light/dark mode */}
                      <div className={`relative p-4 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110 ${lightBoxColor} dark:${darkBoxColor}`}>
                        {/* Icon color change */}
                        <Icon
                          className={`w-10 h-10 ${lightIconColor} dark:${darkIconColor} group-hover:text-white`}
                        />
                      </div>
                    </div>
                  ))}
                </div>


                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-indigo-200/50 text-indigo-600 text-sm font-medium">
                  <Sparkles size={16} />
                  <span>Available for new opportunities</span>
                </div>

                <span className="block text-2xl md:text-3xl font-light text-gray-700 dark:text-gray-300 mb-4 tracking-wide pt-2">
                  Hello, I'm
                </span>

                {/* Heading and animated name */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-6xl md:text-8xl font-extrabold mb-6 leading-tight tracking-tight bg-clip-text text-transparent"
                  style={{
                    backgroundImage: 'linear-gradient(90deg, #FF61A6 10%, #3A86FF 40%, #FFBE0B 70%, #FB5607 100%)',
                    backgroundSize: "400% 400%",
                    animation: "gradient 5s ease infinite",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  RAHUL VIJAY PATIL
                </motion.h1>

                {/* Type Animation */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-xl md:text-4xl text-gray-700 dark:text-gray-300 mb-8 pt"
                >
                  <TypeAnimation
                    sequence={[
                      'Full-Stack Developer',
                      2000,
                      'UI/UX Designer',
                      2000,
                      'Creative Technologist',
                      2000,
                      'Digital Innovator',
                      2000,
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                    style={{ display: 'inline-block' }}
                  />
                </motion.p>

                {/* Bio/Description */}
                <div className="mb-16">
                  <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed">
                    I create <span className="font-semibold text-indigo-600 dark:text-indigo-400">exceptional digital experiences</span> through
                    innovative design and development, combining <span className="font-semibold text-purple-600 dark:text-purple-400">aesthetic excellence</span> with
                    <span className="font-semibold text-pink-600 dark:text-pink-400"> technical precision</span> to build solutions that inspire and perform.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                  <a
                    href="#projects"
                    className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-500 hover:scale-105"
                  >
                    <span className="relative z-10">View My Work</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </a>

                  <a
                    href="#contact"
                    className="px-8 py-4 border-2 border-neutral-300 text-neutral-700 dark:text-white font-semibold rounded-2xl hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50/50 transition-all duration-500 hover:scale-105"
                  >
                    Let's Connect
                  </a>
                </div>

                {/* Scroll Indicator */}
                <div className="animate-bounce">
                  <div className="mx-auto w-6 h-10 border-2 border-neutral-300 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-gradient-to-b from-indigo-600 to-purple-600 rounded-full mt-2 animate-pulse" />
                  </div>
                  <ChevronDown className="text-neutral-400 mx-auto mt-2" size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>


      {/* Main Content */}
      <main>
        <AboutMe />
        <Education />
        <Experience />
        <TechStack />
        <ProjectsSection />
        <Certifications />
        <Testimonials />
        <PhotoGallery photos={photoGallery} />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-12 bg-white/50 backdrop-blur-sm dark:bg-black/50">
        <div className="container mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-gray-600 dark:text-gray-400">
          <p>© 2025 Rahul Patil. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default AppContent;