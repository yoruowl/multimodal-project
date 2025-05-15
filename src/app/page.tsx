'use client'

import { useState } from 'react'
import FadeInSection from '@/components/FadeInSection'
import TypewriterEffect from '@/components/TypewriterEffect'
import GlassmorphicCard from '@/components/GlassmorphicCard'

export default function Home() {
  const [typingComplete, setTypingComplete] = useState(false)
  
  return (
    <main className="min-h-screen pt-16 bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center px-4">
        {/* Plain white background, no moving dots */}
        
        <div className="max-w-4xl mx-auto z-10">
          <GlassmorphicCard 
            intensity="light" 
            className="p-12 mb-8"
            color="white"
            hoverEffect={true}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              <TypewriterEffect 
                text="Distributed Innovation: Open-Source and Decentralized Technology" 
                speed={60}
                onComplete={() => setTypingComplete(true)}
              />
            </h1>
            <p className={`text-xl md:text-2xl text-gray-700 mb-8 transition-opacity duration-1000 ${typingComplete ? 'opacity-100' : 'opacity-0'}`}>
              Empowering a Connected, Open World
            </p>
          </GlassmorphicCard>
        </div>
      </section>
    </main>
  )
}
