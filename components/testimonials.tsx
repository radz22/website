import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { SlidingNumber } from "@/components/sliding-number";
import { useInView } from "framer-motion";
import VideoPlayer from "@/components/video-player";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [clientSatisfaction, setClientSatisfaction] = useState(0);
  const [happyClients, setHappyClients] = useState(0);
  const [viewsGenerated, setViewsGenerated] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "0px" });

  const testimonials = [
    {
      id: 1,
      name: "Donnie Keys",
      avatar: "/api/placeholder/60/60",
      rating: 5,
      youtubeId: "hhV4bR9oARw",
      project: "North And Soul",
    },
    {
      id: 2,
      name: "Jake - Josh and Drew",
      avatar: "/api/placeholder/60/60",
      rating: 5,
      youtubeId: "HgSYz46OXMo",
      project: "Cinch Gaming",
    },
    {
      id: 3,
      name: "Greg Woodworth",
      avatar: "/api/placeholder/60/60",
      rating: 5,
      youtubeId: "0JujrMof_qk",
      project: "Casino Match Maker",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-primary fill-primary" : "text-muted-foreground"
        }`}
      />
    ));
  };

  useEffect(() => {
    if (!isInView) {
      setClientSatisfaction(0);
      setHappyClients(0);
      setViewsGenerated(0);
      return;
    }

    const intervals: NodeJS.Timeout[] = [];
    const satisfactionInterval = setInterval(() => {
      setClientSatisfaction((prev) => {
        if (prev >= 100) {
          clearInterval(satisfactionInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 60);
    intervals.push(satisfactionInterval);
    const happyClientsInterval = setInterval(() => {
      setHappyClients((prev) => {
        if (prev >= 10) {
          clearInterval(happyClientsInterval);
          return prev;
        }
        return prev + 1;
      });
    }, 150);
    intervals.push(happyClientsInterval);
    const viewsGeneratedInterval = setInterval(() => {
      setViewsGenerated((prev) => {
        if (prev >= 101) {
          clearInterval(viewsGeneratedInterval);
          return prev;
        }
        return prev + 1;
      });
    }, 60);
    intervals.push(viewsGeneratedInterval);
    return () => intervals.forEach(clearInterval);
  }, [isInView]);
  return (
    <section className="py-24  px-3" id="testimonials">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6  font-melodrama">
            What Our Clients Say
          </h2>
        </div>

        <div className="relative  mx-auto mb-12 h-auto fade-up">
          <div className="p-8 md:p-12 relative overflow-hidden  h-auto glassmorphic rounded-2xl fade-up group hover:bg-white/15 transition-all duration-500 visible  ">
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 opacity-10">
              <Quote className="w-16 h-16 text-primary" />
            </div>

            <div className="relative z-10">
              {/* Rating */}
              <div className="flex items-center gap-1 mb-6">
                {renderStars(testimonials[currentTestimonial].rating)}
              </div>

              {/* Testimonial Video */}
              <div className="mb-6">
                <VideoPlayer
                  youtubeId={testimonials[currentTestimonial].youtubeId}
                  title={testimonials[currentTestimonial].name}
                  className="transform transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
              {/* Client Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold">
                    {testimonials[currentTestimonial].name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonials[currentTestimonial].name}
                  </div>

                  <div className="text-xs text-primary font-medium">
                    Project: {testimonials[currentTestimonial].project}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute bottom-5 right-3 flex gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={prevTestimonial}
                className="w-10 h-10 p-0 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={nextTestimonial}
                className="w-10 h-10 p-0 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? "bg-primary scale-110"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 fade-up"
          ref={ref}
        >
          <div className="glassmorphic p-8 rounded-2xl fade-up group hover:bg-white/15 transition-all duration-500 visible text-center">
            <div className="text-3xl font-bold text-primary mb-2 flex items-center justify-center">
              <SlidingNumber value={clientSatisfaction} />%
            </div>
            <div className="text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="glassmorphic p-8 rounded-2xl fade-up group hover:bg-white/15 transition-all duration-500 visible text-center">
            <div className="text-3xl font-bold text-primary mb-2 flex items-center justify-center">
              <SlidingNumber value={happyClients} />+
            </div>
            <div className="text-muted-foreground">Happy Clients</div>
          </div>
          <div className="glassmorphic p-8 rounded-2xl fade-up group hover:bg-white/15 transition-all duration-500 visible text-center">
            <div className="text-3xl font-bold text-primary mb-2 flex items-center justify-center">
              {" "}
              <SlidingNumber value={viewsGenerated} />+
            </div>
            <div className="text-muted-foreground">Total Views Generated</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center fade-up">
          <div className="glassmorphic p-8 rounded-2xl fade-up group hover:bg-white/15 transition-all duration-500 visible text-center">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Be Our Next{" "}
              <span className="text-primary">Success Story?</span>
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let&apos;s build your brand and grow your business together. Join
              the growing list of clients who&apos;ve scaled faster with
              high-impact digital marketing strategies.
            </p>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground  transition-all duration-300 "
              asChild
            >
              <a href="#contact">Start Your Project</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
