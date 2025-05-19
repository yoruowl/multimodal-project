export default function Resources() {

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Resources
            </h1>
            <p className="text-xl text-gray-600">
              Academic and practical resources for further study
            </p>
          </div>
          <div className="grid gap-8">
            <div className="card">
              <h2 className="card-title">
                The Linux Foundation
              </h2>
              <p className="card-content">
                The website for the foundation that supports the development of the Linux ecosystem.
                <br></br>
                <br></br>
                <a href="https://www.linuxfoundation.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                  Source
                </a>
              </p>

              
            </div>
            <div className="card">
              <h2 className="card-title">
                IETF Email RFCs
              </h2>
              <p className="card-content">
                Defines SMTP and IMAP, open standards ensuring email's decentralized, interoperable communication.
                <br></br>
                <br></br>
                <a href="https://www.rfc-editor.org/info/rfc3501" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                  RFC 3501 Source
                </a>
                <br></br>
                <a href="https://www.rfc-editor.org/info/rfc5321" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                  RFC 5321 Source
                </a>
              </p>
            </div>


            <div className="card">
              <h2 className="card-title">
                Bitcoin Whitepaper
              </h2>
              <p className="card-content">
                2008 paper by Satoshi Nakamoto outlines the design for Bitcoin, a decentralized, peer-to-peer electronic cash system.
                <br></br>
                <br></br>
                <a href="https://bitcoin.org/bitcoin.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                  Source
                </a>
              </p>
            </div>

            <div className="card">
              <h2 className="card-title">
                AT Protocol
              </h2>
              <p className="card-content">
                Documentation for the AT Protocol, Bluesky's open-source and federated framework, which enables user-controlled social media.
                <br></br>
                <br></br>
                <a href="https://atproto.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                  Source
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 