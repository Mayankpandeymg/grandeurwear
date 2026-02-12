import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import liverpoolSkyline from "@/assets/liverpool-skyline.jpg";

const LiverpoolSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="liverpool" className="relative py-0 overflow-hidden">
      <div className="grid md:grid-cols-2 min-h-[80vh]">
        {/* Image side */}
        <div className="relative overflow-hidden">
          <motion.img
            src={liverpoolSkyline}
            alt="Liverpool Waterfront"
            className="w-full h-full object-cover min-h-[400px]"
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-navy/30 md:to-navy/60" />
        </div>

        {/* Text side */}
        <div
          ref={ref}
          className="bg-navy-gradient flex items-center px-8 md:px-16 py-16 md:py-0"
        >
          <div>
            <motion.p
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-xs tracking-[0.4em] uppercase text-gold mb-4 font-body"
            >
              City Series — Volume I
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-bold text-primary-foreground tracking-wide mb-6"
            >
              Liverpool
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="gold-divider w-16 mb-8 origin-left"
            />

            <motion.p
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-primary-foreground/70 font-body leading-relaxed mb-6"
            >
              A city that shaped the world through its port, its people, and its sound. 
              From the Royal Liver Building to the Cavern Club, Liverpool pulses with a 
              grandeur that is both timeless and unmistakably alive.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-primary-foreground/70 font-body leading-relaxed mb-10"
            >
              Our debut collection draws from the city's rich tapestry — 
              the deep navy of the Mersey, the warmth of its Victorian architecture, 
              and the rebellious spirit of its musical legacy.
            </motion.p>

            <motion.a
              href="#collection"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="inline-block px-8 py-3 border border-gold text-gold text-sm tracking-[0.2em] uppercase font-body hover:bg-gold hover:text-navy transition-all duration-500"
            >
              Shop Liverpool
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiverpoolSection;
