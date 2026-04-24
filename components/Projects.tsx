'use client';
import { motion } from 'framer-motion';

import Link from 'next/link';
import { projectsData } from '@/data/projects';

export default function Projects() {
  return (
    <section className="relative z-20 bg-[#050505] min-h-screen py-32 px-6 md:px-20 text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-glow mb-4">Featured Case Studies</h2>
          <p className="text-white/60 text-lg md:text-xl">Discover my end-to-end design process on Instagram <a href="https://instagram.com/thechicwebstudio" target="_blank" rel="noopener noreferrer" className="text-white underline decoration-white/30 hover:decoration-white transition-all underline-offset-4">@thechicwebstudio</a>.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projectsData.map((proj, i) => (
            <Link href={`/projects/${proj.id}`} key={proj.id}>
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="group relative overflow-hidden rounded-[2rem] glass p-6 md:p-8 hover:border-white/20 transition-all duration-700 cursor-pointer"
              >
                {/* Subtle hover glow layer */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0 pointer-events-none" />

                <div className="relative z-10 w-full h-72 md:h-96 mb-8 rounded-[1.5rem] overflow-hidden">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 group-hover:rotate-1 transition-all duration-1000 ease-out"
                  />
                </div>

                <div className="relative z-10 flex justify-between items-end">
                  <div>
                    <h3 className="text-3xl font-semibold mb-2 transform group-hover:translate-x-2 transition-transform duration-500 ease-out">{proj.title}</h3>
                    <p className="text-white/50 text-lg transform group-hover:translate-x-2 transition-transform duration-500 delay-75 ease-out">{proj.category}</p>
                  </div>
                  <div className="w-14 h-14 rounded-full glass flex justify-center items-center group-hover:bg-white group-hover:text-black transition-all duration-500 transform group-hover:scale-110">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
