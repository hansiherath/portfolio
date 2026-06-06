import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import britishway from '../assets/logos/britishway.jfif';
import rajarata from '../assets/logos/rajarata.jfif'

export default function Education() {
  const education = [
    {
      degree: 'BSc in Information Technology (General)',
      institution: 'Rajarata University of Sri Lanka',
      date: '2023 - 2026',
      link: 'http://www.rjt.ac.lk/',
      logo: rajarata,
      subjects: [
        'Principles of Program Design & Programming',
        'Object Oriented Programming',
        'Data Structures',
        'Database Systems',
        'Web Technologies',
        'Software Engineering',
        'Project Management',
        'Computer Networks',
        'Computer Organization & Architecture',
        'Information Systems Security',
        'Introduction to Intelligence System',
        'Introduction to Ethical Hacking',
        'Embedded Systems'
      ]
    },
    {
      degree: 'Diploma In English',
      institution: 'British Way English Academy',
      date: '2021 - 2021',
      link: 'https://britishway.lk/',
      logo: britishway
    }
  ];

  return (
    <section id="education" className="w-full max-w-3xl mx-auto py-12 px-4 font-sans select-none">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden border border-primary/30 bg-base-200/80 rounded-2xl p-6 md:p-8 backdrop-blur-md shadow-2xl"
      >
        {/* Border Beam Animation */}
        <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)] [mask-composite:intersect] [mask-clip:padding-box,border-box]">
          <div
            className="absolute aspect-square bg-gradient-to-l from-primary via-secondary to-transparent w-[120px] animate-border-beam"
            style={{
              offsetPath: 'rect(0% 100% 100% 0% round 16px)',
              transform: 'translate(-50%, -50%)',
              '--duration': '10s'
            }}
          />
        </div>

        {/* Section Header */}
        <div className="text-start mb-8 border-b border-primary/10 pb-4 flex items-center justify-between">
          <div>
            <p className="text-xs font-mono text-primary uppercase tracking-widest">• Academic History</p>
            <h2 className="text-2xl font-bold text-base-content mt-1">
              Education <span className="text-base-content/50">Background</span>
            </h2>
          </div>
          <GraduationCap className="w-6 h-6 text-primary/70" />
        </div>

        {/* Education List */}
        <div className="space-y-4">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.008 }}
              className="bg-base-100/50 hover:bg-base-100 p-5 rounded-xl border border-primary/5 hover:border-primary/20 transition-all cursor-default relative overflow-hidden group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5">
                <div className="flex items-center gap-3">
                  {edu.logo && (
                    <div className="w-10 h-10 rounded-lg bg-white p-1 flex-shrink-0 flex items-center justify-center border border-primary/10">
                      <img src={edu.logo} alt={edu.institution} className="w-full h-full object-contain" />
                    </div>
                  )}
                  <div>
                    <h3 className="font-bold text-base text-base-content group-hover:text-primary transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-xs text-primary font-mono mt-0.5">
                      {edu.institution}
                    </p>
                  </div>
                </div>
                <div className="text-xs font-mono text-base-content/50 sm:text-right bg-base-300/40 px-2.5 py-1 rounded-md border border-primary/5 self-start sm:self-center">
                  {edu.date}
                </div>
              </div>

              {edu.subjects && (
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {edu.subjects.map((subject, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[10px] sm:text-[11px] px-2.5 py-1 rounded-md bg-primary/5 text-base-content/70 border border-primary/10 hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              )}

            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
