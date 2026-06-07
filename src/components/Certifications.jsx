import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

import linuxLogo from '../assets/logos/linuxfoundation.png';
import courseraLogo from '../assets/logos/coursera.png';
import sliitLogo from '../assets/logos/sliit.png';
import microsoftLogo from '../assets/logos/microsoft.png';
import linkedinLogo from '../assets/logos/linkedin.png';
import postmanLogo from '../assets/logos/postman.svg';
import ciscoLogo from '../assets/logos/cisco.svg';
import uomLogo from '../assets/logos/uom.png';
import isc2Logo from '../assets/logos/isc2.png';

import ccPreAssessmentPdf from '../assets/certificates/CC  Course Pre-assessment.pdf';
import ccDomain1Pdf from '../assets/certificates/CC Domain 1 Security Principles.pdf';
import ccDomain2Pdf from '../assets/certificates/CC Domain 2 Incident Response, Business Continuity and.pdf';
import ccDomain3Pdf from '../assets/certificates/CC Domain 3 Access Control Concepts.pdf';
import ccDomain4Pdf from '../assets/certificates/CC Domain 4 Network Security.pdf';
import ccDomain5Pdf from '../assets/certificates/CC Domain 5 Security Operations.pdf';
import ethicalPenetrationTestingPdf from '../assets/certificates/Ethical Penetration Testing.pdf';
import Kubernetes from '../assets/certificates/Introduction to Kubernetes LFS158.jfif';
import AIML from '../assets/certificates/AIML.png';
import postman from '../assets/certificates/postman.jfif';

