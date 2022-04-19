import React, { Component, useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button, TextField } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import {
  Box,
  Container,
  Grid,
  Paper,
  styled,
  makeStyles,
} from "@material-ui/core";
import { addData, advSearch } from "../services/data";

////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////Add Button - START/////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

const useStyles = makeStyles((theme) => ({
  hrcColor: {
    background: "#283D4A",
    color: "white",
  },
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "#283D4A",
  ...theme.typography.body2,
  padding: theme.spacing(0),
  margin: theme.spacing(2),
  textAlign: "center",
}));

function AdvSearch({
    //changeSearchHandler,
    advSearchHandler,
  handleSearchClose,
  open,
}) {
  const classes = useStyles();
  const [op, setOp] = useState(open);
  const [invoice, setInvoice] = useState({
    customerNumber: "",
    businessYear: "",
    documentId: "",
    InvoiceId: "",
  });
  const { customerNumber, businessYear, documentId, InvoiceId } = invoice;

  const changeSearchHandler = (e) => {

    const { name, value } = e.target;
    setInvoice({ ...invoice, [name]: value });
   
      
   
  };
  //const [c, setC] = useEffect(1);
const shandler = () => {
  advSearchHandler(customerNumber,
    businessYear,
    documentId,
    InvoiceId,)

    setInvoice({
      customerNumber: "",
      businessYear: "",
      documentId: "",
      InvoiceId: "",
    })
    handleSearchClose()

}
 
  if(customerNumber!=="" && documentId!=="" && InvoiceId!=="" && businessYear!==""){
    
       
    }


  return (
    <>
      <Dialog maxWidth="sm" open={open} onClose={handleSearchClose}>
        <DialogTitle className={classes.hrcColor}>Advance Search</DialogTitle>
        <DialogContent className={classes.hrcColor}>
          <Box >
            <Grid container>
              <Grid item xs={6}>
                <Item>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="documentId"
                    name="documentId"
                    label="Document Id"
                    type="number"
                    value={documentId}
                    fullWidth
                    onChange={changeSearchHandler}
                    variant="standard"
                  />
                </Item>
              </Grid>
              <Grid item xs={6}>
                <Item>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="InvoiceId"
                    name="InvoiceId"
                    label="Invoice Id"
                    type="number"
                    value={InvoiceId}
                    fullWidth
                    onChange={changeSearchHandler}
                    variant="standard"
                  />
                </Item>
              </Grid>
              <Grid item xs={6}>
                <Item>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="customerNumber"
                    name="customerNumber"
                    label="Customer Number"
                    type="number"
                    fullWidth
                    value={customerNumber}
                    onChange={changeSearchHandler}
                    variant="standard"
                  />
                </Item>
              </Grid>
              <Grid item xs={6}>
                <Item>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="businessYear"
                    name="businessYear"
                    value={businessYear}
                    label="Business Year"
                    type="number"
                    fullWidth
                    onChange={changeSearchHandler}
                    variant="standard"
                  />
                </Item>
              </Grid>

              
            </Grid>
          </Box>
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
                onClick={handleSearchClose}
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
                onClick={shandler}
              >
                Search
              </Button>
            </Grid>
          </Grid>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AdvSearch;

////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////Add Button - END///////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
