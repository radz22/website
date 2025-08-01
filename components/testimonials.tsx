import { Star } from "lucide-react";
import React from "react";

const Testimonials = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah Chen",
              role: "YouTube Creator",
              avatar: "SC",
              content:
                "My editor from EditConnect has transformed my channel. Professional quality edits delivered faster than I ever expected.",
              rating: 5,
            },
            {
              name: "Mike Rodriguez",
              role: "Marketing Agency Owner",
              avatar: "MR",
              content:
                "We've saved over $50k annually while improving our video quality. The talent pool is incredible.",
              rating: 5,
            },
            {
              name: "Emma Thompson",
              role: "Content Creator",
              avatar: "ET",
              content:
                "Finally found an editor who understands my vision. The turnaround time is unmatched.",
              rating: 5,
            },
          ].map((testimonial, index) => (
            <div key={index} className="glassmorphic p-6 rounded-2xl fade-up">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[var(--green)] rounded-full flex items-center justify-center text-black font-bold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-white/60 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[var(--green)] text-[var(--green)]"
                  />
                ))}
              </div>
              <p className="text-white/80">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
