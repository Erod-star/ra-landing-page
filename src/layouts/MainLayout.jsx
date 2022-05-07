import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

// Components
import Navbar from "../components/Navbar";
import Bibliographies from "../components/Bibliographies";
import ActivitiesPortfolio from "../components/ActivitiesPortfolio";
import Metaverse from "../components/Metaverse";
import RAVideos from "../components/RAVideros";
import BibliographicCards from "../components/BibliographicCards";

const MainLayout = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);

  return (
    <div>
      <Navbar />
      <Metaverse />
      <RAVideos />
      <BibliographicCards />
      <ActivitiesPortfolio />
      <Bibliographies />
    </div>
  );
};

export default MainLayout;
