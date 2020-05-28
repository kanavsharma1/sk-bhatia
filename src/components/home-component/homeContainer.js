import React from "react";
import { JumbotronBar } from "../jumbotron/jumbotron";
import { DescriptionSection } from "./DescriptionSection";
import bannerImage from "../../images/jumbotron.jpg";

export const HomeContainer = () => {
  return (
    <div>
      <JumbotronBar banner={bannerImage} />
      <DescriptionSection />
    </div>
  );
};
