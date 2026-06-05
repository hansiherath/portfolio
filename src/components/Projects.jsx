import { motion } from 'framer-motion';
import { ArrowUpRight, Eye } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'AI IoT Ripeness Detection',
      desc: 'Non-destructive mango ripeness detection system integrating Machine Learning, Electronic Nose, and NIR sensors.',
      tech: ['Python', 'IoT', 'Scikit-Learn'],
      liveLink: 'https://github.com/hansi-herath/mango-ripeness',
      mockType: 'sensor'
    },
    {
      title: 'Diabetes Risk Prediction',
      desc: 'Supervised ML classification system that predicts diabetes risk using lifestyle factors, metrics, and dietary habits.',
      tech: ['Python', 'Google Colab', 'Pandas'],
      liveLink: 'https://github.com/hansi-herath/diabetes-prediction',
      mockType: 'chart'
    },
    {
      title: 'Fungal Colony Detection',
      desc: 'Computer vision model designed to automatically locate, segment, and classify fungal colonies from petri dish imagery.',
      tech: ['Python', 'OpenCV', 'PyTorch'],
      liveLink: 'https://github.com/hansi-herath/fungal-cv',
      mockType: 'cv'
    },
    {
      title: 'Design Text Editor',
      desc: 'Feature-rich GUI text editor built with desktop-class widgets, supporting formatting, syntax styling, and files.',
      tech: ['C++', 'Qt Framework', 'CMake'],
      liveLink: 'https://github.com/hansi-herath/qt-text-editor',
      mockType: 'code'
    },
    {
      title: 'LuminaSkin Website',
      desc: 'Designed and developed a responsive website showcasing skincare products (02/2024 - 04/2024).',
      tech: ['HTML', 'CSS', 'JavaScript'],
      liveLink: 'https://github.com/hansi-herath/luminaskin',
      mockType: 'web'
    }
  ];

  return (
    <section id="projects" className="w-full max-w-3xl mx-auto py-16 px-4 font-sans select-none">
      <div className="relative overflow-hidden border border-primary/30 bg-base-200/80 rounded-2xl p-6 md:p-8 backdrop-blur-md shadow-xl">

        {/* Section Header */}
        <div className="text-start mb-8">
          <p className="text-xs font-mono text-primary uppercase tracking-widest">• Projects</p>
          <h2 className="text-2xl font-bold text-base-content mt-1">
            Recent <span className="text-base-content/50">Works</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="relative bg-base-100 rounded-xl p-4 overflow-hidden shadow-md border border-primary/5 hover:border-primary/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
            >
              {/* Border Beam Glow Overlay */}
              <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)] [mask-composite:intersect] [mask-clip:padding-box,border-box]">
                <div
                  className="absolute aspect-square bg-gradient-to-l from-primary via-secondary to-transparent w-[60px] opacity-0 group-hover:opacity-100 animate-border-beam"
                  style={{
                    offsetPath: 'rect(0% 100% 100% 0% round 12px)',
                    transform: 'translate(-50%, -50%)',
                    '--duration': '6s'
                  }}
                />
              </div>

              {/* Media Preview Box (Interactive Mockups instead of missing videos) */}
              <div className="overflow-hidden rounded-lg relative w-full h-32 mb-4 hidden sm:flex items-center justify-center bg-base-300 border border-primary/10">
                {proj.mockType === 'sensor' && (
                  <div className="w-full h-full flex flex-col justify-between p-3 font-mono text-[9px] text-primary/75">
                    <div className="flex justify-between border-b border-primary/25 pb-1">
                      <span>SENSORS: E-NOSE v1.2</span>
                      <span className="text-primary animate-pulse">● LIVE</span>
                    </div>
                    <div className="flex-1 flex items-end gap-1 pt-2">
                      <div className="w-2 bg-primary/20 h-8 group-hover:h-12 transition-all duration-300" />
                      <div className="w-2 bg-primary/20 h-14 group-hover:h-8 transition-all duration-300" />
                      <div className="w-2 bg-primary/20 h-6 group-hover:h-16 transition-all duration-300" />
                      <div className="w-2 bg-primary/30 h-16 group-hover:h-10 transition-all duration-300" />
                      <div className="w-2 bg-primary/40 h-10 group-hover:h-14 transition-all duration-300" />
                      <div className="w-2 bg-primary/50 h-12 group-hover:h-18 transition-all duration-300" />
                      <div className="w-2 bg-primary/60 h-16 group-hover:h-12 transition-all duration-300" />
                      <div className="w-2 bg-primary/70 h-8 group-hover:h-16 transition-all duration-300" />
                      <div className="w-2 bg-primary/80 h-14 group-hover:h-6 transition-all duration-300" />
                      <div className="w-2 bg-primary h-10 group-hover:h-14 transition-all duration-300" />
                    </div>
                    <div className="text-right text-[8px] opacity-75">MQ-135: 0.45ppm | MQ-3: 0.12ppm</div>
                  </div>
                )}

                {proj.mockType === 'chart' && (
                  <div className="w-full h-full p-3 flex flex-col justify-between font-mono text-[9px] text-secondary">
                    <div className="flex justify-between border-b border-secondary/25 pb-1">
                      <span>CLASSIFICATION: DIABETES RISK</span>
                      <span>PREDICTIVE ACC: 94.2%</span>
                    </div>
                    <div className="flex-1 flex items-center justify-center relative">
                      <div className="absolute inset-0 flex items-center justify-center opacity-10">
                        <div className="w-20 h-20 rounded-full border-2 border-dashed border-secondary animate-spin" />
                      </div>
                      <div className="text-center group-hover:scale-105 transition-transform">
                        <div className="text-xs font-bold text-base-content">RISK INDEX</div>
                        <div className="text-base text-secondary font-bold font-mono">0.12 (LOW)</div>
                      </div>
                    </div>
                  </div>
                )}

                {proj.mockType === 'cv' && (
                  <div className="w-full h-full p-2 flex flex-col justify-between font-mono text-[9px] text-red-400">
                    <div className="flex justify-between border-b border-red-500/20 pb-1">
                      <span>CV SCAN: FUNGAL_COLONY.JPG</span>
                      <span className="text-red-400 animate-pulse">● DETECTING</span>
                    </div>
                    <div className="flex-1 relative mt-1 rounded border border-red-500/10 overflow-hidden bg-black/20">
                      <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-red-500/50 animate-bounce" />
                      <div className="absolute top-4 left-6 w-10 h-10 rounded-full border border-dashed border-red-500 flex items-center justify-center text-[7px] text-red-500">
                        Colony 1
                      </div>
                      <div className="absolute top-6 right-8 w-12 h-12 rounded-full border border-dashed border-red-500 flex items-center justify-center text-[7px] text-red-500">
                        Colony 2
                      </div>
                    </div>
                  </div>
                )}

                {proj.mockType === 'code' && (
                  <div className="w-full h-full p-3 flex flex-col justify-between font-mono text-[8px] text-slate-300">
                    <div className="flex justify-between border-b border-slate-700 pb-1 text-[9px] text-slate-400">
                      <span>QT_EDITOR_MAIN.CPP</span>
                      <span>UTF-8</span>
                    </div>
                    <div className="flex-1 pt-2 space-y-1 text-left opacity-90">
                      <div><span className="text-purple-400">#include</span> <span className="text-green-400">&lt;QTextEdit&gt;</span></div>
                      <div><span className="text-purple-400">int</span> <span className="text-blue-400">main</span>() &#123;</div>
                      <div className="pl-3">QTextEdit* editor = <span className="text-purple-400">new</span> <span className="text-blue-400">QTextEdit</span>();</div>
                      <div className="pl-3">editor-&gt;<span className="text-blue-300">setText</span>(<span className="text-green-400">"Hansi Herath..."</span>);</div>
                      <div>&#125;</div>
                    </div>
                  </div>
                )}

                {proj.mockType === 'web' && (
                  <div className="w-full h-full p-3 flex flex-col justify-between font-mono text-[9px] text-primary/75">
                    <div className="flex justify-between border-b border-primary/25 pb-1">
                      <span>LUMINASKIN WEBSITE</span>
                      <span className="text-primary animate-pulse">● ONLINE</span>
                    </div>
                    <div className="flex-1 flex flex-col justify-center gap-1.5 opacity-90 pt-1.5">
                      <div className="h-2 w-2/3 bg-primary/25 rounded" />
                      <div className="h-2 w-1/2 bg-primary/20 rounded" />
                      <div className="flex gap-2 mt-1">
                        <div className="h-5 w-8 bg-primary/20 rounded border border-primary/15" />
                        <div className="h-5 w-8 bg-primary/20 rounded border border-primary/15" />
                        <div className="h-5 w-8 bg-primary/20 rounded border border-primary/15" />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Title & Info */}
              <div className="space-y-2 flex-grow">
                <h3 className="font-semibold text-base text-base-content group-hover:text-primary transition-colors">
                  {proj.title}
                </h3>
                <p className="text-xs sm:text-sm text-base-content/70 leading-relaxed min-h-[40px]">
                  {proj.desc}
                </p>
              </div>

              {/* Tags and Actions */}
              <div className="mt-4 space-y-3">
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {proj.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 text-[10px] rounded-full bg-base-200 border border-primary/20 text-base-content/80 whitespace-nowrap shadow-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Card footer links */}
                <div className="flex items-center justify-between text-xs sm:text-sm pt-2 border-t border-primary/5">
                  <a
                    href={proj.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline-offset-6 decoration-dashed hover:underline rounded-lg inline-flex items-center gap-1 hover:text-primary transition-transform duration-300 hover:translate-x-0.5 text-base-content/80"
                  >
                  </a>
                  <button
                    onClick={() => window.open(proj.liveLink, '_blank')}
                    className="underline-offset-6 decoration-dashed hover:underline rounded-lg inline-flex items-center gap-1 hover:text-primary bg-transparent border-none p-0 cursor-pointer transition-transform duration-300 hover:translate-x-0.5 text-base-content/80"
                  >
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}