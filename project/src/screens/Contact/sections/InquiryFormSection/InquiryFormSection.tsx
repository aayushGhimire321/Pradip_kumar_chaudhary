import React from "react";
import { Separator } from "../../../../components/ui/separator";

const socialIcons = [
  { src: "/container-3.svg", alt: "Social icon 1" },
  { src: "/container.svg", alt: "Social icon 2" },
  { src: "/container-1.svg", alt: "Social icon 3" },
  { src: "/container-2.svg", alt: "Social icon 4" },
];

const sectionLinks = [
  { label: "Home" },
  { label: "Biography" },
  { label: "Portfolio" },
  { label: "Media" },
  { label: "Contact" },
];

const connectLinks = [{ label: "Social Media" }, { label: "Booking" }];

export const InquiryFormSection = (): JSX.Element => {
  return (
    <footer className="w-full bg-white py-11">
      <div className="container mx-auto px-6 md:px-40">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-10 md:gap-24">
          <div className="flex flex-col gap-10">
            <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#171a1f] text-base tracking-[0] leading-6">
              Elegant portfolio for an actor.
            </p>
            <div className="flex gap-6">
              {socialIcons.map((icon, index) => (
                <button
                  key={index}
                  className="w-5 h-5 flex items-center justify-center hover:opacity-70 transition-opacity"
                  aria-label={icon.alt}
                >
                  <img className="w-5 h-5" alt={icon.alt} src={icon.src} />
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-[#171a1f] text-base tracking-[0] leading-6">
              Sections
            </h3>
            <nav className="flex flex-col gap-3">
              {sectionLinks.map((link, index) => (
                <button
                  key={index}
                  className="text-left opacity-80 [font-family:'Open_Sans',Helvetica] font-normal text-[#171a1f] text-sm tracking-[0] leading-5 hover:opacity-100 transition-opacity"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-[#171a1f] text-base tracking-[0] leading-6">
              Connect
            </h3>
            <nav className="flex flex-col gap-3">
              {connectLinks.map((link, index) => (
                <button
                  key={index}
                  className="text-left opacity-80 [font-family:'Open_Sans',Helvetica] font-normal text-[#171a1f] text-sm tracking-[0] leading-5 hover:opacity-100 transition-opacity"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        <Separator className="mt-16" />
      </div>
    </footer>
  );
};
