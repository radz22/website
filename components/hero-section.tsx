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
      className="md:pt-28 max-md:pt-8 min-h-screen flex items-center justify-center px-3 "
    >
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl  leading-tight font-bold  font-melodrama ">
          Hire Top-Tier Digital Marketers
        </h1>

        <p className="text-5xl md:text-7xl mb-6 mt-1 leading-tight text-primary glow-text font-bold font-melodrama ">
          for 70% Less
        </p>

        <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto  ">
          Partner with expert digital marketers from the Philippines. Get
          agency-quality strategy and execution at a fraction of the cost of
          US-based teams.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <button className="bg-primary px-8 py-4 rounded-xl text-lg font-semibold hover:scale-105 transition-all duration-300 pulse-glow">
            <span className="relative z-10 text-black glow-text">
              Let&apos;s Work Together
            </span>
          </button>

          <button className="glassmorphic px-8 py-4 text-lg font-medium rounded-xl hover:bg-white/20 transition-all duration-300 flex items-center gap-2">
            <Play className="w-5 h-5" />
            Watch Demo
          </button>
        </div>

        {/* Who Are You Section */}
        <div className="fade-up mb-16">
          <h2 className="text-2xl md:text-3xl  mb-8 decoration-[var(--highlight-hsl)] decoration-2 underline underline-offset-8 font-melodrama font-bold">
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
                    ? "ring-2 ring-[var(--highlight-hsl)]"
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
            Digital Marketing video editors are perfect for creators, agencies,
            and startups
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
