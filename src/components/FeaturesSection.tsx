import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Truck, RefreshCw, Shield, HeartHandshake } from "lucide-react";

const features = [
  { icon: Truck, title: "Complimentary Shipping", desc: "Free worldwide shipping on all orders over £100" },
  { icon: RefreshCw, title: "Easy Returns", desc: "30-day hassle-free returns & exchanges" },
  { icon: Shield, title: "Quality Guarantee", desc: "Premium Pima cotton with lifetime care" },
  { icon: HeartHandshake, title: "Personal Styling", desc: "Complimentary styling advice from our atelier" },
];

const FeaturesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <f.icon className="mx-auto text-accent mb-4" size={28} strokeWidth={1.5} />
              <h4 className="font-display text-sm md:text-base font-semibold text-primary tracking-wide mb-2">
                {f.title}
              </h4>
              <p className="text-xs md:text-sm text-muted-foreground font-body">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
