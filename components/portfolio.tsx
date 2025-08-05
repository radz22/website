import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Filter } from "lucide-react";
import VideoPlayer from "@/components/video-player";
const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const portfolioItems = [
    {
      id: 1,
      title: "Animated Social Media Ad",
      description:
        "Attention-grabbing animated ad designed for Facebook and Instagram, combining motion graphics and concise messaging to drive engagement.",
      category: "ads",
      youtubeId: "",
      vimeoId: "1105841520",
      tags: ["Animation", "Social Media", "Engagement", "Motion Graphics"],
    },
    {
      id: 2,
      title: "Brand Story Video",
      description:
        "Narrative-driven corporate video showcasing your brand’s mission, values, and unique selling points with elegant visuals and voiceover.",
      category: "branding",
      youtubeId: "",
      vimeoId: "1105848202",
      tags: ["Branding", "Storytelling", "Corporate Video", "Voiceover"],
    },
    {
      id: 3,
      title: "Product Launch Ad",
      description:
        "High-converting video ad tailored for product launches, featuring bold typography, fast-paced edits, and promotional hooks.",
      category: "ads",
      youtubeId: "",
      vimeoId: "1105852120",
      tags: ["Product Ad", "Launch", "Motion Graphics", "CTA"],
    },
    {
      id: 4,
      title: "Real Estate Promo Video",
      description:
        "Dynamic property highlight reel for listings and real estate pages, optimized for Facebook Ads and YouTube campaigns.",
      category: "realestate",
      youtubeId: "",
      vimeoId: "1105826753",
      tags: ["Real Estate", "Promo Video", "Property Listing", "Facebook Ads"],
    },
    {
      id: 5,
      title: "Short-Form Social Reel",
      description:
        "Optimized TikTok and IG Reel with trending audio, fast-paced transitions, and captions to boost shares and saves.",
      category: "social",
      youtubeId: "",
      vimeoId: "1106101945",
      tags: ["TikTok", "Instagram", "Viral Video", "Short-Form"],
    },
    {
      id: 6,
      title: "YouTube Vlog Highlight",
      description:
        "Clean vlog edit with branding elements, lower thirds, and consistent pacing to increase watch time and channel growth.",
      category: "youtube",
      youtubeId: "Ddka8XvjUXU",
      vimeoId: "",
      tags: ["YouTube", "Vlog", "Channel Branding", "Video Editing"],
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "ads", label: "Ad Campaigns" },
    { id: "branding", label: "Branding Videos" },
    { id: "social", label: "Social Media" },
    { id: "realestate", label: "Real Estate" },
    { id: "youtube", label: "YouTube Content" },
  ];

  const filteredItems =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 px-3">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 font-playwrite">
            Featured <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Discover my latest video editing projects spanning commercials,
            YouTube content, and motion graphics. Each piece showcases attention
            to detail and creative storytelling.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 fade-up">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeFilter === category.id ? "default" : "secondary"}
              size="sm"
              onClick={() => setActiveFilter(category.id)}
              className={`transition-all duration-300 ${
                activeFilter === category.id
                  ? "bg-primary"
                  : "hover:text-white/80"
              }`}
            >
              <Filter className="w-4 h-4 mr-2" />
              {category.label}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 fade-up">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="glassmorphic p-6 rounded-2xl fade-up group hover:bg-white/15 transition-all duration-500 visible"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Video Thumbnail */}
              <div className="mb-6">
                {item.youtubeId ? (
                  <VideoPlayer
                    youtubeId={item.youtubeId}
                    title={item.title}
                    className="transform transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                ) : (
                  <VideoPlayer
                    vimeoId={item.vimeoId}
                    title={item.title}
                    className="transform transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                )}
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors font-playwrite">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="px-3 py-1 bg-white/10 rounded-full text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* View Project Button */}
                <Button
                  variant="default"
                  size="sm"
                  className="w-full mt-4 hover:bg-primary hover:text-primary-foreground transition-all duration-300 group/btn"
                  asChild
                >
                  <a
                    href={
                      item.youtubeId
                        ? `https://www.youtube.com/watch?v=${item.youtubeId}`
                        : `https://vimeo.com/${item.vimeoId}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                    <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
