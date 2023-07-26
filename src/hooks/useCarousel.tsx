import { useState, useEffect, useRef } from "react";

export const useCarousel = (totalSlides: number) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const startXRef = useRef<number>(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const previousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  const handleMouseDown = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.preventDefault();
    startXRef.current = event.clientX;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (event: MouseEvent) => {
    const diffX = event.clientX - startXRef.current;
    if (Math.abs(diffX) > 50) {
      if (diffX > 0) {
        previousSlide();
      } else {
        nextSlide();
      }
      startXRef.current = event.clientX;
    }
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    startXRef.current = event.touches[0].clientX;
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    event.preventDefault();
    const diffX = event.touches[0].clientX - startXRef.current;
    if (Math.abs(diffX) > 50) {
      if (diffX > 0) {
        previousSlide();
      } else {
        nextSlide();
      }
      startXRef.current = event.touches[0].clientX;
    }
  };

  const handleTouchEnd = () => {
    startXRef.current = 0;
  };

  // OPTIONAL TO AUTO SLIDE EVERY 5 SEC
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return {
    currentSlide,
    nextSlide,
    previousSlide,
    handleMouseDown,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  };
};
