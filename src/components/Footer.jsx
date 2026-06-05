import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

export default function Footer() {
  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full max-w-3xl mx-auto py-12 px-4 font-sans select-none border-t border-primary/10 text-base-content/60 text-xs sm:text-sm">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-8">

        {/* Left Column: Brand & Status */}
        <div className="space-y-4">
          <button
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-2 bg-transparent border-none p-0 cursor-pointer text-left focus:outline-none"
          >
            <span className="font-birthstone text-2xl font-bold text-primary">
              Hansi
              <span className="text-base-content/60 font-sans text-sm font-semibold tracking-wide ml-1">Herath</span>
            </span>
          </button>

          <div className="flex items-center gap-2 text-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span>Available for Full-time positions</span>
          </div>
        </div>

        {/* Center Column: Quick Navigation Links */}
        <div>
          <h4 className="text-xs font-mono uppercase tracking-widest text-primary mb-3">Main Pages</h4>
          <ul className="space-y-2">
            {[
              { id: 'hero', label: 'Home' },
              { id: 'skills', label: 'Skills' },
              { id: 'projects', label: 'Projects' },
              { id: 'education', label: 'Education' },
              { id: 'certifications', label: 'Certifications' },
              { id: 'contact', label: 'Contact' }
            ].map((page) => (
              <li key={page.id}>
                <button
                  onClick={() => handleNavClick(page.id)}
                  className="bg-transparent border-none p-0 text-xs text-base-content/75 hover:text-primary transition-colors cursor-pointer"
                >
                  {page.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: Other Resource Links */}
        <div>
          <h4 className="text-xs font-mono uppercase tracking-widest text-primary mb-3">Resources</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="https://github.com/hansi-herath"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-base-content/75 hover:text-primary transition-colors"
              >
                GitHub Profile
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/hansi-herath-57b574275"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-base-content/75 hover:text-primary transition-colors"
              >
                LinkedIn Contact
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright row */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-primary/5 text-xs">
        <p>© {currentYear} Hansi Herath. All Rights Reserved.</p>
        <p className="flex items-center gap-1">
          Built with React & Tailwind <ShieldCheck className="w-3.5 h-3.5 text-primary" />
        </p>
      </div>

    </footer>
  );
}
