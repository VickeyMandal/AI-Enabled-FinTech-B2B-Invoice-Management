import React, { Component, useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Button, ButtonGroup, makeStyles, TextField, Grid } from "@material-ui/core";
import { Autocomplete } from "@mui/material";
import { AddInvoice, EditInvoice, AdvSearch } from "./index";
import { addData, getData } from "../services/data";
import axios from "axios";
import RefreshIcon from '@mui/icons-material/Refresh';
import { pxToRem } from "../utils/theme";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////Toolbar - START////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

const toolbarStyles = makeStyles((theme) => ({
  Container: {
    background: "green",
    background: "#283D4A",
    display: "flex",
    height: pxToRem(110),
    width: "auto",
    //alignText:'center',
    paddingInline: "2rem",
   // width: "100%",
  },
  ButtonGroupDiv: {
    paddingTop: pxToRem(15),
    width: "40rem",
    display: "flex",
    //flexDirection: "column"
  },
  ButtonGroup: {
    width: "100%",
    height: "52px",
    border: "2px solid #1F6B92",
    //marginLeft: "65px",
  },
  Button: {
    width: "100%",
    height: "50px",
    color: "white",
    // background: "#283D4A",
    //boxShadow: 'none',
  },
  Button2: {
    width: "100%",
    height: "50px",
    color: "white",
    background: "#283D4A",
    boxShadow: "none",
    border: "2px solid #1F6B92",
  },
  TextFieldContainer: {
    height: "50px",
    width: pxToRem(300),
    marginLeft: pxToRem(40),
    paddingBottom: "4px"
  },
  TextField: {

    height: "100%",
    width: "100%",
    color: "black",
    background: "white",
    borderRadius: "5px",
  },
  ButtonGroup2: {
    width: "40rem",
    height: "50px",
    display: "flex",
    // border: "2px solid #1F6B92",

    marginLeft: "30px",
    paddingTop: "15px",
    flexDirection: "columns",
  },
  RefreshBtn: {
    width: "max-content",
    marginLeft: "10px",
    paddingTop: "2px"
  },
  hrcColor: {
    background: "#283D4A",
    color: "white",
  },
}));

