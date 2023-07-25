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
      className="relative w-[300px] sm:w-[500px] md:w-[760px] lg:w-[1020px] xl:w-[1390px] h-[630px] xl:h-[730px] bg-transparent"
      src={image}
      placeholder={image}
      alt="MeetBiom"
      isBackground
    >
      <div className="max-[1355px]:hidden block absolute left-[-40%] top-[0%] h-[520px] w-[1355px] z-10 overflow-scroll custom-scrollbar ">
        <div className="animate-scrolling">
          <h1 className="brandon-grotesque-bold transform -rotate-90 text-gray text-[225px] tracking-tighter whitespace-nowrap">
            meet biom
          </h1>
        </div>
      </div>
      <div className="w-full flex flex-col items-end justify-start text-black0 mt-24 xl:pr-40 text-primary">
        <div className="max-w-[565px] flex flex-col gap-4">
          <h5 className="brandon-grotesque font-normal text-[10px] md:text-base leading-8 tracking-widest uppercase">
            {title}
          </h5>
          <h3 className="chronicle-display font-extrabold text-xl md:text-4xl leading-4 font-chronicle-display tracking-normal xl:pb-3">
            {subtitle}
          </h3>
          <p className="brandon-grotesque font-normal text-base md:text-lg leading-7  tracking-normal md:pl-32 lg:pl-0">
            {description}
          </p>

          {listOfServices.length && (
            <div className="flex flex-col gap-4 md:gap-8 mt-5 pl-32 sm:pl-52 md:pl-32 lg:pl-0">
              {listOfServices?.map((el: TListOfServices, i: number) => (
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
              <Button
                text="shop now"
                className="brandon-grotesque-bold font-bold text-[13px] tracking-widest uppercase w-full relative sm:w-[163px] h-[50px] mt-6 sm:mt-20 md:mt-2"
              />
            </div>
          )}
        </div>
      </div>
    </ProgressiveImage>
  );
};

export default MeeTBiom;
