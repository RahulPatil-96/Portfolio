import { useTheme } from './components/theme-provider';
import { motion, useScroll } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Download, CodeIcon, MoonIcon, SunIcon } from 'lucide-react';
import ProjectsSection from './components/Project.tsx';
import TechStack from './components/TechStack';
import { ContactButton } from './components/ContactButton';
import { AboutMe } from './components/AboutMe';
import { Education } from './components/Education';
import Experience from './components/Experience';
import { Certifications } from './components/Certifications';
import { Testimonials } from './components/Testimonials';
import { PhotoGallery } from './components/PhotoGallery';
import Contact from './components/Contact.tsx';
import { useState, useEffect } from 'react';
import { photoGallery } from './mockData';

const LeetCodeIcon = () => (
  <svg aria-hidden="true" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.667 2.667h-6.334a2.667 2.667 0 00-2.667 2.666v8h3v2h-3v3.334a2.666 2.666 0 002.666 2.666h6.334a2.667 2.667 0 002.667-2.666v-11.334a2.667 2.667 0 00-2.666-2.666zm.666 13.334a.667.667 0 01-.667.666h-6.666a.667.667 0 01-.666-.666v-8a.667.667 0 01.666-.666h6.333a.666.666 0 01.667.666v8z" />
    <path d="M12 7.667L9.333 10v8h1.334v-7.333l2.333-2.166-.667-.834z" />
  </svg>
);

