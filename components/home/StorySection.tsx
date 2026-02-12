import Image from 'next/image'

export default function StorySection() {
  return (
    <section className="w-full py-16 md:py-24 bg-primary text-primary-foreground overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="animate-slide-in-left">
            <p className="text-sm font-medium uppercase tracking-widest mb-4 opacity-90">
              Our Philosophy
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Crafted with Music
            </h2>
            <p className="text-lg opacity-95 mb-6 leading-relaxed">
              At Grandeur, we believe that fashion and music are inseparable. Every polo we craft carries the rhythm, emotion, and soul of the cities that inspire us.
            </p>
            <p className="text-lg opacity-90 mb-8 leading-relaxed">
              Our inaugural Liverpool collection is a tribute to a city that gave the world unforgettable melodies. From the Cavern Club to the Mersey River, every thread tells a story of creativity, resilience, and the transformative power of music.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-1 bg-accent rounded-full" />
                <div>
                  <h4 className="font-display text-xl font-semibold mb-2">Premium Quality</h4>
                  <p className="text-sm opacity-85">
                    Each polo is crafted from the finest materials with meticulous attention to detail.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1 bg-accent rounded-full" />
                <div>
                  <h4 className="font-display text-xl font-semibold mb-2">Timeless Design</h4>
                  <p className="text-sm opacity-85">
                    Our designs transcend trends, creating pieces that feel relevant for years to come.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1 bg-accent rounded-full" />
                <div>
                  <h4 className="font-display text-xl font-semibold mb-2">Global Inspiration</h4>
                  <p className="text-sm opacity-85">
                    Each collection celebrates a different city and its unique contribution to music culture.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-96 md:h-full min-h-96 rounded-sm overflow-hidden group">
            <Image
              src="/images/products/liverpool-polo-1.jpg"
              alt="Crafted with Music Philosophy"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
