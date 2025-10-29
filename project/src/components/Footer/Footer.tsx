import { Separator } from "../ui/separator";
import { Link } from "react-router-dom";

const socialIcons = [
  { src: "/container-3.svg", alt: "Facebook", url: "https://www.facebook.com/pradip.k.chaudhary.1" },
  { src: "/container.svg", alt: "Instagram", url: "https://www.instagram.com/pradipkumar__chaudhary/" },
  // YouTube (set to the provided channel)
  { src: "/container-2.svg", alt: "YouTube", url: "https://www.youtube.com/@devdatcreations4526" },
];

const sectionLinks = [
  { label: "Home", path: "/" },
  { label: "Biography", path: "/biography" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Media", path: "/media" },
  { label: "Contact", path: "/contact" },
];

export const Footer = (): JSX.Element => {
  return (
  <footer className="w-full bg-[#18386e] text-white pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center shadow-md">
                <img className="w-5 h-5 filter brightness-0" alt="Gem" src="/gem.svg" />
              </div>
              <h3 className="[font-family:'Playfair_Display',Helvetica] font-bold text-white text-xl">
                Pradip Kumar Chaudhary
              </h3>
            </div>
            <p className="text-sm text-white max-w-md">
              Theatre director, playwright and performer. Creating culturally rooted productions that engage communities and spark social conversations.
            </p>

            <div className="flex items-center gap-3 mt-3">
              {socialIcons.map((icon, index) => (
                <a
                  key={index}
                  href={icon.url ?? '#'}
                  aria-label={icon.alt}
                  className="w-9 h-9 rounded-md flex items-center justify-center hover:bg-white/10 transition shadow-sm"
                  target={icon.url && icon.url !== '#' ? '_blank' : undefined}
                  rel={icon.url && icon.url !== '#' ? 'noopener noreferrer' : undefined}
                >
                  {/* icons are SVG dark variants, invert for white on blue background */}
                  <img className="w-5 h-5 filter invert brightness-150" alt={icon.alt} src={icon.src} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white">
              {sectionLinks.map((link, i) => (
                <li key={i}>
                  <Link to={link.path} className="text-white hover:underline transition underline-offset-2">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Stay in touch</h4>
            <p className="text-sm text-white mb-3">Subscribe for occasional news about productions and events.</p>
            <form className="flex gap-2">
              {/* keep input readable on dark bg */}
              <input aria-label="Email" type="email" placeholder="Your email" className="flex-1 px-3 py-2 rounded-md bg-white text-[#071024]" />
              {/* White subscribe button with dark text for contrast */}
              <button type="submit" className="bg-white text-[#071024] px-4 py-2 rounded-md shadow">Subscribe</button>
            </form>
          </div>
        </div>

        <Separator className="my-8 border-white/20" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white">
          <div>© {new Date().getFullYear()} Pradip Kumar Chaudhary. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};
