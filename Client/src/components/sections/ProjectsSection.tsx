import { Card, CardContent, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Github, ExternalLink, Calendar } from "lucide-react";

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

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-slate-800 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            passion for web development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {data.map((project, index) => (
            <Card
              key={project.id}
              className={`group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden ${
                index % 2 === 0 ? "md:transform md:translate-y-4" : ""
              }`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <Badge
                    variant="secondary"
                    className="bg-green-100 text-green-800 border-green-200"
                  >
                    {project.status}
                  </Badge>
                </div>

                {/* Timeline Badge */}
                <div className="absolute top-4 left-4">
                  <Badge
                    variant="outline"
                    className="bg-white/90 text-slate-700 border-slate-300"
                  >
                    <Calendar className="w-3 h-3 mr-1" />
                    {project.timeline}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-3">
                <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-200">
                  {project.title}
                </h3>
              </CardHeader>

              <CardContent>
                <p className="text-slate-600 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technology Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-700 mb-2">
                    Tech Stack:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs px-2 py-1 bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 transition-colors duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    onClick={() => handleGithubClick(project.githubUrl)}
                    variant="outline"
                    size="sm"
                    className="flex-1 border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-all duration-200"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    onClick={() => handleDemoClick(project.demoUrl)}
                    size="sm"
                    className="flex-1 bg-slate-800 hover:bg-slate-700 text-white transition-all duration-200 transform hover:scale-105"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Projects CTA */}
        <div className="text-center mt-12">
          <Button
            onClick={() => handleGithubClick("https://github.com/neekunj")}
            variant="outline"
            className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105"
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
