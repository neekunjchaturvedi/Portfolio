import { useState, useEffect } from "react";
import {
  Home,
  User,
  Wrench,
  FolderKanban,
  BriefcaseBusiness,
  GraduationCap,
  Mail,
  Moon,
  Sun,
} from "lucide-react";
import { mockData } from "../mock";

import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ProjectsSection from "./sections/ProjectsSection";
import ExperienceSection from "./sections/ExperienceSection";
import EducationSection from "./sections/EducationSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./sections/Footer";
import { Toaster } from "./ui/toaster";
import { Separator } from "./ui/separator";
import { SkillsSection } from "./sections/SkillsSection";

const Portfolio = () => {
  const [data] = useState(mockData);
  const [activeSection, setActiveSection] = useState("hero");

  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [showThemeMessage, setShowThemeMessage] = useState(false);

  const navigationItems = [
    { id: "hero", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "skills", label: "Skills", icon: Wrench },
    { id: "projects", label: "Projects", icon: FolderKanban },
    { id: "experience", label: "Work", icon: BriefcaseBusiness },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "contact", label: "Contact", icon: Mail },
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

  // Theme handling – default to dark
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.body.classList.add("bg-slate-950");
      document.body.classList.remove("bg-slate-50");
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("bg-slate-950");
      document.body.classList.add("bg-slate-50");
    }
  }, [theme]);

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleThemeToggle = () => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      if (next === "light") {
        setShowThemeMessage(true);
        setTimeout(() => {
          setShowThemeMessage(false);
        }, 2000);
      }
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 pb-24">
      {/* Sections */}
      <HeroSection data={data.personal} />
      <AboutSection data={data.personal} />
      <SkillsSection />
      <ProjectsSection data={data.projects} />
      <ExperienceSection data={data.experience} />
      <Separator className="bg-gray-800 w-full h-0.5" />
      <EducationSection data={data.education} />
      <ContactSection />
      <Footer data={data.personal} />
      <Toaster />

      {/* Bottom Navigation */}
      <nav className="fixed bottom-10 left-0 right-0 z-50 backdrop-blur-md">
        <div className="max-w-3xl mx-auto px-4 py-2 flex items-center justify-between gap-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="flex-1 flex justify-center"
              >
                <div
                  className={`flex items-center justify-center gap-2 px-3 py-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-gray-900 text-white-400 max-w-[160px]"
                      : "text-gray-400 hover:text-gray-100 hover:bg-gray-800/60 max-w-[60px]"
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 transition-transform ${
                      isActive ? "scale-110" : "scale-100"
                    }`}
                  />
                  {isActive && (
                    <span className="text-xs font-medium truncate">
                      {item.label}
                    </span>
                  )}
                </div>
              </button>
            );
          })}

          {/* Theme Toggle */}
          <div className="relative flex items-center justify-center ml-1">
            {showThemeMessage && (
              <div className="absolute -top-9 left-1/2 -translate-x-1/2 bg-gray-900 text-[10px] text-gray-100 px-3 py-1 rounded-full shadow-lg border border-gray-700 whitespace-nowrap">
                Sorry i hate light mode :)
              </div>
            )}
            <button
              onClick={handleThemeToggle}
              className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-700 bg-gray-900/80 hover:bg-gray-800 transition-all"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Moon className="w-5 h-5 text-gray-300" />
              ) : (
                <Sun className="w-5 h-5 text-yellow-400" />
              )}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Portfolio;
