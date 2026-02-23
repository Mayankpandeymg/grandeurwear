import poloNavy from "@/assets/polo-navy.jpg";
import poloCream from "@/assets/polo-cream.jpg";
import poloBurgundy from "@/assets/polo-burgundy.jpg";
import poloGreen from "@/assets/polo-green.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  priceDisplay: string;
  image: string;
  description: string;
  longDescription: string;
  details: string[];
  sizes: string[];
}

export const products: Product[] = [
  {
    id: "mersey-navy",
    name: "The Mersey Navy",
    price: 89,
    priceDisplay: "£89",
    image: poloNavy,
    description: "Deep navy polo inspired by Liverpool's maritime heritage",
    longDescription:
      "A tribute to the Mersey River and Liverpool's storied maritime legacy. This deep navy polo features our signature staircase pattern on the collar and sleeves, with the Grandeur Liverpool crest embroidered at the chest. Crafted from 100% long-staple Pima cotton for unrivalled softness and durability.",
    details: [
      "100% Pima Cotton, 220gsm piqué",
      "Contrast collar and sleeve detail",
      "Embroidered Grandeur Liverpool crest",
      "Mother-of-pearl buttons",
      "Reinforced side vents",
      "Made in Portugal",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  },
  {
    id: "cavern-cream",
    name: "The Cavern Cream",
    price: 89,
    priceDisplay: "£89",
    image: poloCream,
    description: "Ivory elegance echoing the iconic Cavern Club walls",
    longDescription:
      "Inspired by the legendary Cavern Club where music history was made. This cream polo radiates understated elegance with warm ivory tones and contrast detailing. The signature staircase weave on the collar pays homage to the steps that led down to the world's most famous cellar club.",
    details: [
      "100% Pima Cotton, 220gsm piqué",
      "Contrast collar and sleeve detail",
      "Embroidered Grandeur Liverpool crest",
      "Mother-of-pearl buttons",
      "Reinforced side vents",
      "Made in Portugal",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  },
  {
    id: "anfield-burgundy",
    name: "The Anfield Burgundy",
    price: 95,
    priceDisplay: "£95",
    image: poloBurgundy,
    description: "Rich burgundy channeling the passion of Anfield",
    longDescription:
      "Born from the electric atmosphere of Anfield on matchday. This rich burgundy polo captures the passion and pride of Liverpool's footballing soul. A premium edition with deeper dye saturation and a slightly heavier 240gsm weave for a luxurious drape.",
    details: [
      "100% Pima Cotton, 240gsm premium piqué",
      "Contrast collar and sleeve detail",
      "Embroidered Grandeur Liverpool crest",
      "Mother-of-pearl buttons",
      "Reinforced side vents",
      "Made in Portugal",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  },
  {
    id: "albert-green",
    name: "The Albert Green",
    price: 89,
    priceDisplay: "£89",
    image: poloGreen,
    description: "Forest green honoring the Albert Dock's grandeur",
    longDescription:
      "A celebration of the iconic Albert Dock, where heritage meets contemporary culture. This forest green polo brings natural sophistication with its rich, earthy tone. The contrast detailing echoes the dock's distinctive cast-iron columns against red-brick warehouses.",
    details: [
      "100% Pima Cotton, 220gsm piqué",
      "Contrast collar and sleeve detail",
      "Embroidered Grandeur Liverpool crest",
      "Mother-of-pearl buttons",
      "Reinforced side vents",
      "Made in Portugal",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  },
];

export const getProductById = (id: string) =>
  products.find((p) => p.id === id);
