'use client';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Design",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-rose-400"><path d="m12 19 7-7 3 3-7 7-3-3z"></path><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="m2 2 7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>,
    skills: ["Figma", "Adobe Photoshop", "Wireframing", "Prototyping", "Design Systems", "Visual Hierarchy"]
  },
  {
    title: "UX Methods",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400"><circle cx="11" cy="11" r="8"></circle><line x1="21" x2="16.65" y1="21" y2="16.65"></line></svg>,
    skills: ["User Research", "Usability Testing", "User Flows", "Information Architecture"]
  },
  {
    title: "Marketing",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-rose-400"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>,
    skills: ["SEO", "Conversion Rate Optimization (CRO)", "Sales Funnels", "Email Marketing", "Analytics"]
  },
  {
    title: "Platforms & Lang",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400"><circle cx="12" cy="12" r="10"></circle><line x1="2" x2="22" y1="12" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>,
    skills: ["Instagram Strategy", "Fiverr", "Google Workspace", "English (Fluent)"]
  }
];

export default function Skills() {
  return (
    <section className="relative z-20 bg-black py-32 px-6 md:px-20 text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24 flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-glow text-center">Core Competencies</h2>
          <p className="text-white/60 text-lg md:text-xl max-w-3xl text-center leading-relaxed">
            UI/UX and Visual Designer with 2+ years delivering responsive interfaces and brand identities that convert. Proficient in Figma and Adobe Photoshop, with hands-on experience across the full design process — from wireframes to high-fidelity delivery. Available immediately.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {skillCategories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass p-8 rounded-3xl group hover:bg-white/[0.05] transition-colors duration-500"
            >
              <div className="mb-8 p-4 rounded-2xl bg-white/5 inline-block group-hover:scale-110 transition-transform duration-500">
                {category.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-6">{category.title}</h3>
              <ul className="space-y-3">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="text-white/70 flex items-center text-sm md:text-base">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/30 mr-3 group-hover:bg-white/70 transition-colors" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
