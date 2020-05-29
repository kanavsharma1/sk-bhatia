import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { JumbotronBar } from "../jumbotron/jumbotron";
import BannerServiceImage from "../../images/services-jumbotron.jpg";

export const Services = () => {
  return (
    <Grid container>
      <JumbotronBar banner={BannerServiceImage} />
    </Grid>
  );
};
