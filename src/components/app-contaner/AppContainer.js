import React from "react";
import { NavBar } from "../navbar/NavBar";
import { HomeContainer } from "../home-component/homeContainer";
import { Route } from "react-router";
import { Services } from "../services-component/services";

export const AppContainer = () => {
  return (
    <div>
      <NavBar />
      <Route path="/services" exact component={Services} />
      <Route path="/home" exact component={HomeContainer} />
      <Route path="/" exact component={HomeContainer} />
    </div>
  );
};
