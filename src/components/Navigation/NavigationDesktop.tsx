import React from "react";
import { MENU_ITEMS, MENU_CRUCIAL } from "../../constants/menu";
import { ProgressiveImage } from "..";
import { IMenu } from "../../helpers/types";

import Logo from "../../assets/logo/logo.svg";
import Cart from "../../assets/icons/cart.svg";

type Props = {};

const NavigationDesktop = (props: Props) => {
  return (
    <nav className="sticky top-0 bg-white w-full flex justify-between items-center max-w-[1440px] h-[68px]">
      <div className="flex items-center gap-3">
        {MENU_ITEMS.map((item: IMenu) => (
          <div
            className="menu-item font-semibold text-[15px] leading-6 tracking-wider text-black uppercase hover:text-gray-500 cursor-pointer"
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
        {MENU_CRUCIAL.map((item: IMenu) => (
          <div
            className="menu-item font-semibold text-[15px] leading-6 tracking-wider text-black uppercase hover:text-gray-500 cursor-pointer"
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
