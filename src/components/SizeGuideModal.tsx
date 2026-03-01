import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Ruler } from "lucide-react";

const sizes = [
  { size: "XS", chest: "34–36", waist: "28–30", length: "26", sleeve: "7.5" },
  { size: "S", chest: "36–38", waist: "30–32", length: "27", sleeve: "8" },
  { size: "M", chest: "38–40", waist: "32–34", length: "28", sleeve: "8.5" },
  { size: "L", chest: "40–42", waist: "34–36", length: "29", sleeve: "9" },
  { size: "XL", chest: "42–44", waist: "36–38", length: "30", sleeve: "9.5" },
  { size: "XXL", chest: "44–46", waist: "38–40", length: "31", sleeve: "10" },
];

const SizeGuideModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex items-center gap-1.5 text-xs text-accent hover:text-accent/80 font-body tracking-wider uppercase transition-colors duration-300">
          <Ruler size={14} />
          Size Guide
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg bg-background border-border">
        <DialogHeader>
          <DialogTitle className="font-display text-xl tracking-wide text-primary">
            Size Guide
          </DialogTitle>
          <p className="text-xs text-muted-foreground font-body tracking-wider mt-1">
            All measurements in inches
          </p>
        </DialogHeader>
        <div className="overflow-x-auto mt-4">
          <table className="w-full text-sm font-body">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-3 text-xs tracking-[0.15em] uppercase text-accent font-medium">Size</th>
                <th className="text-left py-3 px-3 text-xs tracking-[0.15em] uppercase text-accent font-medium">Chest</th>
                <th className="text-left py-3 px-3 text-xs tracking-[0.15em] uppercase text-accent font-medium">Waist</th>
                <th className="text-left py-3 px-3 text-xs tracking-[0.15em] uppercase text-accent font-medium">Length</th>
                <th className="text-left py-3 px-3 text-xs tracking-[0.15em] uppercase text-accent font-medium">Sleeve</th>
              </tr>
            </thead>
            <tbody>
              {sizes.map((row) => (
                <tr key={row.size} className="border-b border-border/50 hover:bg-secondary/50 transition-colors">
                  <td className="py-3 px-3 font-display font-semibold text-primary">{row.size}</td>
                  <td className="py-3 px-3 text-muted-foreground">{row.chest}</td>
                  <td className="py-3 px-3 text-muted-foreground">{row.waist}</td>
                  <td className="py-3 px-3 text-muted-foreground">{row.length}</td>
                  <td className="py-3 px-3 text-muted-foreground">{row.sleeve}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[11px] text-muted-foreground/60 font-body mt-3">
          For the best fit, measure a polo you already own and compare.
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default SizeGuideModal;
