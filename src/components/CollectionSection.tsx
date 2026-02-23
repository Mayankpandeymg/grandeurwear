import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { products } from "@/data/products";

const CollectionSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();

  return (
    <section id="collection" className="py-24 md:py-32 bg-cream-gradient">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.4em] uppercase text-accent mb-4 font-body">
            Liverpool Edition
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary tracking-wide">
            The Collection
          </h2>
          <div className="gold-divider w-24 mx-auto mt-6" />
          <p className="text-lg text-muted-foreground font-body mt-6 max-w-xl mx-auto">
            Each piece tells a story of Liverpool — its docks, its music, its soul.
            Crafted from the finest Pima cotton.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group cursor-pointer"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <div className="relative overflow-hidden bg-secondary mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-500 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100">
                  <span className="px-8 py-3 bg-primary text-primary-foreground text-xs tracking-[0.2em] uppercase font-body">
                    View Details
                  </span>
                </div>
              </div>
              <h3 className="font-display text-lg font-semibold text-primary tracking-wide">
                {product.name}
              </h3>
              <p className="text-sm text-muted-foreground font-body mt-1">
                {product.description}
              </p>
              <p className="text-base font-display font-bold text-accent mt-2">
                {product.priceDisplay}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionSection;
