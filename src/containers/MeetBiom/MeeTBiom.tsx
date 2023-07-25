import React from "react";
import { TMeeTBiom } from "../../helpers/types";
import { ProgressiveImage } from "../../components";

const MeeTBiom: React.FC<TMeeTBiom> = ({ image }) => {
  return (
    <ProgressiveImage
      className="relative w-full lg:w-[1440px] h-[730px] bg-transparent"
      src={image}
      placeholder={image}
      alt="MeetBiom"
      isBackground
    >
      <div className="flex flex-col gap-2 text-black mt-40 ml-20">Hello</div>
    </ProgressiveImage>
  );
};

export default MeeTBiom;
