import Image from 'next/image'
import bitcoin from '@/images/bitcoin.png'

export default function Bitcoin() {
    return (
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center mb-16">
                  <div className="flex items-center justify-center gap-4 mb-6">
                      <Image src={bitcoin} alt="Bitcoin Logo" width={60} height={60} className="rounded-lg" />
                      <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                          Bitcoin
                      </h1>
                  </div>
                  <p className="text-xl text-gray-600">
                      Bitcoin is a digital currency that is decentralized and not controlled by any single entity.
                  </p>
              </div>
  
              <div className="card">
                  <h2 className="card-title">
                      What is Bitcoin?
                  </h2>
                  <ul className="card-content">
                      <li>Digital Cryptocurrency: Bitcoin is a decentralized digital currency, created in 2009 by an anonymous entity known as Satoshi Nakamoto, used for peer-to-peer transactions without intermediaries</li>
                      <li>Blockchain-Based: It operates on a public ledger called the blockchain, recording all transactions transparently and immutably</li>
                      <li>Limited Supply: Bitcoin has a capped supply of 21 million coins, designed to mimic scarcity like precious metals, with issuance slowing over time</li>
                      <li>Global Accessibility: It enables worldwide transactions, requiring only an internet connection and a Bitcoin wallet, independent of traditional banking systems</li>
                  </ul>
              </div>

              <div className="card">
                  <h2 className="card-title">
                      Decentralization
                  </h2>
                  <ul className="card-content">
                      <li>No Central Authority: Bitcoin's network is maintained by a distributed group of nodes (computers), eliminating reliance on banks or governments</li>
                      <li>Consensus-Driven: Transactions are validated through a consensus mechanism called Proof of Work, where miners compete to secure the network</li>
                      <li>Resilient Design: Decentralization makes Bitcoin resistant to censorship, shutdown, or single-point failures, as no entity controls the entire system</li>
                  </ul>
              </div>

              <div className="card">
                  <h2 className="card-title">
                      Open Source Foundation
                  </h2>
                  <ul className="card-content">
                      <li>Public Codebase: Bitcoin's software is open source, licensed under the MIT License, allowing anyone to inspect, modify, or contribute to its development</li>
                      <li>Transparency: Open source ensures the protocol's rules, like the 21 million cap, are verifiable, fostering trust among users</li>
                      <li>Forking Flexibility: Developers can fork the code to create alternative cryptocurrencies or test new features, driving innovation while preserving Bitcoin's core</li>
                  </ul>
              </div>

              <div className="card">
                  <h2 className="card-title">
                      Benefits of Bitcoin
                  </h2>
                  <ul className="card-content">
                      <li>Financial Freedom: Bitcoin enables users to transact globally without intermediaries, bypassing restrictions or high fees from traditional finance</li>
                      <li>Inflation Resistance: Its fixed supply protects against devaluation, making it a potential hedge against fiat currency inflation</li>
                      <li>Borderless Transactions: It facilitates fast, low-cost international payments, benefiting remittances, commerce, and underserved populations</li>
                  </ul>
              </div>
          </div>
        </section>
      </main>
    );
}