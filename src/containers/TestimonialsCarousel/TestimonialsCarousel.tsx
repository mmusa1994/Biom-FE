import React from "react";
import { useCarousel } from "../../hooks/useCarousel";
import { CarouselContent } from "../../components/";
import { ITestimonialCarouselProps } from "../../helpers/types";

const TestimonialCarousel: React.FC<ITestimonialCarouselProps> = ({
  slides,
  title,
}) => {
  const { currentSlide, nextSlide, previousSlide } = useCarousel(slides.length);

  const handleMouseDown = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const startX = event.clientX;

    const handleMouseMove = (event: MouseEvent) => {
      const diffX = event.clientX - startX;
      if (diffX > 50) {
        previousSlide();
      } else if (diffX < -50) {
        nextSlide();
      }
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div className="relative carousel-container">
      <CarouselContent
        title={title}
        slides={slides}
        currentSlide={currentSlide}
        handleMouseDown={handleMouseDown}
      />
      <div className="carousel-dots absolute bottom-3 lg:bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
