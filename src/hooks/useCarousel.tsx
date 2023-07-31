import { useState, useEffect, useRef, useCallback } from "react";

export const useCarousel = (totalSlides: number) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const startXRef = useRef<number>(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  }, [totalSlides]);

  const previousSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      const diffX = event.clientX - startXRef.current;
      if (Math.abs(diffX) > 50) {
        if (diffX > 0) {
          previousSlide();
        } else {
          nextSlide();
        }
        startXRef.current = event.clientX;
      }
    },
    [nextSlide, previousSlide]
  );

  const handleMouseUp = useCallback(() => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  }, [handleMouseMove]);

  const handleMouseDown = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      event.preventDefault();
      startXRef.current = event.clientX;
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    },
    [handleMouseMove, handleMouseUp]
  );

  const handleTouchMove = useCallback(
    (event: React.TouchEvent<HTMLDivElement>) => {
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
    },
    [nextSlide, previousSlide]
  );

  const handleTouchEnd = useCallback(() => {
    startXRef.current = 0;
  }, []);

  const handleTouchStart = useCallback(
    (event: React.TouchEvent<HTMLDivElement>) => {
      startXRef.current = event.touches[0].clientX;
    },
    []
  );

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [nextSlide]);

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
