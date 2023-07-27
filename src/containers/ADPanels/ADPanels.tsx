import React from "react";
import { TADPanels, TPanels } from "../../helpers/types";

const ADPanels: React.FC<TADPanels> = ({ title, subtitle, panels }) => {
  return (
    <section className="relative w-full max-w-[1440px] overflow-auto custom-scrollbar md:my-10">
      <div className="z-10 absolute left-10 top-10 xl:left-[41%] xl:top-[30%] flex flex-col items-center justify-center w-[250px] md:w-[336px]">
        <label className="brandon-grotesque text-center font-normal text-sm xl:text-base leading-6 tracking-wider text-white uppercase">
          {subtitle}
        </label>
        <h3 className="chronicle-display text-center font-[1000] text-[55px] lg:text-[65px] xl:text-[78px] leading-[60px] xl:leading-[82px] tracking-tighter text-white">
          {title}
        </h3>
      </div>
      <div className="w-full flex items-center gap-6 flex-nowrap overflow-scroll custom-scrollbar mx-2">
        {panels?.map((el: TPanels, i: number) => (
          <div
            key={el.id}
            className="relative flex justify-center min-w-[300px] md:min-w-[535px] md:h-[415px] rounded-[14px] overflow-hidden group"
          >
            <img
              className="h-full w-full transition-transform duration-200 ease-in-out group-hover:scale-105"
              src={el.image}
              placeholder={el.image}
              alt={`panel #${i}`}
            />
            <label className="chronicle-display absolute bottom-4 z-10 text-white text-[23px] font-semibold transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100">
              {el.name}
            </label>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ADPanels;
