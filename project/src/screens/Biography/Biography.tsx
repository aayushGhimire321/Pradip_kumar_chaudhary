// React import not required with the new JSX transform
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

const achievements = [
  {
    year: "2024",
    title: "Director",
    description: "Recent production at Mandala Theatre Nepal"
  },
  {
    year: "2020",
    title: "Writer & Director - Jhimke Mama",
    description: "Original play staged at Mandala Theatre Nepal"
  },
  {
    year: "2017",
    title: "Writer & Director - Masaantaar",
    description: "Political satire exploring superstitions in rural Nepal"
  },
  {
    year: "2017",
    title: "Director - Kalapattharmathi",
    description: "Production at Mandala Theatre Nepal"
  }
];

const training = [
  {
    institution: "Mandala Theatre Nepal",
    degree: "Member of Executive Board (NGO)",
    year: "Present"
  },
  {
    institution: "Mandala Theatre Nepal",
    degree: "Member of Company Board",
    year: "Present"
  }
];

export const Biography = (): JSX.Element => {
  return (
    <div className="bg-white w-full relative">
      <Header activePage="Biography" />

      <section className="relative w-full py-24 bg-white">
        <div className="container mx-auto px-6 md:px-40">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-24">
            <div className="aspect-[3/4] bg-slate-200 rounded-lg sticky top-8">
              <div className="w-full h-full bg-gradient-to-br from-slate-300 to-slate-400 rounded-lg" />
            </div>
            <div>
              <h1 className="[font-family:'Playfair_Display',Helvetica] font-bold text-[#18386e] text-5xl tracking-[0] leading-[60px] mb-8">
                Biography
              </h1>
              <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#171a1fcc] text-lg tracking-[0] leading-7 mb-6">
                Pradip Kumar Chaudhary is a distinguished theatre director, writer, and actor based in Kathmandu, Nepal. As a key member of Mandala Theatre Nepal, one of the country's most influential theatrical organizations, he has dedicated his career to creating meaningful performances rooted in Nepali culture and social justice.
              </p>
              <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#171a1fcc] text-lg tracking-[0] leading-7 mb-6">
                Serving on both the Executive Board and Company Board of Mandala Theatre Nepal, Pradip has been instrumental in shaping the organization's artistic direction. His work focuses on exploring traditional theatrical forms while addressing contemporary social issues through politically charged narratives and thought-provoking storytelling.
              </p>
              <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#171a1fcc] text-lg tracking-[0] leading-7 mb-6">
                As a director and playwright, Pradip has created several acclaimed productions including "Masaantaar" (2017), a political satire that uses the age-old practice of shamanism to examine Nepal's political landscape and rural superstitions. His other notable works include "Kalapattharmathi" and "Jhimke Mama" (2020), an original play based on a real story that explores themes of identity and village life.
              </p>
              <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#171a1fcc] text-lg tracking-[0] leading-7">
                Beyond directing, Pradip has also performed as an actor in various productions, including "Sunkeshari," demonstrating his versatility as a theatre artist. His approach combines deep cultural understanding with modern theatrical techniques, creating performances that resonate with both local and international audiences.
              </p>
            </div>
          </div>

          <div className="mb-24">
            <h2 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-[#171a1f] text-4xl tracking-[0] leading-[48px] mb-12">
              Professional Roles & Affiliations
            </h2>
            <div className="grid grid-cols-2 gap-8">
              {training.map((item, index) => (
                <div key={index} className="border border-solid border-[#dee1e6] rounded-lg p-8">
                  <h3 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-[#171a1f] text-2xl tracking-[0] leading-8 mb-3">
                    {item.institution}
                  </h3>
                  <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#171a1f] text-lg tracking-[0] leading-7 mb-2">
                    {item.degree}
                  </p>
                  <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#171a1fcc] text-base tracking-[0] leading-6">
                    {item.year}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-[#171a1f] text-4xl tracking-[0] leading-[48px] mb-12">
              Major Works & Productions
            </h2>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex gap-8 items-start pb-6 border-b border-solid border-[#dee1e6] last:border-0">
                  <span className="[font-family:'Playfair_Display',Helvetica] font-bold text-[#18386e] text-3xl tracking-[0] leading-9 min-w-[80px]">
                    {achievement.year}
                  </span>
                  <div className="flex-1">
                    <h3 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-[#171a1f] text-2xl tracking-[0] leading-8 mb-2">
                      {achievement.title}
                    </h3>
                    <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#171a1fcc] text-lg tracking-[0] leading-7">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
