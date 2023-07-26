import React from "react";
import { Button, ProgressiveVideo } from "../../components";
import { TVideoSection } from "../../helpers/types";

const VideoSection: React.FC<TVideoSection> = ({
  title,
  subtitle,
  description,
  actionText,
  video,
}) => {
  return (
    <div className="relative h-max xl:w-[1390px] xl:h-[675px] xl:rounded-[14px] overflow-hidden mt-10">
      <div className="absolute flex flex-col items-center justify-center w-full z-10 bg-green-300 bg-opacity-10 h-full">
        <h3 className="font-normal text-xs md:text-base md:leading-[32px] font-brandon-grotesque md:tracking-widest text-sand uppercase">
          {title}
        </h3>
        <h5 className="chronicle-display font-extrabold text-[20px] md:text-[36px] md:leading-[62px] tracking-normal text-sand ">
          {subtitle}
        </h5>
        <p className="brandon-grotesque font-normal text-sm md:text-[18px] leading-[28px] tracking-normal text-sand max-w-[350px] xl:max-w-[636px] h-[100px] md:h-[90px] pt-2 overflow-auto text-center custom-scrollbar">
          {description}
        </p>
        <Button
          className="brandon-grotesque-bold tracking-widest uppercase font-[900] text-xs md:text-[13px] leading-[30px] max-w-[171px] h-[40px] md:h-[52px] md:mt-4"
          text={actionText}
          variant="secondary"
        />
      </div>
      <ProgressiveVideo
        className=""
        src={video}
        preload="metadata"
        loop
        autoplay
      />
    </div>
  );
};

export default VideoSection;
