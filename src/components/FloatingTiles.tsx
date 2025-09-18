'use client'

import { useEffect, useRef } from 'react'

interface Tile {
  id: string
  title: string
  subtitle: string
  size: 'large' | 'medium' | 'small'
  position: string
  rotation: string
  gradient: string
}

const tiles: Tile[] = [
  {
    id: '1',
    title: 'SOCIAL MEDIA',
    subtitle: 'Handwerk Müller',
    size: 'large',
    position: 'top-12 left-8',
    rotation: 'rotate-3',
    gradient: 'from-brand-purple to-brand-purpleDark'
  },
  {
    id: '2',
    title: 'WEBSITE',
    subtitle: 'Café Zentral',
    size: 'medium',
    position: 'top-20 right-12',
    rotation: '-rotate-2',
    gradient: 'from-brand-purple to-brand-purpleDark'
  },
  {
    id: '3',
    title: 'VIDEO',
    subtitle: 'Bäckerei Schmidt',
    size: 'small',
    position: 'bottom-24 left-16',
    rotation: 'rotate-1',
    gradient: 'from-brand-purple to-brand-purpleDark'
  },
  {
    id: '4',
    title: 'MARKETING',
    subtitle: 'Fitness Studio',
    size: 'small',
    position: 'bottom-16 right-20',
    rotation: '-rotate-1',
    gradient: 'from-brand-purple to-brand-purpleDark'
  },
  {
    id: '5',
    title: 'BRANDING',
    subtitle: '',
    size: 'small',
    position: 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
    rotation: 'rotate-12',
    gradient: 'from-brand-lime to-brand-lime'
  }
]

export default function FloatingTiles() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const scrollY = window.scrollY
      const tiles = containerRef.current.querySelectorAll('.floating-tile')

      tiles.forEach((tile, index) => {
        const speed = 0.5 + (index * 0.1)
        const yPos = scrollY * speed
        ;(tile as HTMLElement).style.transform = `translateY(${yPos}px)`
      })
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!prefersReducedMotion) {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'large':
        return 'w-64 h-40'
      case 'medium':
        return 'w-48 h-32'
      case 'small':
        return 'w-32 h-24'
      default:
        return 'w-48 h-32'
    }
  }

  return (
    <section className="relative overflow-hidden bg-transparent -mt-80 pt-8 pb-32">
      <div ref={containerRef} className="container relative h-96">
        {tiles.map((tile) => (
          <div
            key={tile.id}
            className={`
              floating-tile absolute ${tile.position} ${tile.rotation}
              ${getSizeClasses(tile.size)} rounded-2xl shadow-float
              bg-gradient-to-br ${tile.gradient} text-white
              hover:scale-105 hover:shadow-2xl transition-all duration-300
              p-4 flex flex-col justify-between
            `}
          >
            <div className="flex items-start justify-between">
              <div className="w-8 h-8 rounded-full bg-brand-lime/20 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-brand-lime"></div>
              </div>
              <div className="w-2 h-2 rounded-full bg-brand-lime"></div>
            </div>

            <div>
              <h3 className="font-bold text-sm mb-1">{tile.title}</h3>
              {tile.subtitle && (
                <p className="text-xs opacity-80">{tile.subtitle}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}