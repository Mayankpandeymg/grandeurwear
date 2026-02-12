'use client'

import { useState } from 'react'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import ProductCard from '@/components/product/ProductCard'
import products from '@/data/products.json'
import { ShoppingBag, Heart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.products.find((p) => p.id === params.id)
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || '')
  const [selectedSize, setSelectedSize] = useState(product?.sizes[3] || '')
  const [quantity, setQuantity] = useState(1)
  const [addedToCart, setAddedToCart] = useState(false)

  if (!product) {
    return (
      <main className="min-h-screen bg-background flex flex-col">
        <Navigation />
        <div className="flex-1 flex items-center justify-center pt-32">
          <div className="text-center">
            <h1 className="font-display text-3xl font-bold mb-4">Product Not Found</h1>
            <Link href="/shop" className="text-primary hover:underline">
              Back to Shop
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  const relatedProducts = products.products
    .filter((p) => p.collection === product.collection && p.id !== product.id)
    .slice(0, 4)

  const handleAddToCart = () => {
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Breadcrumb */}
      <section className="pt-24 md:pt-28 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/shop" className="hover:text-foreground transition-colors">
              Shop
            </Link>
            <span>/</span>
            <Link href={`/shop?filter=${product.collection}`} className="hover:text-foreground transition-colors">
              {product.collection}
            </Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </div>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image */}
            <div className="relative aspect-square overflow-hidden rounded-sm bg-muted">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Details */}
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">{product.collection}</p>
                <h1 className="font-display text-4xl md:text-5xl font-bold mb-2">{product.name}</h1>
                <p className="text-2xl font-bold text-primary mb-6">£{product.price}</p>

                <p className="text-lg text-foreground mb-8 leading-relaxed">{product.description}</p>

                {/* Story */}
                <div className="mb-8 p-6 bg-muted/30 rounded-sm border border-border">
                  <h3 className="font-display text-lg font-semibold mb-3">Collection Story</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{product.story}</p>
                </div>

                {/* Colors */}
                <div className="mb-8">
                  <label className="block font-semibold mb-4">Color</label>
                  <div className="flex gap-3">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-4 py-3 rounded text-sm font-medium transition-all ${
                          selectedColor === color
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted text-foreground hover:bg-muted/80'
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Size */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-4">
                    <label className="block font-semibold">Size</label>
                    <button className="text-xs text-primary hover:underline">Size Guide</button>
                  </div>
                  <div className="grid grid-cols-6 gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`py-3 rounded text-sm font-medium transition-all ${
                          selectedSize === size
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted text-foreground hover:bg-muted/80'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div className="mb-8">
                  <label className="block font-semibold mb-4">Quantity</label>
                  <div className="flex items-center border border-border rounded w-fit">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-3 hover:bg-muted transition-colors"
                    >
                      −
                    </button>
                    <span className="px-6 py-3">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-3 hover:bg-muted transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-3">
                <button
                  onClick={handleAddToCart}
                  className={`w-full py-4 rounded text-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                    addedToCart
                      ? 'bg-accent text-accent-foreground'
                      : 'bg-primary text-primary-foreground hover:opacity-90'
                  }`}
                >
                  <ShoppingBag size={20} />
                  {addedToCart ? 'Added to Cart' : 'Add to Cart'}
                </button>
                <button className="w-full py-4 border-2 border-primary text-primary rounded font-semibold hover:bg-primary/5 transition-colors flex items-center justify-center gap-2">
                  <Heart size={20} />
                  Add to Wishlist
                </button>
              </div>

              {/* Info */}
              <div className="mt-8 pt-8 border-t border-border space-y-3 text-sm text-muted-foreground">
                <p>✓ Free shipping on orders over £100</p>
                <p>✓ 30-day returns policy</p>
                <p>✓ Made with premium materials</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {relatedProducts.map((p) => (
                <ProductCard
                  key={p.id}
                  id={p.id}
                  name={p.name}
                  price={p.price}
                  image={p.image}
                  collection={p.collection}
                  featured={p.featured}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  )
}
