// React import not required with the new JSX transform
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SEO } from "../../components/SEO/SEO";

// Media sourced from Mandala Theatre (posters and production images)
const videos = [
  {
    title: "Aakashko Bato — Production Page",
    type: "Theatre Production",
    year: "2024",
    source: "https://mandalatheatre.com/productions/aakashko-bato-the-sky-route/",
  },
  {
    title: "Jhimke Mama — Production Page",
    type: "Theatre Production",
    year: "2020",
    source: "https://mandalatheatre.com/productions/jhimke-mama/"
  },
  {
    title: "Masaantaar — Production Page",
    type: "Theatre Production",
    year: "2017",
    source: "https://mandalatheatre.com/productions/masaantaar/"
  }
];

const photos = [
  {
    title: "Jhimke Mama Poster",
    category: "Poster",
    src: "https://mandalatheatre.com/wp-content/uploads/2020/01/Jhimke-Mama-Poster.jpg",
    source: "https://mandalatheatre.com/productions/jhimke-mama/"
  },
  {
    title: "Milarepa (Event Thumbnail)",
    category: "Event",
    src: "https://mandalatheatre.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-16-at-12.50.36_1d5bb35a-819x1024.avif",
    source: "https://mandalatheatre.com/events/milarepa/"
  },
  {
    title: "Aakashko Bato Poster (page)",
    category: "Poster",
    src: "/images/aakashkobato.webp",
    source: "https://mandalatheatre.com/productions/aakashko-bato-the-sky-route/"
  },
  
];

export const Media = (): JSX.Element => {
  return (
    <div className="bg-white w-full relative">
      <SEO title="Media" description="Media gallery — posters, photos and video links for Pradip Kumar Chaudhary's theatrical work." path="/media" />
      <Header activePage="Media" />

      <section className="relative w-full py-12 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-40">
          <h1 className="[font-family:'Playfair_Display',Helvetica] font-bold text-[#18386e] text-5xl tracking-[0] leading-[60px] mb-6">
            Media Gallery
          </h1>
          <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#171a1fcc] text-lg tracking-[0] leading-7 mb-16 max-w-3xl">
            Explore video content and photography from my various performances and projects. From trailers to behind-the-scenes footage, get an inside look at the creative process.
          </p>

          <div className="mb-24">
            <h2 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-[#171a1f] text-4xl tracking-[0] leading-[48px] mb-12">
              Video Content
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {videos.map((video, index) => (
                <a
                  key={index}
                  href={video.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block border border-solid border-[#dee1e6] rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="aspect-video bg-slate-200 relative overflow-hidden">
                    <img
                      src={video.source + "thumb.jpg"}
                      alt={video.title}
                      className="w-full h-full object-cover"
                      onError={(e: any) => {
                        // fall back to gradient if remote thumb not available
                        e.currentTarget.style.display = "none";
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white transition-colors">
                        <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-[#18386e] border-b-8 border-b-transparent ml-1" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-[#18386e] text-sm tracking-[0] leading-5">
                        {video.type}
                      </span>
                      <span className="[font-family:'Open_Sans',Helvetica] font-normal text-[#171a1fcc] text-sm tracking-[0] leading-5">
                        {video.year}
                      </span>
                    </div>
                    <h3 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-[#171a1f] text-xl tracking-[0] leading-7">
                      {video.title}
                    </h3>
                    <div className="mt-3 text-sm text-slate-500">
                      <span>Source: </span>
                      <a href={video.source} target="_blank" rel="noopener noreferrer" className="text-[#18386e] underline">Mandala Theatre</a>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-[#171a1f] text-4xl tracking-[0] leading-[48px] mb-12">
              Photo Gallery
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {photos.map((photo, index) => (
                <a
                  key={index}
                  href={photo.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block overflow-hidden rounded-lg"
                >
                  <div className="aspect-square bg-slate-200 relative overflow-hidden">
                    <img
                      src={photo.src}
                      alt={photo.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute left-3 top-3 bg-white/80 text-xs px-2 py-1 rounded">{photo.category}</div>
                  </div>
                  <div className="pt-3">
                    <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#171a1fcc] text-sm tracking-[0] leading-5">
                      {photo.title}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
