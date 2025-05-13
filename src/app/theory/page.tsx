import Link from 'next/link';

export default function Theory() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Theoretical Framework
            </h1>
            <p className="text-xl text-gray-600">
              Understanding the intersection of decentralization and rhetorical theory
            </p>
          </div>

          <div className="grid gap-12">
            <Link href="/theory/decentralization" className="card-interactive">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Decentralization
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Decentralization is a way to distribute information and power across networks. Rather that a single entity controlling the information, it is distributed across a network of nodes.
              </p>
            </Link>

            <Link href="/theory/open-source" className="card-interactive">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Open Source Technologies
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Open source technologies are a way for many different people to collaborate on a project that are not from the same organization or group. This allows for a more decentralized and democratic way of working on projects.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
} 