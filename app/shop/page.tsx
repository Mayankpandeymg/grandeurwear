'use client'

import { useState } from 'react'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import ProductCard from '@/components/product/ProductCard'
import products from '@/data/products.json'
import { Metadata } from 'next'
import { Filter, X } from 'lucide-react'

export default function ShopPage() {
  const [selectedCollection, setSelectedCollection] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState<'price-low' | 'price-high' | 'newest'>('newest')
  const [showFilters, setShowFilters] = useState(false)

  const collections = [...new Set(products.products.map((p) => p.collection))]

  let filtered = [...products.products]

  if (selectedCollection) {
    filtered = filtered.filter((p) => p.collection === selectedCollection)
  }

  filtered.sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price
    if (sortBy === 'price-high') return b.price - a.price
    return 0
  })

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Page Header */}
      <section className="pt-24 md:pt-32 pb-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Shop</h1>
          <p className="text-lg text-muted-foreground">
            Discover our curated collection of premium polo T-shirts
          </p>
        </div>
      </section>

      {/* Shop Layout */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar - Desktop */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Filters Header */}
                <div className="hidden lg:block">
                  <h3 className="font-display text-xl font-semibold mb-4">Filters</h3>
                </div>

                {/* Mobile Filter Toggle */}
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden flex items-center gap-2 w-full p-3 bg-muted rounded hover:bg-muted/80 transition-colors"
                >
                  <Filter size={20} />
                  <span>Filters</span>
                </button>

                {/* Filters Content */}
                <div className={`${showFilters ? 'block' : 'hidden'} lg:block space-y-6`}>
                  {/* Collection Filter */}
                  <div>
                    <h4 className="font-semibold mb-3 text-sm">Collection</h4>
                    <div className="space-y-2">
                      <button
                        onClick={() => setSelectedCollection(null)}
                        className={`block w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                          selectedCollection === null
                            ? 'bg-primary text-primary-foreground'
                            : 'hover:bg-muted'
                        }`}
                      >
                        All Products
                      </button>
                      {collections.map((collection) => (
                        <button
                          key={collection}
                          onClick={() => setSelectedCollection(collection)}
                          className={`block w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                            selectedCollection === collection
                              ? 'bg-primary text-primary-foreground'
                              : 'hover:bg-muted'
                          }`}
                        >
                          {collection}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Price Range */}
                  <div>
                    <h4 className="font-semibold mb-3 text-sm">Price Range</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>£120 - £150</p>
                      <p className="text-xs">All prices in GBP</p>
                    </div>
                  </div>

                  {/* Stock Status */}
                  <div>
                    <h4 className="font-semibold mb-3 text-sm">Availability</h4>
                    <label className="flex items-center gap-2 text-sm">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span>In Stock Only</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Sort Bar */}
              <div className="flex justify-between items-center mb-8">
                <p className="text-sm text-muted-foreground">
                  Showing {filtered.length} products
                </p>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'price-low' | 'price-high' | 'newest')}
                  className="px-4 py-2 border border-border rounded bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>

              {/* Product Grid */}
              {filtered.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {filtered.map((product, index) => (
                    <div key={product.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 50}ms` }}>
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
              ) : (
                <div className="text-center py-16">
                  <p className="text-lg text-muted-foreground">No products found matching your filters</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
