import { ArrowRight } from "lucide-react";
import React from "react";

const EditorFast = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            We <span className="text-[var(--green)]">place</span> great editors
            FAST
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              badge: "BETTER EDITING",
              title: "Top 1%",
              points: [
                "We find you the best editor for your video style",
                "We have 5+ years of experience with overseas talent",
              ],
              cta: "Start Hiring",
            },
            {
              badge: "LOW COST",
              title: "Save over 70%",
              points: [
                "Use EditConnect instead of entry-level US talent",
                "Great editors start at $15/hour",
              ],
              cta: "Start Hiring",
            },
            {
              badge: "FAST HIRING",
              title: "Hire within days",
              points: [
                "We find and place your editor within 2 weeks",
                "We do all the sourcing, screening, and testing for you",
              ],
              cta: "Start Hiring",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="glassmorphic p-8 rounded-2xl fade-up group hover:bg-white/15 transition-all duration-500"
            >
              <div className="inline-block px-3 py-1 bg-[var(--green)]/20 text-[var(--green)] text-sm font-semibold rounded-full mb-6">
                {card.badge}
              </div>
              <h3 className="text-3xl font-bold mb-6">{card.title}</h3>
              <ul className="space-y-4 mb-8">
                {card.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-[var(--green)] mt-0.5 flex-shrink-0" />
                    <span className="text-white/80">{point}</span>
                  </li>
                ))}
              </ul>
              <button className="gradient-border px-6 py-3  font-semibold hover:scale-105 transition-all duration-300 rounded-xl">
                <span className="relative z-10">{card.cta}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EditorFast;
