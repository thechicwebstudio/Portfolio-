'use client';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: "UI/UX Designer & Visual Designer",
    company: "Freelance",
    date: "Nov 2023 – Present",
    location: "Kwara, Nigeria",
    description: [
      "Design pixel-perfect, responsive web and mobile interfaces using Figma, applying UCD principles.",
      "Develop brand identities and visual assets using Adobe Photoshop.",
      "Lead end-to-end design process: discovery, wireframing, prototyping, usability testing.",
      "Build and maintain a public design portfolio (@thechicwebstudio)."
    ]
  },
  {
    role: "Digital Marketing Specialist",
    company: "Proteam Digital Solutions",
    date: "May 2025 – Present",
    location: "Kwara, Nigeria",
    description: [
      "Designed and built functional, conversion-optimized websites using web design tools and digital marketing best practices.",
      "Developed and executed SEO and CRO strategies for service pages, improving organic visibility and client acquisition rates.",
      "Built high-performing sales funnels and integrated marketing automation tools.",
      "Analyzed performance metrics to iterate on digital strategies."
    ]
  },
  {
    role: "Executive Manager & Digital Operations Lead",
    company: "Racle Godswill International School",
    date: "Aug 2017 – Feb 2025",
    location: "Lagos, Nigeria",
    description: [
      "Directed school-wide digital operations including social media strategy.",
      "Led a cross-functional creative team to produce engagement campaigns.",
      "Streamlined administrative and record-management systems."
    ]
  },
  {
    role: "Research Intern — Blockchain in Education",
    company: "University of Ilorin",
    date: "Aug 2023 – Jul 2024",
    location: "Kwara, Nigeria",
    description: [
      "Researched and documented blockchain-based frameworks for securing academic records.",
      "Developed proposals for integrating digital tools into learning management systems."
    ]
  }
];

export default function Experience() {
  return (
    <section className="relative z-20 bg-[#050505] py-32 px-6 md:px-20 text-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-glow">Experience & Education</h2>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">A timeline of my professional journey, academic background, and certifications.</p>
        </motion.div>

        {/* Work Experience */}
        <div className="mb-24 relative border-l border-white/10 pl-8 md:pl-12 ml-4 md:ml-6 space-y-16">
          <div className="absolute -left-5 md:-left-5 top-0 bg-[#050505] p-2 text-white/50">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
          </div>
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative"
            >
              <div className="absolute -left-[45px] md:-left-[61px] top-2 w-4 h-4 rounded-full bg-gradient-to-r from-rose-500 to-amber-400 shadow-[0_0_10px_rgba(244,63,94,0.5)]" />
              <div className="glass p-8 rounded-3xl hover:border-white/20 transition-all duration-500">
                <div className="flex flex-col md:flex-row md:justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-2xl font-semibold mb-1">{exp.role}</h3>
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-amber-300 font-medium">{exp.company}</p>
                  </div>
                  <div className="md:text-right">
                    <p className="text-white/60 font-medium">{exp.date}</p>
                    <p className="text-white/40 text-sm mt-1">{exp.location}</p>
                  </div>
                </div>
                <ul className="space-y-3 mt-6">
                  {exp.description.map((desc, idx) => (
                    <li key={idx} className="text-white/70 flex items-start">
                      <span className="text-rose-500 mr-3 mt-1">•</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education & Certs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="glass p-8 rounded-3xl"
          >
            <div className="flex items-center gap-3 mb-6 text-white/50">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
              <h3 className="text-xl font-medium text-white">Education</h3>
            </div>
            <div>
              <h4 className="text-lg font-semibold">B.Sc. Educational Technology</h4>
              <p className="text-amber-400 mt-1 mb-2">University of Ilorin, Kwara, Nigeria</p>
              <p className="text-white/70">Focus: Instructional design, digital learning systems, and technology integration in human-centered environments.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass p-8 rounded-3xl"
          >
            <div className="flex items-center gap-3 mb-6 text-white/50">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
              <h3 className="text-xl font-medium text-white">Certifications & Training</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex justify-between items-center border-b border-white/10 pb-4">
                <span className="text-white/90">Figma / UX Design</span>
                <span className="text-white/50 text-sm text-right">Certificate (2024)</span>
              </li>
              <li className="flex justify-between items-center border-b border-white/10 pb-4">
                <span className="text-white/90">Adobe Photoshop / Graphic Design</span>
                <span className="text-white/50 text-sm text-right">Award (2025)</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-white/90">NYSC Kwara EDG</span>
                <span className="text-white/50 text-sm text-right">Welfare Lead (2025 – 2026)</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
