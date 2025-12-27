const AboutSection = () => {
  const techStack = [
    "System Design",
    "Scalable and Modular Architecture",
    "Secure API Design",
    "Microservices",
    "InterService Communication",
    "Production-grade APIs",
    "Cloud Infrastructure",
    "Reliable Deployment",
    "Caching Strategies",
    "DevOps",
    "Robust Payment Integrations",
    "Native Development",
    "AI Agents",
    "SaaS Development",
  ];

  return (
    <section
      id="about"
      className="py-16 px-4 md:px-1 bg-black text-white border-b border-gray-900"
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-xl font-mono text-gray-500 mb-12 tracking-wider uppercase opacity-80">
          // What I do
        </h2>

        {/* Intro Text & Tech Stack */}
        <div className="mb-16">
          <h3 className="text-xl md:text-3xl font-bold mb-6 text-gray-100">
            I Build Systems, That Don&apos;t Fail
          </h3>
          <h4 className="text-lg md:text-xl font-mono mb-6 text-gray-400">
            You name it, I owe it.
          </h4>

          {/* Tech Pills */}
          <div className="flex flex-wrap gap-2 md:gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gray-900 border border-gray-800 rounded-full text-sm text-gray-400 hover:border-gray-700 hover:text-gray-300 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
