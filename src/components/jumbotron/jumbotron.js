import React from "react";

import { makeStyles, Grid } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  banner: {
    padding: theme.spacing(40),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
  },
}));

export const JumbotronBar = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        className={classes.banner}
        style={{ backgroundImage: `url(${props.banner})` }}
      ></Grid>
    </div>
  );
};
