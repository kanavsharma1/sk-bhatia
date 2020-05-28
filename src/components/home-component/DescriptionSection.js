import React from "react";
import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "left",
    color: theme.palette.text.secondary,
  },
  description: {
    fontSize: "1.4em",
    textJustify: "left",
  },
  descHeading: {
    textAlign: "left",
    borderBottom: `2px solid black`,
    marginRight: "16em",
    marginBottom: "1em",
  },
}));

export const DescriptionSection = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid>
          <Paper className={classes.paper}>
            <Typography variant="h3" className={classes.descHeading}>
              Welcome to SK Bhatia & Associates
            </Typography>
            <Typography xs={12} className={classes.description}>
              "<b>Sohbat Bhatia & Associates,</b> is a firm of Chartered
              Accountants based Mumbai, India established in the year, 2009. We
              have been rendering the services in line of Tax Matters, Auditing
              & Assurance Services and Business Advisory Services, Valuation of
              Business & Equities, Management Consultancy, Design and Develop
              Internal Controls System, System Analysis and Implementing
              Computerized Accounting System covering a wide range of sub
              activities related to the profession. We have been serving clients
              from across various industries and we believe in providing
              comprehensive solutions to assist its clients in meeting the
              challenges of a dynamic business environment.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
