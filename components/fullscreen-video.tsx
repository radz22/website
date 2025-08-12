import React from "react";
import { useRef } from "react";
import VideoPlayer from "@/components/video-player";
import { X } from "lucide-react";
interface FullscreenVideoProps {
  onClose: () => void;
}
const FullscreenVideo = ({ onClose }: FullscreenVideoProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      ref={containerRef}
    >
      <div
        className="relative w-full h-full max-w-7xl max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 p-2 bg-black/60 rounded-full z-10 hover:bg-black/80 transition-colors"
          onClick={onClose}
          aria-label="Close fullscreen view"
        >
          <X className="h-6 w-6 text-white" />
        </button>

        <VideoPlayer
          youtubeId="Hin8-nEFIuI"
          title={"Example Video"}
          play={true}
          className="transform transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>
    </div>
  );
};

export default FullscreenVideo;
