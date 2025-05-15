import Image from 'next/image'
import linuxLogo from '@/images/linuxLogo.png'

export default function Linux() {
    return (
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center mb-16">
                  <div className="flex items-center justify-center gap-4 mb-6">
                      <Image src={linuxLogo} alt="Linux Logo" width={60} height={60} className="rounded-lg" />
                      <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                          Linux
                      </h1>
                  </div>
                  <p className="text-xl text-gray-600">
                      Linux is a free and open-source operating system.
                  </p>
              </div>
  
              <div className="card">
                  <h2 className="card-title">
                      What is Linux?
                  </h2>
                  <ul className="card-content">
                      <li>Open-Source Operating System: Linux is a free, open-source operating system kernel, originally created by Linus Torvalds in 1991, that powers a wide range of devices</li>
                      <li>Modular and Customizable: It supports diverse distributions (e.g., Ubuntu, Fedora) tailored for specific use cases like servers, desktops, or embedded systems</li>
                      <li>Unix-Like Architecture: Linux mimics Unix in design, offering robust multitasking, multi-user capabilities, and a command-line interface</li>
                  </ul>
              </div>

              <div className="card">
                <h2 className="card-title">
                    Open Source
                </h2>
                <ul className="card-content">
                    <li>Freely Accessible Code: Linux's source code is available under the GNU General Public License, allowing anyone to view, modify, or distribute it</li>
                    <li>Community Contributions: Developers worldwide collaborate to enhance features, fix bugs, and create distributions, ensuring continuous improvement</li>
                    <li>Transparent Development: Public access to code fosters trust, as users can verify functionality and security for themselves</li>
                </ul>
              </div>

              <div className="card">
                <h2 className="card-title">
                    Decentralized Development
                </h2>
                <ul className="card-content">
                    <li>Global Developer Network: Linux is developed by a decentralized community of volunteers, companies, and organizations, coordinated via mailing lists and repositories</li>
                    <li>Kernel Maintenance: Linus Torvalds and a team of maintainers oversee the Linux kernel, while distributions are independently managed by separate groups</li>
                    <li>Autonomous Distributions: Each Linux distribution (e.g., Debian, Arch) operates independently, creating unique ecosystems while sharing the core kernel</li>
                </ul>
              </div>

              <div className="card">
                <h2 className="card-title">
                    Benefit
                </h2>
                <ul className="card-content">
                    <li>Cost-Free: Linux is free to use, reducing expenses for individuals, businesses, and governments compared to proprietary systems</li>
                    <li>High Customizability: Users can tailor Linux to specific needs, from lightweight IoT devices to powerful data center servers</li>
                    <li>Security and Stability: Regular community updates and a modular design make Linux secure and reliable, with minimal downtime</li>
                </ul>
              </div>
          </div>
        </section>
      </main>
    );
}