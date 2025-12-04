import { Button } from "../ui/button";
import { Github, File, Workflow, FileText, ArrowDown } from "lucide-react";

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
  const handleScrollDown = () => {
    const section = document.getElementById("experience");
    section?.scrollIntoView({ behavior: "smooth" });
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
      className="min-h-screen bg-black text-white flex flex-col justify-center relative border-b border-gray-900"
    >
      <div className="container mx-auto px-6 md:px-4 max-w-4xl">
        {/* Minimal Status Indicator */}
        <div className="flex items-center gap-3 mb-8 opacity-80">
          <span className="font-mono text-sm text-gray-400 tracking-widest uppercase">
            //I build Softwares that scale
          </span>
        </div>

        {/* Main Typography */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-8 text-white">
          {data.headline}
        </h1>

        <p className="text-xl font-mono text-gray-400 max-w-2xl leading-relaxed mb-12 font-light">
          {data.subheadline}
        </p>

        {/* Minimal Actions */}
        <div className="flex flex-wrap items-center gap-6">
          <button
            onClick={handleResumeClick}
            className="group flex items-center gap-2 text-white border-b border-white pb-1 hover:text-gray-300 hover:border-gray-500 transition-all"
          >
            <FileText size={18} />
            <span className="font-medium">View Resume</span>
          </button>

          <button
            onClick={handleGithubClick}
            className="group flex items-center gap-2 text-gray-400 border-b border-transparent pb-1 hover:text-white hover:border-white transition-all"
          >
            <Github size={18} />
            <span className="font-medium">GitHub</span>
          </button>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <button
        onClick={handleScrollDown}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-gray-600 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        {/* <Workflow /> */}
      </button>
    </section>
  );
};

export default HeroSection;
