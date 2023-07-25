import { ReactNode } from "react";

export type TProgressiveImage = {
  src: string;
  placeholder: string;
  alt: string;
  className?: string;
  isBackground?: boolean;
  children?: JSX.Element | ReactNode;
};

export type TMenu = {
  id: number;
  title: string;
};

export type TBanner = {
  title: string;
  description: string;
  actionText: string;
  image: string;
};
