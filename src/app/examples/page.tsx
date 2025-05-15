'use client'

import Link from 'next/link'
import { useState } from 'react'
import FadeInSection from '@/components/FadeInSection'
import TypewriterEffect from '@/components/TypewriterEffect'
import GlassmorphicCard from '@/components/GlassmorphicCard'

export default function Examples() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [typingComplete, setTypingComplete] = useState(false)

  return (
    <main className="min-h-screen pt-16 bg-white">
      {/* Plain white background, no moving dots */}

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <GlassmorphicCard className="p-8 mb-16 text-center" color="white">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                <TypewriterEffect 
                  text="Real-World Examples" 
                  speed={80}
                  onComplete={() => setTypingComplete(true)}
                />
              </h1>
              <p className={`text-xl text-gray-700 transition-opacity duration-1000 ${typingComplete ? 'opacity-100' : 'opacity-0'}`}>
                Case studies of decentralization in action
              </p>
            </GlassmorphicCard>
          </FadeInSection>

          <div className="grid gap-8">
            <Link href="/examples/linux" className="card-interactive">
              <h2 className="card-title">
                Linux
              </h2>
              <p className="card-content">
                Open Source Operating System
              </p>
            </Link>

            <Link href="/examples/email" className="card-interactive">
              <h2 className="card-title">
                Email
              </h2>
              <p className="card-content">
                Decentralized Communication Protocol 
              </p>
            </Link>

            <Link href="/examples/bitcoin" className="card-interactive">
              <h2 className="card-title">
                Bitcoin
              </h2>
              <p className="card-content">
                Decentralized Digital Currency
              </p>
            </Link>

            <Link href="/examples/bluesky" className="card-interactive">
              <h2 className="card-title">
                Bluesky
              </h2>
              <p className="card-content">
                Decentralized Social Media Platform
              </p>
            </Link>  
          </div>
        </div>
      </section>
    </main>
  )
} 