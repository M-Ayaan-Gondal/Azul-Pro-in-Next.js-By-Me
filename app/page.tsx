import React from "react";
import Hero from "./components/Hero/page";
import DemandingClothesSection from "./components/demandingClothesSection/page";
import ColorSeperator from "./components/colorSeperator/page"
import OurGoal from "./components/ourGoalSection/page";

const page = () => {
  return (
    <>
      <div className="parent">
        <Hero />
        <DemandingClothesSection />
        <ColorSeperator />
        <OurGoal />
      </div>
    </>
  );
};

export default page;
