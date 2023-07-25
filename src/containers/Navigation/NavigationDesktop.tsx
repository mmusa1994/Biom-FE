import React from "react";
import { MENU_ITEMS, MENU_CRUCIAL } from "../../constants/menu";
import { ProgressiveImage } from "../../components";
import { TMenu } from "../../helpers/types";

import Logo from "../../assets/logo/logo.svg";
import Cart from "../../assets/icons/cart.svg";

const NavigationDesktop: React.FC = () => {
  return (
    <nav className="hidden lg:flex sticky top-0 bg-white w-full justify-between items-center max-w-[1440px] h-[68px] px-12 z-30">
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
      <div className="flex items-center gap-3">
        {MENU_CRUCIAL.map((item: TMenu) => (
          <div
            className="brandon-grotesque-bold text-[15px] leading-[22px] tracking-widest text-black uppercase hover:text-gray-500 cursor-pointer"
            key={item.id}
          >
            {item.title}
          </div>
        ))}
        <ProgressiveImage src={Cart} placeholder={Cart} alt="Cart" />
      </div>
    </nav>
  );
};

export default NavigationDesktop;
