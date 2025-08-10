"use client";
import { useState, useEffect, useRef } from "react";
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
import PortfolioSection from "@/components/portfolio";
import ServicesSection from "@/components/services";
import ContactSection from "@/components/contact-us";
import FastMetallicMarketingLoader from "@/components/loading-screen";
export default function Home() {
  const [loading, setLoading] = useState(true);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loading) return;
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    };

    observerRef.current = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: "50px 0px",
    });

    const elementsToObserve = document.querySelectorAll(".fade-up");
    if (elementsToObserve.length > 0) {
      elementsToObserve.forEach((el) => {
        observerRef.current?.observe(el);
      });
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [loading]);
  if (loading) {
    return <FastMetallicMarketingLoader />;
  }

  return (
    <main className="min-h-screen text-white">
      <Header />
      <HeroSection />
      <BrandSection />
      <MeetFutureEditor />
      <VideoSection />
      <PortfolioSection />
      <ServicesSection />
      <WorksSection />
      <EditorFast />
      <Testimonials />
      <FaqsSection />
      <CtaSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
