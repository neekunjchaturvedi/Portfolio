import React from "react";
import { Card, CardContent } from "../ui/card";

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
      title: "Scalable Systems",
      description: "Building robust, scalable architectures",
      gradient: "from-white-400 to-black-500",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-gray-50/50 to-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Header with animated gradient */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-12 h-0.5 bg-gradient-to-r from-transparent to-slate-300"></span>
            <span className="text-sm font-medium text-slate-500 tracking-widest uppercase">
              About Me
            </span>
            <span className="w-12 h-0.5 bg-gradient-to-l from-transparent to-slate-300"></span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
              Building Systems,
            </span>
            <br />
            {/* <span className="text-2xl md:text-3xl font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent italic">
              Also Known as API Whisperer
            </span> */}
          </h2>
        </div>

        {/* Main content card */}
        <Card className="border-0 shadow-xl shadow-slate-200/50 bg-white/80 backdrop-blur-sm mb-16">
          <CardContent className="px-8 md:p-12">
            {/* Status badges */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-50 border border-green-200">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm font-medium text-green-700">
                  Always Shipping
                </span>
              </div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200">
                <span className="text-sm font-medium text-blue-700">
                  React • Node • Express • NoSQL
                </span>
              </div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-50 border border-purple-200">
                <span className="text-sm font-medium text-purple-700">
                  DSA & System Design
                </span>
              </div>
            </div>

            {/* About text */}
            <div className="text-center mb-12">
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-4xl mx-auto mb-6">
                {data.about}
              </p>
              <p className="text-slate-600">
                Turning ideas into clean, scalable, and top-end software.
                <br />
                <span className="font-semibold text-slate-700 text">
                  🚀 Coding since 2022 💪
                </span>
              </p>
            </div>

            {/* Key points with modern cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="group relative p-6 rounded-2xl bg-white border border-slate-200/60 hover:border-slate-300 transition-all duration-300 hover:shadow-lg hover:shadow-slate-200/50 hover:-translate-y-1"
                >
                  {/* Gradient background on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}
                  ></div>

                  <div className="relative z-10">
                    <div
                      className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                    >
                      <span className="text-2xl filter drop-shadow-sm">
                        {item.icon}
                      </span>
                    </div>
                    <h3 className="font-bold text-slate-800 mb-3 text-xs md:text-lg text-center">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed text-center hidden md:block">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Current focus section */}
            <div className="mt-12 p-6 bg-slate-50/50 rounded-2xl border border-slate-200/60">
              <div className="text-center">
                <h4 className="font-semibold text-slate-800 mb-3">
                  Currently Building
                </h4>
                <p className="text-slate-600 mb-4">
                  🛠️ <strong>Outceedo</strong> • Learning{" "}
                  <strong>Expo, Cloud Native, Design Systems</strong>
                </p>
                <div className="inline-flex items-center gap-2 text-sm text-slate-500">
                  <span>
                    🧠 Always tinkering—side projects, code, design, and
                    community
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
