import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import grandeurLogo from "@/assets/grandeur-logo.png";

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Grandeur Liverpool Collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xs md:text-sm tracking-[0.4em] uppercase text-gold mb-6 font-body"
        >
          The Liverpool Collection — Now Live
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mb-4"
        >
          <img src={grandeurLogo} alt="Grandeur" className="h-24 md:h-36 lg:h-44 mx-auto" style={{ filter: "invert(1)" }} />
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="gold-divider w-48 mx-auto mb-6"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-sm md:text-base tracking-[0.3em] uppercase text-primary-foreground/60 mb-2 font-body"
        >
          Crafted with Music
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-lg md:text-xl text-primary-foreground/70 font-body mt-8 max-w-2xl mx-auto leading-relaxed"
        >
          Where the elegance of old-world craftsmanship meets the soulful rhythm of Liverpool.
          Premium polo shirts inspired by the city that gave the world its greatest music.
        </motion.p>

        <motion.a
          href="#collection"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="inline-block mt-10 px-10 py-4 border border-gold text-gold text-sm tracking-[0.2em] uppercase font-body hover:bg-gold hover:text-navy transition-all duration-500"
        >
          Explore Collection
        </motion.a>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="text-gold/60" size={28} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
