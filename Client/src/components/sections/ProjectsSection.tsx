import { Github, ExternalLink } from "lucide-react";

interface Project {
  id: string | number;
  title: string;
  description: string;
  status: string;
  timeline: string;
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
}

interface ProjectsSectionProps {
  data: Project[];
}

const ProjectsSection = ({ data }: ProjectsSectionProps) => {
  const handleGithubClick = (url: string) => {
    window.open(url, "_blank");
  };

  const handleDemoClick = (url: string) => {
    window.open(url, "_blank");
  };

  const getStatusColor = (status: string) => {
    const statusColors: { [key: string]: string } = {
      Completed: "bg-emerald-100 text-emerald-700 border-emerald-200",
      "In Progress": "bg-blue-100 text-blue-700 border-blue-200",
      Deployed: "bg-green-100 text-green-700 border-green-200",
      Beta: "bg-orange-100 text-orange-700 border-orange-200",
      Live: "bg-purple-100 text-purple-700 border-purple-200",
    };
    return statusColors[status] || "bg-gray-100 text-gray-700 border-gray-200";
  };

  return (
    <section
      id="projects"
      className="py-16 px-4 md:px-0 bg-black text-white border-b border-gray-900"
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-lg font-mono text-gray-500 mb-12 tracking-wider uppercase opacity-80">
          // Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col justify-between border border-gray-800 bg-gray-950/30 p-8 hover:border-gray-600 transition-all duration-300"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-2">
                    {/* Status Dot */}
                    <span
                      className={`flex h-2 w-2 rounded-full ${
                        project.status === "Live"
                          ? "bg-green-500"
                          : project.status === "In Progress"
                          ? "bg-blue-500"
                          : "bg-gray-500"
                      }`}
                    />
                    <span className="text-xs font-mono text-gray-500 uppercase">
                      {project.status}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-gray-600">
                    {project.timeline}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-100 mb-3 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-6 text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono text-gray-500 px-2 py-1 bg-gray-900 rounded border border-gray-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-gray-800/50">
                <button
                  onClick={() => handleGithubClick(project.githubUrl)}
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <Github size={16} />
                  <span>Code</span>
                </button>
                {project.demoUrl && (
                  <button
                    onClick={() => handleDemoClick(project.demoUrl)}
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={() =>
              window.open(
                "https://github.com/neekunjchaturvedi?tab=repositories",
                "_blank"
              )
            }
            className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors border-b border-transparent hover:border-white pb-1"
          >
            <span className="font-mono">view_all_repositories</span>
            {/* <ExternalLink size={14} /> */}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
