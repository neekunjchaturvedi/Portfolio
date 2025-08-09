
import { Github, Linkedin, Mail } from "lucide-react";

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
      color: "hover:text-slate-800",
    },
    {
      name: "LinkedIn",
      url: data.linkedinUrl,
      icon: Linkedin,
      color: "hover:text-blue-600",
    },
    {
      name: "Email",
      url: `mailto:${data.email}`,
      icon: Mail,
      color: "hover:text-green-600",
    },
  ];

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          {/* Social Links */}
          <div className="flex justify-center space-x-8 mb-8">
            {socialLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={index}
                  href={link.url}
                  target={link.name !== "Email" ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className={`p-3 bg-slate-800 rounded-full ${link.color} transition-all duration-300 transform hover:scale-110 hover:shadow-lg`}
                  title={link.name}
                >
                  <IconComponent className="h-6 w-6" />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="border-t border-slate-700 pt-8">
            <p className="text-slate-400 text-sm">
              © 2024 {data.name}. All rights reserved. Built with React &
              Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
