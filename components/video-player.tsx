import { useState } from "react";
import { Play } from "lucide-react";
import Image from "next/image";
interface VideoPlayerProps {
  vimeoId?: string;
  youtubeId?: string;
  title: string;
  thumbnail?: string;
  className?: string;
}

const VideoPlayer = ({
  vimeoId,
  youtubeId,
  title,
  thumbnail,
  className = "",
}: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  if (vimeoId && !isPlaying) {
    return (
      <div
        className={`relative group cursor-pointer ${className}`}
        onClick={handlePlay}
      >
        <div className="relative w-full aspect-video bg-muted rounded-lg overflow-hidden">
          {thumbnail ? (
            <Image
              src={thumbnail}
              alt={title}
              width={100}
              height={100}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-card flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Play className="w-8 h-8 text-primary ml-1" />
                </div>
                <p className="text-sm text-muted-foreground">{title}</p>
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-primary/90 hover:bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-primary">
              <Play className="w-8 h-8 text-primary-foreground ml-1" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (vimeoId && isPlaying) {
    return (
      <div className={`relative ${className}`}>
        <div className="relative w-full aspect-video bg-muted rounded-lg overflow-hidden">
          <iframe
            src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&color=f5c842`}
            className="w-full h-full"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title={title}
          />
        </div>
      </div>
    );
  }

  if (youtubeId && !isPlaying) {
    return (
      <div
        className={`relative group cursor-pointer ${className}`}
        onClick={handlePlay}
      >
        <div className="relative w-full aspect-video bg-muted rounded-lg overflow-hidden">
          <Image
            src={`https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`}
            alt={title}
            fill
            className="object-cover"
            placeholder="blur"
            blurDataURL="/placeholder.jpg"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-primary/90 hover:bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-primary">
              <Play className="w-8 h-8 text-primary-foreground ml-1" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (youtubeId && isPlaying) {
    return (
      <div className={`relative ${className}`}>
        <div className="relative w-full aspect-video bg-muted rounded-lg overflow-hidden">
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&color=white`}
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={title}
          />
        </div>
      </div>
    );
  }

  return null;
};

export default VideoPlayer;
