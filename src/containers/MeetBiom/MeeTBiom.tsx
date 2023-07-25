import React from "react";
import { TListOfServices, TMeeTBiom } from "../../helpers/types";
import { Button, ProgressiveImage } from "../../components";

const MeeTBiom: React.FC<TMeeTBiom> = ({
  image,
  title,
  subtitle,
  description,
  listOfServices,
}) => {
  return (
    <ProgressiveImage
      className="relative w-full lg:max-w-[1440px] h-[730px] bg-transparent"
      src={image}
      placeholder={image}
      alt="MeetBiom"
      isBackground
    >
      <div className="absolute left-[-37%] top-[0%] h-[520px] w-[1355px] z-10 overflow-scroll custom-scrollbar">
        <h1 className="brandon-grotesque-bold transform -rotate-90 text-gray text-[225px]  tracking-tighter whitespace-nowrap">
          meet biom
        </h1>
      </div>
      <div className="w-full flex flex-col items-end justify-start text-black0 mt-24 pr-40 text-primary">
        <div className="max-w-[565px] flex flex-col gap-4">
          <h5 className="brandon-grotesque font-normal text-base leading-8 tracking-widest uppercase">
            {title}
          </h5>
          <h3 className="chronicle-display font-extrabold text-4xl leading-4 font-chronicle-display tracking-normal pb-3">
            {subtitle}
          </h3>
          <p className="brandon-grotesque font-normal text-lg leading-7  tracking-normal">
            {description}
          </p>

          {listOfServices.length && (
            <div className="flex flex-col gap-8 mt-5">
              {listOfServices?.map((el: TListOfServices, i: number) => (
                <div className="w-full flex items-center" key={el.id}>
                  <ProgressiveImage
                    className="w-[69px] h-[66px]"
                    src={el.icon}
                    placeholder={el.icon}
                    alt={`logo #${1}`}
                  />
                  <h6 className="brandon-grotesque ml-5 font-normal text-base leading-6 tracking-normal">
                    {el.text}
                  </h6>
                </div>
              ))}
            </div>
          )}
          <Button
            text="shop now"
            className="brandon-grotesque-bold font-bold text-[13px] tracking-widest uppercase w-[163px] h-[50px] mt-6"
          />
        </div>
      </div>
    </ProgressiveImage>
  );
};

export default MeeTBiom;
