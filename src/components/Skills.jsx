

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: 'C, C++, Python, Java'
    },
    {
      title: 'Core Concepts',
      skills: 'Object-Oriented Programming (OOP), Fundamental Data Structures, and algorithms'
    },
    {
      title: 'Web Technologies',
      skills: 'HTML, CSS, JavaScript, PHP, Frontend Development'
    },
    {
      title: 'Cybersecurity Tools & Techniques',
      skills: 'Wireshark, Metasploit, Vulnerability Analysis, Ethical Hacking'
    },
    {
      title: 'Machine Learning & AI',
      skills: 'Data Preprocessing, Feature Engineering, Model Training, Supervised Learning, Classification'
    },
    {
      title: 'Tools & Frameworks',
      skills: 'Git, GitHub, Qt Creator, Anaconda, PyCharm, Google Colab, MySQL, Flutter, Postman'
    },
    {
      title: 'General IT Skills',
      skills: 'Debugging, System Testing, Technical Documentation, Problem Solving'
    }
  ];

  // Marquee elements data for the two lines
  const line1 = [
    { name: 'Python' },
    { name: 'Java' },
    { name: 'C++' },
    { name: 'C' },
    { name: 'HTML' },
    { name: 'CSS' },
    { name: 'JavaScript' }
  ];

  const line2 = [
    { name: 'Wireshark' },
    { name: 'Git' },
    { name: 'MySQL' },
    { name: 'Flutter' },
    { name: 'Postman' },
    { name: 'PHP' }
  ];

  // Helper to render customized tech SVG icons/badges
  const TechIcon = ({ name }) => {
    const icons = {
      'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
      'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
      'C++': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg',
      'C': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg',
      'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
      'CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
      'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
      'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
      'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
      'Flutter': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg',
      'PHP': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',
      'Postman': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg',
    };

    if (icons[name]) {
      return <img src={icons[name]} alt={name} className="w-5 h-5 object-contain" />;
    }

    if (name === 'Wireshark') {
      return (
        <svg className="w-5 h-5 text-[#3b82f6]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" title="Wireshark">
          <path d="M2 16c8-2 8-12 10-12s2 10 10 12M12 4v16"/>
        </svg>
      );
    }
    
    return null;
  };

  return (
    <section id="skills" className="w-full max-w-3xl mx-auto py-16 px-4 font-sans select-none">
      <div className="relative overflow-hidden rounded-2xl p-6 md:p-8 bg-base-200/80 border border-primary/30 backdrop-blur-md shadow-xl group/section hover:shadow-purple-500/20 transition-shadow duration-300">
        
        {/* Hover Border Beam Animation */}
        <div className="pointer-events-none absolute inset-0 rounded-[inherit] border-2 border-transparent [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)] [mask-composite:intersect] [mask-clip:padding-box,border-box] opacity-0 group-hover/section:opacity-100 transition-opacity duration-500 z-10">
          <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent,transparent,#a855f7,#ff00ff,transparent,transparent)] animate-[spin_4s_linear_infinite]" />
        </div>
        
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
          <div className="relative h-[480px] md:h-[560px] flex justify-center gap-5 bg-base-300/30 rounded-xl overflow-hidden border border-primary/10 p-4">
            
            {/* Dynamic CSS Styles for marquee scrolling */}
            <style dangerouslySetInnerHTML={{__html: `
              @keyframes scroll-up {
                0% { transform: translateY(0); }
                100% { transform: translateY(-50%); }
              }
              @keyframes scroll-down {
                0% { transform: translateY(-50%); }
                100% { transform: translateY(0); }
              }
              .marquee-content-up {
                display: flex;
                flex-direction: column;
                height: max-content;
                animation: scroll-up 60s linear infinite;
              }
              .marquee-content-down {
                display: flex;
                flex-direction: column;
                height: max-content;
                animation: scroll-down 60s linear infinite;
              }
              .marquee-col:hover .marquee-content-up,
              .marquee-col:hover .marquee-content-down {
                animation-play-state: paused;
              }
            `}} />

            {/* Column 1: Bottom to Top */}
            <div className="h-full overflow-hidden marquee-col px-1 relative w-full flex justify-end">
              <div className="marquee-content-up w-full max-w-[140px]">
                {/* Render list 6 times for seamless infinite scroll */}
                {[...line1, ...line1, ...line1, ...line1, ...line1, ...line1].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 px-4 py-3 mb-4 rounded-xl bg-base-200 border border-primary/20 hover:border-primary shadow-sm hover:scale-[1.02] active:scale-95 transition-all duration-200 cursor-pointer text-xs font-mono font-bold text-base-content"
                  >
                    <TechIcon name={item.name} />
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: Top to Bottom */}
            <div className="h-full overflow-hidden marquee-col px-1 relative w-full flex justify-start">
              <div className="marquee-content-down w-full max-w-[140px]">
                {[...line2, ...line2, ...line2, ...line2, ...line2, ...line2].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 px-4 py-3 mb-4 rounded-xl bg-base-200 border border-primary/20 hover:border-primary shadow-sm hover:scale-[1.02] active:scale-95 transition-all duration-200 cursor-pointer text-xs font-mono font-bold text-base-content"
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
