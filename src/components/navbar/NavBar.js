import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { Toolbar, IconButton, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export const NavBar = () => {
  const classes = useStyles();
  return (
    <AppBar position="sticky">
      <Toolbar variant="dense">
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        ></IconButton>

        <Typography variant="h3" color="inherit">
          SK BHATIA
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
