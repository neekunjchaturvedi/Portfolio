import { Button } from "../ui/button";
import { Github, File, Workflow } from "lucide-react";

type HeroSectionData = {
  headline: string;
  subheadline: string;
  githubUrl: string;
  image: string;
};

interface HeroSectionProps {
  data: HeroSectionData;
}

const HeroSection: React.FC<HeroSectionProps> = ({ data }) => {
  const handleResumeClick = () => {
    // Mock action - would open/download resume
    window.open(
      "https://drive.google.com/file/d/1DUGy-qBlR1FAp1XSKhpPL2JiEnb9Daih/view?usp=sharing",
      "_blank"
    );
  };

  const handleGithubClick = () => {
    window.open(data.githubUrl, "_blank");
  };

  const handleScrollDown2 = () => {
    const skillsSection = document.getElementById("experience");
    skillsSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main background decorations */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Geometric shapes - Responsive positioning */}
        <div className="absolute top-20 left-4 md:top-32 md:left-10 w-12 h-12 md:w-20 md:h-20 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full animate-float"></div>
        <div
          className="absolute top-40 right-4 md:top-64 md:right-20 w-8 h-8 md:w-16 md:h-16 bg-gradient-to-br from-emerald-500/30 to-cyan-500/30 rounded-lg rotate-45 animate-spin"
          style={{ animationDuration: "8s" }}
        ></div>
        <div
          className="absolute bottom-32 left-8 md:bottom-40 md:left-16 w-6 h-6 md:w-12 md:h-12 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 right-8 md:bottom-32 md:right-32 w-10 h-10 md:w-24 md:h-24 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-lg rotate-12 animate-float"
          style={{ animationDelay: "3s" }}
        ></div>

        {/* Floating particles */}
        <div className="absolute top-1/3 left-1/6 w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
        <div
          className="absolute top-2/3 right-1/6 w-1 h-1 bg-emerald-400 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/3 w-1 h-1 bg-purple-400 rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 lg:space-y-12">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 bg-gray-800/60 backdrop-blur-sm border border-gray-700 px-4 py-2 rounded-full animate-fade-in">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-300 font-medium">
              Available for new opportunities
            </span>
          </div>

          {/* Main Content */}
          <div className="space-y-6 lg:space-y-8 max-w-5xl mx-auto">
            {/* Headline */}
            <div className="space-y-4 lg:space-y-6">
              <h1 className="text-5xl font-bold leading-tight animate-fade-in-up">
                <span className="text-white">
                  {data.headline.split(" ").map((word, index) => (
                    <span
                      key={index}
                      className="inline-block animate-fade-in-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {word}&nbsp;
                    </span>
                  ))}
                </span>
              </h1>

              {/* Typing effect subheadline */}
              <div className="relative">
                <p
                  className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-400 leading-relaxed max-w-3xl mx-auto animate-fade-in-up"
                  style={{ animationDelay: "0.5s" }}
                >
                  {data.subheadline}
                </p>
              </div>
            </div>
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center">
              <Button
                onClick={handleResumeClick}
                className="group border-2 border-gray-600 text-gray-300 hover:text-white hover:bg-gray-800 hover:border-gray-500 px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg font-semibold transition-all duration-300 transform hover:scale-105 bg-gray-900/50 backdrop-blur-sm w-full sm:w-auto"
              >
                <File />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                Resume
              </Button>

              <Button
                variant="outline"
                onClick={handleGithubClick}
                className="group border-2 border-gray-600 text-gray-300 hover:text-white hover:bg-gray-800 hover:border-gray-500 px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg font-semibold transition-all duration-300 transform hover:scale-105 bg-gray-900/50 backdrop-blur-sm w-full sm:w-auto"
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Button>
            </div>

            <Button
              onClick={handleScrollDown2}
              className="group border-2 border-gray-600 text-gray-300 hover:text-white hover:bg-gray-800 hover:border-gray-500 px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg font-semibold transition-all duration-300 transform hover:scale-105 bg-gray-900/50 backdrop-blur-sm w-full sm:w-auto"
            >
              <Workflow />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              Explore My Work
            </Button>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(10deg);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
          opacity: 0;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
