import React from "react";
import { JumbotronBar } from "../jumbotron/jumbotron";
import { DescriptionSection } from "./DescriptionSection";

export const HomeContainer = () => {
  return (
    <div>
      <JumbotronBar />
      <DescriptionSection />
    </div>
  );
};
