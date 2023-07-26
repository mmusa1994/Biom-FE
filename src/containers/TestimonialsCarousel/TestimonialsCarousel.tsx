import React, { useEffect, useState } from "react";
import { useCarousel } from "../../hooks/useCarousel";
import { CarouselContent } from "../../components/";
import { ITestimonialCarouselProps } from "../../helpers/types";

const TestimonialCarousel: React.FC<ITestimonialCarouselProps> = ({
  slides,
  title,
}) => {
  const {
    currentSlide,
    nextSlide,
    previousSlide,
    handleMouseDown,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  } = useCarousel(slides.length);
  const [activeDot, setActiveDot] = useState<number>(currentSlide);

  useEffect(() => {
    setActiveDot(currentSlide);
  }, [currentSlide]);

  const handleMouseDownByDot = (index: number) => {
    setActiveDot(index);
    if (index > currentSlide) {
      for (let i = currentSlide; i < index; i++) {
        nextSlide();
      }
    } else if (index < currentSlide) {
      for (let i = currentSlide; i > index; i--) {
        previousSlide();
      }
    }
  };

  return (
    <div className="relative carousel-container">
      <CarouselContent
        title={title}
        slides={slides}
        currentSlide={currentSlide}
        handleMouseDown={handleMouseDown}
        handleTouchStart={handleTouchStart}
        handleTouchMove={handleTouchMove}
        handleTouchEnd={handleTouchEnd}
        activeDot={activeDot}
        handleMouseDownByDot={handleMouseDownByDot}
      />
    </div>
  );
};

export default TestimonialCarousel;
