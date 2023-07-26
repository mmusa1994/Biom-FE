import React, { useEffect, useState } from "react";
import { IProgressiveVideoProps } from "../../helpers/types";

const ProgressiveVideo: React.FC<IProgressiveVideoProps> = ({
  src,
  preload,
  autoplay = false,
  loop = false,
  width,
  height,
  className,
}) => {
  const [canPlay, setCanPlay] = useState(false);

  useEffect(() => {
    const video = document.createElement("video");
    video.src = src;

    const canPlayHandler = () => {
      setCanPlay(true);
      video.removeEventListener("canplay", canPlayHandler);
    };

    video.addEventListener("canplay", canPlayHandler);

    if (["", "none", "metadata", "auto"].includes(preload)) {
      video.preload = preload;
    }

    if (autoplay) {
      video.autoplay = true;
      video.muted = true;
    }

    return () => {
      video.removeEventListener("canplay", canPlayHandler);
    };
  }, [src, preload, autoplay]);

  return (
    <div className={className}>
      {canPlay ? (
        <video
          className="cover"
          autoPlay={autoplay}
          controls={false}
          muted={autoplay}
          loop={loop}
          width={width}
          height={height}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video element.
        </video>
      ) : (
        <div className="w-full h-full bg-sand" />
      )}
    </div>
  );
};

export default ProgressiveVideo;
