import Link from 'next/link'
import ProductCard from '@/components/product/ProductCard'
import products from '@/data/products.json'

export default function FeaturedCollection() {
  const featuredProducts = products.products.filter((p) => p.featured).slice(0, 4)

  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
          <p className="text-sm md:text-base font-medium text-accent uppercase tracking-widest mb-4">
            Curated Selection
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Liverpool Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Where music, heritage, and fashion converge. Each piece crafted to honor the spirit of a city that changed the world.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
          {featuredProducts.map((product, index) => (
            <div key={product.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <ProductCard
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                collection={product.collection}
                featured={product.featured}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <Link
            href="/shop"
            className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-sm font-medium hover:opacity-90 transition-opacity duration-300"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}
