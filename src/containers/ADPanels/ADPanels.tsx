import React from "react";
import { TADPanels, TPanels } from "../../helpers/types";
import { ProgressiveImage } from "../../components";

const ADPanels: React.FC<TADPanels> = ({ title, subtitle, panels }) => {
  return (
    <section className="relative w-full max-w-[1440px] overflow-auto custom-scrollbar md:my-10">
      <div className="absolute left-10 top-10  xl:left-[41%] xl:top-[30%] flex flex-col items-center justify-center w-[250px] md:w-[336px]">
        <label className="brandon-grotesque text-center font-normal text-sm xl:text-base leading-6 tracking-wider text-white uppercase">
          {subtitle}
        </label>
        <h3 className="chronicle-display text-center font-[1000] text-[55px] lg:text-[65px] xl:text-[78px] leading-[60px] xl:leading-[82px] tracking-tighter text-white">
          {title}
        </h3>
      </div>
      <div className="w-full flex items-center gap-6 flex-nowrap overflow-scroll custom-scrollbar mx-2">
        {panels?.length &&
          panels?.map((el: TPanels, i: number) => (
            <figure key={el.id}>
              <ProgressiveImage
                className="min-w-[300px] md:min-w-[535px] md:h-[415px]"
                src={el.image}
                placeholder={el.image}
                alt={`panel #${i}`}
              />
            </figure>
          ))}
      </div>
    </section>
  );
};

export default ADPanels;
