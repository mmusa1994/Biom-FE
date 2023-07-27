import React from "react";
import { Button, ProgressiveImage } from "../../components";

type TBanner = {
  title: string;
  description: string;
  actionText: string;
  image: string;
};

const Banner: React.FC<TBanner> = ({
  title,
  description,
  actionText,
  image,
}) => {
  return (
    <ProgressiveImage
      className="relative w-full xl:max-w-[1390px] xl:min-h-[675px] xl:rounded-lg mt-2 md:my-2 z-10"
      src={image}
      placeholder={image}
      alt="Kitchen"
      isBackground
      cover
    >
      <div className="flex flex-col gap-2 max-w-[407px] text-white xl:mt-40 xl:ml-20 p-5">
        <h2 className="chronicle-display font-semibold text-[25px] sm:text-[30px] md:text-[43px] lg:text-[56px] leading-[62px]  max-w-[237px]">
          {title}
        </h2>
        <p className="brandon-grotesque w-full text-sm md:text-base lg:text-lg xl:text-[20px] leading-7 tracking-normal my-3 xl:w-[407px]">
          {description}
        </p>
        <Button
          className="brandon-grotesque-bold tracking-widest uppercase font-[900] text-xs md:text-[13px] leading-[30px] max-w-[180px] h-[50px]"
          text={actionText}
          variant="secondary"
        />
      </div>
    </ProgressiveImage>
  );
};

export default Banner;
