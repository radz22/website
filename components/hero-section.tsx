"use client";
import { Play } from "lucide-react";
import { useState } from "react";
const HeroSection = () => {
  const [selectedPersona, setSelectedPersona] = useState<string | null>(null);
  const personas = [
    {
      id: "podcaster",
      title: "PODCASTER",
      avatar: "🎙️",
      color: "from-orange-500 to-red-500",
    },
    {
      id: "youtuber",
      title: "YOUTUBER",
      avatar: "📹",
      color: "from-red-500 to-pink-500",
    },
    {
      id: "tiktoker",
      title: "TIKTOKER",
      avatar: "🎵",
      color: "from-pink-500 to-purple-500",
    },
    {
      id: "agency",
      title: "AGENCY",
      avatar: "🏢",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "media",
      title: "MEDIA COMPANY",
      avatar: "📺",
      color: "from-green-500 to-emerald-500",
    },
    {
      id: "startup",
      title: "STARTUP",
      avatar: "🚀",
      color: "from-purple-500 to-indigo-500",
    },
  ];

  return (
    <section
      id="home"
      className="pt-28 min-h-screen flex items-center justify-center px-6 "
    >
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
          Hire Amazing Video Editors
          <br />
          <span className="text-[var(--green)] glow-text">for 70% Less</span>
        </h1>

        <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
          Connect with vetted video editors from the Philippines. Get
          high-quality edits at a fraction of the cost of US talent.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <button className="gradient-border px-8 py-4 rounded-xl text-lg font-semibold hover:scale-105 transition-all duration-300 pulse-glow">
            <span className="relative z-10 text-white">Start Hiring</span>
          </button>

          <button className="glassmorphic px-8 py-4 text-lg font-medium rounded-xl hover:bg-white/20 transition-all duration-300 flex items-center gap-2">
            <Play className="w-5 h-5" />
            Watch Demo
          </button>
        </div>

        {/* Who Are You Section */}
        <div className="fade-up mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 underline decoration-[var(--green)] decoration-2 underline-offset-8">
            Who are you?
          </h2>
          <p className="text-white/60 mb-8">Click on a person 👇</p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {personas.map((persona) => (
              <div
                key={persona.id}
                onClick={() => setSelectedPersona(persona.id)}
                className={`glassmorphic p-6 rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 ${
                  selectedPersona === persona.id
                    ? "ring-2 ring-[var(--green)]"
                    : ""
                }`}
              >
                <div
                  className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${persona.color} rounded-full flex items-center justify-center text-2xl`}
                >
                  {persona.avatar}
                </div>
                <h3 className="font-bold text-sm">{persona.title}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Client Logos */}
        <div className="fade-up">
          <p className="text-white/60 mb-8">
            EditConnect video editors are perfect for creators, agencies, and
            startups
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {[
              "YouTube",
              "TikTok",
              "Netflix",
              "Disney",
              "Amazon",
              "Spotify",
            ].map((brand) => (
              <div
                key={brand}
                className="glassmorphic px-6 py-3 rounded-lg text-white/80 font-semibold"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
