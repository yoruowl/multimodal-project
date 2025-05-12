export default function Decentralization() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Decentralization
            </h1>
            <p className="text-xl text-gray-600">
              Decentralization is a way to distribute information and power across networks.
              Rather than a single entity controlling the information, it is distributed
              across a network of nodes.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-[1.02] transition-transform duration-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Benefits of Decentralization
            </h2>
            <p className="text-gray-600 leading-relaxed">
              By distributing control, decentralized networks can increase security,
              reduce censorship, and promote resilience against single points of failure.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
