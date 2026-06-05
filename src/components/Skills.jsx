import { motion } from 'framer-motion';
import { Shield, Sparkles } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming & Frontend',
      skills: 'Python, C++, Java, JavaScript, React, Tailwind CSS, Flutter, Dart'
    },
    {
      title: 'Backend & Databases',
      skills: 'Node.js, Express.js, MongoDB, SQL, Firebase, RESTful APIs'
    },
    {
      title: 'Security & IoT Systems',
      skills: 'Wireshark packet capture, Intelligent Sensing, E-Nose / NIR, Secure Computing'
    },
    {
      title: 'Soft Skills & Focus',
      skills: 'Team Collaboration, Technical Documentation, Adaptability, Fast Learner'
    }
  ];

  // Marquee elements data for the two lines
  const line1 = [
    { name: 'Python' },
    { name: 'React' },
    { name: 'CSS' },
    { name: 'HTML' },
    { name: 'JavaScript' },
    { name: 'C++' }
  ];

  const line2 = [
    { name: 'Assembly' },
    { name: 'Arduino' },
    { name: 'Wireshark' },
    { name: 'Postman' },
    { name: 'C' },
    { name: 'Selenium' }
  ];

  // Helper to render customized tech SVG icons/badges
  const TechIcon = ({ name }) => {
    switch (name) {
      case 'Python':
        return (
          <svg className="w-5 h-5 text-[#38bdf8]" viewBox="0 0 24 24" fill="currentColor" title="Python">
            <path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2zm-2.2 4.5h4.4c.7 0 1.2.6 1.2 1.3v1h-5.6v-.7c0-.9.7-1.6 1.6-1.6zm2.2 11c-.9 0-1.6-.7-1.6-1.6v-.7h5.6v.7c0 .7-.5 1.3-1.2 1.3h-2.8z"/>
          </svg>
        );
      case 'React':
        return (
          <svg className="w-5 h-5 text-[#00d8ff] animate-spin" style={{ animationDuration: '8s' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" title="React">
            <circle cx="12" cy="12" r="2"/>
            <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(30 12 12)"/>
            <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(90 12 12)"/>
            <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(150 12 12)"/>
          </svg>
        );
      case 'C++':
        return (
          <span className="text-[9px] font-extrabold text-[#a855f7] bg-[#a855f7]/10 px-1 py-0.5 rounded border border-purple-500/25 font-mono" title="C++">C++</span>
        );
      case 'C':
        return (
          <span className="text-[9px] font-extrabold text-[#eab308] bg-[#eab308]/10 px-1.5 py-0.5 rounded border border-yellow-500/25 font-mono" title="C">C</span>
        );
      case 'Assembly':
        return (
          <svg className="w-5 h-5 text-[#4ade80]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" title="Assembly">
            <rect width="18" height="18" x="3" y="3" rx="2"/>
            <path d="M9 9h6v6H9zm0-6v3m6-3v3M3 9h3m-3 6h3m6 6v-3m6 3v-3m6-6h-3m3 6h-3"/>
          </svg>
        );
      case 'Wireshark':
        return (
          <svg className="w-5 h-5 text-[#3b82f6]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" title="Wireshark">
            <path d="M2 16c8-2 8-12 10-12s2 10 10 12M12 4v16"/>
          </svg>
        );
      case 'HTML':
        return (
          <svg className="w-5 h-5 text-[#f97316]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" title="HTML5">
            <path d="m8 19-5-5 5-5m8 10 5-5-5-5M15 4l-6 16"/>
          </svg>
        );
      case 'CSS':
        return (
          <svg className="w-5 h-5 text-[#38bdf8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" title="CSS3">
            <path d="M12 22 4 18 2 4h20l-2 14z"/>
            <path d="M12 6H8v4h8v4l-4 2-4-2"/>
          </svg>
        );
      case 'JavaScript':
        return (
          <span className="text-[9px] font-extrabold text-[#fbbf24] bg-[#fbbf24]/10 px-1 py-0.5 rounded border border-yellow-500/25 font-mono" title="JavaScript">JS</span>
        );
      case 'Arduino':
        return (
          <svg className="w-5 h-5 text-[#00979d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" title="Arduino">
            <circle cx="8" cy="12" r="3.5"/>
            <circle cx="16" cy="12" r="3.5"/>
            <path d="M12 12h.01M7 12h2m-6 0h2m10 0h2m-2-2v4"/>
          </svg>
        );
      case 'Postman':
        return (
          <svg className="w-5 h-5 text-[#ff6c37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" title="Postman">
            <path d="M4.5 16.5c-1.5-2.5-.5-5.5 2-7s5.5-.5 7 2 .5 5.5-2 7-5.5.5-7-2zM12 12l8-8m-2 0h2v2"/>
          </svg>
        );
      case 'Selenium':
        return (
          <span className="text-[9px] font-extrabold text-[#24a148] bg-[#24a148]/10 px-1 py-0.5 rounded border border-green-500/25 font-mono" title="Selenium">Se</span>
        );
      default:
        return null;
    }
  };

  return (
    <section id="skills" className="w-full max-w-3xl mx-auto py-16 px-4 font-sans select-none">
      <div className="relative overflow-hidden rounded-2xl p-6 md:p-8 bg-base-200/80 border border-primary/30 backdrop-blur-md shadow-xl">
        
        {/* Glow corner elements */}
        <div className="absolute -top-10 -right-10 hidden md:block w-36 h-36 border border-primary/20 rounded-full opacity-35" />
        <div className="absolute -top-6 -right-6 hidden md:block w-24 h-24 border border-primary/10 rounded-full opacity-30" />
        
        {/* Section Header */}
        <div className="text-start mb-8">
          <p className="text-xs font-mono text-primary uppercase tracking-widest">• Skills</p>
          <h2 className="text-2xl font-bold text-base-content mt-1">
            Expertise <span className="text-base-content/50">Area</span>
          </h2>
        </div>

        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Left Side: Dynamic Scrolling Ticker Tracks */}
          <div className="relative h-[200px] flex flex-col justify-center gap-5 bg-base-300/30 rounded-xl overflow-hidden border border-primary/10 p-4">
            
            {/* Dynamic CSS Styles for marquee scrolling */}
            <style dangerouslySetInnerHTML={{__html: `
              @keyframes scroll-left {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              @keyframes scroll-right {
                0% { transform: translateX(-50%); }
                100% { transform: translateX(0); }
              }
              .marquee-content-left {
                display: flex;
                gap: 16px;
                width: max-content;
                animation: scroll-left 22s linear infinite;
              }
              .marquee-content-right {
                display: flex;
                gap: 16px;
                width: max-content;
                animation: scroll-right 22s linear infinite;
              }
              .marquee-row:hover .marquee-content-left,
              .marquee-row:hover .marquee-content-right {
                animation-play-state: paused;
              }
            `}} />

            {/* Row 1: Right to Left */}
            <div className="w-full overflow-hidden marquee-row py-1 relative">
              <div className="marquee-content-left">
                {/* Render list twice for seamless infinite scroll */}
                {[...line1, ...line1].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-base-200 border border-primary/20 hover:border-primary shadow-sm hover:scale-[1.02] active:scale-95 transition-all duration-200 cursor-pointer text-xs font-mono font-bold text-base-content"
                  >
                    <TechIcon name={item.name} />
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2: Left to Right */}
            <div className="w-full overflow-hidden marquee-row py-1 relative">
              <div className="marquee-content-right">
                {[...line2, ...line2].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-base-200 border border-primary/20 hover:border-primary shadow-sm hover:scale-[1.02] active:scale-95 transition-all duration-200 cursor-pointer text-xs font-mono font-bold text-base-content"
                  >
                    <TechIcon name={item.name} />
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Side: Skill Category Cards */}
          <ul className="text-sm space-y-4 tracking-wide">
            {skillCategories.map((cat, idx) => (
              <li
                key={idx}
                className="pl-4 border-l-2 border-primary/30 hover:border-primary transition-colors duration-300"
              >
                <span className="text-base-content font-semibold block text-sm mb-0.5">
                  {cat.title}:
                </span>
                <span className="text-base-content/60 text-xs sm:text-sm leading-relaxed">
                  {cat.skills}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
