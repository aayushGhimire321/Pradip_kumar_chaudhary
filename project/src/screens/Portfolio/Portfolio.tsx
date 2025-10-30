import { useState } from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/ui/button";

const categories = ["All", "Director", "Actor", "Writer"];

const portfolioItems = [
  {
    title: "Barista Balaram",
    category: "Actor",
    year: "2025",
    role: "Actor",
    description: "Recently released film in which he played the role of Maila.",
    image: "/images/barista-balaram_2.jpg",
  },
  {
    title: "Hostel Returns",
    category: "Actor",
    year: "2015",
    role: "Actor (Breakout role: 'Pk Don')",
    description: "Breakout film role in the popular Nepali movie 'Hostel Returns' (2015).",
    image: "/images/hostel_return2.jpg",
  },
  {
    title: "Jhimke Mama",
    category: "Director",
    year: "2020",
    role: "Writer & Director",
    description: "Original play based on a real story told by advocate Durga Prasad Pandey, set in imaginary village Deurali",
    image: "/images/jhimkey_mama.jpg",
  },
  {
    title: "Masaantaar",
    category: "Director",
    year: "2017",
    role: "Writer & Director",
    description: "Story of a young boy and his sister who tries to go against superstitions but is threatened by the society and people who have strong belief on ghosts and traditional healers.",
    image: "/images/masantaar.jpg",
  },
  {
    title: "Kalapattharmathi",
    category: "Director",
    year: "2017",
    role: "Director",
    description: "Theatrical production at Mandala Theatre Nepal",
    image: "/images/kaalaa_pathar_mathi.jpg",
  },
  {
    title: "Aakash Ko Bato",
    category: "Director",
    year: "—",
    role: "Director",
    description:
      "Stage production presented by Mandala Theatre (Aakash Ko Bato / The Sky Route). Visit Mandala Theatre for production details and credits.",
    image: "/images/aakashkobato.webp",
  },
  {
    title: "Sunkeshari",
    category: "Actor",
    year: "2023",
    role: "Actor",
    description: "A play based on a Karnali folk story; premiered at Rongo Harshe Bingo Barshe (Dhaka, 2012) and opened Kathmandu International Theatre Festival 2012; later staged at major festivals including Bharat Rang Mahotsav.",
    image: "/images/Final_sunkeshari-poster-KTM.jpg",
  },
  {
    title: "Masaantaar",
    category: "Writer",
    year: "2017",
    role: "Playwright",
    description: "60-minute play exploring contradictions between conservative and modern mindsets in rural villages",
    image: "/images/masantaar.jpg",
  },
  {
    title: "Jhimke Mama",
    category: "Writer",
    year: "2020",
    role: "Playwright",
    description: "Original play based on a real story told by advocate Durga Prasad Pandey, set in imaginary village Deurali",
    image: "/images/jhimkey_mama.jpg",
  },
];

export const Portfolio = (): JSX.Element => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = (() => {
    if (activeCategory !== "All") {
      return portfolioItems.filter((item) => item.category === activeCategory);
    }

    // When viewing "All", dedupe items by title so the same production
    // (which may have multiple entries for different roles) only appears once.
    const seen = new Set<string>();
    return portfolioItems.filter((item) => {
      const key = (item.title || "").toString().toLowerCase().trim();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  })();

  return (
    <div className="bg-white w-full min-w-[1440px] relative">
      <Header activePage="Portfolio" />

      <section className="relative w-full py-24 bg-white">
        <div className="container mx-auto px-40">
          <h1 className="[font-family:'Playfair_Display',Helvetica] font-bold text-[#18386e] text-5xl tracking-[0] leading-[60px] mb-6 text-center">
            Portfolio
          </h1>
          <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#171a1fcc] text-lg tracking-[0] leading-7 mb-12 text-center max-w-3xl mx-auto">
            A collection of theatrical works spanning directing, writing, and acting. Each production explores Nepali culture, social issues, and the human experience through powerful storytelling.
          </p>

          <div className="flex justify-center gap-4 mb-16">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setActiveCategory(category)}
                variant={activeCategory === category ? "default" : "outline"}
                className={
                  activeCategory === category
                    ? "bg-[#18386e] hover:bg-[#18386e]/90 text-white px-8"
                    : "border-[#dee1e6] text-[#171a1f] hover:bg-slate-50 px-8"
                }
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="group cursor-pointer border border-solid border-[#dee1e6] rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="aspect-[4/5] bg-slate-200 overflow-hidden">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-slate-300 to-slate-400 group-hover:scale-105 transition-transform duration-300" />
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-[#18386e] text-sm tracking-[0] leading-5">
                      {item.category}
                    </span>
                    <span className="[font-family:'Open_Sans',Helvetica] font-normal text-[#171a1fcc] text-sm tracking-[0] leading-5">
                      {item.year}
                    </span>
                  </div>
                  <h3 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-[#171a1f] text-xl tracking-[0] leading-7 mb-2">
                    {item.title}
                  </h3>
                  <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#171a1f] text-base tracking-[0] leading-6 mb-2">
                    {item.role}
                  </p>
                  <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#171a1fcc] text-sm tracking-[0] leading-5">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
