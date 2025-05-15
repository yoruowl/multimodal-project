import Image from 'next/image'
import email from '@/images/email.png'

export default function Email() {
    return (
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center mb-16">
                  <div className="flex items-center justify-center gap-4 mb-6">
                      <Image src={email} alt="Email Icon" width={60} height={60} className="rounded-lg" />
                      <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                          Email
                      </h1>
                  </div>
                  <p className="text-xl text-gray-600">
                      Email is a way to send and receive messages.
                  </p>
              </div>
  
              <div className="card">
                  <h2 className="card-title">
                      What is Email?
                  </h2>
                  <ul className="card-content">
                      <li>Electronic Messaging System: Email (electronic mail) is a digital communication method for sending and receiving messages over networks, typically the internet.</li>
                      <li>Asynchronous Communication: It allows users to exchange text, files, or multimedia without requiring both parties to be online simultaneously.</li>
                      <li>Universal Protocol-Based: Built on standardized protocols like SMTP, IMAP, and POP3, email ensures compatibility across platforms and providers.</li>
                  </ul>
              </div>

              <div className="card">
                  <h2 className="card-title">
                      Decentralized by Design
                  </h2>
                  <ul className="card-content">
                      <li>Distributed Infrastructure: Email operates on a network of independent servers managed by various organizations, with no single controlling entity.</li>
                      <li>Federated System: Users on different email providers (e.g., Gmail, ProtonMail) can communicate seamlessly, as servers interoperate via standard protocols.</li>
                      <li>Individuals or organizations can host their own email servers, retaining control over data and privacy.</li>
                  </ul>
              </div>

              <div className="card">
                  <h2 className="card-title">
                      Open Standards & Open Source
                  </h2>
                  <ul className="card-content">
                      <li>Open Protocols: Email relies on open standards like SMTP (for sending), IMAP, and POP3 (for retrieving), freely implemented by any developer.</li>
                      <li>Transparent Development: Open standards and software are publicly documented, enabling scrutiny and innovation by global contributors.</li>
                      <li>Interoperability: Open standards ensure diverse email clients and servers work together, preventing vendor lock-in.</li>
                  </ul>
              </div>

              <div className="card">
                  <h2 className="card-title">
                      Use of Email
                  </h2>
                  <ul className="card-content">
                      <li>Professional Communication: Email is a primary tool for business correspondence, contracts, and collaboration across industries.</li>
                      <li>Personal Connectivity: It enables individuals to stay in touch with friends, family, or communities, sharing updates or media.</li>
                      <li>Marketing and Outreach: Businesses use email for newsletters, promotions, and customer engagement, leveraging its broad reach.</li>
                  </ul>
              </div>
          </div>
        </section>
      </main>
    );
}