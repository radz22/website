import { ArrowRight } from "lucide-react";
import React from "react";

const WorksSection = () => {
  return (
    <section id="how-it-works" className="py-24  px-3">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-akrobat">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-xl text-white/70">
            Get matched with your perfect editor in 3 simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 fade-up">
          {[
            {
              step: "1",
              title: "Submit Your Project",
              description:
                "Tell us about your video editing needs and upload sample footage for our editors to work with.",
            },
            {
              step: "2",
              title: "Review Samples",
              description:
                "Get custom sample edits from 3-5 vetted editors. Choose your favorite based on style and quality.",
            },
            {
              step: "3",
              title: "Start Working",
              description:
                "Begin your ongoing partnership with your chosen editor. Scale up or down as needed.",
            },
          ].map((step, index) => (
            <div
              key={index}
              className=" fade-up group text-center glassmorphic p-8 rounded-2xl fade-up group hover:bg-white/15 transition-all duration-500 visible"
            >
              <div className="w-16 h-16 mx-auto mb-6 glassmorphic rounded-full flex items-center justify-center text-2xl font-bold text-[var(--highlight-hsl)] group-hover:scale-110 transition-transform duration-300">
                {step.step}
              </div>
              <h3 className="text-2xl font-bold mb-4 font-akrobat">
                {step.title}
              </h3>
              <p className="text-white/70">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 fade-up">
          <button className="bg-primary px-8 py-4 text-lg font-semibold rounded-xl hover:scale-105 transition-all duration-300 pulse-glow">
            <span className="relative z-10 text-black flex items-center gap-2">
              Get Started <ArrowRight className="w-5 h-5" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorksSection;
