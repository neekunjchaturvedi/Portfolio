import { useState } from "react";
import { Send, Mail, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success">("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setSubmitStatus("idle"), 3000);
    }, 1500);
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
      href: "https://linkedin.com",
      label: "Connect",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:hello@example.com",
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
          {/* Left Column: Contact Info */}
          <div>
            <h3 className="text-3xl font-bold mb-6 text-gray-100">
              Let's build something.
            </h3>
            <p className="text-gray-400 leading-relaxed mb-10">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions.
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

          {/* Right Column: Minimal Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-mono text-gray-500 mb-2 uppercase"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-gray-900 border border-gray-800 text-white px-4 py-3 rounded focus:outline-none focus:border-gray-600 transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-mono text-gray-500 mb-2 uppercase"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-gray-900 border border-gray-800 text-white px-4 py-3 rounded focus:outline-none focus:border-gray-600 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-mono text-gray-500 mb-2 uppercase"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full bg-gray-900 border border-gray-800 text-white px-4 py-3 rounded focus:outline-none focus:border-gray-600 transition-colors resize-none"
                  placeholder="Project details..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gray-700 text-gray-200 font-bold py-4 rounded transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : submitStatus === "success" ? (
                  "Message Sent!"
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
