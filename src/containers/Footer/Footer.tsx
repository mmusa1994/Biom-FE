import React from "react";
import { ProgressiveImage, Newsletter } from "../../components";
import { FOOTER_OPTIONS_1, FOOTER_OPTIONS_2, SOCIALS } from "../../mock/footer";
import { TSocials } from "../../helpers/types";

import FooterLogo from "../../assets/biom logo footer@2x.png";
import FooterBin from "../../assets/Biom_wipe_2@2x.png";

const itemsClass =
  "brandon-grotesque  font-bold text-[14px] leading[20px] tracking-widest text-sand uppercase cursor-pointer hover:text-primary-light";

const Footer: React.FC = () => {
  return (
    <footer className="relative w-full flex flex-col xl:flex-row justify-center bg-primary bg-opacity-[72%] h-[500px] md:h-[386px] md:mt-[200px] pb-20 md:pb-0">
      <div className="hidden md:block md:absolute md:top-[-40%] bg-gray xl:rounded-[14px] w-calc-form min-[1304px]:w-[1302px] h-[300px]">
        <div className="absolute top-10 xl:top-12 left-20">
          <Newsletter
            title="Get the latest news delivered to your inbox."
            description="Get access to the exciting stuff — exclusive new deals, product launches and more. Plus, get a 10% discount on your next order."
          />
        </div>
        <ProgressiveImage
          className="w-full h-full cover"
          src={FooterBin}
          placeholder={FooterBin}
          alt="BinFooter"
        />
      </div>

      <div className=" flex flex-col items-center justify-end w-full max-w-[1440px] h-full">
        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-5 xl:gap-20">
          <div className="flex flex-col md:flex-row items-center gap-2 xl:gap-14 ">
            {FOOTER_OPTIONS_1.map((el: string) => (
              <div className={itemsClass} key={el}>
                {el}
              </div>
            ))}
          </div>
          <ProgressiveImage
            className="w-[92px] h-[30px] cursor-pointer"
            src={FooterLogo}
            placeholder={FooterLogo}
            alt="LogoFooter"
          />
          <div className="flex flex-col md:flex-row items-center gap-2 xl:gap-14">
            {FOOTER_OPTIONS_2.map((el: string) => (
              <div className={itemsClass} key={el}>
                {el}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full items-center gap-2 max-w-[1302px] px-4 xl:px-0 justify-between border-t border-primary-dark mt-5 py-5 md:mt-10 md:py-10 ">
          <div className="flex flex-col md:flex-row items-center gap-1">
            <label className="brandon-grotesque text-[14px] leading[22px] text-sand">
              © 2021 biom. All rights reserved •
            </label>
            <label className="brandon-grotesque text-[14px] leading[22px] text-sand">
              Privacy Policy • Terms of Service
            </label>
          </div>
          <div className="flex items-center gap-2 ">
            {SOCIALS.map((el: TSocials) => (
              <div
                className={`flex items-center justify-center bg-sand rounded-full w-8 h-8 cursor-pointer
                ${el.id === 2 ? "p-3" : "p-2"}`}
                key={el.id}
              >
                <ProgressiveImage
                  src={el.icon}
                  placeholder={el.icon}
                  alt="LogoFooter"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
