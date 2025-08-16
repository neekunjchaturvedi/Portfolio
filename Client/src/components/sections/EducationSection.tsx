import { Card, CardContent } from "../ui/card";
import {
  GraduationCap,
  Calendar,
  School,
  Award,
  ChevronRight,
} from "lucide-react";

interface EducationItem {
  id: string | number;
  degree: string;
  duration: string;
  school: string;
  specialization: string;
}

interface EducationSectionProps {
  data: EducationItem[];
}

const EducationSection: React.FC<EducationSectionProps> = ({ data }) => {
  return (
    <section
      id="education"
      className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-br from-emerald-100/30 to-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-100/30 to-cyan-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-12 h-0.5 bg-gradient-to-r from-transparent to-slate-300"></span>
            <span className="text-sm font-medium text-slate-500 tracking-widest uppercase">
              Academic Journey
            </span>
            <span className="w-12 h-0.5 bg-gradient-to-l from-transparent to-slate-300"></span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            My educational foundation that shaped my passion for technology and
            continuous learning
          </p>
        </div>

        <div className="relative">
          {/* Animated Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-slate-300 via-slate-400 to-slate-300 hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-500 via-blue-500 to-purple-500 opacity-20 animate-pulse"></div>
          </div>

          <div className="space-y-12">
            {data.map((item, index) => (
              <div
                key={item.id}
                className="relative group"
                style={{
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                {/* Animated Timeline Dot */}
                <div className="absolute left-6 top-8 w-4 h-4 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-full border-4 border-white shadow-xl hidden md:block group-hover:scale-125 transition-all duration-300 z-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full animate-ping opacity-20"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-full"></div>
                </div>

                {/* Education Card */}
                <Card className="md:ml-16 border border-slate-200 bg-white/80 backdrop-blur-sm hover:bg-white hover:border-slate-300 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 transform hover:-translate-y-2 group overflow-hidden">
                  <CardContent className="p-8 relative z-10">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                      {/* Icon Section */}
                      <div className="flex-shrink-0">
                        <div className="relative">
                          <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-emerald-500/25 transition-all duration-300">
                            <GraduationCap className="h-8 w-8 text-white" />
                          </div>
                          {/* Glow effect */}
                          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10"></div>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="flex-1 min-w-0">
                        {/* Header */}
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-slate-800 mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                              {item.degree}
                            </h3>
                            <div className="flex items-center gap-2 text-slate-600 mb-3">
                              <School className="h-4 w-4 text-emerald-500" />
                              <span className="font-semibold text-emerald-600">
                                {item.school}
                              </span>
                            </div>
                          </div>

                          {/* Duration Badge */}
                          <div className="flex items-center gap-2 bg-slate-100 backdrop-blur-sm border border-slate-200 px-4 py-2 rounded-full">
                            <Calendar className="h-4 w-4 text-blue-500" />
                            <span className="text-sm font-medium text-slate-700 whitespace-nowrap">
                              {item.duration}
                            </span>
                          </div>
                        </div>

                        {/* Specialization */}
                        <div className="relative">
                          <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-slate-50 to-emerald-50 rounded-lg border border-slate-200">
                            <Award className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <h4 className="font-semibold text-slate-800 mb-1">
                                Specialization
                              </h4>
                              <p className="text-slate-600 text-sm leading-relaxed">
                                {item.specialization}
                              </p>
                            </div>
                          </div>

                          {/* Decorative arrow */}
                          <div className="absolute -left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-30 transition-opacity duration-300">
                            <ChevronRight className="h-5 w-5 text-emerald-500" />
                          </div>
                        </div>

                        {/* Additional info section (you can expand this later) */}
                        <div className="mt-6 flex flex-wrap gap-2">
                          {/* You can add achievements, GPA, honors, etc. here later */}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Connection line to next item */}
                {index < data.length - 1 && (
                  <div className="absolute left-8 -bottom-6 w-0.5 h-6 bg-gradient-to-b from-slate-400 to-transparent hidden md:block"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom stats or achievements */}
        {/* <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl px-8 py-4 shadow-lg">
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-800 mb-1">2022</div>
              <div className="text-xs text-slate-500 font-medium">
                Started Coding
              </div>
            </div>
            <div className="w-0.5 h-12 bg-slate-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-800 mb-1">3+</div>
              <div className="text-xs text-slate-500 font-medium">
                Years Learning
              </div>
            </div>
            <div className="w-0.5 h-12 bg-slate-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-800 mb-1">∞</div>
              <div className="text-xs text-slate-500 font-medium">
                Always Learning
              </div>
            </div>
          </div>
        </div> */}

        {/* Bottom decorative element */}
        {/* <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <div
              className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default EducationSection;
