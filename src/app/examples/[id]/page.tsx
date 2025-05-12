'use client'

import Link from 'next/link'
import { notFound } from 'next/navigation'
import { useEffect, useState } from 'react'
import FadeInSection from '@/components/FadeInSection'
import GlassmorphicCard from '@/components/GlassmorphicCard'
import GlassmorphicBackground from '@/components/GlassmorphicBackground'

const examples = {
  'open-source': {
    title: "Open Source Communities",
    description: "Projects like Linux and Wikipedia demonstrate how decentralized collaboration can challenge traditional knowledge production and distribution systems.",
    impact: "Created alternative ecosystems for knowledge sharing and software development",
    content: {
      overview: "Open source communities represent one of the most successful examples of decentralized collaboration in the digital age. These communities have fundamentally transformed how we think about knowledge production, software development, and collective intelligence.",
      keyPoints: [
        "Decentralized decision-making in project governance",
        "Transparent development processes",
        "Community-driven quality control",
        "Global collaboration without central authority"
      ],
      examples: [
        {
          name: "Linux",
          description: "The world's largest collaborative software project, demonstrating the power of decentralized development"
        },
        {
          name: "Wikipedia",
          description: "A decentralized encyclopedia that has become one of the most comprehensive knowledge repositories"
        },
        {
          name: "GitHub",
          description: "A platform that enables and supports decentralized software development"
        }
      ],
      implications: "The success of open source communities has shown that decentralized collaboration can produce high-quality results that rival or exceed those of centralized organizations. This model has influenced how we think about knowledge production and distribution across various fields."
    }
  },
  'cryptocurrency': {
    title: "Cryptocurrency Networks",
    description: "Blockchain technologies have enabled new forms of financial discourse and resistance to centralized banking systems.",
    impact: "Challenged traditional financial institutions and created new economic narratives",
    content: {
      overview: "Cryptocurrency networks represent a radical reimagining of financial systems through decentralized technology. These networks challenge traditional banking institutions and create new possibilities for financial discourse and exchange.",
      keyPoints: [
        "Decentralized financial transactions",
        "Transparent and immutable ledgers",
        "Programmable money and smart contracts",
        "Alternative economic models"
      ],
      examples: [
        {
          name: "Bitcoin",
          description: "The first and most well-known cryptocurrency, demonstrating the potential of decentralized currency"
        },
        {
          name: "Ethereum",
          description: "A platform that extends blockchain technology to enable decentralized applications"
        },
        {
          name: "DeFi",
          description: "Decentralized Finance applications that recreate traditional financial services without intermediaries"
        }
      ],
      implications: "Cryptocurrency networks have sparked important discussions about the nature of money, value, and trust in digital systems. They represent a significant challenge to traditional financial institutions and have created new possibilities for financial inclusion and innovation."
    }
  },
  'social-media': {
    title: "Decentralized Social Media",
    description: "Platforms like Mastodon and Diaspora offer alternatives to centralized social networks, enabling more diverse and user-controlled discourse.",
    impact: "Provided spaces for alternative social networking and content moderation",
    content: {
      overview: "Decentralized social media platforms represent an important alternative to traditional social networks, offering users more control over their data and the content they consume. These platforms demonstrate how decentralization can create more democratic and user-centric online spaces.",
      keyPoints: [
        "User-controlled data and privacy",
        "Distributed content moderation",
        "Interoperable social networks",
        "Community-driven platform governance"
      ],
      examples: [
        {
          name: "Mastodon",
          description: "A decentralized alternative to Twitter with user-controlled instances"
        },
        {
          name: "Diaspora",
          description: "A privacy-focused social network with distributed servers"
        },
        {
          name: "Matrix",
          description: "An open protocol for decentralized, real-time communication"
        }
      ],
      implications: "Decentralized social media platforms offer important alternatives to traditional social networks, demonstrating how technology can be used to create more democratic and user-centric online spaces. These platforms have important implications for digital rights, privacy, and online discourse."
    }
  },
  'file-sharing': {
    title: "Peer-to-Peer File Sharing",
    description: "Technologies like BitTorrent have revolutionized how we think about content distribution and intellectual property.",
    impact: "Transformed digital content distribution and challenged traditional media models",
    content: {
      overview: "Peer-to-peer file sharing technologies have fundamentally transformed how we think about content distribution and intellectual property. These technologies demonstrate the power of decentralized networks for efficient and resilient content delivery.",
      keyPoints: [
        "Distributed content delivery",
        "Resilient network architecture",
        "Efficient resource utilization",
        "Challenging traditional distribution models"
      ],
      examples: [
        {
          name: "BitTorrent",
          description: "A protocol that enables efficient peer-to-peer file sharing"
        },
        {
          name: "IPFS",
          description: "A distributed system for storing and accessing files, websites, and data"
        },
        {
          name: "WebTorrent",
          description: "A browser-based implementation of the BitTorrent protocol"
        }
      ],
      implications: "Peer-to-peer file sharing technologies have had a profound impact on how we think about content distribution and intellectual property. These technologies have challenged traditional media models and demonstrated the potential of decentralized networks for efficient and resilient content delivery."
    }
  }
}

