import React from "react";
import { Button } from "../../../../components/ui/button";

const navigationItems = [
  { label: "Home", active: false },
  { label: "Biography", active: false },
  { label: "Portfolio", active: false },
  { label: "Media", active: false },
  { label: "Contact", active: true },
];

const socialMediaIcons = [
  { alt: "Facebook", src: "/facebook.svg" },
  { alt: "Instagram", src: "/instagram.svg" },
  { alt: "Linked in", src: "/linkedin-1.svg" },
  { alt: "You tube", src: "/youtube-1.svg" },
];

export const SocialMediaSection = (): JSX.Element => {
  return (
    <header className="w-full h-16 bg-white shadow-[0px_0px_1px_#171a1f0d,0px_0px_2px_#171a1f14]">
      <nav className="w-full h-full flex items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#18386e] rounded-md flex items-center justify-center">
            <img className="w-[22px] h-[22px]" alt="Gem" src="/gem.svg" />
          </div>
          <h1 className="[font-family:'Playfair_Display',Helvetica] font-bold text-[#18386e] text-xl tracking-[0] leading-5 whitespace-nowrap">
            Pradip Kumar Chaudhary
          </h1>
        </div>

        <ul className="flex items-center gap-6">
          {navigationItems.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className={`[font-family:'Open_Sans',Helvetica] text-sm tracking-[0] leading-[22px] whitespace-nowrap ${
                  item.active
                    ? "font-semibold text-[#18386e]"
                    : "font-normal text-[#171a1f]"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {socialMediaIcons.map((icon, index) => (
            <Button
              key={index}
              variant="ghost"
              size="icon"
              className="w-10 h-10 rounded-md p-0"
            >
              <img className="w-4 h-4" alt={icon.alt} src={icon.src} />
            </Button>
          ))}
        </div>
      </nav>
    </header>
  );
};
