export default function OpenSource() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Open Source Technologies
            </h1>
            <p className="text-xl text-gray-600">
              Open source technologies are a way for many different people to
              collaborate on a project that are not from the same organization or
              group. This allows for a more decentralized and democratic way of
              working on projects.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-[1.02] transition-transform duration-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Why Open Source Matters
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Open source projects foster transparency, community-driven development,
              and innovation by allowing anyone to inspect, modify, and distribute software.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
