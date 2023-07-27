import React from "react";
import { MENU_ITEMS, MENU_CRUCIAL } from "../../constants/menu";
import { ProgressiveImage } from "../../components";
import { TMenu } from "../../helpers/types";

import Logo from "../../assets/logo/logo.svg";

const NavigationDesktop: React.FC = () => {
  return (
    <nav className="hidden md:flex sticky top-0 bg-white w-full justify-between items-center max-w-[1440px] h-[68px] px-12 z-30">
      <div className="flex items-center gap-3">
        {MENU_ITEMS.map((item: TMenu) => (
          <div
            className="brandon-grotesque-bold text-[15px] leading-[22px] tracking-widest text-black uppercase hover:text-gray-500 cursor-pointer"
            key={item.id}
          >
            {item.title}
          </div>
        ))}
      </div>
      <figure>
        <ProgressiveImage src={Logo} placeholder={Logo} alt="Logo" />
      </figure>
      <div className="flex items-center gap-5">
        {MENU_CRUCIAL.map((item: TMenu) => (
          <div
            className="brandon-grotesque-bold flex items-center text-[15px] leading-[22px] tracking-widest text-black uppercase hover:text-gray-500 cursor-pointer"
            key={item.id}
          >
            <span>{item.title}</span>
            {item.icon && (
              <div className="relative">
                <ProgressiveImage
                  src={item.icon ?? ""}
                  placeholder={item.icon ?? ""}
                  alt="Cart"
                />
                <div className="absolute right-[-40%] top-[-30%] bg-gold w-5 h-5 rounded-full border border-white text-white flex items-center justify-center">
                  <span className="text-xs absolute right-[18%] top-[5%]">
                    {/* SHOULD ADDED DYNAMIC */}0
                  </span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default NavigationDesktop;
