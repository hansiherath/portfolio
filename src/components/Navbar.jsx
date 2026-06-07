import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Search, Sun, Moon, Menu, X } from 'lucide-react';

export default function Navbar({ onSearchClick, currentTheme, onThemeToggle, activeSection, onNavClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClickInternal = (id) => {
    setMobileMenuOpen(false);
    onNavClick(id);
  };

  return (
    <>
      <header className="fixed top-4 left-0 right-0 z-50 px-2 lg:px-0 py-0">
        <div className="w-full max-w-3xl mx-auto font-sans">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            className="backdrop-blur-md flex items-center justify-between border border-primary/30 bg-base-200/80 text-base-content px-4 py-3 rounded-lg shadow-lg"
          >
            {/* Logo */}
            <button
              onClick={() => handleNavClickInternal('hero')}
              className="flex items-center gap-2 cursor-pointer select-none bg-transparent border-none p-0 focus:outline-none"
            >
              <Code2 className="text-primary w-5 h-5" />
              <span className="font-birthstone text-2xl leading-none text-primary font-bold">
                Hansi
                <span className="text-base-content/60 font-sans text-sm font-semibold tracking-wide ml-1">Herath</span>
              </span>
            </button>

            {/* Desktop Navigation Links */}
            <ul className="hidden md:flex items-center gap-x-5 text-xs sm:text-sm tracking-wide font-semibold">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClickInternal(item.id)}
                    className={`cursor-pointer rounded-lg transition hover:text-primary bg-transparent border-none p-0 font-medium ${activeSection === item.id
                        ? 'text-primary underline underline-offset-6 decoration-wavy decoration-2 decoration-primary'
                        : 'text-base-content/75'
                      }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-1">
              <button
                onClick={onSearchClick}
                className="p-2 rounded-lg text-base-content/70 hover:text-primary hover:rotate-12 transition"
                aria-label="Search"
              >
                <Search className="w-[18px] h-[18px]" />
              </button>
              <button
                onClick={onThemeToggle}
                className="p-2 rounded-lg text-base-content/70 hover:text-primary hover:rotate-12 transition"
                aria-label="Toggle Theme"
              >
                {currentTheme === 'light' ? (
                  <Moon className="w-[18px] h-[18px]" />
                ) : (
                  <Sun className="w-[18px] h-[18px]" />
                )}
              </button>
            </div>

            {/* Mobile Actions / Toggle */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={onSearchClick}
                className="p-2 rounded-lg text-base-content/70 hover:text-primary transition"
                aria-label="Search"
              >
                <Search className="w-[18px] h-[18px]" />
              </button>
              <button
                onClick={onThemeToggle}
                className="p-2 rounded-lg text-base-content/70 hover:text-primary transition"
                aria-label="Toggle Theme"
              >
                {currentTheme === 'light' ? (
                  <Moon className="w-[18px] h-[18px]" />
                ) : (
                  <Sun className="w-[18px] h-[18px]" />
                )}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-full hover:bg-base-300 text-base-content/70 hover:text-primary transition"
                aria-label="Menu"
              >
                {mobileMenuOpen ? <X className="w-[18px] h-[18px]" /> : <Menu className="w-[18px] h-[18px]" />}
              </button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-4 right-4 z-40 bg-base-200 border border-primary/30 p-4 rounded-xl shadow-xl md:hidden font-sans backdrop-blur-md"
          >
            <ul className="flex flex-col gap-3 text-sm tracking-wide font-semibold text-center">
              {navItems.map((item) => (
                <li key={item.id} className="py-1">
                  <button
                    onClick={() => handleNavClickInternal(item.id)}
                    className={`w-full py-2 rounded-lg text-center bg-transparent border-none focus:outline-none ${activeSection === item.id
                        ? 'text-primary bg-primary/10'
                        : 'text-base-content/85 hover:bg-base-300'
                      }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}