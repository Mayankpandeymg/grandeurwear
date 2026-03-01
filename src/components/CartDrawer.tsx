import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useCart } from "@/contexts/CartContext";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import PayPalCheckout from "./PayPalCheckout";

const CartDrawer = () => {
  const {
    items,
    removeItem,
    updateQuantity,
    totalItems,
    totalPrice,
    isCartOpen,
    setIsCartOpen,
    clearCart,
  } = useCart();

  const handlePaymentSuccess = (details: any) => {
    clearCart();
    setIsCartOpen(false);
  };

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="w-full sm:max-w-md bg-background border-border flex flex-col">
        <SheetHeader>
          <SheetTitle className="font-display text-xl tracking-wide text-primary flex items-center gap-2">
            <ShoppingBag size={20} className="text-accent" />
            Your Bag ({totalItems})
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex items-center justify-center">
            <p className="text-muted-foreground font-body text-sm tracking-wider">
              Your bag is empty
            </p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto space-y-4 mt-6 pr-1">
              {items.map((item) => (
                <div
                  key={`${item.product.id}-${item.size}`}
                  className="flex gap-4 border-b border-border pb-4"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-20 h-24 object-cover bg-secondary"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-display text-sm font-semibold text-primary truncate">
                      {item.product.name}
                    </h4>
                    <p className="text-xs text-muted-foreground font-body mt-1">
                      Size: {item.size}
                    </p>
                    <p className="text-sm font-display font-bold text-accent mt-1">
                      ₹{(item.product.price * item.quantity).toLocaleString("en-IN")}
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.size, item.quantity - 1)
                        }
                        className="w-7 h-7 border border-border flex items-center justify-center text-muted-foreground hover:border-accent hover:text-accent transition-colors"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-sm font-body text-primary w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.size, item.quantity + 1)
                        }
                        className="w-7 h-7 border border-border flex items-center justify-center text-muted-foreground hover:border-accent hover:text-accent transition-colors"
                      >
                        <Plus size={12} />
                      </button>
                      <button
                        onClick={() => removeItem(item.product.id, item.size)}
                        className="ml-auto text-muted-foreground hover:text-destructive transition-colors"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-4 mt-4 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-body tracking-wider uppercase text-muted-foreground">
                  Total
                </span>
                <span className="font-display text-xl font-bold text-accent">
                  ₹{totalPrice.toLocaleString("en-IN")}
                </span>
              </div>
              <PayPalCheckout
                amount={totalPrice}
                productName={items.map((i) => i.product.name).join(", ")}
                size={items.map((i) => i.size).join(", ")}
                quantity={1}
                onSuccess={handlePaymentSuccess}
                onError={(err) => console.error(err)}
              />
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