function Toolbar({
  numSelected,
  selectedIndex,
  slno,
  invoicecurrency,
  customerpaymentterms,
  data,
  opens,
  searchHandler,
  advSearchHandler,
  callpredict
}) {

  const classes = toolbarStyles();

  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = useState(false);
  const [sl, setSl] = useState(slno);
  const [inv, setInv] = useState(invoicecurrency);
  const [ct, setCt] = useState(customerpaymentterms);
  const [inData,setIndata] = useState([]);
  const [openDelete,setopenDelete] = useState(false);

  const handleAddClickOpen = () => {
    setOpen(true);
  };

  const handleSearchClickOpen2 = () => {
    setSearch(true);
   
  };
  
  const handleSearchClose = () => {
    setSearch(false);
  };

  const handleClose = () => {
    setOpen(false);
    //setSearch(false);
  };
  function refreshPage() {
    window.location.reload();
  }


  const deleteHandler = () => {
    //console.log(data);
    axios
      .get(
        "http://localhost:8080/Highradius_Backend/DeleteServlet?slNo=" + data
      )
      .then((res) => {
        //getData();
        setopenDelete(false)
        window.location.reload();
      });
  };

  const handleDeleteClose = () => {
    setopenDelete(false)
  }
  const handleDeleteOpen = () => {
    setopenDelete(true);
  }

  const callpredictHandler = () => {
    callpredict();
  }
  //////////////////////////////Edit////////////////////////////

  const [openEdit, setOpenEdit] = React.useState(false);

  const handleEditClickOpen = (e, name) => {
    //console.log(name)
    axios
      .get("http://localhost:8080/Highradius_Backend/IndexData?slNo=" + selectedIndex)
      .then((res) => {
        //console.log(res);
        //console.log(res.data.clients[0].invoice_currency);
        const sl2 = res.data.clients[0].sl_no;
        const inv2 = res.data.clients[0].invoice_currency;
        const ct2 = res.data.clients[0].cust_payment_terms;


        setIndata(res.data);
        setSl(sl2);
        //console.log(sl)
        setInv(inv2);
        setCt(ct2);
        
      });
    setOpenEdit(true);
  };
  const handleEditClose = () => {
    setOpenEdit(false);
  };

  let EditButton;
  if (numSelected === 1) {
    //console.log(sl)
    EditButton = (
      <Button
        variant="contained"
        className={classes.Button2}
        onClick={(e) => handleEditClickOpen(e, slno)}
        slno={selectedIndex}
        invoicecurrency={inv}
        customerpaymentterms={ct}
      >
        Edit
      </Button>
    );
  } else {
    EditButton = (
      <Button
        variant="contained"
        className={classes.Button}
        disabled
        // style={{ color: "white" }}
      >
        Edit
      </Button>
    );
  }

  let DeleteButton;
  if (numSelected >= 1) {
    DeleteButton = (
      <Button
        className={classes.Button2}
        style={{ border: "2px solid #1F6B92" }}
        variant="outlined"
        onClick={handleDeleteOpen}
      >
        Delete
      </Button>
    );
  } else {
    DeleteButton = (
      <Button
        className={classes.Button}
        style={{ background: "#233641" }}
        variant="contained"
        disabled
      >
        Delete
      </Button>
    );
  }

  return (
    <React.Fragment>
      <CssBaseline />

      <div className={classes.Container}>
        <div className={classes.ButtonGroupDiv}>
          <ButtonGroup
            variant="outlined"
            aria-label="outlined button group"
            className={classes.ButtonGroup}
          >
            <Button
              className={classes.Button}
              style={{ background: "#14AFF1" }}
              variant="contained"
              onClick={callpredictHandler}
            >
              PREDICT
            </Button>
            <Button
              className={classes.Button}
              style={{ borderLeftColor: "#1F6B92" }}
            >
              ANALYTICS VIEW
            </Button>
            <Button
              className={classes.Button}
              style={{ borderLeftColor: "#1F6B92" }}
              variant="outlined"
              onClick={handleSearchClickOpen2}
            >
              ADVANCE SEARCH
            </Button>
            <AdvSearch 
              open={search} 
              handleSearchClose={handleSearchClose} 
              advSearchHandler={advSearchHandler}
              />
          </ButtonGroup>
          <div className={classes.RefreshBtn}>
          <Button 
           className={classes.Button}
           style={{ border: "2px solid #1F6B92" }}
           variant="outlined"
           onClick={refreshPage}
          >
              <RefreshIcon/>
          </Button>
        </div>
        </div>
        

        <div className={classes.TextFieldContainer}>
          <TextField
            className={classes.TextField}
            id="margin-normal"
            margin="normal"
            label="Search Customer Id"
            onChange={(event) => searchHandler(event, event.target.value)}
          />
        </div>
        <div>
          <AddInvoice open={open} handleClose={handleClose} />
        </div>
        <div className={classes.ButtonGroup2}>
          <Button
            className={classes.Button}
            style={{ border: "2px solid #1F6B92" }}
            variant="outlined"
            onClick={handleAddClickOpen}
          >
            Add
          </Button>

          <EditInvoice
            open={openEdit}
            selectedIndex={selectedIndex}
            handleClose={handleEditClose}
            slno={sl}
            inData={inData}
            invoicecurrency={invoicecurrency}
            customerpaymentterms={customerpaymentterms}
          />

          {EditButton}

          {DeleteButton}

          <Dialog maxWidth="lg" open={openDelete} onClose={handleClose}>
        <DialogTitle className={classes.hrcColor}>Delete Records?</DialogTitle>
        <DialogContent className={classes.hrcColor}>
            Are you sure you want to delete these record[s]?
        </DialogContent>
        <DialogActions className={classes.hrcColor}>
          <Grid
            container
          >
            <Grid item xs={6} style={{ paddingRight: "2.5px" }}>
              <Button
                variant="outlined"
                style={{
                  width: "100%",
                  color: "white",
                  border: "1px solid white",
                }}
                onClick={handleDeleteClose}
              >
                Cancel
              </Button>
            </Grid>
            <Grid item xs={6} style={{ paddingLeft: "2.5px" }}>
              <Button
                variant="outlined"
                style={{
                  width: "100%",
                  color: "white",
                  border: "1px solid white",
                }}
                type={"submit"}
                value={"Submit"}
                onClick={deleteHandler}
              >
                Delete
              </Button>
            </Grid>
          </Grid>
        </DialogActions>
      </Dialog>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Toolbar;

////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////Toolbar - END////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
