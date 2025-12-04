import {
  Github,
  Linkedin,
  Mail,
  Heart,
  Code,
  Coffee,
  ArrowBigUp,
  ArrowUp,
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
  const currentYear = new Date().getFullYear();
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/neekunjchaturvedi",
    },
    { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com" },
    { name: "Email", icon: Mail, url: "mailto:hello@example.com" },
  ];

  return (
    <footer className="py-12 bg-black text-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 border-b border-gray-900 pb-12">
          {/* Top Left: Brand & Tagline */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2 text-white">
              Neekunj Chaturvedi
            </h3>
            <p className="text-gray-500 text-sm">
             // I actually build softwares that scales
            </p>
          </div>

          {/* Top Right: Motto */}
          <div className="flex justify-center md:justify-end gap-6 items-center">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Code size={16} className="text-blue-500" />
              <span>Code Purpose</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Heart size={16} className="text-red-500" />
              <span>Ship Love</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Bottom Left: Copyright */}
          <div className="text-gray-600 text-sm text-center md:text-left">
            © {currentYear}
          </div>

          {/* Center: Socials */}
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 hover:text-white transition-colors"
                aria-label={link.name}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>

          {/* Bottom Right: Stats & Back to Top */}
          <div className="flex items-center gap-4 text-sm text-gray-500 font-mono">
            <span className="hidden md:inline">24/7 Online</span>
            <button
              onClick={scrollToTop}
              className="hover:text-white transition-colors"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
