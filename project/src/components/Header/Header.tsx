import { Button } from "../ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

interface HeaderProps {
  activePage: string;
}

const navigationItems = [
  { label: "Home", path: "/" },
  { label: "Biography", path: "/biography" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Media", path: "/media" },
  { label: "Contact", path: "/contact" },
];

const socialMediaIcons = [
  { alt: "Facebook", src: "/facebook.svg", url: "https://www.facebook.com/pradip.k.chaudhary.1" },
  { alt: "Instagram", src: "/instagram.svg", url: "https://www.instagram.com/pradipkumar__chaudhary/" },
  { alt: "YouTube", src: "/youtube-1.svg", url: "https://www.youtube.com/@devdatcreations4526" },
];

export const Header = ({ activePage }: HeaderProps): JSX.Element => {
  const [openMobile, setOpenMobile] = useState(false);

  return (
    <header className="w-full bg-white/70 backdrop-blur-sm sticky top-0 z-40 shadow-sm border-b border-slate-100">
      <nav className="max-w-[1200px] mx-auto flex items-center justify-between gap-6 px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#18386e] text-white rounded-md flex items-center justify-center shadow">
            <img className="w-5 h-5" alt="Gem" src="/gem.svg" />
          </div>
          <div>
            <h1 className="[font-family:'Playfair_Display',Helvetica] font-bold text-[#18386e] text-lg tracking-[0] leading-5">
              Pradip Kumar Chaudhary
            </h1>
            <p className="text-xs text-gray-500">Actor • Director • Playwright</p>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navigationItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className={`[font-family:'Open_Sans',Helvetica] text-sm tracking-[0] leading-[22px] whitespace-nowrap px-3 py-2 rounded-lg transition-all ${
                    item.label === activePage
                      ? "font-semibold text-[#18386e] bg-[#18386e]/10 shadow-inner"
                      : "font-normal text-[#171a1f] hover:text-[#18386e] hover:bg-[#f3f6fb]"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            {socialMediaIcons.map((icon, index) => (
              <a
                key={index}
                href={icon.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={icon.alt}
                className="inline-block"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-10 h-10 rounded-md p-0 hover:bg-[#f6f9ff]"
                >
                  <img className="w-4 h-4" alt={icon.alt} src={icon.src} />
                </Button>
              </a>
            ))}
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setOpenMobile((v) => !v)}
            aria-label="Toggle navigation"
            className="w-10 h-10 rounded-md flex items-center justify-center border border-gray-200"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#18386e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d={openMobile ? "M6 18L18 6M6 6l12 12" : "M3 12h18M3 6h18M3 18h18"} />
            </svg>
          </button>
        </div>
      </nav>

      {openMobile && (
        <div className="md:hidden border-t border-gray-100 bg-white/95">
          <div className="px-6 py-4 flex flex-col gap-3">
            {navigationItems.map((item, idx) => (
              <Link key={idx} to={item.path} className="py-2 px-3 rounded-md hover:bg-slate-50">
                {item.label}
              </Link>
            ))}
            <div className="flex gap-3 mt-2">
              {socialMediaIcons.map((icon, idx) => (
                <a
                  key={idx}
                  href={icon.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={icon.alt}
                >
                  <img src={icon.src} alt={icon.alt} className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
