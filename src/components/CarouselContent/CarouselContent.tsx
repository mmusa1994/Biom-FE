import React from "react";
import { ICarouselContentProps } from "../../helpers/types";

const CarouselContent: React.FC<ICarouselContentProps> = ({
  title,
  slides,
  currentSlide,
  handleMouseDown,
  activeDot,
  handleMouseDownByDot,
  handleTouchStart,
  handleTouchMove,
  handleTouchEnd,
}) => {
  return (
    <div className="relative testimonial-carousel w-full bg-gray max-w-[1440px] h-[300px] lg:h-[450px] mt-[-1%]">
      <h6 className="brandon-grotesque text-center font-normal text-base leading-[62px] tracking-widest text-primary-dark uppercase mt-14">
        {title}
      </h6>
      <div
        className="testimonial-slides text-justify"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            onSelect={(e) => e.preventDefault()}
            className="testimonial-slide flex flex-col items-center cursor-grab no-select"
          >
            <p className="chronicle-display text-primary-dark text-center font-bold text-[15px] lg:text-[25px] xl:leading-[42px] tracking-normal  w-full h-full max-w-[747px] max-h-[70px] lg:max-h-[160px] overflow-scroll custom-scrollbar">
              "{slide.text}"
            </p>
            <p className="brandon-grotesque text-center font-semibold text-[13px] leading-[62px] tracking-widest uppercase text-primary-dark mt-4">
              - {slide.author}
            </p>
          </div>
        ))}
      </div>
      <div className="carousel-dots absolute bottom-3 lg:bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === activeDot ? "active" : ""}`}
            onClick={() => handleMouseDownByDot(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default CarouselContent;
