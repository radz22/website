"use client";
import { Plus } from "lucide-react";
import { useState } from "react";
const FaqsSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const faqs = [
    {
      question: "How much does this cost?",
      answer:
        "Our editors start at $15/hour, which is 70% less than equivalent US talent. We offer flexible pricing based on your needs and project complexity.",
    },
    {
      question: "Why hire editors from the Philippines?",
      answer:
        "The Philippines has a large pool of talented, English-speaking video editors with strong technical skills and cultural alignment with Western content styles. Plus, the time zone difference means work gets done while you sleep.",
    },
    {
      question: "Will my video editor only work for me?",
      answer:
        "We offer both dedicated and shared editor options. Dedicated editors work exclusively on your projects, while shared editors work with multiple clients but maintain consistent quality and turnaround times.",
    },
    {
      question: "What about the time difference?",
      answer:
        "The time difference is actually an advantage! Your editor works while you sleep, so you wake up to completed projects. We also provide overlap hours for real-time communication when needed.",
    },
    {
      question: "How many videos can my editor make?",
      answer:
        "It depends on complexity, but most editors can handle 10-20 short-form videos per week or 2-4 long-form videos. We match editors based on your specific volume and timeline requirements.",
    },
  ];

  return (
    <section id="faq" className="py-24  px-3">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playwrite">
            FAQs
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glassmorphic rounded-2xl overflow-hidden fade-up"
            >
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/10 transition-colors"
              >
                <span className="font-semibold text-lg  ">{faq.question}</span>
                <Plus
                  className={`w-6 h-6 transition-transform duration-300 ${
                    openFAQ === index ? "rotate-45" : ""
                  }`}
                />
              </button>
              {openFAQ === index && (
                <div className="px-8 pb-6 text-white/80">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqsSection;
