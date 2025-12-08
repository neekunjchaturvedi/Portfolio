import { useState, useEffect } from "react";
import {
  Home,
  User,
  FolderKanban,
  BriefcaseBusiness,
  Mail,
  Moon,
  Sun,
} from "lucide-react";

import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { Dock, DockIcon } from "@/components/ui/dock";
import { Separator } from "@/components/ui/separator";

import { cn } from "@/lib/utils";
import { Toaster } from "./ui/toaster";

import { mockData } from "../mock";

import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ProjectsSection from "./sections/ProjectsSection";
import ExperienceSection from "./sections/ExperienceSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./sections/Footer";
import { SkillsSection } from "./sections/SkillsSection";

const Portfolio = () => {
  const [data] = useState(mockData);
  const [activeSection, setActiveSection] = useState("hero");

  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [showThemeMessage, setShowThemeMessage] = useState(false);

  const navigationItems = [
    { id: "hero", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "projects", label: "Projects", icon: FolderKanban },
    { id: "experience", label: "Work", icon: BriefcaseBusiness },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "projects", "experience", "contact"];
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

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.body.classList.add("bg-slate-950");
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
        setTimeout(() => setShowThemeMessage(false), 2000);
      }
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 relative">
      {/* Sections */}
      <HeroSection data={data.personal} />
      <AboutSection data={data.personal} />
      <SkillsSection />
      <ProjectsSection data={data.projects} />
      <ExperienceSection data={data.experience} />

      <Separator className="bg-gray-800 w-full h-0.5" />

      <ContactSection />
      <Footer data={data.personal} />

      <Toaster />

      {/* ===== BOTTOM DOCK NAVIGATION ===== */}
      <TooltipProvider delayDuration={20}>
        <Dock className="fixed bottom-8 left-0 right-0 z-50 border-none gap-4">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <DockIcon key={item.id}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className={cn(
                        "size-12 rounded-full flex items-center justify-center border border-gray-800 transition",
                        isActive
                          ? "bg-gray-900 text-white scale-110"
                          : "bg-gray-800/40 text-gray-400 hover:text-gray-100"
                      )}
                    >
                      <Icon className="size-5" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-xs">{item.label}</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            );
          })}

          <Separator orientation="vertical" className="h-full mx-2" />

          {/* Theme Toggle */}
          <DockIcon>
            {showThemeMessage && (
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-gray-900 text-[10px] text-gray-100 px-3 py-1 rounded-full shadow-lg border border-gray-700 whitespace-nowrap">
                Sorry I hate light mode :)
              </div>
            )}
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={handleThemeToggle}
                  className="size-12 rounded-full flex items-center justify-center border border-gray-800 bg-gray-900/80 hover:bg-gray-800"
                >
                  {theme === "dark" ? (
                    <Moon className="w-5 h-5 text-gray-300" />
                  ) : (
                    <Sun className="w-5 h-5 text-yellow-400" />
                  )}
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Theme</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        </Dock>
      </TooltipProvider>
    </div>
  );
};

export default Portfolio;
