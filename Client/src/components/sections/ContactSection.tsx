import { Mail, Github, Linkedin, Calendar } from "lucide-react";

const ContactSection = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/neekunjch aturvedi",
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
    {
      name: "Cal.com",
      icon: Calendar,
      href: "https://cal.com/neekunj-chaturvedi-jn7voh",
      label: "Book a call",
      isPrimary: true,
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
            {socialLinks.map((social) => {
              // Styling logic to highlight the Cal.com link
              const isPrimary = (social as any).isPrimary;

              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 transition-colors group ${
                    isPrimary ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  <span
                    className={`p-2 border rounded-lg transition-colors ${
                      isPrimary
                        ? "bg-white border-white text-black group-hover:bg-gray-200"
                        : "border-gray-800 group-hover:border-gray-600"
                    }`}
                  >
                    <social.icon size={20} />
                  </span>
                  <span
                    className={`font-medium ${isPrimary ? "font-bold" : ""}`}
                  >
                    {social.label}
                  </span>
                  {isPrimary && (
                    <span className="ml-auto text-xl font-mono text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
                      ← Let's Talk
                    </span>
                  )}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
