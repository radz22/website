import { ArrowRight } from "lucide-react";
import React from "react";

const EditorFast = () => {
  return (
    <section className="py-24  px-3">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-akrobat">
            We <span className="text-[var(--highlight-hsl)]">place</span> great
            editors FAST
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 fade-up">
          {[
            {
              badge: "BETTER EDITING",
              title: "Top 1%",
              points: [
                "We find you the best editor for your video style",
                "We have 5+ years of experience with overseas talent",
              ],
              cta: "Get a Quote",
            },
            {
              badge: "LOW COST",
              title: "Save over 70%",
              points: [
                "Use Digital Marketing instead of entry-level US talent",
                "Great editors start at $15/hour",
              ],
              cta: "Get a Quote",
            },
            {
              badge: "FAST HIRING",
              title: "Hire within days",
              points: [
                "We find and place your editor within 2 weeks",
                "We do all the sourcing, screening, and testing for you",
              ],
              cta: "Get a Quote",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="glassmorphic p-8 rounded-2xl fade-up group hover:bg-white/15 transition-all duration-500"
            >
              <div className="inline-block px-3 py-1 bg-[var(--highlight-hsl)]/20 text-[var(--highlight-hsl)] text-sm font-semibold rounded-full mb-6">
                {card.badge}
              </div>
              <h3 className="text-3xl font-bold mb-6 font-akrobat">
                {card.title}
              </h3>
              <ul className="space-y-4 mb-8">
                {card.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-[var(--highlight-hsl)] mt-0.5 flex-shrink-0" />
                    <span className="text-white/80">{point}</span>
                  </li>
                ))}
              </ul>
              <button className="bg-primary px-6 py-3  font-semibold hover:scale-105 transition-all duration-300 rounded-xl">
                <span className="relative z-10 text-black">{card.cta}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EditorFast;
