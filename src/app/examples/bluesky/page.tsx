import Image from 'next/image'
import bluesky from '@/images/bluesky.png'

export default function Bluesky() {
    return (
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center mb-16">
                  <div className="flex items-center justify-center gap-4 mb-6">
                      <Image src={bluesky} alt="Bluesky Logo" width={60} height={60} className="rounded-lg" />
                      <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                          Bluesky
                      </h1>
                  </div>
                  <p className="text-xl text-gray-600">
                      Bluesky is a decentralized social media platform.
                  </p>
              </div>
  
              <div className="card">
                  <h2 className="card-title">
                      What is Bluesky?
                  </h2>
                  <ul className="card-content">
                      <li>Microblogging Platform: Bluesky is a social media service where users can share short posts (up to 300 characters), images, and videos, similar to Twitter/X</li>
                      <li>Built on AT Protocol: It operates on the Authenticated Transfer (AT) Protocol, an open framework designed for interoperable, decentralized social networks</li>
                      <li>User-Centric Design: Offers customizable feeds, starter packs for following niche communities, and a domain-based handle system for self-verification</li>
                      <li>Public Benefit Corporation: Owned by Bluesky Social PBC, led by CEO Jay Graber, it prioritizes user control and community-driven experiences over corporate dominance</li>
                  </ul>
              </div>

              <div className="card">
                  <h2 className="card-title">
                      Decentralized Social Media
                  </h2>
                  <ul className="card-content">
                      <li>No Central Authority: Bluesky's federated model allows users to host data on independent servers (PDS), reducing control by a single entity</li>
                      <li>Interoperable Network: The AT Protocol enables cross-platform data portability, letting users move accounts and connections to other AT-compatible networks</li>
                      <li>Resilient Structure: Decentralization ensures the network persists even if Bluesky Social fails, mirroring the resilience of email or the early web</li>
                  </ul>
              </div>

              <div className="card">
                  <h2 className="card-title">
                      Open Source
                  </h2>
                  <ul className="card-content">
                      <li>Public Codebase: Bluesky's app code is open source under the MIT License, with some server software dual-licensed under Apache, encouraging transparency and collaboration</li>
                      <li>Community Development: Developers globally contribute to Bluesky, creating tools like custom feeds, bots, or clients (e.g., Deck.blue) via public APIs</li>
                      <li>Transparent Operations: Open-source protocols allow scrutiny of moderation, algorithms, and data handling, fostering trust among users</li>
                  </ul>
              </div>

              <div className="card">
                  <h2 className="card-title">
                      Why Bluesky Matters
                  </h2>
                  <ul className="card-content">
                      <li>User Control: Custom feeds, moderation tools, and account portability give users unprecedented control over their social experience</li>
                      <li>Alternative to Centralized Platforms: Amid concerns over X's moderation and data policies, Bluesky offers a less toxic, more democratic space, attracting millions</li>
                      <li>Innovation Potential: Its open, decentralized model paves the way for a new era of social media, where users and developers shape the future, not corporations</li>
                  </ul>
              </div>
          </div>
        </section>
      </main>
    );
}