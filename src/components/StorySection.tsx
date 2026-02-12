import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Music, Headphones, Disc3 } from "lucide-react";

const StorySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="story" className="py-24 md:py-32 bg-cream-gradient">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.4em] uppercase text-accent mb-4 font-body">
            Our Philosophy
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary tracking-wide">
            Crafted with Music
          </h2>
          <div className="gold-divider w-24 mx-auto mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {[
            {
              icon: Music,
              title: "Rhythm in Thread",
              text: "Every stitch carries the cadence of the cities that inspire us. Music is not just sound — it's texture, emotion, identity.",
            },
            {
              icon: Headphones,
              title: "Sound & Fabric",
              text: "We believe great clothing, like great music, should make you feel something. Each collection is a track in our growing discography.",
            },
            {
              icon: Disc3,
              title: "City Vinyl",
              text: "Each city theme is a new record — a chapter in Grandeur's story. Liverpool is our debut single, and the world is our playlist.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-accent/30 mb-6">
                <item.icon className="text-accent" size={28} />
              </div>
              <h3 className="font-display text-xl font-semibold text-primary mb-4 tracking-wide">
                {item.title}
              </h3>
              <p className="text-base text-muted-foreground font-body leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Brand values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { value: "100%", label: "Pima Cotton" },
            { value: "Heritage", label: "Craftsmanship" },
            { value: "Global", label: "City Themes" },
            { value: "Timeless", label: "Design" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-2xl md:text-3xl font-bold text-gold-gradient">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground font-body tracking-[0.15em] uppercase mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StorySection;
