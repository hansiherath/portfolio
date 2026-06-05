import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

const GithubIcon = ({ className = "w-5 h-5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24" height="24"
    viewBox="0 0 24 24"
    fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className={className} aria-hidden="true"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

const LinkedinIcon = ({ className = "w-5 h-5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24" height="24"
    viewBox="0 0 24 24"
    fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className={className} aria-hidden="true"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect width="4" height="12" x="2" y="9"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Contact() {
  const allContacts = [
    {
      icon: Phone,
      label: 'Phone Number',
      value: '0776152969',
      description: 'Call or text anytime',
      href: 'tel:0776152969',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'hansiherath27@gmail.com',
      description: 'Send me an email',
      href: 'mailto:hansiherath27@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Address',
      value: 'Akurana, Sri Lanka',
      description: 'Based in Sri Lanka',
      href: null,
    },
    {
      icon: GithubIcon,
      label: 'GitHub',
      value: 'hansi-herath',
      description: 'Check out my open source projects',
      href: 'https://github.com/hansiherath',
    },
    {
      icon: LinkedinIcon,
      label: 'LinkedIn',
      value: 'Hansi Herath',
      description: 'Connect with me professionally',
      href: 'https://linkedin.com/in/hansi-herath-57b574275',
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.08, duration: 0.4, ease: 'easeOut' },
    }),
  };

  return (
    <section id="contact" className="w-full max-w-3xl mx-auto py-16 px-4 font-sans select-none">
      <div className="relative overflow-hidden border border-primary/30 bg-base-200/80 rounded-2xl p-6 md:p-8 backdrop-blur-md shadow-xl">

        {/* Section Header */}
        <div className="text-start mb-8">
          <p className="text-xs font-mono text-primary uppercase tracking-widest">• Contact</p>
          <h2 className="text-2xl font-bold text-base-content mt-1">
            Let's <span className="text-base-content/50">Connect</span>
          </h2>
          <p className="text-sm text-base-content/55 mt-2 font-mono">
            Feel free to reach out via any of the channels below.
          </p>
        </div>

        {/* Unified Contact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {allContacts.map((item, idx) => {
            const Icon = item.icon;
            const Wrapper = item.href ? motion.a : motion.div;
            const extraProps = item.href
              ? { href: item.href, target: item.href.startsWith('http') ? '_blank' : undefined, rel: item.href.startsWith('http') ? 'noopener noreferrer' : undefined }
              : {};

            return (
              <Wrapper
                key={idx}
                custom={idx}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                {...extraProps}
                className="group flex gap-4 items-center p-4 rounded-xl border border-primary/10 bg-base-100/40 hover:border-primary/40 hover:bg-base-100/70 transition-all duration-300 cursor-default"
              >
                <div className="p-3 bg-base-200 rounded-xl border border-primary/15 text-primary group-hover:bg-primary group-hover:text-base-100 transition-all duration-300 shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-[10px] font-mono uppercase text-base-content/50 tracking-wider">
                    {item.label}
                  </h4>
                  <p className="text-sm font-bold text-base-content group-hover:text-primary transition-colors truncate mt-0.5">
                    {item.value}
                  </p>
                  <p className="text-[11px] font-mono text-base-content/45 mt-0.5">
                    {item.description}
                  </p>
                </div>
              </Wrapper>
            );
          })}
        </div>

      </div>
    </section>
  );
}