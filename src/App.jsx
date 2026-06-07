import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Component Imports
import GalaxyBackground from './components/GalaxyBackground';
import Navbar from './components/Navbar';
import SearchModal from './components/SearchModal';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import EnvironmentEffects from './components/EnvironmentEffects';

// Modular Sidebar Imports
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('hansi-theme') || 'dark';
  });
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'skills', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ];

  // Scroll spy to detect active section for navbar & left timeline
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 250; // offset for navbar height
      let currentSection = 'hero';
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          if (scrollPos >= el.offsetTop) {
            currentSection = item.id;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial run
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update theme attribute on root HTML
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('hansi-theme', theme);
  }, [theme]);

  // Track mouse coordinates for glowing pointer
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen text-base-content bg-base-100 font-sans relative overflow-x-hidden transition-colors duration-300">
      
      {/* Dynamic Galaxy Particle Canvas Background (Dark Mode Only) */}
      {theme !== 'light' && <GalaxyBackground />}

      {/* Light Mode Specific Environment Effects */}
      <EnvironmentEffects theme={theme} />

      {/* Floating Pointer Glow */}
      <motion.div
        className="fixed top-0 left-0 w-64 h-64 bg-primary/10 rounded-full pointer-events-none glow-orb z-50 mix-blend-screen hidden md:block"
        animate={{
          x: mousePosition.x - 128,
          y: mousePosition.y - 128,
        }}
        transition={{ type: "spring", stiffness: 180, damping: 20, mass: 0.4 }}
      />

      {/* Background radial soft light blobs */}
      <div className="fixed top-1/4 right-[10%] w-96 h-96 bg-primary/5 rounded-full glow-orb -z-10 pointer-events-none" />
      <div className="fixed bottom-1/4 left-[5%] w-80 h-80 bg-secondary/5 rounded-full glow-orb -z-10 pointer-events-none" />

      {/* Navigation Header */}
      <Navbar 
        activeSection={activeSection}
        onNavClick={handleNavClick}
        onSearchClick={() => setIsSearchOpen(true)} 
        currentTheme={theme}
        onThemeToggle={toggleTheme}
      />

      {/* Interactive Left Sidebar Scroll Tracker */}
      <LeftSidebar activeSection={activeSection} onNavClick={handleNavClick} />

      {/* Interactive Right Sidebar Diagnostics Console */}
      <RightSidebar />

      {/* Search Modal */}
      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />

      <main className="relative z-10 w-full flex flex-col items-center gap-1 md:gap-3 py-6 px-3">
        <Hero />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}