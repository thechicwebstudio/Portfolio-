'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    purpose: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Constructing a mailto link to send the email directly
    const subject = encodeURIComponent(`New Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nPurpose / Message:\n${formData.purpose}`
    );
    window.open(`mailto:thechicwebstudio@gmail.com?subject=${subject}&body=${body}`);
  };

  return (
    <section className="relative z-20 bg-[#050505] py-32 px-6 md:px-20 text-white border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-glow">Let's Work Together</h2>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
            Ready to build something amazing? Fill out the form below and I'll get back to you as soon as possible.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass p-8 md:p-12 rounded-[2rem] relative overflow-hidden"
        >
          {/* Subtle glow effect in the background of the form */}
          <div className="absolute -inset-24 bg-gradient-to-tr from-rose-500/10 via-transparent to-amber-500/10 opacity-50 pointer-events-none blur-3xl rounded-full" />

          <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-white/80 font-medium text-sm ml-1">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all text-white placeholder-white/20"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-white/80 font-medium text-sm ml-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all text-white placeholder-white/20"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="purpose" className="text-white/80 font-medium text-sm ml-1">Purpose / Message</label>
              <textarea
                id="purpose"
                name="purpose"
                value={formData.purpose}
                onChange={handleChange}
                required
                placeholder="How can I help you..."
                rows={5}
                className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all text-white placeholder-white/20 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-4 bg-white text-black font-semibold rounded-xl px-8 py-4 text-lg hover:bg-white/90 hover:scale-[1.02] transform transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] active:scale-95"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
