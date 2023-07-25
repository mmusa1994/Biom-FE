import React from "react";
import { TADPanels, TPanels } from "../../helpers/types";
import { ProgressiveImage } from "../../components";

const ADPanels: React.FC<TADPanels> = ({ title, subtitle, panels }) => {
  return (
    <section className="relative w-full max-w-[1440px] overflow-auto custom-scrollbar my-10">
      <div className="absolute left-[38%] top-[25%] flex flex-col items-center justify-center w-[336px]">
        <label className="brandon-grotesque text-center font-normal text-base leading-6  tracking-wider text-white uppercase">
          {subtitle}
        </label>
        <h3 className="chronicle-display text-center font-bold text-[78px] leading-[82px] tracking-tighter text-white">
          {title}
        </h3>
      </div>
      <div className="w-full flex items-center gap-6 flex-nowrap overflow-scroll custom-scrollbar">
        {panels.length &&
          panels.map((el: TPanels, i: number) => (
            <div key={el.id}>
              <ProgressiveImage
                className="min-w-[535px] h-[415px]"
                src={el.image}
                placeholder={el.image}
                alt={`panel #${i}`}
              />
            </div>
          ))}
      </div>
    </section>
  );
};

export default ADPanels;
