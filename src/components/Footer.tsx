import { Instagram, Facebook, Twitter } from "lucide-react";
import grandeurLogo from "@/assets/grandeur-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <img src={grandeurLogo} alt="Grandeur" className="h-16 md:h-20 mb-2" style={{ filter: "invert(1) brightness(2)" }} />
            <p className="text-xs tracking-[0.2em] uppercase text-primary-foreground/40 font-body mb-4">
              Crafted with Music
            </p>
            <p className="text-sm text-primary-foreground/50 font-body leading-relaxed">
              Premium polo shirts inspired by the world's greatest cities and their musical soul.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm tracking-[0.2em] uppercase text-primary-foreground/80 mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Collection", "Our Story", "Liverpool", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "")}`}
                    className="text-sm text-primary-foreground/50 hover:text-gold transition-colors duration-300 font-body"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-display text-sm tracking-[0.2em] uppercase text-primary-foreground/80 mb-6">
              Support
            </h4>
            <ul className="space-y-3">
              {["Shipping & Returns", "Size Guide", "Care Instructions", "FAQ", "Privacy Policy"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-primary-foreground/50 hover:text-gold transition-colors duration-300 font-body"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display text-sm tracking-[0.2em] uppercase text-primary-foreground/80 mb-6">
              Newsletter
            </h4>
            <p className="text-sm text-primary-foreground/50 font-body mb-4">
              Be the first to know about new city drops and exclusive offers.
            </p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-transparent border-b border-primary-foreground/20 text-primary-foreground font-body py-2 px-0 text-sm placeholder:text-primary-foreground/30 focus:border-gold focus:outline-none transition-colors duration-300"
              />
              <button
                type="submit"
                className="ml-4 text-gold text-xs tracking-[0.15em] uppercase font-body hover:text-primary-foreground transition-colors duration-300"
              >
                Join
              </button>
            </form>
            <div className="flex gap-4 mt-8">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/40 hover:text-gold hover:border-gold transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="gold-divider mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/30 font-body tracking-wider">
            © 2026 Grandeur. All rights reserved.
          </p>
          <p className="text-xs text-primary-foreground/30 font-body tracking-wider italic">
            "Where elegance meets rhythm"
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
