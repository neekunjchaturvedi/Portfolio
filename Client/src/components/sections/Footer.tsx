import {
  Github,
  Linkedin,
  Mail,
  Heart,
  Code,
  Coffee,
  ArrowBigUp,
} from "lucide-react";

type FooterData = {
  githubUrl: string;
  linkedinUrl: string;
  email: string;
  name: string;
};

interface FooterProps {
  data: FooterData;
}

const Footer: React.FC<FooterProps> = ({ data }) => {
  const socialLinks = [
    {
      name: "GitHub",
      url: data.githubUrl,
      icon: Github,
      color: "hover:bg-slate-800",
      hoverText: "hover:text-white",
      description: "Check out my code",
    },
    {
      name: "LinkedIn",
      url: data.linkedinUrl,
      icon: Linkedin,
      color: "hover:bg-blue-600",
      hoverText: "hover:text-white",
      description: "Connect professionally",
    },
    {
      name: "Email",
      url: `mailto:${data.email}`,
      icon: Mail,
      color: "hover:bg-emerald-600",
      hoverText: "hover:text-white",
      description: "Send me an email",
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-t from-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-100/40 to-purple-100/40 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-emerald-100/40 to-cyan-100/40 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="text-center">
            {/* Brand/Name Section */}
            <div className="mb-12">
              <h3 className="text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
                  {data.name}
                </span>
              </h3>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                Full Stack Developer • Always Shipping • Building the Future
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6 mb-12">
              {socialLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <div key={index} className="group relative">
                    <a
                      href={link.url}
                      target={link.name !== "Email" ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className={`relative flex items-center justify-center w-16 h-16 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl ${link.color} ${link.hoverText} hover:border-slate-300 hover:shadow-xl transition-all duration-300 hover:scale-110 group shadow-lg shadow-slate-200/50`}
                      title={link.name}
                    >
                      <IconComponent className="h-7 w-7 text-slate-600 group-hover:text-white transition-colors duration-300" />

                      {/* Glow effect */}
                      <div
                        className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10 ${link.color.replace(
                          "hover:bg-",
                          "bg-"
                        )}`}
                      ></div>
                    </a>

                    {/* Tooltip */}
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                      <div className="bg-slate-800 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap border border-slate-700 shadow-xl">
                        {link.description}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-800"></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quote/Motto Section */}
            <div className="mb-12">
              <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl px-8 py-4 shadow-lg shadow-slate-200/50">
                <Code className="w-5 h-5 text-blue-600 hidden md:block" />
                <span className="text-slate-700 font-medium">
                  Code with Purpose
                </span>
                <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                <Coffee className="w-5 h-5 text-emerald-600 hidden md:block" />
                <span className="text-slate-700 font-medium">
                  Fuel Innovation
                </span>
                <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                <Heart className="w-5 h-5 text-red-500 hidden md:block" />
                <span className="text-slate-700 font-medium">
                  Ship with Love
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-200 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-slate-600 text-sm">
                © {currentYear} {data.name}.
              </p>
            </div>

            {/* Fun Stats */}
            <div className="flex items-center gap-8 text-center">
              <div className="group">
                <div className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
                  ∞
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  Lines of Code
                </div>
              </div>
              <div className="w-0.5 h-8 bg-slate-300"></div>
              <div className="group">
                <div className="text-lg font-bold text-slate-800 group-hover:text-emerald-600 transition-colors duration-300">
                  24/7
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  Always Shipping
                </div>
              </div>
              <div className="w-0.5 h-8 bg-slate-300"></div>
              <div className="group">
                <div className="text-lg font-bold text-slate-800 group-hover:text-purple-600 transition-colors duration-300">
                  💯
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  Commitment
                </div>
              </div>
            </div>

            {/* Back to Top (Optional) */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group flex items-center gap-2 text-slate-600 hover:text-slate-800 text-sm transition-all duration-300 hover:scale-105"
            >
              <span>Back to Top</span>
              <div className="w-6 h-6 flex items-center justify-center group-hover:border-slate-500 transition-colors duration-300">
                <span className="text-xs group-hover:-translate-y-0.5 transition-transform duration-300">
                  <ArrowBigUp />
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 opacity-50"></div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="w-1 h-1 bg-blue-400/40 rounded-full absolute top-8 left-8 animate-pulse"></div>
        <div
          className="w-1 h-1 bg-emerald-400/40 rounded-full absolute top-12 right-12 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="w-1 h-1 bg-purple-400/40 rounded-full absolute bottom-12 left-16 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="w-1 h-1 bg-cyan-400/40 rounded-full absolute bottom-8 right-8 animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>
    </footer>
  );
};

export default Footer;
