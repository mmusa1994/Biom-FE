import React from "react";
import { twMerge } from "tailwind-merge";
import { IButtonProps } from "../../helpers/types";

enum ButtonStyle {
  primary = "text-white bg-primary hover:bg-primary-hover",
  secondary = "text-primary bg-white hover:bg-gray",
  tertiary = "text-primary bg-white  border border-primary-dark",
}

const Button: React.FC<IButtonProps> = ({
  text,
  variant = "primary",
  icon,
  iconMove,
  ...restProps
}: IButtonProps) => {
  return (
    <button
      {...restProps}
      className={twMerge(
        `h-full flex items-center justify-center disabled:opacity-75 disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-white rounded-lg hover:opacity-90 active:opacity-75 overflow-hidden group`,
        ButtonStyle[variant],
        restProps.className
      )}
    >
      <div
        className={`flex items-center justify-center 
        ${variant === "tertiary" && " h-full px-2"}
        ${iconMove && "border-r"}
        `}
      >
        {text}
      </div>

      {icon && (
        <div
          className={`flex items-center justify-center 
        ${variant === "tertiary" &&
          "py-0 h-full border-l px-3 group-hover:bg-primary transition-colors duration-500"}
          ${!text &&
            "h-full w-full min-w-[44px] px-2 transition-transform duration-300 hover:transform hover:translate-x-1"}
          `}
        >
          {icon}
        </div>
      )}

      {iconMove && (
        <div className="flex items-center justify-center pl-3 pr-4 h-full transition-transform duration-300 group-hover:transform group-hover:translate-x-1">
          {iconMove}
        </div>
      )}
    </button>
  );
};

export default Button;
