import { Button } from "@/components/ui/button";
import React, { JSX } from "react";

const navigationItems = [
  { label: "Home", active: true },
  { label: "About", active: false },
  { label: "Services", active: false },
  { label: "Portfolio", active: false },
  { label: "Contact", active: false },
];

export const NavigationBarSection = (): JSX.Element => {
  return (
    <header className="w-full bg-white border-b border-border">
      <div className="flex h-20 items-center justify-between px-28">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-[url(/image.png)] bg-cover bg-center rounded" />
          <div className="[font-family:'Inter-Medium',Helvetica] font-medium text-[#5ba8a8] text-2xl tracking-[0.07px] leading-9 whitespace-nowrap">
            HDA Interior
          </div>
        </div>

        <nav className="flex items-center gap-8">
          {navigationItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className={`[font-family:'Inter-Regular',Helvetica] font-normal text-base tracking-[-0.31px] leading-6 whitespace-nowrap ${
                item.active ? "text-[#5ba8a8]" : "text-[#2d3748]"
              }`}
            >
              {item.label}
            </a>
          ))}
          <Button className="bg-[#e89b7c] hover:bg-[#d88a6b] text-white rounded-lg px-6 h-10 [font-family:'Inter-Regular',Helvetica] font-normal text-base tracking-[-0.31px] leading-6">
            Admin Login
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default NavigationBarSection;
