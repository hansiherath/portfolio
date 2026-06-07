import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Code2, GraduationCap, Sparkles, Award } from 'lucide-react';

const searchData = [
  { type: 'Skill', name: 'Python', desc: 'Programming Language', section: 'skills', icon: Sparkles },
  { type: 'Skill', name: 'AI & ML', desc: 'Machine Learning algorithms, Google Colab', section: 'skills', icon: Sparkles },
  { type: 'Skill', name: 'Cybersecurity', desc: 'Secure computing, Wireshark, secure practices', section: 'skills', icon: Sparkles },
  { type: 'Skill', name: 'IoT', desc: 'Internet of Things, E-Nose, NIR sensors', section: 'skills', icon: Sparkles },
  { type: 'Skill', name: 'C++', desc: 'Software engineering & Qt editor development', section: 'skills', icon: Sparkles },
  { type: 'Skill', name: 'Java', desc: 'Object-oriented application building', section: 'skills', icon: Sparkles },
  { type: 'Skill', name: 'Flutter', desc: 'Mobile UI application framework', section: 'skills', icon: Sparkles },
  
  { type: 'Project', name: 'Vulnerability Scanning with Nessus', desc: 'Vulnerability assessment on test systems to identify security weaknesses.', section: 'projects', icon: Code2 },
  { type: 'Project', name: 'Network Traffic Analysis using Wireshark', desc: 'Network packet analysis and protocol inspection using Wireshark.', section: 'projects', icon: Code2 },
  { type: 'Project', name: 'Web Application Vulnerability Assessment', desc: 'Security assessment on a test web application.', section: 'projects', icon: Code2 },
  { type: 'Project', name: 'AI IoT Ripeness Detection', desc: 'Mango ripeness detection using ML, E-Nose, and NIR sensors.', section: 'projects', icon: Code2 },
  { type: 'Project', name: 'Diabetes Risk Prediction', desc: 'ML model to classify diabetes and non-diabetes cases.', section: 'projects', icon: Code2 },
  { type: 'Project', name: 'Fungal Colony Detection', desc: 'Computer vision model to detect and classify fungi colonies.', section: 'projects', icon: Code2 },
  { type: 'Project', name: 'Design Text Editor', desc: 'Feature-rich text editor built with C++ and Qt Framework.', section: 'projects', icon: Code2 },
  { type: 'Project', name: 'LuminaSkin Website', desc: 'Responsive website showcasing skincare products (02/2024 - 04/2024).', section: 'projects', icon: Code2 },
  
  { type: 'Education', name: 'BSc in Information Technology', desc: 'Rajarata University of Sri Lanka (2023 - 2026)', section: 'education', icon: GraduationCap },
  { type: 'Education', name: 'Diploma In English', desc: 'British Way English Academy (2021)', section: 'education', icon: GraduationCap },
  
  { type: 'Certification', name: 'Ethical Penetration Testing', desc: 'Coursera - 2026', section: 'certifications', icon: Award },
  { type: 'Certification', name: 'CC Domain 1: Security Principles', desc: 'ISC2 - 2026', section: 'certifications', icon: Award },
  { type: 'Certification', name: 'CC Domain 2: Incident Response, BC and DR', desc: 'ISC2 - 2026', section: 'certifications', icon: Award },
  { type: 'Certification', name: 'CC Domain 3: Access Control Concepts', desc: 'ISC2 - 2026', section: 'certifications', icon: Award },
  { type: 'Certification', name: 'CC Domain 4: Network Security', desc: 'ISC2 - 2026', section: 'certifications', icon: Award },
  { type: 'Certification', name: 'CC Domain 5: Security Operations', desc: 'ISC2 - 2026', section: 'certifications', icon: Award },
  { type: 'Certification', name: 'CC Course Pre-assessment', desc: 'ISC2 - 2026', section: 'certifications', icon: Award },
  { type: 'Certification', name: 'Python for Beginners', desc: 'University of Moratuwa - 2023', section: 'certifications', icon: Award },
  { type: 'Certification', name: 'Wireshark for Security: Detect Network Anomalies', desc: 'Coursera - 2024', section: 'certifications', icon: Award },
  { type: 'Certification', name: 'Introduction to Cybersecurity', desc: 'Cisco - 2024', section: 'certifications', icon: Award },
  { type: 'Certification', name: 'AI/ML Engineer - Stage 1', desc: 'SLIIT - 2024', section: 'certifications', icon: Award },
  { type: 'Certification', name: 'Career Essentials in Cybersecurity', desc: 'Microsoft and LinkedIn - 2023', section: 'certifications', icon: Award },
  { type: 'Certification', name: 'Postman API Fundamentals Student Expert', desc: 'Postman - 2023', section: 'certifications', icon: Award },
  { type: 'Certification', name: 'Introduction to Kubernetes (LFS158)', desc: 'The Linux Foundation - 2024', section: 'certifications', icon: Award },
];

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        isOpen ? onClose() : onClose(false); // Toggle logic handled by parent
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const filteredResults = query.trim() === '' 
    ? [] 
    : searchData.filter(item => 
        item.name.toLowerCase().includes(query.toLowerCase()) || 
        item.desc.toLowerCase().includes(query.toLowerCase()) ||
        item.type.toLowerCase().includes(query.toLowerCase())
      );

  const handleSelect = (sectionId) => {
    onClose();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 sm:pt-28 px-4">
          
          {/* Overlay */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-base-100/60 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-xl bg-base-200 border border-primary/30 rounded-2xl shadow-2xl overflow-hidden relative z-10"
          >
            
            {/* Header Search Field */}
            <div className="flex items-center gap-3 px-4 py-4 border-b border-primary/20">
              <Search className="text-primary w-5 h-5" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects, skills, education..."
                className="flex-1 bg-transparent text-base-content placeholder-base-content/40 focus:outline-none text-base"
              />
              <button 
                onClick={onClose}
                className="p-1 rounded-lg hover:bg-base-300 text-base-content/60 hover:text-base-content transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Results Body */}
            <div className="max-h-80 overflow-y-auto p-4 custom-scroll-container">
              {query.trim() === '' ? (
                <div className="text-center py-6 text-base-content/40 text-sm">
                  <p>Type to search the portfolio...</p>
                  <p className="mt-1 text-xs">Try typing "Python", "BSc", or "Mango"</p>
                </div>
              ) : filteredResults.length === 0 ? (
                <div className="text-center py-6 text-base-content/40 text-sm">
                  No matches found for <span className="text-primary font-semibold">"{query}"</span>
                </div>
              ) : (
                <div className="space-y-2">
                  <p className="text-xs font-mono uppercase tracking-wider text-base-content/40 mb-2">
                    Search Results ({filteredResults.length})
                  </p>
                  {filteredResults.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={idx}
                        onClick={() => handleSelect(item.section)}
                        className="w-full flex items-start gap-3 p-3 rounded-xl hover:bg-primary/10 border border-transparent hover:border-primary/20 transition-all text-left group"
                      >
                        <div className="p-2 bg-base-300 rounded-lg text-primary group-hover:bg-primary group-hover:text-base-100 transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-sm text-base-content group-hover:text-primary transition-colors">
                              {item.name}
                            </span>
                            <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-base-300 text-base-content/60">
                              {item.type}
                            </span>
                          </div>
                          <p className="text-xs text-base-content/60 mt-0.5 line-clamp-1">
                            {item.desc}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Footer tips */}
            <div className="bg-base-300/60 px-4 py-2 text-[10px] font-mono text-base-content/40 border-t border-primary/10 flex justify-between">
              <span>Press <kbd className="bg-base-200 px-1 rounded">Esc</kbd> to close</span>
              <span>Search portfolio</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
