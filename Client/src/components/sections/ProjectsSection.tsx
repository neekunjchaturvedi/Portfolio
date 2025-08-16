import { Card, CardContent, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Github, ExternalLink, Calendar, Star, Code2 } from "lucide-react";

interface Project {
  id: string | number;
  image: string;
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
      className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-br from-emerald-100/30 to-cyan-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-12 h-0.5 bg-gradient-to-r from-transparent to-slate-300"></span>
            <span className="text-sm font-medium text-slate-500 tracking-widest uppercase">
              Portfolio
            </span>
            <span className="w-12 h-0.5 bg-gradient-to-l from-transparent to-slate-300"></span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Here are some of my recent projects that showcase my skills and
            passion for building
            <span className="font-semibold text-slate-700">
              {" "}
              modern web applications
            </span>{" "}
            with cutting-edge technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {data.map((project, index) => (
            <Card
              key={project.id}
              className={`group relative border-0 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-300/50 transition-all duration-500 transform hover:-translate-y-2 overflow-hidden bg-white/80 backdrop-blur-sm ${
                index % 2 === 0 ? "lg:translate-y-8" : ""
              }`}
            >
              {/* Gradient border effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>

              {/* Project Image */}
              <div className="relative overflow-hidden">
                {/* <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                /> */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                {/* Floating badges */}

                {/* Overlay content that appears on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-10">
                  <div className="flex gap-3">
                    <Button
                      onClick={() => handleGithubClick(project.githubUrl)}
                      size="sm"
                      className="bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 transition-all duration-300"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      onClick={() => handleDemoClick(project.demoUrl)}
                      size="sm"
                      className="bg-blue-600/90 backdrop-blur-md border border-blue-500/50 text-white hover:bg-blue-700/90 transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="relative z-10">
                <CardHeader className="pb-3">
                  <h3 className="text-2xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-300 flex items-center gap-2">
                    <div className="absolute right-4 z-10">
                      <Badge
                        className={`${getStatusColor(
                          project.status
                        )} border font-medium shadow-lg backdrop-blur-sm`}
                      >
                        <Star className="w-3 h-3 mr-1" />
                        {project.status}
                      </Badge>
                    </div>

                    <Code2 className="w-5 h-5 text-slate-500 group-hover:text-blue-500 transition-colors duration-300" />
                    {project.title}
                  </h3>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-slate-600 leading-relaxed text-base">
                    {project.description}
                  </p>

                  {/* Technology Stack */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="text-xs px-3 py-1.5 bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300 transition-all duration-200 font-medium"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    <Button
                      onClick={() => handleGithubClick(project.githubUrl)}
                      variant="outline"
                      size="sm"
                      className="flex-1 border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-all duration-300 font-medium"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Source Code
                    </Button>
                    {project.demoUrl && (
                      <Button
                        onClick={() => handleDemoClick(project.demoUrl)}
                        size="sm"
                        className="flex-1 bg-slate-800 hover:bg-slate-700 text-white transition-all duration-300 transform hover:scale-105 font-medium shadow-lg"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    )}
                  </div>
                  <div className=" left-4 z-10">
                    <Badge className="bg-white/95 text-slate-700 border-slate-200 shadow-lg backdrop-blur-sm font-medium">
                      <Calendar className="w-3 h-3 mr-1" />
                      {project.timeline}
                    </Badge>
                  </div>
                </CardContent>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Card>
          ))}
        </div>
        <Button
          onClick={() =>
            handleGithubClick("https://github.com/neekunjchaturvedi")
          }
          className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 text-base font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center mx-auto"
        >
          <Github className="w-5 h-5 mr-3" />
          View All Projects on GitHub
        </Button>
      </div>
    </section>
  );
};

export default ProjectsSection;
