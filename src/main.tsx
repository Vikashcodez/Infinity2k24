import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import "./index.css";
import Events from "./pages/Events";
import Home from "./pages/Homepage";
import SponsorsPage from "./pages/SponsorsPage";
import GalleryPage from "./pages/GalleryPage";
import OurTeamPage from "./pages/OurTeamPage";
import Workshop from "./pages/Workshop";

const rootElement = document.getElementById("root");

const routing = (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/workshop" element={<Workshop price={0} qty={0} setQty={function (): void {
          throw new Error("Function not implemented.");
        } } />} />
        <Route path="/sponsors" element={<SponsorsPage />} />
        <Route path="/our-team" element={<OurTeamPage />} />
      </Route>
    </Routes>
  </Router>
);

ReactDOM.createRoot(rootElement!).render(
  <React.StrictMode>
    { routing }
    {/* <StarsCanvas/> */}
  </React.StrictMode>
);
