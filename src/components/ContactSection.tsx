import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-navy-gradient">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4 font-body">
            Get in Touch
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground tracking-wide">
            Contact Us
          </h2>
          <div className="gold-divider w-24 mx-auto mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <p className="text-lg text-primary-foreground/70 font-body leading-relaxed">
              We'd love to hear from you. Whether it's about our collection, sizing, 
              or a bespoke request — our team is here to help.
            </p>

            {[
              { icon: Mail, label: "Email", value: "hello@grandeur.co" },
              { icon: Phone, label: "Phone", value: "+44 151 000 0000" },
              { icon: MapPin, label: "Atelier", value: "Liverpool, United Kingdom" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center">
                  <item.icon className="text-gold" size={18} />
                </div>
                <div>
                  <p className="text-xs tracking-[0.15em] uppercase text-primary-foreground/50 font-body">
                    {item.label}
                  </p>
                  <p className="text-base text-primary-foreground/80 font-body">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Contact form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full bg-transparent border-b border-primary-foreground/20 text-primary-foreground font-body py-3 px-0 placeholder:text-primary-foreground/30 focus:border-gold focus:outline-none transition-colors duration-300 text-base"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full bg-transparent border-b border-primary-foreground/20 text-primary-foreground font-body py-3 px-0 placeholder:text-primary-foreground/30 focus:border-gold focus:outline-none transition-colors duration-300 text-base"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              className="w-full bg-transparent border-b border-primary-foreground/20 text-primary-foreground font-body py-3 px-0 placeholder:text-primary-foreground/30 focus:border-gold focus:outline-none transition-colors duration-300 text-base resize-none"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-3 px-8 py-3 border border-gold text-gold text-sm tracking-[0.2em] uppercase font-body hover:bg-gold hover:text-navy transition-all duration-500"
            >
              {submitted ? "Message Sent" : "Send Message"}
              <Send size={14} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