type ExampleKey = keyof typeof examples;

interface Section {
  title: string;
  content: string | string[] | Array<{name: string, description: string}>;
  color: 'white' | 'blue' | 'gray';
}

export default function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const example = examples[id as ExampleKey];
  const [activeSectionIndex, setActiveSectionIndex] = useState<number | null>(null);

  useEffect(() => {
    // Animation effect for initial load
    const timer = setTimeout(() => {
      setActiveSectionIndex(0);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  if (!example) {
    notFound();
  }

  const sections: Section[] = [
    {
      title: "Overview",
      content: example.content.overview,
      color: "white"
    },
    {
      title: "Key Points",
      content: example.content.keyPoints,
      color: "white"
    },
    {
      title: "Notable Examples",
      content: example.content.examples,
      color: "white"
    },
    {
      title: "Implications",
      content: example.content.implications,
      color: "white"
    }
  ];

  return (
    <main className="min-h-screen py-20 px-4">
      {/* Gradient background with geometric shapes */}
      <div className="fixed inset-0 bg-gradient-to-b from-blue-50 to-indigo-100 -z-20" />
      <GlassmorphicBackground />

      <div className="max-w-4xl mx-auto">
        <Link 
          href="/examples"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 backdrop-blur-sm bg-white/30 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white/50"
        >
          <svg 
            className="w-4 h-4 mr-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Examples
        </Link>

        <FadeInSection>
          <GlassmorphicCard className="p-8 mb-8" intensity="light" color="white">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {example.title}
            </h1>
            <p className="text-xl text-gray-700 mb-6">
              {example.description}
            </p>
            <div className="bg-blue-500/10 backdrop-blur-sm rounded-lg p-4 border border-blue-200/50">
              <p className="text-blue-800 font-medium">
                Impact: {example.impact}
              </p>
            </div>
          </GlassmorphicCard>
        </FadeInSection>

        <div className="space-y-8">
          {sections.map((section, index) => (
            <FadeInSection key={index} delay={index * 200}>
              <GlassmorphicCard 
                className="p-8" 
                color="white"
                intensity={activeSectionIndex === index ? "heavy" : "medium"}
                hoverEffect={true}
              >
                <div 
                  className="cursor-pointer" 
                  onClick={() => setActiveSectionIndex(index === activeSectionIndex ? null : index)}
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex justify-between items-center">
                    {section.title}
                    <svg 
                      className={`w-5 h-5 transition-transform duration-300 ${activeSectionIndex === index ? 'transform rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </h2>
                </div>
                
                <div className={`overflow-hidden transition-all duration-500 ${
                  activeSectionIndex === index || activeSectionIndex === null 
                    ? 'max-h-[1000px] opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}>
                  {index === 1 && Array.isArray(section.content) ? (
                    // Key Points
                    <ul className="list-none space-y-3 text-gray-700 mt-4">
                      {(section.content as string[]).map((point, i) => (
                        <li key={i} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  ) : index === 2 && Array.isArray(section.content) ? (
                    // Notable Examples
                    <div className="space-y-4 mt-4">
                      {(section.content as Array<{name: string, description: string}>).map((item, i) => (
                        <div key={i} className="border-b border-gray-200/30 last:border-0 pb-4 last:pb-0">
                          <h3 className="text-xl font-semibold text-blue-800 mb-2">
                            {item.name}
                          </h3>
                          <p className="text-gray-700">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    // Overview and Implications (string content)
                    <p className="text-gray-700 leading-relaxed">
                      {section.content as string}
                    </p>
                  )}
                </div>
              </GlassmorphicCard>
            </FadeInSection>
          ))}
        </div>
      </div>
    </main>
  );
} 