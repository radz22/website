"use client";
import { Plus } from "lucide-react";
import { useState } from "react";
const FaqsSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const faqs = [
    {
      question: "How much do your digital marketing services cost?",
      answer:
        "Our digital marketing packages start at $200/month for essential services like social media management, SEO, and content creation. Pricing depends on your goals, channels, and campaign complexity.",
    },
    {
      question: "Why outsource digital marketing to the Philippines?",
      answer:
        "The Philippines has a strong pool of skilled, English-speaking digital marketers experienced in SEO, social media, content strategy, and paid advertising. They offer high-quality work at competitive rates, with strong cultural alignment for Western markets.",
    },
    {
      question: "Will I have a dedicated marketing specialist?",
      answer:
        "Yes, you can choose between a dedicated marketing specialist who works solely on your campaigns or a shared team that handles multiple clients but delivers consistent quality and timely results.",
    },
    {
      question: "How do you handle time zone differences?",
      answer:
        "The time zone difference works to your advantage! We work while you sleep, so you wake up to progress updates and completed tasks. We also schedule overlap hours for live communication when needed.",
    },
    {
      question: "How much work can your team handle per month?",
      answer:
        "It depends on your package and campaign needs, but most clients receive 8–12 high-quality content pieces, 15–30 optimized social posts, and ongoing SEO improvements each month. We customize workloads based on your marketing goals.",
    },
  ];

  return (
    <section id="faq" className="py-24  px-3">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-akrobat">
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
