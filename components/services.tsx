import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Film,
  Youtube,
  Sparkles,
  Palette,
  Music,
  Clock,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Youtube,
      title: "YouTube Ad Editing",
      description:
        "Optimized YouTube ad videos that capture attention and drive clicks.",
      features: [
        "Hook-based editing within first 5 seconds",
        "Call-to-action integration",
        "A/B variant creation",
        "Skippable & non-skippable formats",
        "Brand alignment",
      ],
      price: "Starting at $200",
      popular: true,
    },
    {
      icon: Film,
      title: "Video Ads for Facebook & Instagram",
      description:
        "Scroll-stopping vertical and square videos designed for conversions.",
      features: [
        "Mobile-optimized formats (9:16, 1:1)",
        "Trendy text overlays and captions",
        "Fast-paced edits with CTA",
        "Multiple placements support",
        "Performance-driven creative strategy",
      ],
      price: "Starting at $150",
      popular: true,
    },
    {
      icon: Sparkles,
      title: "Social Media Reels",
      description:
        "Engaging short-form videos tailored for TikTok, Instagram Reels, and Facebook.",
      features: [
        "Trending sound sync",
        "Viral format structures",
        "Motion text and transitions",
        "Brand-sticker and logo overlays",
        "Platform-specific delivery",
      ],
      price: "Starting at $100",
      popular: false,
    },
    {
      icon: Palette,
      title: "Brand Story Videos",
      description:
        "Narrative-based videos that showcase your mission, values, and uniqueness.",
      features: [
        "Script-to-screen service",
        "Emotionally engaging edits",
        "Voiceover & subtitle options",
        "Brand color and style consistency",
        "Ideal for website or about pages",
      ],
      price: "Starting at $300",
      popular: false,
    },
    {
      icon: Music,
      title: "Audio Enhancement for Digital Ads",
      description:
        "Polished sound mixing and audio treatment to make your message clear and compelling.",
      features: [
        "Background music curation",
        "Voiceover mixing & leveling",
        "Sound effects to emphasize CTA",
        "Audio compression for web playback",
        "Platform-compliant audio levels",
      ],
      price: "Starting at $75",
      popular: false,
    },
    {
      icon: Clock,
      title: "Urgent Campaign Edits",
      description:
        "Fast-turnaround ad edits for time-sensitive campaigns and launches.",
      features: [
        "24-48 hour delivery",
        "Campaign-ready formatting",
        "Priority feedback cycles",
        "Multi-platform quick exports",
        "Weekend production support",
      ],
      price: "2x standard rate",
      popular: false,
    },
  ];

  return (
    <section id="services" className="py-20  px-3">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 font-melodrama">
            Digital Marketing <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            High-converting video solutions crafted for digital platforms.
            Whether you&apos;re launching ads, building your brand, or scaling
            social media content—we help you stand out and drive results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 fade-up">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`glassmorphic p-8 rounded-2xl fade-up relative visible ${
                service.popular ? "ring-2 ring-primary/50" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-3 left-6">
                  <Badge className="bg-primary text-primary-foreground px-3 py-1 animate-glow">
                    Most Popular
                  </Badge>
                </div>
              )}

              {/* Service Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors font-melodrama">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Features List */}
              <div className="mb-6">
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm"
                    >
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing */}
              <div className="mb-6 pt-4 border-t border-border/50">
                <div className="text-lg font-semibold text-primary">
                  {service.price}
                </div>
                <div className="text-xs text-muted-foreground">Per project</div>
              </div>

              {/* CTA Button */}
              <Button
                className={`w-full transition-all duration-300 group/btn ${
                  service.popular
                    ? "bg-primary text-primary-foreground "
                    : "variant-outline hover:bg-primary hover:text-primary-foreground"
                }`}
                asChild
              >
                <a href="#contact">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 ">
          <div className="glassmorphic p-8 rounded-3xl fade-up relative visible ">
            <h3 className="text-2xl font-bold mb-4 ">
              Need a <span className="text-primary">Custom Package</span>?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Every project is unique. Let&apos;s discuss your specific
              requirements and create a tailored solution that fits your budget
              and timeline.
            </p>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:shadow-primary transition-all duration-300"
              asChild
            >
              <a href="#contact">Schedule Free Consultation</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
