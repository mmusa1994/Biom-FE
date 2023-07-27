import React from "react";
import { Button, ProgressiveImage } from "../../components";
import { TBiomTypes, TTypes } from "../../helpers/types";

import ArrowRightIcon from "../../assets/icons/Icon ionic-ios-arrow-round-forward@2x.png";

const BiomTypes: React.FC<TBiomTypes> = ({ message, types }) => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start justify-center xl:justify-end w-full max-w-[1440px] gap-8 md:gap-0 mt-10 overflow-hidden">
      <div className="max-w-[297px] flex flex-col gap-8 xl:mt-10">
        <h4 className="chronicle-display font-extrabold text-4xl leading-[44px] text-black">
          {message}
        </h4>
        <Button
          className="brandon-grotesque-bold font-bold text-[13px] tracking-widest uppercase w-max h-[50px]"
          variant="tertiary"
          text="CHOOSE YOUR VESSEL COLOR"
          iconMove={
            <ProgressiveImage
              src={ArrowRightIcon}
              placeholder={ArrowRightIcon}
              alt="arrow-right"
              className="w-4 h-3"
            />
          }
        />
      </div>
      <div className="flex items-center gap-0">
        {types?.map((el: TTypes, i: number) => (
          <div key={el.id} className="relative flex items-end group">
            <div className="absolute left-0 bottom-10 flex-col items-start justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 xl:min-w-[163px] xl:h-[52px] ">
              <h3 className="chronicle-display font-bold text-black text-[22px] leading-[28px]">
                {el.textHead}
              </h3>
              <label className="brandon-grotesque uppercase text-black text-[14px] leading-[28px] tracking-widest">
                {el.model}
              </label>
            </div>
            <figure className="transition-transform duration-300 ease-in-out group-hover:translate-x-[100px]">
              <ProgressiveImage
                className="min-w-[80px] h-[80px] sm:min-w-[130px] sm:h-[130px] md:w-[180px] md:h-[180px] xl:min-w-[360px] xl:h-[360px]"
                src={el.image}
                placeholder={el.image}
                alt={`bin #${i}`}
              />
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BiomTypes;
