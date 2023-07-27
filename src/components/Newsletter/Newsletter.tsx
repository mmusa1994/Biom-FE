import React, { useState } from "react";
import { TNewsletter } from "../../helpers/types";
import Button from "../Button/Button";
import { ProgressiveImage } from "..";

import ArrowRightIcon from "../../assets/icons/Icon ionic-ios-arrow-round-forward@2x.png";

const Newsletter: React.FC<TNewsletter> = ({ title, description }) => {
  const [value, setValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="w-full sm:w-[414px]">
      <h2 className="chronicle-display font-extrabold text-[26px] xl:text-[30px] leading-[38px] tracking-normal text-black max-w-[324px]">
        {title}
      </h2>
      <p className="brandon-grotesque font-normal text-[12px] xl:text-[16px] leading-[26px] tracking-normal text-black py-3">
        {description}
      </p>
      <div className="flex justify-between p-2 w-full xl:w-[414px] h-[52px] rounded-[6px] text-black bg-sand">
        <input
          className="px-2 brandon-grotesque text-[16px] leading-[30px] bg-sand w-full h-full outline-none focus:outline-none focus:ring-0"
          placeholder="Enter your email address"
          value={value}
          onChange={handleChange}
        />
        <Button
          className="w-max h-[38px]"
          variant="primary"
          icon={
            <ProgressiveImage
              src={ArrowRightIcon}
              placeholder={ArrowRightIcon}
              alt="arrow-right"
              className="w-4 h-3 brightness-0 invert"
            />
          }
        />
      </div>
    </div>
  );
};

export default Newsletter;
