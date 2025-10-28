import { useEffect, useState } from "react";

type EnhancedImageProps = {
  src: string;
  alt?: string;
  className?: string;
  contrast?: number; // -100..100
  brightness?: number; // -255..255
  sharpen?: boolean;
};

const clamp = (v: number) => Math.max(0, Math.min(255, Math.round(v)));

function applyContrastBrightness(imageData: ImageData, contrast: number, brightness: number) {
  // contrast: -100..100, brightness: -255..255
  const data = imageData.data;
  const c = (contrast / 100) * 255;
  const factor = (259 * (c + 255)) / (255 * (259 - c));
  for (let i = 0; i < data.length; i += 4) {
    data[i] = clamp(factor * (data[i] - 128) + 128 + brightness); // R
    data[i + 1] = clamp(factor * (data[i + 1] - 128) + 128 + brightness); // G
    data[i + 2] = clamp(factor * (data[i + 2] - 128) + 128 + brightness); // B
    // alpha left unchanged
  }
}

function applySharpen(imageData: ImageData) {
  const w = imageData.width;
  const h = imageData.height;
  const src = imageData.data;
  const out = new Uint8ClampedArray(src.length);
  // simple sharpen kernel
  // 0  -1   0
  // -1  5  -1
  // 0  -1   0
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      for (let c = 0; c < 3; c++) {
        const idx = (y * w + x) * 4 + c;
        let val = 0;
        // center *5
        val += 5 * src[idx];
        // neighbors -1
        const neighbors = [
          [x, y - 1],
          [x, y + 1],
          [x - 1, y],
          [x + 1, y]
        ];
        for (const [nx, ny] of neighbors) {
          if (nx >= 0 && nx < w && ny >= 0 && ny < h) {
            val -= src[(ny * w + nx) * 4 + c];
          }
        }
        out[idx] = clamp(val);
      }
      // copy alpha
      const aIdx = (y * w + x) * 4 + 3;
      out[aIdx] = src[aIdx];
    }
  }
  imageData.data.set(out);
}

export default function EnhancedImage({
  src,
  alt = "",
  className,
  contrast = 8,
  brightness = 4,
  sharpen = true
}: EnhancedImageProps): JSX.Element {
  const [processed, setProcessed] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    // run only in browser
    if (typeof window === "undefined") return;

    const img = new Image();
    img.crossOrigin = "anonymous"; // allow canvas operations if served same-origin
    img.src = src;
    img.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        ctx.drawImage(img, 0, 0);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        if (contrast !== 0 || brightness !== 0) {
          applyContrastBrightness(imageData, contrast, brightness);
        }
        if (sharpen) {
          applySharpen(imageData);
        }
        ctx.putImageData(imageData, 0, 0);
        const dataUrl = canvas.toDataURL("image/png");
        if (mounted) setProcessed(dataUrl);
      } catch (err) {
        // If canvas is tainted or any error occurs, fallback to original src
        if (mounted) setProcessed(src);
      }
    };
    img.onerror = () => {
      if (mounted) setProcessed(src);
    };

    return () => {
      mounted = false;
    };
  }, [src, contrast, brightness, sharpen]);

  return (
    // use processed data url if available, otherwise fallback to original src
    // keeping the original file intact on disk
    <img src={processed ?? src} alt={alt} className={className} />
  );
}
