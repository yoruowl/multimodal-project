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
          
          <div className={`transition-all duration-1000 ${typingComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <button 
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
              className="bg-blue-600/80 backdrop-blur-sm hover:bg-blue-700/90 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 border border-white/20 shadow-lg"
            >
              Explore
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Introduction */}
          <FadeInSection>
            <GlassmorphicCard className="p-8" color="white">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                The Power of Distributed Discourse
              </h2>
              <p className="text-gray-700 leading-relaxed">
                In an era of centralized media and institutional control, decentralization emerges as a powerful form of rhetorical resistance. By distributing power, information, and decision-making across networks, we create spaces for alternative narratives and challenge traditional hierarchies of knowledge and authority.
              </p>
            </GlassmorphicCard>
          </FadeInSection>

          {/* Key Concepts */}
          <div className="grid md:grid-cols-2 gap-8">
            <FadeInSection delay={200}>
              <GlassmorphicCard className="p-8 h-full" color="white">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Networked Resistance
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Decentralized networks enable collective action and discourse that can challenge centralized power structures. Through distributed communication channels, communities can organize, share information, and build alternative narratives outside traditional institutional frameworks.
                </p>
              </GlassmorphicCard>
            </FadeInSection>

            <FadeInSection delay={400}>
              <GlassmorphicCard className="p-8 h-full" color="white">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Digital Rhetoric
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The digital age has transformed how we engage in rhetorical practices. Decentralized platforms provide new spaces for discourse, enabling diverse voices to participate in public conversations and challenge dominant narratives.
                </p>
              </GlassmorphicCard>
            </FadeInSection>
          </div>

          {/* Impact Section */}
          <FadeInSection delay={600}>
            <GlassmorphicCard className="p-8" color="white" intensity="medium">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                The Impact of Decentralized Rhetoric
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Decentralization as rhetorical resistance manifests in various forms:
              </p>
              <ul className="list-none space-y-4">
                {[
                  "Alternative media ecosystems that challenge mainstream narratives",
                  "Peer-to-peer knowledge sharing and collective intelligence",
                  "Distributed governance models that enable participatory decision-making",
                  "Cryptographic tools that protect freedom of expression"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700 transition-transform duration-300 hover:translate-x-2">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </GlassmorphicCard>
          </FadeInSection>
        </div>
      </section>
    </main>
  )
}
