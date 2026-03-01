import { useEffect, useRef, useState } from "react";

const PAYPAL_CLIENT_ID = "AW8siioH5RZj5-8e91rW4dyyeZPyEomE55Gb59FJhPNW24Xut6SnE0h52ESMCi5TJ5_foINcAeBnFebp";

interface PayPalCheckoutProps {
  amount: number;
  currency?: string;
  productName: string;
  size: string;
  quantity: number;
  onSuccess?: (details: any) => void;
  onError?: (error: any) => void;
}

const PayPalCheckout = ({
  amount,
  currency = "INR",
  productName,
  size,
  quantity,
  onSuccess,
  onError,
}: PayPalCheckoutProps) => {
  const paypalRef = useRef<HTMLDivElement>(null);
  const [sdkReady, setSdkReady] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const scriptId = "paypal-sdk";
    if (document.getElementById(scriptId)) {
      setSdkReady(true);
      setLoading(false);
      return;
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = `https://www.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT_ID}&currency=${currency}`;
    script.async = true;
    script.onload = () => {
      setSdkReady(true);
      setLoading(false);
    };
    script.onerror = () => {
      setLoading(false);
      onError?.("Failed to load PayPal SDK");
    };
    document.body.appendChild(script);
  }, [currency]);

  useEffect(() => {
    if (!sdkReady || !paypalRef.current || !(window as any).paypal) return;

    // Clear previous buttons
    paypalRef.current.innerHTML = "";

    (window as any).paypal
      .Buttons({
        style: {
          layout: "vertical",
          color: "black",
          shape: "rect",
          label: "pay",
          height: 48,
        },
        createOrder: (_data: any, actions: any) => {
          return actions.order.create({
            purchase_units: [
              {
                description: `${productName} — Size ${size} × ${quantity}`,
                amount: {
                  currency_code: currency,
                  value: (amount * quantity).toFixed(2),
                },
              },
            ],
          });
        },
        onApprove: async (_data: any, actions: any) => {
          const details = await actions.order.capture();
          onSuccess?.(details);
        },
        onError: (err: any) => {
          console.error("PayPal error:", err);
          onError?.(err);
        },
      })
      .render(paypalRef.current);
  }, [sdkReady, amount, quantity, size, productName, currency]);

  if (loading) {
    return (
      <div className="w-full h-12 bg-secondary animate-pulse flex items-center justify-center">
        <span className="text-xs text-muted-foreground font-body tracking-wider">
          Loading PayPal...
        </span>
      </div>
    );
  }

  return <div ref={paypalRef} className="w-full" />;
};

export default PayPalCheckout;
