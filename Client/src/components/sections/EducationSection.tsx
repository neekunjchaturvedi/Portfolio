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
    <section id="education" className="py-24 px-4 px-0 bg-black text-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-lg font-mono text-gray-500 mb-12 tracking-wider uppercase opacity-80">
          // Academic Background
        </h2>

        <div className="space-y-12">
          {data.map((edu) => (
            <div
              key={edu.id}
              className="group grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-8 items-start border-l border-gray-800 pl-6 md:pl-0 md:border-l-0"
            >
              <div className="hidden md:block text-sm font-mono text-gray-500 pt-1">
                {edu.duration}
              </div>

              <div>
                <div className="md:hidden text-xs font-mono text-gray-500 mb-2">
                  {edu.duration}
                </div>
                <h3 className="text-xl font-semibold text-gray-200 group-hover:text-blue-400 transition-colors duration-300">
                  {edu.degree}
                </h3>
                <div className="text-gray-500 mb-2">{edu.school}</div>
                <div className="text-sm text-gray-600">
                  <span className="text-gray-500">Focus: </span>
                  {edu.specialization}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
