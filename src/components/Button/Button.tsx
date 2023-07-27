import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ReactNode,
} from "react";
import { twMerge } from "tailwind-merge";

enum ButtonStyle {
  primary = "text-white bg-primary hover:bg-primary-hover",
  secondary = "text-primary bg-white hover:bg-gray",
  tertiary = "text-primary bg-white hover:bg-gray border border-primary-dark",
}

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  text?: string;
  variant?: "primary" | "secondary" | "tertiary";
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
        `h-full flex items-center gap-x-2 justify-center disabled:opacity-75 disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-white w-full rounded-lg hover:opacity-90 active:opacity-75 px-2`,
        ButtonStyle[variant],
        restProps.className
      )}
    >
      {text}
      {icon && (
        <div
          className={`flex items-center 
        ${variant === "tertiary" && "border-l py-0 h-full pl-3"}`}
        >
          {icon}
        </div>
      )}
    </button>
  );
};

export default Button;
