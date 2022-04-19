import React, { Component, useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core";
import { AddInvoice, Footer, Grid, Header} from "../components/index";
import { ABCLogo, HRCLogo } from "../assets";
import { pxToRem } from "../utils/theme";
import { addData } from "../services/data";
//import  { AddInvoicePage } from '../views';

const useStyles = makeStyles((theme) => ({
  LandingPage: {
    // display: "flex",
    // flexDirection: "column",
    background: "#2D4250",
    // height: "80px",
    width: "auto",
  },
}));

const LandingPage = () => {
  const classes = useStyles();

  ///////////////////////////////////////////////////////////////

  
  ///////////////////////////////////////////////////////////////

  return (
    <div className={classes.LandingPage}>
      <div>
        <Header />
      </div>
      <div>
        <Grid />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
