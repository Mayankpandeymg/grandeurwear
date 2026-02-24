import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Minus, Plus, CheckCircle } from "lucide-react";
import { useState } from "react";
import { getProductById } from "@/data/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PayPalCheckout from "@/components/PayPalCheckout";
import { useToast } from "@/hooks/use-toast";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = getProductById(id || "");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [orderComplete, setOrderComplete] = useState(false);
  const { toast } = useToast();

  if (!product) {
    return (
      <main className="overflow-x-hidden">
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="text-center">
            <h1 className="font-display text-3xl text-primary mb-4">Product Not Found</h1>
            <button
              onClick={() => navigate("/")}
              className="text-accent hover:text-accent/80 font-body tracking-wider uppercase text-sm"
            >
              Return to Collection
            </button>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  const handlePaymentSuccess = (details: any) => {
    setOrderComplete(true);
    toast({
      title: "Order Confirmed!",
      description: `Thank you ${details?.payer?.name?.given_name || ""}! Your ${product.name} (Size ${selectedSize}) is on its way.`,
    });
  };

  const handlePaymentError = (error: any) => {
    toast({
      title: "Payment Failed",
      description: "Something went wrong. Please try again.",
      variant: "destructive",
    });
    console.error("Payment error:", error);
  };

  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <section className="pt-28 pb-24 bg-background min-h-screen">
        <div className="container mx-auto px-6">
          {/* Back button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary font-body text-sm tracking-wider uppercase mb-10 transition-colors duration-300"
          >
            <ArrowLeft size={16} />
            Back to Collection
          </motion.button>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
            {/* Product image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="bg-secondary overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full aspect-[3/4] object-cover"
              />
            </motion.div>

            {/* Product info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="flex flex-col justify-center"
            >
              <p className="text-xs tracking-[0.4em] uppercase text-accent mb-3 font-body">
                Liverpool Edition
              </p>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary tracking-wide mb-4">
                {product.name}
              </h1>
              <p className="font-display text-2xl md:text-3xl font-bold text-accent mb-6">
                {product.priceDisplay}
              </p>
              <div className="gold-divider w-16 mb-6" />
              <p className="text-base text-muted-foreground font-body leading-relaxed mb-8">
                {product.longDescription}
              </p>

              {/* Size selector */}
              <div className="mb-8">
                <p className="text-xs tracking-[0.2em] uppercase text-primary/70 font-body mb-3">
                  Select Size
                </p>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 border text-sm font-body tracking-wider transition-all duration-300 ${
                        selectedSize === size
                          ? "border-accent bg-accent text-accent-foreground"
                          : "border-border text-muted-foreground hover:border-accent hover:text-accent"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                {!selectedSize && (
                  <p className="text-xs text-muted-foreground/60 font-body mt-2">
                    Please select a size
                  </p>
                )}
              </div>

              {/* Quantity */}
              <div className="mb-8">
                <p className="text-xs tracking-[0.2em] uppercase text-primary/70 font-body mb-3">
                  Quantity
                </p>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:border-accent hover:text-accent transition-all duration-300"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="font-body text-lg text-primary w-8 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:border-accent hover:text-accent transition-all duration-300"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              {/* Payment */}
              {orderComplete ? (
                <div className="flex items-center gap-3 px-10 py-4 bg-green-900/20 border border-green-700/30 w-full md:w-auto justify-center">
                  <CheckCircle size={16} className="text-green-500" />
                  <span className="text-sm tracking-[0.15em] uppercase font-body text-green-400">
                    Order Confirmed
                  </span>
                </div>
              ) : selectedSize ? (
                <div className="w-full md:w-auto">
                  <PayPalCheckout
                    amount={product.price}
                    productName={product.name}
                    size={selectedSize}
                    quantity={quantity}
                    onSuccess={handlePaymentSuccess}
                    onError={handlePaymentError}
                  />
                </div>
              ) : (
                <div className="px-10 py-4 bg-primary/40 text-primary-foreground/60 text-sm tracking-[0.25em] uppercase font-body text-center cursor-not-allowed w-full md:w-auto">
                  Select a size to continue
                </div>
              )}

              {/* Details */}
              <div className="mt-12">
                <div className="gold-divider mb-6" />
                <p className="text-xs tracking-[0.2em] uppercase text-primary/70 font-body mb-4">
                  Product Details
                </p>
                <ul className="space-y-2">
                  {product.details.map((detail, i) => (
                    <li
                      key={i}
                      className="text-sm text-muted-foreground font-body flex items-start gap-2"
                    >
                      <span className="text-accent mt-1">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default ProductDetail;
