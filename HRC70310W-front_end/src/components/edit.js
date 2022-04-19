import React, { useEffect, useState } from "react";
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
import axios from "axios";
import { getIndexData } from "../services/data";
////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////Edit Button - START////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

const editStyles = makeStyles((theme) => ({
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

function EditInvoice({
  open,
  handleClose,
  selectedIndex,
  slno,
}) {
  const classes = editStyles();

  const [invoicecurrency2, setInvoiceCurrency2] = useState("");
  const [cust, setCust] = useState("");

  useEffect(async () => {
    //console.log(selectedIndex)
    if (slno != 0) {
      if (invoicecurrency2 == "" && cust == "") {
        axios
          .get(
            "http://localhost:8080/Highradius_Backend/IndexData?slNo=" +
              selectedIndex
          )
          .then((res) => {
           
            let rr = res.data.clients[0].invoice_currency;
            let bb = res.data.clients[0].cust_payment_terms;
            // invoicecurrency = rr
            setInvoiceCurrency2(rr);
            setCust(bb);
          });
      }
    }
  });

  //console.log(sl)
  const submitHandler = async (e) => {
    axios
      .get(
        "http://localhost:8080/Highradius_Backend//EditServlet?slNo=" +
          slno +
          "&invoiceCurrency=" +
          invoicecurrency2 +
          "&customerPaymentTerms=" +
          cust
      )
      .then((res) => {});
  };

  const handleClose2 = (e) => {
    setInvoiceCurrency2("");
    setCust("");
    handleClose();
  };

  return (
    <>
      <Dialog maxWidth="lg" open={open} onClose={handleClose}>
        <DialogTitle className={classes.hrcColor}>Edit</DialogTitle>
        <DialogContent className={classes.hrcColor}>
          <Box sx={{ width: "100%" }}>
            <Grid container>
              <Grid item xs={6}>
                <Item>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="invoiceCurrency"
                    name="invoicecurrency"
                    value={invoicecurrency2}
                    label="Invoice Currency"
                    type="text"
                    fullWidth
                    onChange={(e) => setInvoiceCurrency2(e.target.value)}
                    variant="standard"
                  />
                </Item>
              </Grid>
              <Grid item xs={6}>
                <Item>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="customerPaymentTerms"
                    name="customerPaymentTerms"
                    value={cust}
                    label="Customer Payment Terms"
                    type="text"
                    // fullWidth
                    onChange={(e) => setCust(e.target.value)}
                    variant="standard"
                  />
                </Item>
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions className={classes.hrcColor}>
          <Grid container>
            <Grid item xs={6} style={{ paddingRight: "2.5px" }}>
              <Button
                variant="outlined"
                style={{
                  width: "100%",
                  color: "white",
                  border: "1px solid white",
                }}
                onClick={(e) => handleClose2(e)}
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
                onClick={submitHandler}
              >
                Update
              </Button>
            </Grid>
          </Grid>
        </DialogActions>
      </Dialog>
    </>
  );
}

////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////Edit Button - END//////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

export default EditInvoice;
