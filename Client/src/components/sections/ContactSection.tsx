import { useState } from "react";
import { Send, Mail, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/neekunjchaturvedi",
      label: "Code",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/neekunj-chaturvedi/",
      label: "Connect",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:neekunjchaturvedi3@gmail.com",
      label: "Message",
    },
  ];

  return (
    <section id="contact" className="py-16 bg-black text-white">
      <div className="mx-auto px-4 max-w-4xl">
        <h2 className="text-lg font-mono text-gray-500 mb-12 tracking-wider uppercase opacity-80">
          // Get in Touch
        </h2>

        {/* Left Column */}
        <div>
          <h3 className="text-3xl font-bold mb-6 text-gray-100">
            Let's build something.
          </h3>
          <p className="text-gray-400 font-mono leading-relaxed mb-10">
            // Open to Code, Collaborate, discussing new projects, creative
            ideas, or opportunities...
          </p>

          <div className="space-y-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group"
              >
                <span className="p-2 border border-gray-800 rounded-lg group-hover:border-gray-600 transition-colors">
                  <social.icon size={20} />
                </span>
                <span className="font-medium">{social.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Right Column */}
      </div>
    </section>
  );
};

export default ContactSection;
