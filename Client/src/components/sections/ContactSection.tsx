import { useState } from "react";
import { Send, Mail, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    setIsSubmitting(false);

    if (result.success) {
      setSubmitStatus("success");
      e.currentTarget.reset();

      setTimeout(() => setSubmitStatus("idle"), 3000);
    } else {
      setSubmitStatus("error");
    }
  };

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
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-lg font-mono text-gray-500 mb-12 tracking-wider uppercase opacity-80">
          // Get in Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
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
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Web3Forms required fields */}
              <input
                type="hidden"
                name="access_key"
                value={import.meta.env.VITE_FORM}
              />
              <input
                type="hidden"
                name="subject"
                value="New Contact Message from Portfolio"
              />
              <input type="hidden" name="from_name" value="Portfolio Website" />

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-mono text-gray-500 mb-2 uppercase"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full bg-gray-900 border border-gray-800 text-white px-4 py-3 rounded focus:outline-none focus:border-gray-600"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-mono text-gray-500 mb-2 uppercase"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-gray-900 border border-gray-800 text-white px-4 py-3 rounded focus:outline-none focus:border-gray-600"
                  placeholder="john@example.com"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-mono text-gray-500 mb-2 uppercase"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-gray-900 border border-gray-800 text-white px-4 py-3 rounded focus:outline-none focus:border-gray-600 resize-none"
                  placeholder="Project details..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gray-700 text-gray-200 font-bold py-4 rounded transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : submitStatus === "success" ? (
                  "Message Sent!"
                ) : submitStatus === "error" ? (
                  "Something went wrong!"
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
