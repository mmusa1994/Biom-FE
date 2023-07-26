import React from "react";
import { Button, Card, ProgressiveImage } from "../../components";

import Instagram from "../../assets/icons/Icon awesome-instagram@2x.png";

interface GalleryProps {
  pictures: string[];
}

const Gallery: React.FC<GalleryProps> = ({ pictures }) => {
  return (
    <div className="flex flex-col items-center my-10 gap-5">
      <div className="chronicle-display font-extrabold text-[36px] leading-[44px] w-[274px] h-[44px] text-primary-dark">
        <span className="font-thin">#</span>cleanwithbiom
      </div>
      <div className="flex items-center gap-6 w-full max-w-[1440px] overflow-scroll custom-scrollbar">
        {pictures.map((picture, index) => (
          <div key={index} className={index % 2 === 1 ? "mt-10" : ""}>
            <Card image={picture} isEven={index % 2 === 0} />
          </div>
        ))}
      </div>
      <Button
        className="brandon-grotesque-bold font-bold text-[13px] tracking-widest uppercase w-[277px] h-[50px] mt-5"
        variant="tertiary"
        text="Follow us on instagram"
        icon={
          <ProgressiveImage
            src={Instagram}
            placeholder={Instagram}
            alt="instagram"
            className="w-6 h-6"
          />
        }
      />
    </div>
  );
};

export default Gallery;
