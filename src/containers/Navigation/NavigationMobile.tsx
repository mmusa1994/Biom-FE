import React from "react";
import { MOBILE_MENU_ITEMS } from "../../constants/mobile-menu";

const MobileNavigation: React.FC = () => {
  return (
    <div
      className="w-[359px] h-20 px-3 py-6 bg-white rounded-lg shadow border border-slate-800 
                    justify-center items-center flex md:hidden space-x-10 fixed bottom-2 z-20"
    >
      {MOBILE_MENU_ITEMS.map(({ Icon, label }, index: number) => (
        <div
          key={index}
          className="flex flex-col justify-start items-center gap-1.5 text-gray-500 hover:text-gray-100"
        >
          <Icon className="w-6 h-6 relative" />
          <div className="text-xs leading-none font-medium">{label}</div>
        </div>
      ))}
    </div>
  );
};

export default MobileNavigation;
