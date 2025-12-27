import { useState, useEffect } from "react";
import {
  Home,
  User,
  FolderKanban,
  BriefcaseBusiness,
  Mail,
  Moon,
  Sun,
  Book,
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
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./sections/Footer";
import { useNavigate } from "react-router-dom";
import AboutSection from "./sections/AboutSection";

const Portfolio = () => {
  const [data] = useState(mockData);
  const [activeSection, setActiveSection] = useState("hero");

  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [showThemeMessage, setShowThemeMessage] = useState(false);

  const navigationItems = [
    { id: "hero", label: "Home", icon: Home },
    // { id: "about", label: "About", icon: User }, // Commented out in your original code
    { id: "experience", label: "Work", icon: BriefcaseBusiness },
    { id: "projects", label: "Projects", icon: FolderKanban },
    { id: "contact", label: "Contact", icon: Mail },
    { id: "blogs", label: "Blogs", icon: Book, url: "/blogs" },
  ];

  const nav = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "projects", "experience", "contact"];
      // Added offset to trigger active state slightly before the element hits the top
      const scrollPosition = window.scrollY + 300;

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
    if (sectionId === "blogs") {
      nav("/blogs");
      return;
    }
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
    <div className="min-h-screen bg-slate-950 text-slate-50 relative selection:bg-cyan-500/30">
      {/* Sections */}
      <HeroSection data={data.personal} />
      <AboutSection />
      {/* <SkillsSection /> */}
      <ExperienceSection data={data.experience} />
      <ProjectsSection data={data.projects} />

      <Separator className="bg-slate-800/50 w-full h-px" />

      <ContactSection />
      <Footer />

      <Toaster />

      {/* ===== BOTTOM DOCK NAVIGATION ===== */}
      <div className="fixed bottom-6 inset-x-0 z-50 flex justify-center pointer-events-none">
        <TooltipProvider delayDuration={0}>
          <Dock
            // Redesigned Container: Glassmorphism + Pill Shape + Shadow
            className="pointer-events-auto bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-full px-4 py-3 gap-3 shadow-2xl transform transition-all hover:border-white/20 hover:shadow-cyan-500/10 hover:bg-slate-900/80"
          >
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;

              return (
                <DockIcon key={item.id} className="aspect-square">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        onClick={() => handleNavClick(item.id)}
                        className={cn(
                          "relative size-10 rounded-full flex items-center justify-center transition-all duration-300",
                          // Base State
                          "text-white hover:text-white",
                          // Active State Styling
                          isActive ? "bg-white/5 text-gray-300" : "hover:bg-white/5"
                        )}
                      >
                        <Icon
                          className={cn(
                            "size-5",
                            isActive && "fill-current/20"
                          )}
                        />

                        {/* Tiny Active Dot Indicator */}
                        {/* {isActive && (
                          <span className="absolute -bottom-1 w-1 h-1 bg-cyan-400 rounded-full shadow-[0_0_5px_#22d3ee]" />
                        )} */}
                      </button>
                    </TooltipTrigger>
                    <TooltipContent
                      sideOffset={10}
                      className="bg-slate-900 border-slate-800 text-xs text-white  font-medium"
                    >
                      <p>{item.label}</p>
                    </TooltipContent>
                  </Tooltip>
                </DockIcon>
              );
            })}

            {/* Subtle Divider */}
            <div className="h-8 w-px bg-white/10 mx-1 self-center" />

            {/* Theme Toggle */}
            <DockIcon className="aspect-square">
              {showThemeMessage && (
                <div className="absolute -top-14 left-1/2 -translate-x-1/2 animate-in fade-in slide-in-from-bottom-2">
                  <div className="bg-red-500/10 text-red-400 text-[10px] px-3 py-1.5 rounded-full border border-red-500/20 shadow-lg whitespace-nowrap backdrop-blur-md">
                    Sorry I hate light mode :)
                  </div>
                </div>
              )}
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    onClick={handleThemeToggle}
                    className={cn(
                      "size-10 rounded-full flex items-center justify-center transition-all duration-300",
                      theme === "dark"
                        ? "text-slate-400 hover:text-yellow-300 hover:bg-yellow-400/10"
                        : "text-yellow-400 bg-yellow-400/10"
                    )}
                  >
                    {theme === "dark" ? (
                      <Moon className="size-5" />
                    ) : (
                      <Sun className="size-5 fill-current" />
                    )}
                  </button>
                </TooltipTrigger>
                <TooltipContent
                  sideOffset={10}
                  className="bg-slate-900 border-slate-800 text-xs text-white"
                >
                  <p>Toggle Theme</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          </Dock>
        </TooltipProvider>
      </div>
    </div>
  );
};

export default Portfolio;
