import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textDecoration: "none",
    color: "#f5f5f5",
  },
  navLink: {
    textDecoration: "none",
    color: "#f5f5f5",
    padding: 20,
  },
  buttonText: {
    color: "#f5f5f5",
    fontWeight: 600,
  },
}));

export const NavBar = () => {
  const classes = useStyles();
  const [menuItems] = React.useState(["Home", "About", "Services", "Sectors"]);

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Link className={classes.title} to="/">
          <Typography variant="h4" className={classes.title}>
            SK BHATIA
          </Typography>
        </Link>
        {menuItems.map((item, index) => (
          <Link key={index} className={classes.navLink} to={item}>
            <Button size="large" key={index}>
              <Typography variant="h6" className={classes.buttonText}>
                {item}
              </Typography>
            </Button>
          </Link>
        ))}
      </Toolbar>
    </AppBar>
  );
};
