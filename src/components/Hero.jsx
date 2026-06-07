import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';
import heroImage from '../assets/hero.png';
import resumePdf from '../assets/Resume_of_Hansi_Herath.pdf';

export default function Hero() {
  const [roleText, setRoleText] = useState('');
  const [roleIdx, setRoleIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    'an IT Undergraduate',
    'an AI/ML Enthusiast',
    'a Cybersecurity Enthusiast'
  ];

  // Typewriter effect logic
  useEffect(() => {
    const currentFullText = roles[roleIdx];
    let typingSpeed = isDeleting ? 40 : 80;

    const handleType = () => {
      if (!isDeleting) {
        setRoleText(currentFullText.substring(0, roleText.length + 1));
        if (roleText === currentFullText) {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setRoleText(currentFullText.substring(0, roleText.length - 1));
        if (roleText === '') {
          setIsDeleting(false);
          setRoleIdx((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [roleText, isDeleting, roleIdx]);

  const handleHireMeClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen font-sans w-full max-w-3xl mx-auto flex items-center justify-center pt-24 pb-12 px-4 select-none">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="group/section border border-primary/30 bg-base-200/80 backdrop-blur-md relative overflow-hidden grid grid-cols-1 md:grid-cols-2 items-center w-full rounded-2xl p-6 md:p-8 gap-6 shadow-2xl transition-shadow duration-300 hover:shadow-purple-500/20"
      >
        {/* Hover Border Beam Animation */}
        <div className="pointer-events-none absolute inset-0 rounded-[inherit] border-2 border-transparent [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)] [mask-composite:intersect] [mask-clip:padding-box,border-box] opacity-0 group-hover/section:opacity-100 transition-opacity duration-500 z-10">
          <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent,transparent,#a855f7,#ff00ff,transparent,transparent)] animate-[spin_4s_linear_infinite]" />
        </div>

        {/* Right side: Profile Picture & Signature (Placed first on mobile, handled by flex/grid order) */}
        <div className="flex flex-col items-center justify-center order-1 md:order-2">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            className="w-40 sm:w-44 md:w-48 overflow-hidden rounded-xl bg-base-300/40 p-1 border border-primary/20 hover:border-primary/50 transition-colors"
          >
            <div className="relative w-full aspect-square overflow-hidden rounded-lg">
              <img
                src={heroImage}
                alt="Hansi Herath"
                className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Cursive animated signature rendering below image */}
            <div className="flex justify-center items-center h-12 mt-2">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
                className="font-birthstone text-3xl leading-none text-primary font-bold cursor-default hover:scale-105 transition-transform"
              >
                Hansi Herath
              </motion.span>
            </div>
          </motion.div>
        </div>

        {/* Left side: Intro Copy & Buttons */}
        <div className="text-balance p-2 flex flex-col justify-center order-2 md:order-1 text-center md:text-left">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xs font-mono tracking-widest text-primary uppercase"
          >
            • Hello, World!
          </motion.span>

          <h1 className="text-3xl sm:text-4xl leading-tight mt-3 font-bold break-words text-base-content">
            I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">{roleText}</span>
            <span className="animate-blink text-primary">_</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base text-base-content/70 leading-relaxed font-normal">
            IT undergraduate with a strong focus on{' '}
            <span className="bg-primary/10 text-primary font-medium px-1.5 py-0.5 rounded border border-primary/20">Cybersecurity</span>{' '}
            and{' '}
            <span className="bg-primary/10 text-primary font-medium px-1.5 py-0.5 rounded border border-primary/20">Ethical Hacking</span>. 
            Experienced in network and web application security using tools like{' '}
            <span className="bg-primary/10 text-primary font-medium px-1.5 py-0.5 rounded border border-primary/20">Wireshark, Nessus & Metasploit</span>. 
            Passionate about threat detection, vulnerability management, and building secure system architectures.
          </p>

          {/* Action Links */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-5 mt-6">
            <a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 hover:text-primary underline-offset-6 decoration-dashed hover:underline font-mono text-xs sm:text-sm transition-all duration-300 text-base-content/80"
            >
              <Download className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
              [View Resume]
            </a>

            <button
              onClick={handleHireMeClick}
              className="group inline-flex items-center gap-1.5 hover:text-primary underline-offset-6 decoration-dashed hover:underline bg-transparent border-none p-0 cursor-pointer font-mono text-xs sm:text-sm transition-all duration-300 text-base-content/80"
            >
              [Hire Me]
              <Mail className="w-3.5 h-3.5 group-hover:scale-105 transition-transform" />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}