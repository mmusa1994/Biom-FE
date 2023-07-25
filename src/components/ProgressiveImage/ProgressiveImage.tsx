import React, { useState, useEffect } from "react";
import { TProgressiveImage } from "../../helpers/types";

const ImageLoad: React.FC<TProgressiveImage> = React.memo(
  ({
    src,
    placeholder,
    alt = "",
    className,
    isBackground,
    children,
    cover,
  }) => {
    const [loading, setLoading] = useState(true);
    const [currentSrc, updateSrc] = useState(placeholder);

    useEffect(() => {
      const imageToLoad = new Image();
      imageToLoad.src = src;
      imageToLoad.onload = () => {
        setLoading(false);
        updateSrc(src);
      };
    }, [src]);

    if (isBackground) {
      return (
        <div
          className={className}
          style={{
            background: `url(${currentSrc}) no-repeat center center`,
            backgroundSize: cover ? "cover" : "contain",
            opacity: loading ? 0.5 : 1,
            transition: "opacity .15s linear",
          }}
        >
          {children}
        </div>
      );
    }

    return (
      <img
        className={className}
        src={currentSrc}
        style={{
          opacity: loading ? 0.5 : 1,
          transition: "opacity .15s linear",
        }}
        alt={alt}
      />
    );
  }
);

export default ImageLoad;
