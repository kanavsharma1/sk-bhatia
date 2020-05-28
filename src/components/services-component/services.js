import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { JumbotronBar } from "../jumbotron/jumbotron";
import BannerServiceImage from "../../images/services-jumbotron.jpg";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export const Services = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <JumbotronBar banner={BannerServiceImage} />
    </Grid>
  );
};
