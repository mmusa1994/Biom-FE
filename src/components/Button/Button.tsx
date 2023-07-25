import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ReactNode,
} from "react";
import { twMerge } from "tailwind-merge";

enum ButtonStyle {
  primary = "text-white bg-primary hover:bg-primary-hover",
  secondary = "text-primary bg-white hover:bg-gray",
}

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  text?: string;
  variant?: "primary" | "secondary";
  icon?: JSX.Element | ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  text,
  variant = "primary",
  icon,
  ...restProps
}: ButtonProps) => {
  return (
    <button
      {...restProps}
      className={twMerge(
        `flex items-center gap-x-2 justify-center disabled:opacity-75 disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-white w-full rounded-lg  py-2 md:py-3 hover:opacity-90 active:opacity-75`,
        ButtonStyle[variant],
        restProps.className
      )}
    >
      {text}
      {icon && icon}
    </button>
  );
};

export default Button;
