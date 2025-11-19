// React import not required with the new JSX transform
import { Button } from "../../components/ui/button";
import { ContactInfoSection } from "./sections/ContactInfoSection";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SEO } from "../../components/SEO/SEO";

const socialMediaButtons = [
  {
    icon: "/facebook-1.svg",
    alt: "Facebook",
    left: "left-40",
    url: "https://www.facebook.com/pradip.k.chaudhary.1",
  },
  {
    icon: "/instagram.svg",
    alt: "Instagram",
    left: "left-[216px]",
    url: "https://www.instagram.com/pradipkumar__chaudhary/",
  },
  {
    icon: "/youtube.svg",
    alt: "You tube",
    left: "left-[328px]",
    url: "https://www.youtube.com/@devdatcreations4526",
  },
];

export const Contact = (): JSX.Element => {
  return (
    <div className="bg-white w-full relative">
      <SEO title="Contact" description="Contact and booking information for Pradip Kumar Chaudhary — email, phone, and social profiles." path="/contact" />
      <Header activePage="Contact" />

      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-40">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left: Contact form */}
            <div>
              <ContactInfoSection />
            </div>

            {/* Right: Contact details */}
            <aside>
              <h1 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-[#171a1f] text-3xl tracking-[0] leading-9 mb-6">
                Reach Out
              </h1>

              <div className="flex flex-col gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <img className="w-6 h-6" alt="Mail" src="/mail.svg" />
                  <div>
                    <div className="text-sm [font-family:'Open_Sans',Helvetica] font-normal text-[#171a1f]">Email</div>
                    <div className="text-lg [font-family:'Open_Sans',Helvetica] font-normal text-[#171a1fcc]">booking@actorportfolio.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <img className="w-6 h-6" alt="Phone" src="/phone.svg" />
                  <div>
                    <div className="text-sm [font-family:'Open_Sans',Helvetica] font-normal text-[#171a1f]">Phone</div>
                    <div className="text-lg [font-family:'Open_Sans',Helvetica] font-normal text-[#171a1fcc]">+977 986-0765125</div>
                  </div>
                </div>
              </div>

              <h2 className="[font-family:'Playfair_Display',Helvetica] font-medium text-[#171a1f] text-xl tracking-[0] leading-7 mb-4">
                Connect on Social Media
              </h2>

              <div className="flex items-center gap-3 mb-6">
                {socialMediaButtons.map((social, idx) => (
                  social.url ? (
                    <a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.alt}
                    >
                      <Button
                        variant="outline"
                        size="icon"
                        className="w-10 h-10 bg-white border border-solid border-[#dee1e6] rounded-md"
                      >
                        <img className="w-5 h-5" alt={social.alt} src={social.icon} />
                      </Button>
                    </a>
                  ) : (
                    <Button
                      key={idx}
                      variant="outline"
                      size="icon"
                      className="w-10 h-10 bg-white border border-solid border-[#dee1e6] rounded-md"
                    >
                      <img className="w-5 h-5" alt={social.alt} src={social.icon} />
                    </Button>
                  )
                ))}
              </div>

              <h2 className="[font-family:'Playfair_Display',Helvetica] font-medium text-[#171a1f] text-xl tracking-[0] leading-7 mb-4">
                Our Location
              </h2>

              <div className="flex items-center gap-3">
                <img className="w-6 h-6" alt="Home" src="/home-2-1.svg" />
                <div>
                  <div className="text-sm [font-family:'Open_Sans',Helvetica] font-normal text-[#171a1f]">Permanent address</div>
                  <div className="text-lg [font-family:'Open_Sans',Helvetica] font-normal text-[#171a1fcc]">Gaighat, Nepal</div>
                  <div className="text-sm [font-family:'Open_Sans',Helvetica] font-normal text-[#171a1f] mt-2">Current residence</div>
                  <div className="text-lg [font-family:'Open_Sans',Helvetica] font-normal text-[#171a1fcc]">Kathmandu, Nepal</div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
