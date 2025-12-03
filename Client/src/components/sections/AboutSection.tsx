import React from "react";
import { Card, CardContent } from "../ui/card";
import { CinematicSection } from "../common/terminal";

interface AboutSectionProps {
  data: {
    about: string;
  };
}

const AboutSection: React.FC<AboutSectionProps> = ({ data }) => {
  const highlights = [
    {
      icon: "⚡",
      title: "Performance First",
      description: "Building lightning-fast, optimized applications",
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      icon: "🎨",
      title: "Design Systems",
      description: "Crafting beautiful, consistent user experiences",
      gradient: "from-blue-400 to-purple-500",
    },
    {
      icon: "🚀",
      title: "Always Shipping",
      description: "Turning ideas into scalable, production-ready code",
      gradient: "from-green-400 to-teal-500",
    },
    {
      icon: "🛠️",
      title: "Low Latent",
      description: "Building robust, scalable architectures",
      gradient: "from-white-400 to-black-500",
    },
  ];

  return (
    <section
      id="about"
      className="py-16 px-4 md:px-1 bg-black text-white border-b border-gray-900"
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-lg font-mono text-gray-500 mb-12 tracking-wider uppercase opacity-80">
          // About Me
        </h2>

        {/* Intro Text & Tech Stack */}
        <div className="mb-16">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-100">
            Building Systems,{" "}
          </h3>
          <p className="text-xl font-mono text-gray-400 leading-relaxed mb-8 max-w-3xl">
            {data.about}
          </p>

          {/* Tech Pills */}
          <div className="flex flex-wrap gap-2 md:gap-3">
            <span className="px-3 py-1 bg-green-900/20 border border-green-900/30 rounded-full text-sm text-green-400 font-medium">
              Always Shipping
            </span>
            {["React", "Node", "Express", "NoSQL", "DSA", "System Design"].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-900 border border-gray-800 rounded-full text-sm text-gray-400"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="flex flex-col gap-2 mb-8">
          <CinematicSection />
        </div>

        {/* Currently Building (Footer style)
        <div className="p-6 bg-gray-900/20 border border-gray-800 rounded-lg text-gray-500">
          // Expo 
        </div> */}
      </div>
    </section>
  );
};

export default AboutSection;
