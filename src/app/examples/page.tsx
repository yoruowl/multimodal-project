'use client'

import Link from 'next/link'
import { useState } from 'react'
import FadeInSection from '@/components/FadeInSection'
import TypewriterEffect from '@/components/TypewriterEffect'
import GlassmorphicCard from '@/components/GlassmorphicCard'

export default function Examples() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [typingComplete, setTypingComplete] = useState(false)
  
  const examples = [
    {
      id: 'open-source',
      title: "Open Source Communities",
      description: "Projects like Linux and Wikipedia demonstrate how decentralized collaboration can challenge traditional knowledge production and distribution systems.",
      impact: "Created alternative ecosystems for knowledge sharing and software development",
      shortDescription: "How open source communities challenge traditional knowledge systems",
      color: "blue"
    },
    {
      id: 'cryptocurrency',
      title: "Cryptocurrency Networks",
      description: "Blockchain technologies have enabled new forms of financial discourse and resistance to centralized banking systems.",
      impact: "Challenged traditional financial institutions and created new economic narratives",
      shortDescription: "The role of blockchain in financial decentralization",
      color: "white"
    },
    {
      id: 'social-media',
      title: "Decentralized Social Media",
      description: "Platforms like Mastodon and Diaspora offer alternatives to centralized social networks, enabling more diverse and user-controlled discourse.",
      impact: "Provided spaces for alternative social networking and content moderation",
      shortDescription: "Alternative social networks and their impact",
      color: "gray"
    },
    {
      id: 'file-sharing',
      title: "Peer-to-Peer File Sharing",
      description: "Technologies like BitTorrent have revolutionized how we think about content distribution and intellectual property.",
      impact: "Transformed digital content distribution and challenged traditional media models",
      shortDescription: "P2P networks and content distribution",
      color: "blue"
    }
  ]

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
            {examples.map((example, index) => (
              <FadeInSection key={index} delay={index * 150}>
                <Link 
                  href={`/examples/${example.id}`}
                  className="block"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <GlassmorphicCard 
                    className={`p-8 transition-all duration-500`}
                    color="white"
                    intensity={hoveredIndex === index ? "medium" : "light"}
                  >
                    <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                      hoveredIndex === index ? 'text-blue-800' : 'text-gray-900'
                    }`}>
                      {example.title}
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {example.description}
                    </p>
                    <div className={`rounded-lg p-4 backdrop-blur-sm transition-colors duration-300 ${
                      hoveredIndex === index ? 'bg-blue-500/10' : 'bg-blue-500/5'
                    }`}>
                      <p className="text-blue-800 font-medium">
                        Impact: {example.impact}
                      </p>
                    </div>
                    <div className={`mt-4 flex items-center transition-all duration-300 ${
                      hoveredIndex === index 
                        ? 'text-blue-700 transform translate-x-2'
                        : 'text-blue-600'
                    }`}>
                      <span className="text-sm font-medium">Learn more</span>
                      <svg 
                        className={`w-4 h-4 ml-2 transition-transform duration-300 ${
                          hoveredIndex === index ? 'transform translate-x-1' : ''
                        }`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </GlassmorphicCard>
                </Link>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
} 