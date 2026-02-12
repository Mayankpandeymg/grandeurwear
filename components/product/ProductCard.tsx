import Link from 'next/link'
import Image from 'next/image'
import { ShoppingBag } from 'lucide-react'

interface ProductCardProps {
  id: string
  name: string
  price: number
  image: string
  collection: string
  featured?: boolean
}

export default function ProductCard({
  id,
  name,
  price,
  image,
  collection,
  featured = false,
}: ProductCardProps) {
  return (
    <Link href={`/shop/${id}`}>
      <div className="group h-full flex flex-col">
        {/* Image Container */}
        <div className="relative w-full aspect-square overflow-hidden bg-muted rounded-sm mb-4">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {featured && (
            <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 text-xs font-semibold rounded-full">
              Featured
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">{collection}</p>
          <h3 className="font-display text-lg md:text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
            {name}
          </h3>

          {/* Price and Action */}
          <div className="mt-auto flex items-center justify-between pt-4 border-t border-border">
            <span className="text-lg font-bold text-primary">£{price}</span>
            <div className="p-2 bg-muted group-hover:bg-accent group-hover:text-accent-foreground rounded-sm transition-colors duration-300">
              <ShoppingBag size={18} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
