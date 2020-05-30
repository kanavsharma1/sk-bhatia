import React from "react";
import { NavBar } from "../navbar/NavBar";
import { HomeContainer } from "../home-component/homeContainer";
import { Route } from "react-router";
import { Services } from "../services-component/services";
import "./app-container.css";
import { SideDrawer } from "../SideDrawer/SideDrawer";
import { Backdrop } from "../Backdrop/Backdrop";

export const AppContainer = () => {
  const [menuItems] = React.useState(["Home", "About", "Services", "Sectors"]);
  const [drawerOpen, setDrawerOpen] = React.useState({
    isDrawerOpen: false,
  });
  const drawerToggler = () => {
    setDrawerOpen({ isDrawerOpen: !drawerOpen.isDrawerOpen });
  };

  const backdropClickHandler = () => {
    setDrawerOpen({ isDrawerOpen: false });
  };
  let backdrop;
  if (drawerOpen.isDrawerOpen) {
    backdrop = <Backdrop clickHandler={backdropClickHandler} />;
  }
  return (
    <div className="Container">
      <NavBar drawerClickHandler={drawerToggler} menuItems={menuItems} />
      <SideDrawer show={drawerOpen.isDrawerOpen} menuItems={menuItems} />
      {backdrop}
      <main>
        <Route path="/services" exact component={Services} />
        <Route path="/home" exact component={HomeContainer} />
        <Route path="/" exact component={HomeContainer} />
      </main>
    </div>
  );
};