export default function Certifications() {
  const certifications = [
    {
      title: 'Ethical Penetration Testing',
      issuer: 'Coursera',
      date: '2026',
      description: 'Metasploit for Beginners: Ethical Penetration Testing project certificate.',
      link: ethicalPenetrationTestingPdf,
      linkText: 'View Certificate',
      icon: courseraLogo,
      isImage: true
    },
    {
      title: 'CC Domain 5: Security Operations',
      issuer: 'ISC2',
      date: '2026',
      description: 'Certified in Cybersecurity (CC) Domain 5 completion certificate.',
      link: ccDomain5Pdf,
      linkText: 'View Certificate',
      icon: isc2Logo,
      isImage: true
    },
    {
      title: 'CC Domain 4: Network Security',
      issuer: 'ISC2',
      date: '2026',
      description: 'Certified in Cybersecurity (CC) Domain 4 completion certificate.',
      link: ccDomain4Pdf,
      linkText: 'View Certificate',
      icon: isc2Logo,
      isImage: true
    },
    {
      title: 'CC Domain 3: Access Control Concepts',
      issuer: 'ISC2',
      date: '2026',
      description: 'Certified in Cybersecurity (CC) Domain 3 completion certificate.',
      link: ccDomain3Pdf,
      linkText: 'View Certificate',
      icon: isc2Logo,
      isImage: true
    },
    {
      title: 'CC Domain 2: Incident Response, BC and DR',
      issuer: 'ISC2',
      date: '2026',
      description: 'Certified in Cybersecurity (CC) Domain 2 completion certificate.',
      link: ccDomain2Pdf,
      linkText: 'View Certificate',
      icon: isc2Logo,
      isImage: true
    },
    {
      title: 'CC Domain 1: Security Principles',
      issuer: 'ISC2',
      date: '2026',
      description: 'Certified in Cybersecurity (CC) Domain 1 completion certificate.',
      link: ccDomain1Pdf,
      linkText: 'View Certificate',
      icon: isc2Logo,
      isImage: true
    },
    {
      title: 'CC Course Pre-assessment',
      issuer: 'ISC2',
      date: '2026',
      description: 'Certified in Cybersecurity (CC) Pre-assessment completion certificate.',
      link: ccPreAssessmentPdf,
      linkText: 'View Certificate',
      icon: isc2Logo,
      isImage: true
    },
    {
      title: 'Introduction to Kubernetes (LFS158)',
      issuer: 'The Linux Foundation',
      date: '2026',
      description: 'Learned core concepts of Kubernetes including container orchestration, architecture, deployment, and scaling of containerized applications.',
      link: Kubernetes,
      linkText: 'View Certificate',
      icon: linuxLogo,
      isImage: true
    },
    {
      title: 'Wireshark for Security: Detect Network Anomalies',
      issuer: 'Coursera',
      date: '2026',
      description: 'Deep-dive analysis into network traffic sniffing, packet headers, port security, threat profiling, and diagnostic captures.',
      link: 'https://www.coursera.org/account/accomplishments/verify/SC0SQ6VJ81MB',
      linkText: 'Reference Link',
      icon: courseraLogo,
      isImage: true
    },
    {
      title: 'AI/ML Engineer - Stage 1',
      issuer: 'SLIIT',
      date: '2026',
      description: 'Covered essential machine learning workflows, data cleansing, regression, clustering models, and practical AI application pipelines.',
      link: AIML,
      linkText: 'View Certificate',
      icon: sliitLogo,
      isImage: true
    },
    {
      title: 'Career Essentials in Cybersecurity',
      issuer: 'Microsoft and LinkedIn',
      date: '2026',
      description: 'Identifies the administrative baseline for organizational security, vulnerability scans, cryptography basics, and device protection policies.',
      link: 'https://www.linkedin.com/learning/paths/career-essentials-in-cybersecurity-by-microsoft-and-linkedin',
      linkText: 'Reference Link',
      icons: [microsoftLogo, linkedinLogo],
      isImage: true
    },
    {
      title: 'Postman API Fundamentals Student Expert',
      issuer: 'Postman',
      date: '2025',
      description: 'Validated mastery of executing API requests, testing parameters, variable chaining, mock servers, and automated suite assertions.',
      link: postman,
      linkText: 'View Certificate',
      icon: postmanLogo,
      isImage: true
    },
    {
      title: 'Introduction to Cybersecurity',
      issuer: 'Cisco',
      date: '2025',
      description: 'Explores core safety standards, firewalls, network monitoring protocols, secure infrastructure principles, and incident response.',
      link: 'https://www.credly.com/badges/c2e1ae0f-bae2-47cd-9233-6eb24b254162',
      linkText: 'Reference Link',
      icon: ciscoLogo,
      isImage: true
    },
    {
      title: 'Python for Beginners',
      issuer: 'University of Moratuwa',
      date: '2023',
      description: 'Hands-on programming course covering fundamentals, logic gates, variables, loops, custom functions, and basic object-oriented design. Credential Id: It7c5PMaVG',
      link: 'https://open.uom.lk/lms/mod/customcert/verify_certificate.php',
      linkText: 'Reference Link',
      icon: uomLogo,
      isImage: true
    }
  ];

  return (
    <section id="certifications" className="w-full max-w-3xl mx-auto py-12 px-4 font-sans select-none">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="group/section relative overflow-hidden border border-primary/30 bg-base-200/80 rounded-2xl p-6 md:p-8 backdrop-blur-md shadow-2xl hover:shadow-purple-500/20 transition-shadow duration-300"
      >
        {/* Hover Border Beam Animation */}
        <div className="pointer-events-none absolute inset-0 rounded-[inherit] border-2 border-transparent [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)] [mask-composite:intersect] [mask-clip:padding-box,border-box] opacity-0 group-hover/section:opacity-100 transition-opacity duration-500 z-10">
          <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent,transparent,#a855f7,#ff00ff,transparent,transparent)] animate-[spin_4s_linear_infinite]" />
        </div>

        {/* Section Header */}
        <div className="text-start mb-8 border-b border-primary/10 pb-4 flex items-center justify-between">
          <div>
            <p className="text-xs font-mono text-primary uppercase tracking-widest">• Professional Credentials</p>
            <h2 className="text-2xl font-bold text-base-content mt-1">
              Certifications & <span className="text-base-content/50">Licenses</span>
            </h2>
          </div>
        </div>

        {/* Certifications List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map((cert, idx) => {
            const IconComponent = cert.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.015, y: -2 }}
                className="bg-base-100/50 hover:bg-base-100 p-5 rounded-xl border border-primary/5 hover:border-primary/20 transition-all cursor-default relative overflow-hidden group flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex gap-2">
                      {cert.icons ? (
                        cert.icons.map((icn, i) => (
                          <div key={i} className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/30 transition-colors duration-300 flex items-center justify-center">
                            <img src={icn} alt="issuer logo" className="w-5 h-5 object-contain" />
                          </div>
                        ))
                      ) : (
                        <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/30 transition-colors duration-300 flex items-center justify-center">
                          {cert.isImage ? (
                            <img src={cert.icon} alt="issuer logo" className="w-5 h-5 object-contain" />
                          ) : (
                            <IconComponent className="w-5 h-5" />
                          )}
                        </div>
                      )}
                    </div>
                    <div className="text-[10px] font-mono text-base-content/50 bg-base-300/40 px-2 py-0.5 rounded border border-primary/5">
                      {cert.date}
                    </div>
                  </div>

                  <h3 className="font-bold text-sm sm:text-base text-base-content group-hover:text-primary transition-colors mt-3">
                    {cert.title}
                  </h3>

                  <p className="text-xs text-primary font-mono mt-0.5">
                    {cert.issuer}
                  </p>

                  <p className="text-xs text-base-content/60 mt-2 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                {cert.link && (
                  <div className="mt-4 pt-2 border-t border-primary/5">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-1 text-[11px] text-base-content/60 hover:text-primary transition-colors font-mono"
                    >
                      [{cert.linkText || 'Verify Certificate'}]
                      <ArrowUpRight className="w-3 h-3 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
