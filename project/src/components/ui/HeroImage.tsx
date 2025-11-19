type HeroImageProps = {
  src: string;
  alt?: string;
  caption?: string;
  className?: string;
  rotate?: number; // degrees to rotate the polaroid
};

export default function HeroImage({
  src,
  alt = "",
  caption,
  className = "",
  rotate = -6
}: HeroImageProps) {
  return (
    <div className={`flex items-start justify-center ${className}`}>
      {/* outer rotated container (doesn't include hover translate) */}
      <div style={{ transform: `rotate(${rotate}deg)` }} className="inline-block">
        <div className="relative transform transition-transform duration-300 hover:-translate-y-2">
          {/* polaroid white frame */}
          <div className="bg-white rounded-md shadow-2xl p-3 md:p-4 w-full">
              <div className="bg-slate-100 rounded-sm overflow-hidden w-[300px] h-[380px] md:w-[420px] md:h-[520px]">
              <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover block"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* caption area like a polaroid foot */}
            <div className="mt-3 text-center">
              <p className="text-sm font-medium text-[#171a1f]">{caption}</p>
            </div>
          </div>

          {/* subtle drop shadow and corner accent to sell the polaroid look */}
          <div className="absolute -inset-1 -z-10 rounded-md blur-md opacity-30 bg-black/10" />
        </div>
      </div>
    </div>
  );
}
