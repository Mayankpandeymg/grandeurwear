import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

interface HeroSectionProps {
  title: string
  subtitle?: string
  description?: string
  image: string
  ctaText?: string
  ctaHref?: string
  overlay?: boolean
}

export default function HeroSection({
  title,
  subtitle,
  description,
  image,
  ctaText = 'Explore Collection',
  ctaHref = '/shop',
  overlay = true,
}: HeroSectionProps) {
  return (
    <section className="relative w-full h-screen min-h-96 flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />

      {/* Overlay */}
      {overlay && <div className="absolute inset-0 bg-black/40" />}

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto animate-fade-in">
        {subtitle && (
          <p className="text-sm md:text-base font-medium mb-4 opacity-90 tracking-widest uppercase">
            {subtitle}
          </p>
        )}

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance leading-tight">
          {title}
        </h1>

        {description && (
          <p className="text-lg md:text-xl mb-8 opacity-95 max-w-2xl mx-auto text-balance leading-relaxed">
            {description}
          </p>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href={ctaHref}
            className="px-8 py-4 bg-accent text-accent-foreground rounded-sm font-medium hover:opacity-90 transition-opacity duration-300 flex items-center gap-2 group"
          >
            {ctaText}
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </Link>
          <Link
            href="/collections"
            className="px-8 py-4 border-2 border-white text-white rounded-sm font-medium hover:bg-white/10 transition-colors duration-300"
          >
            View Collections
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-center justify-center">
          <div className="w-1 h-2 bg-white rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
