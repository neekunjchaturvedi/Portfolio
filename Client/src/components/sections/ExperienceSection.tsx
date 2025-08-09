import { Card, CardContent } from "../ui/card";
import { Briefcase } from "lucide-react";

interface ExperienceItem {
  id: string | number;
  role: string;
  duration: string;
  company: string;
  description: string;
}

interface ExperienceSectionProps {
  data: ExperienceItem[];
}

const ExperienceSection = ({ data }: ExperienceSectionProps) => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-slate-800 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-300 hidden md:block"></div>

          <div className="space-y-8">
            {data.map((item) => (
              <div key={item.id} className="relative group">
                {/* Timeline Dot */}
                <div className="absolute left-6 top-8 w-4 h-4 bg-slate-800 rounded-full border-4 border-white shadow-lg hidden md:block group-hover:bg-blue-600 transition-colors duration-200"></div>

                <Card className="md:ml-16 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-slate-100 rounded-lg group-hover:bg-slate-800 transition-colors duration-200">
                        <Briefcase className="h-6 w-6 text-slate-600 group-hover:text-white transition-colors duration-200" />
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                          <h3 className="text-xl font-bold text-slate-800">
                            {item.role}
                          </h3>
                          <span className="text-sm bg-slate-100 text-slate-600 px-3 py-1 rounded-full">
                            {item.duration}
                          </span>
                        </div>
                        <p className="text-blue-600 font-medium mb-3">
                          {item.company}
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
