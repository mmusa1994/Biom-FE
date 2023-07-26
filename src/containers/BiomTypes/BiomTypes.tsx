import React from "react";
import { Button, ProgressiveImage } from "../../components";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { TBiomTypes, TTypes } from "../../helpers/types";

const BiomTypes: React.FC<TBiomTypes> = ({ message, types }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center xl:justify-end w-full max-w-[1440px] gap-8 md:gap-0 mt-10">
      <div className="max-w-[297px] flex flex-col gap-8 md:mt-[-5%] xl:mt-0">
        <h4 className="chronicle-display font-extrabold text-4xl leading-[44px] text-black">
          {message}
        </h4>
        <Button
          className="brandon-grotesque-bold font-bold text-[13px] tracking-widest uppercase w-full h-[50px]"
          variant="tertiary"
          text="Choose your vessel color"
          icon={<ArrowRightIcon className="w-5 h-4 ml-3" />}
        />
      </div>
      <div className="flex items-center gap-0">
        {types?.length &&
          types?.map((el: TTypes, i: number) => (
            <figure key={el.id}>
              <ProgressiveImage
                className="min-w-[130px] h-[130px] md:w-[180px] md:h-[180px] xl:min-w-[360px] xl:h-[360px]"
                src={el.image}
                placeholder={el.image}
                alt={`bin #${i}`}
              />
            </figure>
          ))}
      </div>
    </div>
  );
};

export default BiomTypes;
