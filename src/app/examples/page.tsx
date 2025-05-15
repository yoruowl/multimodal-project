'use client'

import Link from 'next/link'
import { useState } from 'react'
import FadeInSection from '@/components/FadeInSection'
import TypewriterEffect from '@/components/TypewriterEffect'
import GlassmorphicCard from '@/components/GlassmorphicCard'
import Image from 'next/image'
import linuxLogo from '@/images/linuxLogo.png'
import email from '@/images/email.png'
import bitcoin from '@/images/bitcoin.png'
import bluesky from '@/images/bluesky.png'

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
              <div className="flex items-center gap-4">
                <Image src={linuxLogo} alt="Linux Logo" width={40} height={40} className="rounded-lg" />
                <h2 className="card-title">
                  Linux
                </h2>
              </div>
              <p className="card-content">
                Open Source Operating System
              </p>
            </Link>

            <Link href="/examples/email" className="card-interactive">
              <div className="flex items-center gap-4">
                <Image src={email} alt="Email Icon" width={40} height={40} className="rounded-lg" />
                <h2 className="card-title">
                  Email
                </h2>
              </div>
              <p className="card-content">
                Decentralized Communication Protocol 
              </p>
            </Link>

            <Link href="/examples/bitcoin" className="card-interactive">
              <div className="flex items-center gap-4">
                <Image src={bitcoin} alt="Bitcoin Logo" width={40} height={40} className="rounded-lg" />
                <h2 className="card-title">
                  Bitcoin
                </h2>
              </div>
              <p className="card-content">
                Decentralized Digital Currency
              </p>
            </Link>

            <Link href="/examples/bluesky" className="card-interactive">
              <div className="flex items-center gap-4">
                <Image src={bluesky} alt="Bluesky Logo" width={40} height={40} className="rounded-lg" />
                <h2 className="card-title">
                  Bluesky
                </h2>
              </div>
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