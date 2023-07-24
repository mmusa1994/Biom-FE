import React, { useState, useEffect } from "react";
import { IProgressiveImage } from "../../helpers/types";

const ImageLoad: React.FC<IProgressiveImage> = React.memo(
  ({ src, placeholder, alt = "" }) => {
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

    return (
      <img
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
