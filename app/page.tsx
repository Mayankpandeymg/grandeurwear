import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/layout/HeroSection'
import FeaturedCollection from '@/components/home/FeaturedCollection'
import StorySection from '@/components/home/StorySection'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Grandeur - Luxury Polo Crafted with Music',
  description: 'Discover Grandeur: premium polo T-shirts where music, heritage, and fashion converge. Explore our Liverpool-inspired collection.',
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection
        title="Grandeur"
        subtitle="Crafted with Music"
        description="Premium polo T-shirts inspired by music, heritage, and global cities. Our Liverpool collection celebrates the city that changed the world."
        image="/images/collections/liverpool-hero.jpg"
        ctaText="Shop Liverpool Collection"
        ctaHref="/shop"
      />
      <FeaturedCollection />
      <StorySection />
      <Footer />
    </main>
  )
}
