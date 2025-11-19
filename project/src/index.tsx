import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./screens/Home";
import { Biography } from "./screens/Biography";
import { Portfolio } from "./screens/Portfolio";
import { Media } from "./screens/Media";
import { Contact } from "./screens/Contact";
import Analytics from "./lib/analytics";
import ConsentBanner from "./components/ConsentBanner/ConsentBanner";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Analytics />
      <ConsentBanner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/biography" element={<Biography />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/media" element={<Media />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
