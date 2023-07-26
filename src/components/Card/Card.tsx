import React from "react";
import { TCardProps } from "../../helpers/types";

const Card: React.FC<TCardProps> = ({ image, isEven }) => {
  const cardStyles = isEven
    ? "min-w-[250px] min-h-[250px]"
    : "min-w-[270px] min-h-[270px]";

  return (
    <div
      className={`relative overflow-hidden transition-transform transform-gpu hover:scale-105 ${cardStyles}`}
    >
      <img src={image} alt="Card" className="w-full h-full object-cover " />
    </div>
  );
};

export default Card;
