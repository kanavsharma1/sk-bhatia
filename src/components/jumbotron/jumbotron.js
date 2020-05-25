import React from "react";

import { makeStyles, Paper, Grid } from "@material-ui/core";
import bannerImage from "../../images/jumbotron.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(40),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundImage: `url(${bannerImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
  },
}));

export const JumbotronBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}></Paper>
        </Grid>
      </Grid>
    </div>
  );
};
