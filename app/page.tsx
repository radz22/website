"use client";

import { useEffect } from "react";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import VideoSection from "@/components/video-section";
import EditorFast from "@/components/editor-fast";
import MeetFutureEditor from "@/components/meet-future-editor";
import WorksSection from "@/components/works-section";
import FaqsSection from "@/components/faqs-section";
import Testimonials from "@/components/testimonials";
import CtaSection from "@/components/cta-section";
import Footer from "@/components/footer";
import BrandSection from "@/components/brand-section";
export default function Home() {
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
    });

    document.querySelectorAll(".fade-up").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen text-white">
      <Header />
      <HeroSection />
      <VideoSection />
      <BrandSection />

      {/* <EditorFast />
      <MeetFutureEditor />
      <WorksSection />
      <FaqsSection />
      <Testimonials />
      <CtaSection /> */}
      <Footer />
    </main>
  );
}
