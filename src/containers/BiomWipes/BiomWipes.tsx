import React from "react";
import { TBiomWipes, TListOfAdvantages } from "../../helpers/types";
import { Button, ProgressiveImage } from "../../components";

import AdobeStock from "../../assets/AdobeStock_377418446_Preview@2x.png";
import RefillBiom from "../../assets/Refill Packaging_Mockup_2@2x.png";

const BiomWipes: React.FC<TBiomWipes> = ({
  listOfAdvantages,
  title,
  subtitle,
  description,
}) => {
  return (
    <div className="flex justify-center relative w-full max-w-[1340px] h-max xl:min-h-[700px] my-2 md:my-10">
      <ProgressiveImage
        className="hidden xl:block absolute z-10 left-0 w-[496px] h-[622px]"
        src={AdobeStock}
        placeholder={AdobeStock}
        alt="stock"
      />
      <ProgressiveImage
        className="hidden xl:block absolute bottom-[-2%] left-[25%] z-20 w-[308px] h-[373px]"
        src={RefillBiom}
        placeholder={RefillBiom}
        alt="stock"
      />
      <div className="relative xl:absolute right-0 top-10 z-0 flex flex-col gap-4 bg-[#DAE5E5] rounded-lg w-full mx-5 xl:md-0 xl:w-[858px] h-max xl:h-[606px] items-end p-20">
        <div className="flex flex-col items-start min-h-[300px] sm:min-h-max">
          <h3 className="font-normal text-base leading-[62px] font-brandon-grotesque tracking-widest text-primary-dark uppercase">
            {title}
          </h3>
          <h5 className="chronicle-display font-extrabold text-[28px] md:text-[36px] leading-[44px] tracking-normal text-black">
            {subtitle}
          </h5>
          <p className="brandon-grotesque font-normal text-base md:text-[18px] leading-[28px] tracking-normal text-primary-dark w-full xl:max-w-[555px] h-[130px] md:h-[82px] pt-2 overflow-auto custom-scrollbar">
            {description}
          </p>
        </div>
        <div className="flex flex-col sm:w-[500px] gap-6 md:mt-4">
          {listOfAdvantages?.map((el: TListOfAdvantages, i: number) => (
            <div className="w-full flex items-center" key={el.id}>
              <ProgressiveImage
                className="w-[39px] h-[36px] md:w-[69px] md:h-[66px]"
                src={el.icon}
                placeholder={el.icon}
                alt={`logo #${1}`}
              />
              <h6 className="brandon-grotesque ml-5 font-normal text-xs md:text-base md:leading-6 tracking-normal">
                {el.text}
              </h6>
            </div>
          ))}
        </div>
        <Button
          text="subscribe now"
          className="brandon-grotesque-bold min-w-[207px] h-[50px] xl:absolute xl:bottom-[-4%] xl:left-[33%] font-bold text-[13px] tracking-widest uppercase"
        />
      </div>
    </div>
  );
};

export default BiomWipes;
