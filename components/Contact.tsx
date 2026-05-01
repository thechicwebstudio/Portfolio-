'use client';
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm('xaqaragz');

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

          {state.succeeded ? (
            <div className="relative z-10 flex flex-col items-center justify-center py-12 text-center">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold mb-4 text-white">Message Sent!</h3>
              <p className="text-white/60 text-lg">Thanks for reaching out. I'll get back to you as soon as possible.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-white/80 font-medium text-sm ml-1">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all text-white placeholder-white/20"
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-white/80 font-medium text-sm ml-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all text-white placeholder-white/20"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-white/80 font-medium text-sm ml-1">Purpose / Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="How can I help you..."
                  rows={5}
                  className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all text-white placeholder-white/20 resize-none"
                ></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="mt-4 bg-white text-black font-semibold rounded-xl px-8 py-4 text-lg hover:bg-white/90 hover:scale-[1.02] transform transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] active:scale-95 disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed"
              >
                {state.submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
