"use client";

import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  id: string;
  name: string;
  rating: number;
  date: string;
  review: string;
  avatar?: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    rating: 5,
    date: "2 weeks ago",
    review:
      "We Nailed It! Media transformed our brand completely. Their attention to detail and creative vision exceeded our expectations. The team was professional, responsive, and delivered exactly what we needed.",
  },
  {
    id: "2",
    name: "Michael Chen",
    rating: 5,
    date: "1 month ago",
    review:
      "Outstanding work on our website redesign! The team understood our vision perfectly and created something that truly represents our business. Highly recommend their services.",
  },
  {
    id: "3",
    name: "Lisa Rodriguez",
    rating: 5,
    date: "3 weeks ago",
    review:
      "Professional, creative, and reliable. They helped us with our complete brand identity and the results speak for themselves. Our business has seen significant growth since working with them.",
  },
  {
    id: "4",
    name: "David Thompson",
    rating: 5,
    date: "1 week ago",
    review:
      "Exceptional service from start to finish. The drone photography work they did for our construction project was incredible. They truly nailed it!",
  },
  {
    id: "5",
    name: "Amanda Foster",
    rating: 5,
    date: "2 months ago",
    review:
      "The social media campaigns they created for us have been game-changing. Our engagement has increased dramatically and we've gained so many new clients.",
  },
  {
    id: "6",
    name: "Robert Kim",
    rating: 5,
    date: "3 weeks ago",
    review:
      "Top-notch branding work! They captured our company's essence perfectly and created materials that we're proud to share with our clients.",
  },
];

const overallRating = 4.9;
const totalReviews = 127;

export function Testimonials2() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [slideDirection, setSlideDirection] = useState<"left" | "right">(
    "right"
  );
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setSlideDirection("right");
        setCurrentIndex(
          (prevIndex) => (prevIndex + 1) % testimonialsData.length
        );
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const goToPrevious = () => {
    setSlideDirection("left");
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonialsData.length) % testimonialsData.length
    );
  };

  const goToNext = () => {
    setSlideDirection("right");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const renderStars = (rating: number, size = "base") => {
    const starSize = size === "lg" ? "w-6 h-6" : "w-4 h-4 md:w-5 md:h-5";
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`${starSize} ${
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  const renderTestimonial = (testimonial: Testimonial, isActive = false) => (
    <div
      className={`glassmorphic  fade-up group hover:bg-white/15 transition-all duration-500 visible ${
        isActive
          ? "p-6 md:p-8 rounded-xl shadow-lg z-10"
          : "p-4 rounded-lg shadow-md"
      } transition-all duration-300 ${
        isActive ? "h-full" : "h-[90%] scale-90 opacity-70"
      }`}
    >
      <div className={`mb-4 ${isActive ? "text-center" : "text-center"}`}>
        <Quote
          className={`${
            isActive ? "w-8 h-8 md:w-10 md:h-10 mx-auto" : "w-6 h-6 mx-auto"
          } text-gray-400`}
        />
      </div>
      <p
        className={`${
          isActive ? "text-white text-base md:text-lg" : "text-gray-500 text-sm"
        } text-center mb-4 md:mb-6 leading-relaxed`}
      >
        {testimonial.review}
      </p>
      <div className="flex justify-center mb-4">
        {renderStars(testimonial.rating, isActive ? "lg" : "base")}
      </div>
      <div className="flex items-center justify-center gap-3">
        <div
          className={`${
            isActive ? "w-12 h-12 md:w-14 md:h-14" : "w-10 h-10"
          } bg-gray-100 rounded-full flex items-center justify-center`}
        >
          <span
            className={`${
              isActive ? "text-lg" : "text-sm"
            } font-bold text-gray-600`}
          >
            {testimonial.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </span>
        </div>
        <div>
          <h4
            className={`${
              isActive ? "font-bold text-lg" : "font-semibold text-base"
            } text-white`}
          >
            {testimonial.name}
          </h4>
          <p className={`${isActive ? "text-sm" : "text-xs"} text-gray-500`}>
            {testimonial.date}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-12 md:py-20 lg:py-24 " id="testimonials">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-sans uppercase">
            What Our <span className="font-light italic">Clients</span> Say
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 mb-6">
            <div className="flex items-center gap-2">
              <div className="flex">{renderStars(overallRating, "lg")}</div>
              <span className="text-xl md:text-2xl font-bold text-white">
                {overallRating}
              </span>
            </div>
            <div className="text-gray-500 text-sm md:text-base">
              <span className="font-semibold">{totalReviews} reviews</span> on
              Google
            </div>
          </div>
        </div>

        <div
          className="relative w-full"
          onMouseEnter={() => !isMobile && setIsPaused(true)}
          onMouseLeave={() => !isMobile && setIsPaused(false)}
        >
          {!isMobile && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl transition-all duration-300 group"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-600 group-hover:text-black transition-colors" />
              </button>

              <button
                onClick={goToNext}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl transition-all duration-300 group"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-600 group-hover:text-black transition-colors" />
              </button>
            </>
          )}

          <div className="overflow-hidden relative h-[400px]  md:h-[450px] ">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentIndex}
                initial={{
                  x: slideDirection === "right" ? 100 : -100,
                  opacity: 0,
                }}
                animate={{ x: 0, opacity: 1 }}
                exit={{
                  x: slideDirection === "right" ? -100 : 100,
                  opacity: 0,
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {isMobile ? (
                  <div className="w-full max-w-md mx-auto px-4">
                    {renderTestimonial(testimonialsData[currentIndex], true)}
                  </div>
                ) : isTablet ? (
                  <div className="w-full max-w-md mx-auto px-4">
                    {renderTestimonial(testimonialsData[currentIndex], true)}
                  </div>
                ) : (
                  <div className="w-full flex items-center justify-center gap-4 md:gap-6 px-8 md:px-12">
                    <div className="w-1/4 lg:w-1/4">
                      {renderTestimonial(
                        testimonialsData[
                          (currentIndex - 1 + testimonialsData.length) %
                            testimonialsData.length
                        ]
                      )}
                    </div>

                    <div className=" w-1/2 md:w-1/3 lg:w-2/5">
                      {renderTestimonial(testimonialsData[currentIndex], true)}
                    </div>

                    <div className="w-1/4 md:w-1/3 lg:w-1/4">
                      {renderTestimonial(
                        testimonialsData[
                          (currentIndex + 1) % testimonialsData.length
                        ]
                      )}
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setSlideDirection(index > currentIndex ? "right" : "left");
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-10 md:mt-12">
          <div className="inline-flex items-center gap-2 md:gap-3 glassmorphic  fade-up group hover:bg-white/15 transition-all duration-500 visible px-4 py-2 md:px-6 md:py-3 rounded-full shadow-md">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 md:w-8 md:h-8 bg-primary rounded flex items-center justify-center">
                <span className="text-black font-bold text-xs md:text-sm">
                  G
                </span>
              </div>
              <span className="font-semibold text-gray-500 text-sm md:text-base">
                Google Reviews
              </span>
            </div>
            <div className="flex">{renderStars(overallRating, "base")}</div>
            <span className="text-xs md:text-sm text-gray-500">
              {overallRating} ({totalReviews} reviews)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
