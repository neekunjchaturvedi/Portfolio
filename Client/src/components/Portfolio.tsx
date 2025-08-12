import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { mockData } from "../mock";

import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";
import ProjectsSection from "./sections/ProjectsSection";
import ExperienceSection from "./sections/ExperienceSection";
import EducationSection from "./sections/EducationSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./sections/Footer";
import { Toaster } from "./ui/toaster";

const Portfolio = () => {
  const [data] = useState(mockData);
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "skills",
        "projects",
        "experience",
        "education",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        !target.closest(".mobile-menu") &&
        !target.closest(".hamburger-button")
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("click", handleClickOutside);
      // Prevent body scroll when menu is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div
              className="text-xl font-bold text-white cursor-pointer hover:text-blue-400 transition-colors duration-300"
              onClick={() => handleNavClick("hero")}
            >
              Neekunj Chaturvedi
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative transition-all duration-300 hover:scale-105 ${
                    activeSection === item.id
                      ? "text-blue-400 font-medium"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-400 rounded-full"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Hamburger Button */}
            <button
              className="hamburger-button lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-300 focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <div className="relative w-6 h-6">
                <Menu
                  className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                    isMobileMenuOpen
                      ? "opacity-0 rotate-90"
                      : "opacity-100 rotate-0"
                  }`}
                />
                <X
                  className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                    isMobileMenuOpen
                      ? "opacity-100 rotate-0"
                      : "opacity-0 -rotate-90"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
            isMobileMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          style={{ top: "72px" }}
        >
          {/* Mobile Menu */}
          <div
            className={`mobile-menu h-screen bg-gray-900/98 backdrop-blur-md border-t border-gray-800 transform transition-transform duration-300 ease-out ${
              isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
            }`}
          >
            <div className="px-4 py-6 space-y-1">
              {navigationItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`group w-full text-left px-4 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-between ${
                    activeSection === item.id
                      ? "bg-blue-600/20 text-blue-400 font-medium shadow-lg shadow-blue-600/20"
                      : "text-gray-300 hover:bg-gray-800/50 hover:text-white"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="text-lg">{item.label}</span>
                  {activeSection === item.id && (
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  )}
                  
                </button>
              ))}
            </div>

            {/* Mobile Menu Footer */}
            <div className="border-t border-gray-800 px-4 py-6">
              <div className="text-center">
                <p className="text-gray-400 text-sm mb-2">Always Shipping 🚀</p>
                <div className="flex justify-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <div
                    className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"
                    style={{ animationDelay: "1s" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Sections */}
      <HeroSection data={data.personal} />
      <AboutSection data={data.personal} />
      <SkillsSection data={data.skills} />
      <ProjectsSection data={data.projects} />
      <ExperienceSection data={data.experience} />
      <EducationSection data={data.education} />
      <ContactSection />
      <Footer data={data.personal} />
      <Toaster />
    </div>
  );
};

export default Portfolio;
