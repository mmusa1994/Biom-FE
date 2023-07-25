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
