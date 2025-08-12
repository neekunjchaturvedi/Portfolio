import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Card, CardContent } from "../ui/card";
import {
  Send,
  Mail,
  Github,
  Linkedin,
  Globe,
  MessageCircle,
  X,
  MapPin,
} from "lucide-react";
import { useToast } from "../../hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thanks for reaching out. I'll get back to you soon.",
        duration: 5000,
      });

      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
      setShowForm(false);
    }, 1500);
  };

  const isFormValid =
    formData.name.trim() && formData.email.trim() && formData.message.trim();

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/neekunj",
      color: "hover:bg-gray-700",
      description: "Check out my code",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/neekunj",
      color: "hover:bg-blue-600",
      description: "Connect professionally",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:your.email@example.com",
      color: "hover:bg-red-600",
      description: "Send me an email",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute right-1/4 w-96 h-96 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-12 h-0.5 bg-gradient-to-r from-transparent to-gray-600"></span>
            <span className="text-sm font-medium text-gray-400 tracking-widest uppercase">
              Let's Connect
            </span>
            <span className="w-12 h-0.5 bg-gradient-to-l from-transparent to-gray-600"></span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to build something amazing together? Let's start a
            conversation
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
          {/* Globe Section */}
          <div className="relative flex-1 flex justify-center items-center">
            {/* Animated Globe */}
            <div className="relative w-80 h-80 flex items-center justify-center">
              {/* Outer rotating ring with particles */}
              <div
                className="w-80 h-80 rounded-full border border-gray-600/30 absolute animate-spin"
                style={{ animationDuration: "20s" }}
              >
                {/* Main particles on outer ring */}
                <div className="w-2 h-2 bg-blue-400 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 shadow-lg shadow-blue-400/50"></div>
                <div className="w-2 h-2 bg-emerald-400 rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 shadow-lg shadow-emerald-400/50"></div>
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 shadow-lg shadow-purple-400/50"></div>
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1 shadow-lg shadow-cyan-400/50"></div>

                {/* Additional particles on outer ring */}
                <div className="w-1 h-1 bg-yellow-400 rounded-full absolute top-1/4 right-1/4 transform translate-x-2 -translate-y-2 shadow-lg shadow-yellow-400/50"></div>
                <div className="w-1 h-1 bg-pink-400 rounded-full absolute bottom-1/4 left-1/4 transform -translate-x-2 translate-y-2 shadow-lg shadow-pink-400/50"></div>
                <div className="w-1 h-1 bg-orange-400 rounded-full absolute top-1/4 left-1/4 transform -translate-x-2 -translate-y-2 shadow-lg shadow-orange-400/50"></div>
                <div className="w-1 h-1 bg-indigo-400 rounded-full absolute bottom-1/4 right-1/4 transform translate-x-2 translate-y-2 shadow-lg shadow-indigo-400/50"></div>
              </div>

              {/* Middle ring with more particles */}
              <div
                className="w-64 h-64 rounded-full border border-gray-500/40 absolute animate-spin"
                style={{
                  animationDuration: "15s",
                  animationDirection: "reverse",
                }}
              >
                {/* Main particles on middle ring */}
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 shadow-lg shadow-purple-400/50"></div>
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 shadow-lg shadow-cyan-400/50"></div>
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 shadow-lg shadow-green-400/50"></div>
                <div className="w-1.5 h-1.5 bg-red-400 rounded-full absolute left-0 top-1/2 transform -translate-x-1 -translate-y-1/2 shadow-lg shadow-red-400/50"></div>

                {/* Additional middle ring particles */}
                <div className="w-1 h-1 bg-blue-300 rounded-full absolute top-1/3 right-1/3 transform translate-x-1 -translate-y-1 shadow-lg shadow-blue-300/50"></div>
                <div className="w-1 h-1 bg-emerald-300 rounded-full absolute bottom-1/3 left-1/3 transform -translate-x-1 translate-y-1 shadow-lg shadow-emerald-300/50"></div>
              </div>

              {/* Inner ring with small particles */}
              <div
                className="w-40 h-40 rounded-full border border-gray-400/20 absolute animate-spin"
                style={{ animationDuration: "10s" }}
              >
                <div className="w-1 h-1 bg-white/60 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1"></div>
                <div className="w-1 h-1 bg-white/60 rounded-full absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2"></div>
                <div className="w-1 h-1 bg-white/60 rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1"></div>
                <div className="w-1 h-1 bg-white/60 rounded-full absolute left-0 top-1/2 transform -translate-x-1 -translate-y-1/2"></div>
              </div>

              {/* Central Globe */}
              <div className="w-48 h-48 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full border-2 border-gray-600 flex items-center justify-center relative shadow-2xl group hover:shadow-blue-500/20 transition-all duration-500">
                <Globe className="w-20 h-20 text-gray-300 group-hover:text-blue-400 transition-colors duration-300" />

                {/* Pulsing effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 animate-ping opacity-20"></div>

                {/* Fixed Location indicator */}
                <div className="absolute -top-4 -right-6 flex items-center gap-2 bg-gray-800/90 backdrop-blur-sm border border-gray-600 px-3 py-2 rounded-full shadow-lg">
                  <MapPin className="w-3 h-3 text-emerald-400" />
                  <span className="text-xs text-gray-300 font-medium whitespace-nowrap">
                    Always Shipping
                  </span>
                </div>
              </div>

              {/* Additional floating particles around the globe */}
              <div className="absolute inset-0">
                <div className="w-1 h-1 bg-blue-400 rounded-full absolute top-16 left-8 animate-pulse shadow-lg shadow-blue-400/50"></div>
                <div
                  className="w-1 h-1 bg-emerald-400 rounded-full absolute top-32 right-16 animate-pulse shadow-lg shadow-emerald-400/50"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <div
                  className="w-1 h-1 bg-purple-400 rounded-full absolute bottom-16 left-16 animate-pulse shadow-lg shadow-purple-400/50"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div
                  className="w-1 h-1 bg-cyan-400 rounded-full absolute bottom-32 right-8 animate-pulse shadow-lg shadow-cyan-400/50"
                  style={{ animationDelay: "1.5s" }}
                ></div>
                <div
                  className="w-0.5 h-0.5 bg-yellow-400 rounded-full absolute top-24 right-24 animate-pulse shadow-lg shadow-yellow-400/50"
                  style={{ animationDelay: "2s" }}
                ></div>
                <div
                  className="w-0.5 h-0.5 bg-pink-400 rounded-full absolute bottom-24 left-24 animate-pulse shadow-lg shadow-pink-400/50"
                  style={{ animationDelay: "2.5s" }}
                ></div>
              </div>
            </div>
          </div>

          {/* Contact Options */}
          <div className="flex-1 max-w-md space-y-8">
            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                Connect With Me
              </h3>

              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-4 bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-2xl ${social.color} hover:border-gray-600 transition-all duration-300 hover:scale-105 hover:shadow-xl group`}
                >
                  <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center group-hover:bg-white/10 transition-colors duration-300">
                    <social.icon className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white group-hover:text-white transition-colors duration-300">
                      {social.name}
                    </h4>
                    <p className="text-sm text-gray-400">
                      {social.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Message Button */}
            <div className="pt-4">
              <Button
                onClick={() => setShowForm(true)}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 text-lg font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                <MessageCircle className="mr-3 h-6 w-6" />
                Send Me a Message
              </Button>
            </div>

            {/* Quick Info */}
            <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-6">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-white mb-1">24/7</div>
                  <div className="text-xs text-gray-400">Always Shipping</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-1">
                    &lt;24h
                  </div>
                  <div className="text-xs text-gray-400">Response Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <Card className="w-full max-w-md border-0 bg-gray-800/95 backdrop-blur-sm shadow-2xl animate-in zoom-in-95 duration-300">
            <div className="flex items-center justify-between p-6 pb-4">
              <h3 className="text-2xl font-bold text-white">Send Message</h3>
              <Button
                onClick={() => setShowForm(false)}
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white hover:bg-gray-700"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <CardContent className="p-6 pt-0">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-300"
                  >
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                    className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-300"
                  >
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                    className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-gray-300"
                  >
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project..."
                    required
                    rows={4}
                    className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 resize-none"
                  />
                </div>

                <div className="pt-4">
                  <Button
                    type="submit"
                    disabled={!isFormValid || isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 text-lg font-semibold transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      )}
    </section>
  );
};

export default ContactSection;
