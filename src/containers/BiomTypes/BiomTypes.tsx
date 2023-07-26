import React from "react";
import { Button, ProgressiveImage } from "../../components";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { TBiomTypes, TTypes } from "../../helpers/types";

const BiomTypes: React.FC<TBiomTypes> = ({ message, types }) => {
  return (
    <div className="flex items-center justify-end w-[1440px]">
      <div className="max-w-[297px] flex flex-col gap-8">
        <h4 className="chronicle-display font-extrabold text-4xl leading-[44px] text-black">
          {message}
        </h4>
        <Button
          className="brandon-grotesque-bold font-bold text-[13px] tracking-widest uppercase w-full h-[50px]"
          variant="tertiary"
          text="Choose your vessel color"
          icon={<ArrowRightIcon className="w-4 h-3" />}
        />
      </div>
      <div className="flex items-center gap-0">
        {types?.length &&
          types?.map((el: TTypes, i: number) => (
            <figure key={el.id}>
              <ProgressiveImage
                className="md:min-w-[360px] md:h-[360px]"
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
