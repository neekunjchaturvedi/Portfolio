import { Button } from "../ui/button";
import { FileText, Github } from "lucide-react";

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
    alert("Resume would be opened/downloaded here");
  };

  const handleGithubClick = () => {
    // Mock action - would open GitHub profile
    window.open(data.githubUrl, "_blank");
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16 bg-black"
    >
      <div className="max-w-full mx-auto px-6 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6 animate-fadeInLeft flex flex-col justify-center items-center">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              {data.headline}
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed text-center">
              {data.subheadline}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              onClick={handleResumeClick}
              className=" hover:bg-slate-700 text-white px-6 py-3 text-lg transition-all duration-300 transform hover:scale-105"
            >
              <FileText className="mr-2 h-5 w-5" />
              View Resume
            </Button>
            <Button
              variant="outline"
              onClick={handleGithubClick}
              className="border-slate-300 text-white hover:bg-slate-700 px-6 py-3 text-lg transition-all duration-300 transform hover:scale-105"
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub Profile
            </Button>
          </div>
        </div>

        {/* Image */}
        {/* <div className="relative animate-fadeInRight">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 rounded-2xl transform rotate-6 opacity-50"></div>
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img
                src={data.image}
                alt="Developer silhouette"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
            </div>
          </div>
        </div> */}
      </div>

      {/* Geometric Background Elements */}
      <div className="absolute top-25 left-10 w-20 h-20 bg-slate-700 rounded-full opacity-50 animate-float"></div>
      <div className="absolute top-40 left-90 w-20 h-20 bg-slate-600 opacity-50 rounded-md animate-spin [animation-duration:5s]"></div>
      <div className="absolute top-120 left-260 w-20 h-20 bg-slate-600 opacity-50 rounded-md animate-spin [animation-duration:5s]"></div>
      <div className="absolute top-150 left-350 w-20 h-20 bg-slate-700 rounded-full opacity-50 animate-float"></div>
      {/* <div className="absolute bottom-20 right-10 w-32 h-32 bg-slate-100 rounded-lg opacity-30 animate-float-delayed"></div> */}
    </section>
  );
};

export default HeroSection;
