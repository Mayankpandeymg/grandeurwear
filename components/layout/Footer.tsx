'use client'

import Link from 'next/link'
import { Mail, Instagram, Music, Phone } from 'lucide-react'
import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h3 className="font-display text-2xl font-bold mb-2">GRANDEUR</h3>
            <p className="text-sm opacity-90 mb-4">Crafted with Music</p>
            <p className="text-sm opacity-75">
              Premium polo T-shirts where music, heritage, and fashion converge.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/shop" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/collections" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Collections
                </Link>
              </li>
              <li>
                <Link href="/shop?filter=featured" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Featured
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/contact#faq" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Connect</h4>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 bg-primary-foreground/10 rounded border border-primary-foreground/30 text-primary-foreground placeholder-primary-foreground/50 text-sm focus:outline-none focus:border-primary-foreground/60"
                required
              />
              <button
                type="submit"
                className="w-full px-3 py-2 bg-accent text-accent-foreground rounded text-sm font-medium hover:opacity-90 transition-opacity"
              >
                {subscribed ? 'Subscribed!' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-primary-foreground/20 pt-8 mb-8">
          <div className="flex justify-center gap-8">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-75 hover:opacity-100 transition-opacity"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://spotify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-75 hover:opacity-100 transition-opacity"
              aria-label="Spotify"
            >
              <Music size={20} />
            </a>
            <a
              href="mailto:hello@grandeur.com"
              className="opacity-75 hover:opacity-100 transition-opacity"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="tel:+441512200000"
              className="opacity-75 hover:opacity-100 transition-opacity"
              aria-label="Phone"
            >
              <Phone size={20} />
            </a>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs opacity-75 text-center md:text-left">
            © {new Date().getFullYear()} Grandeur. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs opacity-75">
            <Link href="#" className="hover:opacity-100 transition-opacity">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:opacity-100 transition-opacity">
              Terms of Service
            </Link>
            <Link href="#" className="hover:opacity-100 transition-opacity">
              Shipping Info
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
