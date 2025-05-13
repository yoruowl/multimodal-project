export default function Wikipedia() {
    return (
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center mb-16">
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                      Wikipedia
                  </h1>
                  <p className="text-xl text-gray-600">
                      Wikipedia is a free and open-source encyclopedia.
                  </p>
              </div>
  
              <div className="card">
                  <h2 className="card-title">
                      What is Wikipedia?
                  </h2>
                  <p className="card-content">
                      Content Here
                  </p>
              </div>
          </div>
        </section>
      </main>
    );
}