import { Star } from "lucide-react";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "./ui/card";
const MeetFutureEditor = () => {
  const editors = [
    {
      name: "James Rodriguez",
      role: "TikTok Editor",
      avatar: "JR",
      skills: [
        "Visualizations",
        "Trailers",
        "Branding",
        "Ads",
        "Highlights",
        "Clip Finding",
      ],
      rating: 4.9,
      projects: 150,
    },
    {
      name: "Maria Santos",
      role: "YouTube Editor",
      avatar: "MS",
      skills: ["Long Form", "Storytelling", "Color Grading", "Motion Graphics"],
      rating: 4.8,
      projects: 120,
    },
    {
      name: "Carlos Mendez",
      role: "Podcast Editor",
      avatar: "CM",
      skills: ["Audio Sync", "Multi-Cam", "Titles", "Social Clips"],
      rating: 4.9,
      projects: 200,
    },

    {
      name: "Carla Soja",
      role: "TikTok Editor",
      avatar: "CM",
      skills: ["Audio Sync", "Multi-Cam", "Titles", "Social Clips"],
      rating: 4.9,
      projects: 199,
    },

    {
      name: "John Doe",
      role: "Podcast Editor",
      avatar: "JD",
      skills: ["Audio Sync", "Multi-Cam", "Titles", "Social Clips"],
      rating: 5.0,
      projects: 99,
    },
  ];

  return (
    <section className="py-24  px-3">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6  font-melodrama">
            Meet your future video editor
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Scroll through the top 1% of video editors that apply to Digital
            Marketing. Your editor will have the skills, expertise, and
            creativity to support all your video needs.
          </p>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {editors.map((editor, index) => (
            <div
              key={index}
              className="glassmorphic p-6 rounded-2xl fade-up group hover:bg-white/15 transition-all duration-500"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[var(--highlight-hsl)] rounded-xl flex items-center justify-center text-black font-bold text-xl mr-4">
                  {editor.avatar}
                </div>
                <div>
                  <h3 className="text-xl font-bold">{editor.name}</h3>
                  <p className="text-white/60">{editor.role}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Star className="w-4 h-4 fill-[var(--highlight-hsl)] text-[var(--highlight-hsl)]" />
                    <span className="text-sm">
                      {editor.rating} • {editor.projects} projects
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {editor.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-white/10 rounded-full text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

        
        </div> */}

        <Carousel className="w-full mb-12">
          <CarouselContent className="-ml-1">
            {editors.map((editor, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <div>
                    <div className="flex tems-center justify-center p-6 glassmorphic fade-up group hover:bg-white/15 transition-all duration-500 rounded-2xl">
                      <div className=" p-6 rounded-2xl ">
                        <div className="flex items-center mb-6">
                          <div className="w-16 h-16 bg-[var(--highlight-hsl)] rounded-xl flex items-center justify-center text-black font-bold text-xl mr-4">
                            {editor.avatar}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold">{editor.name}</h3>
                            <p className="text-white/60">{editor.role}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <Star className="w-4 h-4 fill-[var(--highlight-hsl)] text-[var(--highlight-hsl)]" />
                              <span className="text-sm">
                                {editor.rating} • {editor.projects} projects
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {editor.skills.map((skill, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-white/10 rounded-full text-xs"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <div className="text-center fade-up">
          <button className="bg-primary px-8 py-4 text-xl font-semibold rounded-xl hover:scale-105 transition-all duration-300 pulse-glow">
            <span className="relative z-10 text-black">Get a Quote</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default MeetFutureEditor;
