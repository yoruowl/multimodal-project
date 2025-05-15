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

          <div className="card">
            <h2 className="card-title">
              What is Open Source
            </h2>
                <ul className="card-content">
                    <li>Freely Accessible Code: Open source code is freely accessible to anyone</li>
                    <li>Collaborative Development: Open source projects are developed through collaboration by many different people</li>
                    <li>Transparency: Open source projects are transparent, allowing for anyone to see the code and contribute to it</li>
                </ul>
          </div>

          <div className="card">
            <h2 className="card-title">
                Why Open Source Matters
            </h2>
            <ul className="card-content">
                <li>Innovation: Open source projects are often more innovative than closed source ones</li>
                <li>Security: Open source projects are often more secure than closed source ones</li>
                <li>Transparency: Open source projects are transparent, allowing for anyone to see the code and contribute to it</li>
            </ul>
          </div>

          <div className="card">
            <h2 className="card-title">
                How Open Source Works
            </h2>
            <ul className="card-content">
                <li>Code Repository: Open source projects are stored in a code repository, which is a place where the code is stored and can be accessed by anyone</li>
                <li>Community Involvement: Open source projects are often more successful than closed source ones because of the community involvement</li>
                <li>Transparency: Open source projects are transparent, allowing for anyone to see the code and contribute to it</li>
            </ul>
          </div>

          <div className="card">
            <h2 className="card-title">
                Challenges of Open Source
            </h2>
            <ul className="card-content">
                <li>Sustainibility: Many open source projects rely on volunteer efforts or limited funding, leading to maintainer burnout or abandoned projects</li>
                <li>Quality Control: With diverse contributors, ensuring consistent code quality and preventing bugs or vulnerabilities can be difficult</li>
                <li>Coordination Complexity: Large projects with many contributors may face challenges in aligning goals, managing conflicts, or maintaining clear communication</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
