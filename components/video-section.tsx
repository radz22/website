"use client";
import { Play } from "lucide-react";
import { useState } from "react";

const videoTypes = {
  ads: { title: "Advertisement", preview: "/api/placeholder/600/300" },
  podcasts: { title: "Podcast", preview: "/api/placeholder/600/300" },
  clips: { title: "Short Clips", preview: "/api/placeholder/600/300" },
  youtube: { title: "YouTube Videos", preview: "/api/placeholder/600/300" },
  explainers: {
    title: "Explainer Videos",
    preview: "/api/placeholder/600/300",
  },
};
const VideoSection = () => {
  const [activeVideoType, setActiveVideoType] =
    useState<keyof typeof videoTypes>("ads");
  return (
    <section className="pt-24  px-3">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-melodrama">
            To make videos like these:
          </h2>
        </div>

        <div className="glassmorphic p-8 rounded-3xl fade-up relative">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {(
              Object.entries(videoTypes) as [
                keyof typeof videoTypes,
                (typeof videoTypes)[keyof typeof videoTypes]
              ][]
            ).map(([key, type]) => (
              <button
                key={key}
                onClick={() => setActiveVideoType(key)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeVideoType === key
                    ? "bg-[var(--highlight-hsl)] text-black"
                    : "glassmorphic text-white hover:bg-white/20"
                }`}
              >
                {type.title}
              </button>
            ))}
          </div>

          {/* Video Preview */}
          <div className="relative w-full aspect-video bg-muted rounded-2xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center flex-col gap-3">
                <div className="w-16 h-16 bg-primary/90 hover:bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-primary">
                  <Play className="w-8 h-8 text-primary-foreground ml-1" />
                </div>
                <p className="text-white/80">
                  {videoTypes[activeVideoType].title} Sample
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
