"use client";
import {
  Marquee,
  MarqueeContent,
  MarqueeItem,
} from "@/components/ui/shadcn-io/marquee";
import Image from "next/image";
const BrandSection = () => {
  const BrandLogo = [
    {
      id: 1,
      src: "/logo-1.png",
      alt: "Brand Logo 1",
    },
    {
      id: 2,
      src: "/logo-2.png",
      alt: "Brand Logo 2",
    },
    {
      id: 3,
      src: "/logo-3.png",
      alt: "Brand Logo 3",
    },
    {
      id: 4,
      src: "/logo-4.png",
      alt: "Brand Logo 4",
    },
    {
      id: 5,
      src: "/logo-5.png",
      alt: "Brand Logo 5",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto text-center pt-24 px-3 ">
      <div className="fade-up mb-16">
        <h2 className="text-2xl md:text-3xl font-playwrite font-bold  mb-8">
          Trusted by brands worldwide
        </h2>
        <Marquee className="h-auto">
          <MarqueeContent>
            {BrandLogo.map((logo) => (
              <MarqueeItem key={logo.id} className="h-auto">
                <Image
                  width={100}
                  height={100}
                  alt={logo.alt}
                  className="overflow-hidden rounded-full max-sm:h-16 max-sm:w-16 cursor-pointer transition-all duration-300 "
                  src={logo.src}
                />
              </MarqueeItem>
            ))}
          </MarqueeContent>
        </Marquee>
      </div>
    </div>
  );
};

export default BrandSection;
