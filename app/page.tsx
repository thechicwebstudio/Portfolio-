import ScrollyCanvas from '@/components/ScrollyCanvas';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="w-full bg-black">
      <ScrollyCanvas />
      <Skills />
      <Experience />
      <Projects />
      <Contact />

      {/* Footer */}
      <footer className="py-16 text-center text-white/60 text-sm glass mt-10 border-t border-white/5 border-x-0 border-b-0 rounded-none">
        <div className="flex justify-center gap-6 mb-8">
          <a href="mailto:thechicwebstudio@gmail.com" className="hover:text-white transition-colors duration-300">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
          </a>
          <a href="https://linkedin.com/in/favour-egbokhan" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <a href="https://instagram.com/thechicwebstudio" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
          </a>
        </div>
        <p className="tracking-widest uppercase mb-4 opacity-50 text-xs tracking-[0.2em]">FAVOUR EGBOKHAN • UI/UX DESIGNER</p>
        <p>&copy; {new Date().getFullYear()} Favour Egbokhan. All rights reserved.</p>
      </footer>
    </main>
  );
}
