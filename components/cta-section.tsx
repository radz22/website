import React from "react";

const CtaSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center fade-up">
        <div className="glassmorphic p-12 rounded-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            We find you the best overseas video editors for 70% less than US
            employees
          </p>
          <button className="gradient-border px-12 py-6 text-xl font-bold rounded-xl hover:scale-105 transition-all duration-300 pulse-glow">
            <span className="relative z-10 text-white">START HIRING</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
