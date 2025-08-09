import React from "react";
import { Card, CardContent } from "../ui/card";

interface AboutSectionProps {
  data: {
    about: string;
  };
}

const AboutSection: React.FC<AboutSectionProps> = ({ data }) => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-slate-800 mx-auto"></div>
        </div>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-8 md:p-12">
            <div className="text-center">
              <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
                {data.about}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💻</span>
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">
                  Clean Code
                </h3>
                <p className="text-slate-600 text-sm">
                  Writing maintainable and efficient code
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">
                  UI/UX Focus
                </h3>
                <p className="text-slate-600 text-sm">
                  Creating beautiful user experiences
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">
                  Performance
                </h3>
                <p className="text-slate-600 text-sm">
                  Optimizing for speed and efficiency
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
