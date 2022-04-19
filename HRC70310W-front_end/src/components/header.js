import { makeStyles } from "@material-ui/core";
import React from "react";
import { ABCLogo, HRCLogo } from "../assets";
import { pxToRem } from "../utils/theme";
import Container from "@mui/material/Container";

export default function Header() {
  const useStyles = makeStyles((theme) => ({
    Header: {
      background: "#2D4250",
      paddingBlock: "10px",
      display: "flex",
      height: "80px",
      width: "auto",
      //flexDirection: "columns",
    },
    // ABCContainer: {
    //   display: "flex",
    // },
    ABCLogo: {
      //top: pxToRem("20px"),
      //left: pxToRem("30px"),
      //width: pxToRem("44px"),
     // height: pxToRem("46px"),
      paddingTop: pxToRem(8),
      paddingLeft: "5px",
      //   fill: "#CD7925",
    },
    // ABCText: {
    //   font: "Futura PT",
    //   fontSize: "39px",
    //   fontWeight: "bold",
    //   color: "#FFFFFF",
    //   paddingLeft: "10px",
    //   verticalAlign: "center",
    // },
    HRCLogo: {
      //position: "absolute",
      paddingTop: "5px",
      textAlign: "center",
      display: "flex",
      marginLeft: "20rem",
      marginRight: "auto",
      //width: "0%",
      //width: window.innerWidth - 40,
    },
  }));

  const classes = useStyles();
  return (
    <div className={classes.Header}>
        <div className={classes.ABCLogo}>
          <ABCLogo />
        </div>
      <div className={classes.HRCLogo}>
        <HRCLogo />
      </div>
    </div>
  );
}
