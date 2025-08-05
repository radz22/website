"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const useIsMobile = (breakpoint = 1024) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= breakpoint);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) return;
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  return (
    <>
      <header
        className={`top-0 w-full z-50 ${!isMobile ? "fixed" : ""} md:px-10`}
      >
        <div
          className={`mx-auto px-4 md:px-6 py-4 transition-all duration-300 ${
            isScrolled
              ? "backdrop-blur-md bg-black/20 border border-white/10 max-w-6xl mt-3 rounded-full shadow-lg "
              : "bg-transparent max-w-7xl rounded-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="text-xl md:text-2xl font-bold text-white">
              <span className="text-primary glow-text font-playwrite ">
                NEXUS
              </span>
            </div>

            <nav className="hidden lg:flex items-center space-x-8">
              <a
                href="#home"
                className="text-white hover:text-[var(--highlight-hsl)] transition-colors"
              >
                Home
              </a>

              <a
                href="#portfolio"
                className="text-white hover:text-[var(--highlight-hsl)] transition-colors"
              >
                Portfolio
              </a>

              <a
                href="#services"
                className="text-white hover:text-[var(--highlight-hsl)] transition-colors"
              >
                Services
              </a>
              <a
                href="#testimonials"
                className="text-white hover:text-[var(--highlight-hsl)] transition-colors"
              >
                Testimonials
              </a>

              <a
                href="#faq"
                className="text-white hover:text-[var(--highlight-hsl)] transition-colors"
              >
                FAQ
              </a>

              <a
                href="#contact"
                className="text-white hover:text-[var(--highlight-hsl)] transition-colors"
              >
                Contact
              </a>
            </nav>

            <div className="hidden lg:block">
              <a
                className="bg-primary text-black px-6 py-3  text-sm font-semibold w-fit rounded-xl hover:scale-105 transition-all duration-300  "
                href="#contact"
              >
                Get a Quote
              </a>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden  absolute top-18 w-full left-0 z-50 ">
            <nav className="mx-4 mt-2 backdrop-blur-md bg-black/30 border border-white/10 rounded-lg shadow-xl">
              <div className="flex flex-col p-4 space-y-4">
                <a
                  href="#home"
                  className="text-white hover:text-[var(--highlight-hsl)] transition-colors py-2 px-3 hover:bg-white/10 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </a>

                <a
                  href="#portfolio"
                  className="text-white hover:text-[var(--highlight-hsl)] transition-colors py-2 px-3 hover:bg-white/10 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Portfolio
                </a>

                <a
                  href="#services"
                  className="text-white hover:text-[var(--highlight-hsl)] transition-colors py-2 px-3 hover:bg-white/10 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </a>
                <a
                  href="#testimonials"
                  className="text-white hover:text-[var(--highlight-hsl)] transition-colors py-2 px-3 hover:bg-white/10 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Testimonials
                </a>

                <a
                  href="#faq"
                  className="text-white hover:text-[var(--highlight-hsl)] transition-colors py-2 px-3 hover:bg-white/10 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  FAQ
                </a>

                <a
                  href="#contact"
                  className="text-white hover:text-[var(--highlight-hsl)] transition-colors py-2 px-3 hover:bg-white/10 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
                <a
                  href="#contact"
                  className="bg-primary text-black px-8 py-4 rounded-xl text-lg font-semibold hover:scale-105 transition-all duration-300 pulse-glow"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get a Quote
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
