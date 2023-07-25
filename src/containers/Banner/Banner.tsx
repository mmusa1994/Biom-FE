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
      className="relative w-full lg:w-[1390px] h-[675px]"
      src={image}
      placeholder={image}
      alt="Kitchen"
      isBackground
    >
      <div className="flex flex-col gap-2 max-w-[407px] text-white mt-40 ml-20">
        <h2 className="chronicle-display font-semibold text-[56px] leading-[62px] text-white max-w-[237px]">
          {title}
        </h2>
        <p className="brandon-grotesque text-[20px] leading-7 tracking-normal my-3">
          {description}
        </p>
        <Button
          className="brandon-grotesque-bold tracking-widest uppercase font-[900] text-[13px] leading-[30px] max-w-[180px] h-[50px]"
          text={actionText}
          variant="secondary"
        />
      </div>
    </ProgressiveImage>
  );
};

export default Banner;
