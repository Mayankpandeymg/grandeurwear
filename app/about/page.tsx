import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Grandeur - Our Story',
  description: 'Learn about Grandeur\'s mission to create premium fashion inspired by music and global cities.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-center mb-6">About Grandeur</h1>
          <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
            A journey where music, heritage, and fashion converge to create something truly remarkable.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg opacity-95 mb-6 leading-relaxed">
                At Grandeur, we believe that fashion is more than just clothing—it's a form of expression, a connection to culture, and a celebration of human creativity.
              </p>
              <p className="text-lg opacity-95 mb-6 leading-relaxed">
                Every collection we create is inspired by cities that have shaped music and culture. We craft premium polo T-shirts that tell stories, honor heritage, and connect people to the melodies that move them.
              </p>
              <p className="text-lg opacity-95 leading-relaxed">
                Our commitment is simple: create timeless pieces crafted with intention, quality, and soul.
              </p>
            </div>
            <div className="relative h-96 rounded-sm overflow-hidden">
              <Image
                src="/images/products/liverpool-polo-1.jpg"
                alt="Our Mission"
                fill
                className="object-cover object-center"
                sizes="50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Crafted with Music</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Music has the power to transcend boundaries, evoke emotion, and unite people. It's the heartbeat of human culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-muted/30 rounded-sm border border-border">
              <div className="w-12 h-12 bg-accent rounded-sm flex items-center justify-center text-2xl mb-4">
                ♪
              </div>
              <h3 className="font-display text-2xl font-semibold mb-3">Music First</h3>
              <p className="text-muted-foreground">
                Every design begins with the rhythm and soul of a city's musical heritage. We listen to the stories and let them inspire our craft.
              </p>
            </div>

            <div className="p-8 bg-muted/30 rounded-sm border border-border">
              <div className="w-12 h-12 bg-accent rounded-sm flex items-center justify-center text-2xl mb-4">
                🌍
              </div>
              <h3 className="font-display text-2xl font-semibold mb-3">Global Inspiration</h3>
              <p className="text-muted-foreground">
                From Liverpool to Tokyo, each city has a unique story to tell. Our collections celebrate the cultures that shaped modern music.
              </p>
            </div>

            <div className="p-8 bg-muted/30 rounded-sm border border-border">
              <div className="w-12 h-12 bg-accent rounded-sm flex items-center justify-center text-2xl mb-4">
                ✨
              </div>
              <h3 className="font-display text-2xl font-semibold mb-3">Timeless Quality</h3>
              <p className="text-muted-foreground">
                Premium materials, meticulous craftsmanship, and attention to detail ensure every piece transcends fleeting trends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-12 text-center">Our Collections</h2>

          <div className="space-y-16">
            {/* Liverpool */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 rounded-sm overflow-hidden">
                <Image
                  src="/images/collections/liverpool-hero.jpg"
                  alt="Liverpool Collection"
                  fill
                  className="object-cover object-center"
                  sizes="50vw"
                />
              </div>
              <div>
                <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-3">Featured Collection</p>
                <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">Liverpool</h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Our inaugural collection celebrates Liverpool's unparalleled contribution to music and culture. From The Beatles to modern influences, Liverpool has shaped the soundtrack of generations.
                </p>
                <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                  Each piece in this collection honors the city's landmarks, heritage, and the spirit of creativity that flows through its streets.
                </p>
                <div className="space-y-3 text-sm">
                  <p>
                    <strong>Featured Items:</strong> Liverpool Heritage Polo, Cavern Club Edition, Beatle Road, Mersey River
                  </p>
                  <p>
                    <strong>Color Palette:</strong> Black, Cream, Deep Green, with Gold accents
                  </p>
                </div>
              </div>
            </div>

            {/* Tokyo Teaser */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:grid-cols-2-reverse">
              <div>
                <p className="text-sm uppercase tracking-widest text-muted-foreground font-semibold mb-3">Coming Soon</p>
                <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">Tokyo 2024</h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Tokyo blends ancient tradition with cutting-edge innovation. Where silence and noise coexist, where tradition meets the future.
                </p>
                <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                  Our Tokyo collection will capture the paradox of this magnificent city—from neon dreams to contemplative moments.
                </p>
                <button className="px-8 py-3 bg-primary text-primary-foreground rounded font-medium hover:opacity-90 transition-opacity">
                  Notify Me
                </button>
              </div>
              <div className="relative h-96 rounded-sm overflow-hidden bg-muted">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-muted-foreground text-lg">Coming Soon</p>
                    <p className="text-muted-foreground text-sm">Q3 2024</p>
                  </div>
                </div>
              </div>
            </div>

            {/* New York Teaser */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 rounded-sm overflow-hidden bg-muted">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-muted-foreground text-lg">Coming Soon</p>
                    <p className="text-muted-foreground text-sm">Q4 2024</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-sm uppercase tracking-widest text-muted-foreground font-semibold mb-3">Coming Soon</p>
                <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">New York</h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  The city that never sleeps, where every neighborhood has its own soundtrack. From jazz clubs in Harlem to concert halls in Manhattan.
                </p>
                <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                  New York represents the untamed spirit of modern music—diverse, bold, and constantly evolving.
                </p>
                <button className="px-8 py-3 bg-primary text-primary-foreground rounded font-medium hover:opacity-90 transition-opacity">
                  Notify Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-12 text-center">Our Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-l-4 border-accent pl-6 py-4">
              <h4 className="font-display text-2xl font-bold mb-3">Quality</h4>
              <p className="text-muted-foreground leading-relaxed">
                We never compromise on materials or craftsmanship. Every polo is a testament to excellence.
              </p>
            </div>

            <div className="border-l-4 border-accent pl-6 py-4">
              <h4 className="font-display text-2xl font-bold mb-3">Authenticity</h4>
              <p className="text-muted-foreground leading-relaxed">
                Our designs are deeply rooted in the stories and cultures of the cities that inspire them.
              </p>
            </div>

            <div className="border-l-4 border-accent pl-6 py-4">
              <h4 className="font-display text-2xl font-bold mb-3">Sustainability</h4>
              <p className="text-muted-foreground leading-relaxed">
                We're committed to ethical production and sustainable materials for future generations.
              </p>
            </div>

            <div className="border-l-4 border-accent pl-6 py-4">
              <h4 className="font-display text-2xl font-bold mb-3">Community</h4>
              <p className="text-muted-foreground leading-relaxed">
                We celebrate the communities and artists that inspire our collections and drive our mission.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
