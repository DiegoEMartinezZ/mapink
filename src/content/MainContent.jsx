import React from "react";
import LandingPage from "../components/landingPage/LandingPage";
import WhoWeAre from "../components/whoWeAre/WhoWeAre";
import Catalogue from "../components/catalogue/Catalogue";
import FAQ from "../components/FAQ/FAQ";

const MainContent = () => {
  return (
    <>
      <LandingPage />
      <WhoWeAre />
      <Catalogue />
      <FAQ />
    </>
  );
};

export default MainContent;
