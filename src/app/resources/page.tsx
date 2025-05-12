export default function Resources() {
  const resources = [
    {
      category: "Academic Papers",
      items: [
        {
          title: "Networked Rhetoric: The Digital Age of Persuasion",
          author: "Dr. Jane Smith",
          link: "#",
          description: "A comprehensive analysis of how digital networks transform rhetorical practices"
        },
        {
          title: "Decentralization and Digital Resistance",
          author: "Prof. John Doe",
          link: "#",
          description: "Exploring the intersection of blockchain technology and rhetorical theory"
        }
      ]
    },
    {
      category: "Books",
      items: [
        {
          title: "The Age of Decentralization",
          author: "Sarah Johnson",
          link: "#",
          description: "A deep dive into how decentralized technologies are reshaping society"
        },
        {
          title: "Digital Rhetoric in Practice",
          author: "Michael Chen",
          link: "#",
          description: "Practical applications of rhetorical theory in digital spaces"
        }
      ]
    },
    {
      category: "Online Resources",
      items: [
        {
          title: "Decentralized Web Foundation",
          author: "Various Contributors",
          link: "#",
          description: "Resources for understanding and building decentralized technologies"
        },
        {
          title: "Digital Rhetoric Network",
          author: "Academic Community",
          link: "#",
          description: "A community-driven platform for digital rhetoric research"
        }
      ]
    }
  ]

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

          <div className="space-y-12">
            {resources.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {category.category}
                </h2>
                <div className="space-y-6">
                  {category.items.map((item, itemIndex) => (
                    <div 
                      key={itemIndex}
                      className="border-b border-gray-200 last:border-0 pb-6 last:pb-0"
                    >
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 mb-2">
                        By {item.author}
                      </p>
                      <p className="text-gray-600 mb-4">
                        {item.description}
                      </p>
                      <a 
                        href={item.link}
                        className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                      >
                        Learn More
                        <svg 
                          className="w-4 h-4 ml-2" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
} 