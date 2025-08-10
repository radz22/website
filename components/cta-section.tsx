import React from "react";

const CtaSection = () => {
  return (
    <section className="py-24  px-3">
      <div className="max-w-5xl mx-auto text-center fade-up">
        <div className="glassmorphic p-12 rounded-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-akrobat">
            Ready to grow your business?
          </h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            We connect you with expert digital marketers for up to 70% less than
            traditional agency rates.
          </p>
          <button className="bg-primary px-12 py-6 text-xl font-bold rounded-xl hover:scale-105 transition-all duration-300 pulse-glow">
            <span className="relative z-10 text-black">GET STARTED TODAY</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
