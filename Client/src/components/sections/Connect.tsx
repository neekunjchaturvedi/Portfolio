import React from "react";
import {
  Github,
  Linkedin,
  Calendar,
  ArrowUpRight,
  Twitter,
} from "lucide-react";

const ConnectWidgets = () => {
  const links = [
    {
      name: "GitHub",
      icon: <Github size={24} />,
      label: "Check my code",
      url: "https://github.com/neekunjchaturvedi",
      color:
        "hover:border-neutral-500 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={24} />,
      label: "Let's connect",
      url: "https://linkedin.com/in/neekunj-chaturvedi",
      color:
        "hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:text-blue-400",
    },
    {
      name: "X/Twitter",
      icon: <Twitter size={24} />,
      label: "Let's tweet",
      url: "https://x.com/neekunj_ch",
      color:
        "hover:border-gray-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:text-white",
    },
    {
      name: "Cal.com",
      icon: <Calendar size={24} />,
      label: "Lets Talk Tech",
      url: "https://cal.com/neekunj-chaturvedi-jn7voh/",
      color: "hover:border-white hover:bg-neutral-100 hover:text-black",
    },
  ];

  return (
    <section className="w-full max-w-2xl mx-auto">
      <h3 className="text-sm font-mono text-neutral-500 mb-4 uppercase tracking-wider">
        Connect
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              group flex flex-col justify-between p-4 h-32
              bg-neutral-900/50 border border-neutral-800 rounded-xl
              transition-all duration-300 ${link.color}
            `}
          >
            <div className="flex justify-between items-start">
              <span className="text-neutral-400 group-hover:text-inherit transition-colors">
                {link.icon}
              </span>
              <ArrowUpRight
                size={16}
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </div>
            <div>
              <span className="block font-bold text-lg">{link.name}</span>
              <span className="text-xs text-neutral-500 group-hover:text-inherit/70">
                {link.label}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ConnectWidgets;
