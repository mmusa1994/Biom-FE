import { MouseEventHandler, ReactNode, TouchEventHandler } from "react";

export type TProgressiveImage = {
  src: string;
  placeholder: string;
  alt: string;
  className?: string;
  isBackground?: boolean;
  children?: JSX.Element | ReactNode;
  cover?: boolean;
};

export type TMenu = {
  id: number;
  title: string;
  icon?: string | undefined;
};

export type TBanner = {
  title: string;
  description: string;
  actionText: string;
  image: string;
};

export type TListOfServices = {
  id: number;
  icon: string;
  text: string;
};

export type TMeeTBiom = {
  title: string;
  subtitle: string;
  description: string;
  listOfServices: TListOfServices[];
  image: string;
};

export type TPanels = {
  id: number;
  image: string;
};

export type TADPanels = {
  title: string;
  subtitle: string;
  panels: TPanels[];
};

export type TTypes = {
  id: number;
  image: string;
};

export type TBiomTypes = {
  types?: TTypes[];
  message: string;
};

export type TSlide = {
  text: string;
  author: string;
};

export interface ICarouselContentProps {
  title: string;
  slides: TSlide[];
  currentSlide: number;
  handleMouseDown: MouseEventHandler<HTMLDivElement>;
  activeDot: number;
  handleMouseDownByDot: (index: number) => void;
  handleTouchStart: TouchEventHandler<HTMLDivElement>;
  handleTouchMove: TouchEventHandler<HTMLDivElement>;
  handleTouchEnd: TouchEventHandler<HTMLDivElement>;
}

export interface ITestimonialCarouselProps {
  slides: TSlide[];
  title: string;
}

export type TListOfAdvantages = {
  id: number;
  icon: string;
  text: string;
};

export type TBiomWipes = {
  listOfAdvantages: TListOfAdvantages[];
  title: string;
  subtitle: string;
  description: string;
};

export type PreloadValue = "" | "none" | "metadata" | "auto";

export interface IProgressiveVideoProps {
  src: string;
  preload: PreloadValue;
  autoplay?: boolean;
  loop?: boolean;
  className?: string;
  width?: string;
  height?: string;
}

export type TVideoSection = {
  title: string;
  subtitle: string;
  description: string;
  actionText: string;
  video: string;
};

export type TCardProps = {
  image: string;
  isEven: boolean;
};
