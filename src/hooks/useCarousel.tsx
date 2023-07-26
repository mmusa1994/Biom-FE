import { useState, useEffect } from "react";

export const useCarousel = (totalSlides: number) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const previousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  const autoScroll = () => {
    nextSlide();
  };

  useEffect(() => {
    const interval = setInterval(autoScroll, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [currentSlide]);

  return {
    currentSlide,
    nextSlide,
    previousSlide,
  };
};