const CredlyIcon = () => (
  <svg aria-hidden="true" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M8 12l3 3 5-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const GoogleDevIcon = () => (
  <svg aria-hidden="true" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3v18m9-9H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

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

  // New state and effect for floating blobs
  const [blob1Pos, setBlob1Pos] = useState({ x: 0, y: 0 });
  const [blob2Pos, setBlob2Pos] = useState({ x: 0, y: 0 });
  const [blob3Pos, setBlob3Pos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setBlob1Pos({
        x: (Math.random() - 0.5) * 20, // random float between -10 and 10
        y: (Math.random() - 0.5) * 20,
      });
      setBlob2Pos({
        x: (Math.random() - 0.5) * 20,
        y: (Math.random() - 0.5) * 20,
      });
      setBlob3Pos({
        x: (Math.random() - 0.5) * 20,
        y: (Math.random() - 0.5) * 20,
      });
    }, 3000); // update every 3 seconds

    return () => clearInterval(interval);
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
        className={`fixed w-full z-40 transition-all duration-300 shadow-lg ${
          isScrolled
            ? 'bg-white/70 dark:bg-background-dark/80 backdrop-blur-xl border-b border-gradient-to-r from-blue-400/30 via-purple-400/30 to-pink-400/30'
            : 'bg-transparent'
        }`}
        style={{ boxShadow: isScrolled ? '0 8px 32px 0 rgba(31, 38, 135, 0.15)' : undefined }}
      >
        <div className="container mx-auto px-6 py-4 max-w-7xl">
          <div className="flex items-center justify-between px-4 py-2">
            <div className="flex items-center justify-between px-4 py-2">
              <div className="group relative">
                <div className="flex items-center space-x-4">
                  {/* Glow Background on Hover */}
                  <div className="relative">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-pink-400/30 via-purple-400/30 to-blue-500/30 blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />

                    {/* Icon Container with Pink-Blue Gradient */}
                    <div className="relative z-10 w-12 h-12 bg-gradient-to-br from-pink-500 via-purple-600 to-blue-600 rounded-xl flex items-center justify-center transform group-hover:rotate-[12deg] transition-transform duration-500 shadow-lg shadow-pink-500/30">
                      <CodeIcon size={22} className="text-white dark:text-white" />
                    </div>
                  </div>

                  {/* Name with Pink-Blue Gradient Text */}
                  <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 via-purple-700 to-blue-600 dark:from-pink-400 dark:via-purple-500 dark:to-blue-400 bg-clip-text text-transparent transition-all duration-300 group-hover:tracking-wide">
                    Rahul Vijay Patil
                  </span>
                </div>
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
                    className={`absolute inset-0 text-amber-500 transition-all duration-500 ${
                      theme === 'light' ? 'opacity-100 rotate-0' : 'opacity-0 rotate-180'
                    }`} 
                  />
                  <MoonIcon 
                    size={20} 
                    className={`absolute inset-0 text-indigo-400 transition-all duration-500 ${
                      theme === 'dark' ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
                    }`} 
                  />
                </div>
              </button>
              <motion.a
                href="/Rahul Patil.pdf"
                download
                aria-label="Download Rahul Patil's Resume"
                className="hidden md:inline-flex items-center px-8 py-3 rounded-full font-bold shadow-xl hover:shadow-violet-400/40 transition duration-300 border-2 border-transparent hover:border-violet-400/70 focus:ring-4 focus:ring-violet-300 focus:outline-none animate-glow text-black dark:text-white"
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
      <header className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6 pt-24">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="relative z-10 w-full flex flex-col items-center">
              <div className="max-w-4xl text-center">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-6xl md:text-8xl font-extrabold mb-6 leading-tight tracking-tight bg-clip-text text-transparent"
                  style={{
                    backgroundImage: 'linear-gradient(90deg, #FF61A6 10%, #3A86FF 40%, #FFBE0B 70%, #FB5607 100%)',
                    backgroundSize: "400% 400%",
                    animation: "gradient 5s ease infinite",
                    WebkitTextFillColor: "transparent"
                  }}
                >
                  Full Stack Developer
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
                >
                  Building scalable applications from frontend to backend
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="flex flex-wrap justify-center gap-5"
                >
                  <ContactButton icon={<Github />} href="https://github.com/RahulPatil-96" label="GitHub" />
                  <ContactButton icon={<Linkedin />} href="https://linkedin.com/in/rahul-patil-096k" label="LinkedIn" />
                  <ContactButton icon={<Mail />} href="mailto:rahulpatil096k@gmail.com" label="Email" />
                  <ContactButton icon={<LeetCodeIcon />} href="https://leetcode.com/u/rahulpatil096k/" label="LeetCode" />
                  <ContactButton icon={<CredlyIcon />} href="https://www.credly.com/users/rahul-patil.fa68d5f4" label="Credly" />
                  <ContactButton icon={<GoogleDevIcon />} href="https://developers.google.com/profile/u/rahulvijaypatil_jspmrscoe" label="Google for Developers" />
                </motion.div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 mb-16">
                <a
                  href="#projects"
                  className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-500 hover:scale-105"
                >
                  <span className="relative z-10">View My Work</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </a>
                <a
                  href="#contact"
                  className="px-8 py-4 border-2 border-neutral-300 text-neutral-700 font-semibold rounded-2xl hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50/50 transition-all duration-500 hover:scale-105"
                >
                  Let's Connect
                </a>
              </div>
              <div className="animate-bounce">
                <div className="mx-auto w-6 h-10 border-2 border-neutral-300 rounded-full flex justify-center">
                  <div className="w-1 h-3 bg-gradient-to-b from-indigo-600 to-purple-600 rounded-full mt-2 animate-pulse"></div>
                </div>
                <ChevronDown className="text-neutral-400 mx-auto mt-2" size={20} />
              </div>
            </div>
            <motion.div
              className="absolute top-1/4 left-10 w-20 h-20 bg-cyan-500/30 rounded-full blur-xl animate-pulse"
              animate={{ x: blob1Pos.x, y: blob1Pos.y }}
              transition={{ duration: 3, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute top-1/3 right-10 w-32 h-32 bg-purple-500/30 rounded-full blur-xl animate-pulse"
              style={{ animationDelay: '1s' }}
              animate={{ x: blob2Pos.x, y: blob2Pos.y }}
              transition={{ duration: 3, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-emerald-500/30 rounded-full blur-xl animate-pulse"
              style={{ animationDelay: '2s' }}
              animate={{ x: blob3Pos.x, y: blob3Pos.y }}
              transition={{ duration: 3, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
            />
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