import React from "react";
import { NavBar } from "../navbar/NavBar";
import { HomeContainer } from "../home-component/homeContainer";

export const AppContainer = () => {
  return (
    <div>
      <NavBar />
      <HomeContainer />
    </div>
  );
};
