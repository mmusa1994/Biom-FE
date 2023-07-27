import React, { useEffect, useRef, useState } from "react";
import { IProgressiveVideoProps } from "../../helpers/types";

const ProgressiveVideo: React.FC<IProgressiveVideoProps> = ({
  src,
  preload,
  autoplay = false,
  loop = false,
  className,
}) => {
  const [canPlay, setCanPlay] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;

      const canPlayHandler = () => {
        setCanPlay(true);
      };

      video.addEventListener("canplay", canPlayHandler);

      if (["", "none", "metadata", "auto"].includes(preload)) {
        video.preload = preload as any;
      }

      if (autoplay) {
        video.autoplay = true;
        video.muted = true;
      }

      return () => {
        video.removeEventListener("canplay", canPlayHandler);
      };
    }
  }, [src, preload, autoplay]);

  return (
    <div className={className}>
      <video
        ref={videoRef}
        className="cover"
        autoPlay={autoplay}
        controls={false}
        muted={autoplay}
        loop={loop}
      >
        <source src={process.env.PUBLIC_URL + src} type="video/mp4" />
        Your browser does not support the video element.
      </video>
      {!canPlay && <div className="w-full h-full bg-sand" />}
    </div>
  );
};

export default ProgressiveVideo;
