import React, { Component, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button, TextField } from "@mui/material";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import {
  Box,
  Container,
  Grid,
  Paper,
  styled,
  makeStyles,
} from "@material-ui/core";
import { addData } from "../services/data";
import roundToNearestMinutesWithOptions from "date-fns/esm/fp/roundToNearestMinutesWithOptions/index.js";


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

function AddInvoice(
  {
//   businessCode,
//   customerNumber,
//   clearDate,
//   businessYear,
//   documentId,
//   postingDate,
//   documentCreateDate,
//   dueDate,
//   invoiceCurrency,
//   documentType,
//   postingId,
//   totalAmountOpen,
//   baselineCreateDate,
//   customerPaymentTerms,
//   InvoiceId,
//   changeAddHandler,
//   submitAddHandler,
   handleClose,
   open,
}
) {
  const classes = useStyles();
  const [value, setValue] = React.useState(null);

  const [invoice, setInvoice] = useState({
    businessCode: "",
    customerNumber: "",
    clearDate: "",
    businessYear: "",
    documentId: "",
    postingDate: "",
    documentCreateDate: "",
    dueDate: "",
    invoiceCurrency: "",
    documentType: "",
    postingId: "",
    totalAmountOpen: "",
    baselineCreateDate: "",
    customerPaymentTerms: "",
    InvoiceId: "",
  });
  const {
    businessCode,
    customerNumber,
    clearDate,
    businessYear,
    documentId,
    postingDate,
    documentCreateDate,
    dueDate,
    invoiceCurrency,
    documentType,
    postingId,
    totalAmountOpen,
    baselineCreateDate,
    customerPaymentTerms,
    InvoiceId,
  } = invoice;


  const changeAddHandler = (e) => {
    const { name, value } = e.target;
    setInvoice({ ...invoice, [name]: value });
  };

  const submitAddHandler = async (e) => {
    e.preventDefault();
    //window.alert("Form submitted ... ");
    console.log(invoice);
    let response = await addData(invoice);
    console.log(response)
    if (response) {
      setInvoice({
        businessCode: "",
        customerNumber: "",
        clearDate: "",
        businessYear: "",
        documentId: "",
        postingDate: "",
        documentCreateDate: "",
        dueDate: "",
        invoiceCurrency: "",
        documentType: "",
        postingId: "",
        totalAmountOpen: "",
        baselineCreateDate: "",
        customerPaymentTerms: "",
        InvoiceId: ""
      })
    }
  };

  return (
    <>
      <Dialog maxWidth="lg" open={open} onClose={handleClose}>
        <DialogTitle className={classes.hrcColor}>Add</DialogTitle>
        <DialogContent className={classes.hrcColor}>
          <Box sx={{ width: "100%" }}>
            <Grid container>
              <Grid item xs={3}>
                <Item>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="businessCode"
                    name="businessCode"
                    value={businessCode}
                    label="Business Code"
                    type="text"
                    // fullWidth
                    onChange={changeAddHandler}
                    variant="standard"
                  />
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="customerNumber"
                    name="customerNumber"
                    value={customerNumber}
                    label="Customer Number"
                    type="number"
                    // fullWidth
                    onChange={changeAddHandler}
                    variant="standard"
                  />
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="clearDate"
                    name="clearDate"
                    value={clearDate}
                    label="Clear Date"
                    type="date"
                    // fullWidth
                    onChange={changeAddHandler}
                    variant="standard"
                  />
                  {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      label="Clear Date"
                      name="clearDate"
                    value={clearDate}
                      onChange={(newValue) => {
                        setValue(newValue);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider> */}
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="businessYear"
                    name="businessYear"
                    value={businessYear}
                    label="Business Year"
                    type="number"
                    // fullWidth
                    onChange={changeAddHandler}
                    variant="standard"
                  />
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item>
                  {" "}
                  <TextField
                    autoFocus
                    margin="dense"
                    id="documentId"
                    name="documentId"
                    value={documentId}
                    label="Document Id"
                    type="number"
                    // fullWidth
                    onChange={changeAddHandler}
                    variant="standard"
                  />
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="postingDate"
                    name="postingDate"
                    value={postingDate}
                    label="Posting Date"
                    type="date"
                    // fullWidth
                    onChange={changeAddHandler}
                    variant="standard"
                  />
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="documentCreateDate"
                    name="documentCreateDate"
                    value={documentCreateDate}
                    label="Document Create Date"
                    type="date"
                    // fullWidth
                    onChange={changeAddHandler}
                    variant="standard"
                  />
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="dueDate"
                    name="dueDate"
                    value={dueDate}
                    label="Due Date"
                    type="date"
                    // fullWidth
                    onChange={changeAddHandler}
                    variant="standard"
                  />
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item>
                  {" "}
                  <TextField
                    autoFocus
                    margin="dense"
                    id="invoiceCurrency"
                    name="invoiceCurrency"
                    value={invoiceCurrency}
                    label="Invoice Currency"
                    type="text"
                    // fullWidth
                    onChange={changeAddHandler}
                    variant="standard"
                  />
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="documentType"
                    name="documentType"
                    value={documentType}
                    label="Document Type"
                    type="text"
                    // fullWidth
                    onChange={changeAddHandler}
                    variant="standard"
                  />
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="postingId"
                    name="postingId"
                    value={postingId}
                    label="Posting Id"
                    type="number"
                    // fullWidth
                    onChange={changeAddHandler}
                    variant="standard"
                  />
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="totalAmountOpen"
                    name="totalAmountOpen"
                    value={totalAmountOpen}
                    label="Total Amount Open"
                    type="text"
                    // fullWidth
                    onChange={changeAddHandler}
                    variant="standard"
                  />
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="baselineCreateDate"
                    name="baselineCreateDate"
                    value={baselineCreateDate}
                    label="Baseline Create Date"
                    type="date"
                    // fullWidth
                    onChange={changeAddHandler}
                    variant="standard"
                    InputProps={{
                      disableUnderline: true,
                    }}
                  />
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="customerPaymentTerms"
                    name="customerPaymentTerms"
                    value={customerPaymentTerms}
                    label="Customer Payment Terms"
                    type="text"
                    // fullWidth
                    onChange={changeAddHandler}
                    variant="standard"
                  />
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="InvoiceId"
                    name="InvoiceId"
                    value={InvoiceId}
                    label="Invoice Id"
                    type="number"
                    // fullWidth
                    onChange={changeAddHandler}
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
                onClick={handleClose}
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
                onClick={submitAddHandler}
              >
                Add
              </Button>
            </Grid>
          </Grid>
        </DialogActions>
      </Dialog>
      {/* <label>Customer Number : </label>
        <input type={"text"} name="customerNumber" value={customerNumber} onChange={changeHandler}/> */}

      {/* <label>Clear Date : </label>
        <input type={"date"} name="clearDate" value={clearDate} onChange={changeHandler}/> */}

      {/* <label>Business Year : </label>
        <input type={"text"} name="businessYear" value={businessYear} onChange={changeHandler}/> */}

      {/* <label>Document Id : </label>
        <input type={"text"} name="documentId" value={documentId} onChange={changeHandler}/> */}

      {/* <label>Posting Date : </label>
        <input type={"date"} name="postingDate" value={postingDate} onChange={changeHandler}/> */}

      {/* <label>Document Create Date : </label>
        <input type={"date"} name="documentCreateDate" value={documentCreateDate} onChange={changeHandler}/> */}

      {/* <label>Due Date : </label>
        <input type={"date"} name="dueDate" value={dueDate} onChange={changeHandler}/> */}

      {/* <label>Invoice currency : </label>
        <input type={"text"} name="invoiceCurrency" value={invoiceCurrency} onChange={changeHandler}/> */}

      {/* <label>Document Type : </label>
        <input type={"text"} name="documentType" value={documentType} onChange={changeHandler}/> */}

      {/* <label>Posting Id : </label>
            <input type={"text"} name="postingId" value={postingId} onChange={changeHandler} /> */}

      {/* <label>Total Open Amount : </label>
            <input type={"text"} name="totalAmountOpen" value={totalAmountOpen} onChange={changeHandler} /> */}

      {/* <label>Baseline Create Date : </label>
            <input type={"date"} name="baselineCreateDate" value={baselineCreateDate} onChange={changeHandler} /> */}

      {/* <label>Customer Payment Terms : </label>
            <input type={"text"} name="customerPaymentTerms" value={customerPaymentTerms} onChange={changeHandler} /> */}

      {/* <label>Invoice Id : </label>
            <input type={"text"} name="InvoiceId" value={InvoiceId} onChange={changeHandler} /> */}

      {/* <input type={"submit"} value={"Submit"} onClick={submitHandler} /> */}
    </>
  );
}

export default AddInvoice;

////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////Add Button - END///////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
