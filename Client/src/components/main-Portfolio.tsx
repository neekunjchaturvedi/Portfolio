import React, { useState } from "react";
import {
  Github,
  ChevronDown,
  ChevronRight,
  Book,
  ExternalLink,
  ChevronUp,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
// Assuming this matches your file structure
import ConnectWidgets from "./sections/Connect";
import { Typewriter } from "./sections/typewriter";

const PROJECTS = [
  {
    id: 1,
    title: "Renard",
    description: "Dev productivity platform centralizing LLM interactions.",
    githubUrl: "",
    demoUrl: "https://renard.live",
    status: "Building",
    tech: "Microservices",
  },
  {
    id: 2,
    title: "SpectraQ",
    description: "HFT crypto trading with off-chain state channels.",
    githubUrl: "",
    demoUrl: "https://spectraq.org",
    status: "Building",
    tech: "HFT/Redis",
  },
  {
    id: 3,
    title: "Abuse CLI",
    description:
      "Terminal tool that roasts you when you error. 250+ downloads.",
    githubUrl: "https://github.com/neekunjchaturvedi/Abuse",
    demoUrl: "https://www.npmjs.com/package/abuse-plus",
    status: "Completed",
    tech: "NodeJS",
  },
  {
    id: 4,
    title: "SenseiX",
    description:
      "Gamified AI learning engine with flashcards & personalized content.",
    githubUrl: "https://github.com/neekunjchaturvedi/senseiX",
    demoUrl: "",
    status: "Completed",
    tech: "GenAI",
  },
  {
    id: 5,
    title: "D-Hosting",
    description: "Decentralized hosting platform on IPFS & Ethereum.",
    githubUrl: "https://github.com/neekunjchaturvedi/D-Hosting",
    demoUrl: "",
    status: "Completed",
    tech: "Web3",
  },
  {
    id: 6,
    title: "TopCode",
    description: "Multi-language code editor and compiler.",
    githubUrl: "https://github.com/neekunjchaturvedi/Topcode",
    demoUrl: "https://top-code.netlify.app/",
    status: "Completed",
    tech: "React",
  },
];

const WORK_EXPERIENCE = [
  {
    id: 1,
    role: "Full-Stack Software Engineer",
    company: "Outceedo",
    type: "Remote",
    duration: "July 2025 - Present",
    summary:
      "Architected microservices & AWS infra. Led frontend dev (React/Redux) and built real-time notification systems.",
  },
  {
    id: 2,
    role: "Frontend & Integration Engineer",
    company: "Moovicart",
    type: "Remote",
    duration: "Summer Intern (2025)",
    summary:
      "Redesigned frontend architecture for modularity. Integrated secure payments and WebRTC video communication.",
  },
];

const Portfolio = () => {
  const [isArchiveOpen, setIsArchiveOpen] = useState(false);
  const [expandedWorkId, setExpandedWorkId] = useState(null);
  const nav = useNavigate();

  const toggleWork = (id: any) => {
    setExpandedWorkId(expandedWorkId === id ? null : id);
  };

  const ongoingProjects = PROJECTS.filter((p) => p.status === "Building");
  const archivedProjects = PROJECTS.filter((p) => p.status === "Completed");

  return (
    <div className="min-h-screen bg-[#050505] text-[#e5e5e5] font-mono selection:bg-white selection:text-black flex flex-col justify-between relative overflow-x-hidden">
      {/* BACKGROUND GRID */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-grow w-full max-w-3xl mx-auto px-6 pt-16 md:pt-20 pb-10 z-10 flex flex-col justify-center space-y-12">
        {/* 1. HEADER & BIO */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 opacity-80 animate-in slide-in-from-top-4 duration-500">
            <span className="font-mono text-xs md:text-sm text-blue-400 tracking-widest uppercase bg-blue-900/10 px-2 py-1 rounded border border-blue-900/30 min-w-[140px]">
              //{" "}
              <Typewriter
                phrases={[
                  "Building",
                  "Scaling",
                  "Caching",
                  "Containerizing",
                  "On production",
                  "Shipping",
                ]}
              />
            </span>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              Hey, I'm Neekunj Chaturvedi
            </h1>
            <h2 className="text-lg md:text-xl text-neutral-400 font-medium">
              I Ship systems that don't fail.
            </h2>
          </div>

          <div className="space-y-4 text-sm md:text-base leading-relaxed text-neutral-400 max-w-2xl">
            <p>
              I just hang around building software. Exploring the world of code,
              recently getting messy with{" "}
              <span className="text-white decoration-wavy underline decoration-neutral-700 underline-offset-4">
                Web3
              </span>
              {/* and{" "}
              <span className="text-white decoration-wavy underline decoration-neutral-700 underline-offset-4">
                Solana
              </span> */}
              . Mostly failing, sometimes shipping.
            </p>

            <p className="border-l-2 border-white/20 pl-4 py-1 italic text-neutral-300 bg-neutral-900/30 rounded-r-lg">
              Co-Founder @{" "}
              <span className="text-white font-bold">Renard.live</span>. I quit
              DSA to build things people actually use. Now scaling Renard
              full-time—no more inverting binary trees, just shipping product.
            </p>

            <p>
              I specialize in the heavy lifting. If it involves{" "}
              <span className="text-neutral-200 font-semibold">
                Microservices
              </span>
              , <span className="text-neutral-200 font-semibold">gRPC</span>, or
              untangling{" "}
              <span className="text-neutral-200 font-semibold">
                Message Queues
              </span>
              , I'm in. From{" "}
              <span className="text-neutral-200 font-semibold">
                System Design
              </span>{" "}
              to <span className="text-neutral-200 font-semibold">DevOps</span>{" "}
              deployment, I handle the chaos so the frontend can shine.
            </p>
          </div>
        </div>

        {/* 2. WORK EXPERIENCE (Expandable) */}
        <div>
          <h2 className="text-lg font-bold mb-6 mt-6 flex items-center gap-2 text-white">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            Work Experience
          </h2>
          <div className="space-y-6 border-l border-neutral-800 ml-1 pl-8">
            {WORK_EXPERIENCE.map((job) => (
              <div key={job.id} className="relative group">
                {/* <div className="absolute -left-[37px] top-1.5 w-4 h-4 bg-[#050505] border-2 border-neutral-700 rounded-full group-hover:border-blue-500 transition-colors"></div> */}

                <div
                  className="cursor-pointer"
                  onClick={() => toggleWork(job.id)}
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                    <h3 className="font-bold text-base text-neutral-200 flex items-center gap-2 group-hover:text-blue-400 transition-colors">
                      {job.company}
                      {expandedWorkId === job.id ? (
                        <ChevronUp size={14} />
                      ) : (
                        <ChevronDown size={14} className="text-neutral-600" />
                      )}
                    </h3>
                    <span className="text-xs font-mono text-neutral-500">
                      {job.duration} • {job.type}
                    </span>
                  </div>
                  <div className="text-xs text-neutral-400 mt-1 font-semibold">
                    {job.role}
                  </div>
                </div>

                {/* Collapsible Description */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    expandedWorkId === job.id
                      ? "max-h-40 opacity-100 mt-3"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-xs text-neutral-400 bg-neutral-900/30 p-3 rounded border-l-2 border-blue-500/50 leading-relaxed">
                    {job.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. PROJECTS */}
        <div>
          <h2 className="text-lg font-bold mb-4 mt-6 flex items-center gap-2 text-white">
            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>{" "}
            Projects
          </h2>

          <div className="space-y-3">
            {/* Archive Dropdown (Completed Projects) */}
            <div className="text-sm">
              <button
                onClick={() => setIsArchiveOpen(!isArchiveOpen)}
                className="flex items-center gap-2 text-neutral-500 hover:text-white transition-colors group mb-3"
              >
                {isArchiveOpen ? (
                  <ChevronDown
                    size={14}
                    className="group-hover:text-blue-400"
                  />
                ) : (
                  <ChevronRight
                    size={14}
                    className="group-hover:text-blue-400"
                  />
                )}
                <span className="border-b border-dashed border-neutral-700 group-hover:border-neutral-500">
                  View Archive ({archivedProjects.length})
                </span>
              </button>

              {isArchiveOpen && (
                <div className="pl-6 space-y-3 text-xs text-neutral-500 border-l border-neutral-800 ml-1.5 animate-in fade-in slide-in-from-top-2 duration-200">
                  {archivedProjects.map((project) => (
                    <div
                      key={project.id}
                      className="flex flex-col sm:flex-row sm:items-center justify-between group hover:bg-neutral-900/30 p-2 rounded transition-colors gap-2"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span
                            className={`font-medium text-sm text-neutral-100 ${
                              project.demoUrl
                                ? "hover:text-blue-400 cursor-pointer hover:underline underline-offset-4 decoration-dashed"
                                : ""
                            }`}
                            onClick={() =>
                              project.demoUrl &&
                              window.open(project.demoUrl, "_blank")
                            }
                          >
                            {project.title}
                          </span>
                          {project.demoUrl && (
                            <ExternalLink
                              size={10}
                              className="text-neutral-600"
                            />
                          )}
                        </div>
                        <p className="text-md text-neutral-400 mt-0.5 line-clamp-1">
                          {project.description}
                        </p>
                      </div>

                      <div className="flex items-center gap-3">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-600 hover:text-white transition-colors"
                            title="View Source"
                          >
                            <Github size={18} />
                          </a>
                        )}
                        <span className="text-[10px] bg-neutral-900 text-neutral-500 px-1.5 py-0.5 rounded border border-neutral-800 whitespace-nowrap">
                          {project.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Ongoing Projects Grid (Active) */}
            <div className="grid grid-cols-1 gap-3 pt-2">
              {ongoingProjects.map((project) => (
                <div
                  key={project.id}
                  className="group flex items-center justify-between p-4 border border-neutral-900 rounded-lg hover:border-neutral-700 bg-neutral-900/20 transition-all"
                >
                  <div>
                    <h3
                      className={`text-md font-bold text-neutral-200 transition-colors flex items-center gap-2 ${
                        project.demoUrl
                          ? "hover:text-blue-400 cursor-pointer"
                          : ""
                      }`}
                      onClick={() =>
                        project.demoUrl &&
                        window.open(project.demoUrl, "_blank")
                      }
                    >
                      {project.title}
                      {project.demoUrl && (
                        <ExternalLink
                          size={12}
                          className="opacity-50 group-hover:opacity-100"
                        />
                      )}
                    </h3>
                    <p className="text-xs text-neutral-400 mt-1 max-w-sm">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <span className="text-[10px] font-medium text-green-500 bg-green-500/10 px-2 py-0.5 rounded border border-green-500/20">
                      {project.status}
                    </span>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-neutral-600 hover:text-white transition-colors"
                      >
                        <Github size={18} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4. WRITING & CONNECT */}
        <div className="flex flex-col gap-6 pt-4 border-t border-neutral-900">
          <div className="flex items-center justify-between">
            <h1 className="text-base font-semibold text-neutral-300">
              I also write stuff sometimes.
            </h1>
            <button
              className="text-xs flex items-center gap-2 text-neutral-500 hover:text-white bg-neutral-900 hover:bg-neutral-800 px-3 py-2 rounded-full transition-all"
              onClick={() => nav("/blogs")}
            >
              <Book size={14} /> Read Journal
            </button>
          </div>

          <ConnectWidgets />
        </div>
      </main>
    </div>
  );
};

export default Portfolio;
