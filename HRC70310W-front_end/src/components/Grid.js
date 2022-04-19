import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import {
  Button,
  ButtonGroup,
  makeStyles,
  Grid,
  styled,
  TextField,
} from "@material-ui/core";
import CssBaseline from "@mui/material/CssBaseline";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { visuallyHidden } from "@mui/utils";
import { useEffect, useState } from "react";
import { addData, getData, getIndexData, advSearch } from "../services/data";
import { AddInvoice, Toolbar } from "./index";
import { Tooltip } from "@mui/material";
import axios from "axios";

////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////Grid - START/////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
const useStyles = makeStyles((theme) => ({
  TableBox: {
    //width: "window.innerWidth - 40",
    width: "100%",
    background: "#273D49CC",
    paddinLeft: "20px",
    paddingBottom: "20px",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  DataTable: {
    //width: window.innerWidth - 80,
    width: "100%",
    paddingLeft: "20px",
    paddingBottom: "20px",
    opacity: 1,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  TableHead: {
    backgroundColor: "#283D4A",
    fontSize: "20px",
    borderBottom: "none",
  },
  TableHeadRow: {
    color: "white",
  },
  TableBody: {
    "&:nth-of-type(odd)": {
      backgroundColor: "#2D4250",
    },
    "&:nth-of-type(even)": {
      backgroundColor: "#283A46",
    },
    color: "#FFFFFF",
    fontSize: "16px",
    "&$selected, &$selected:hover": {
      backgroundColor: "#2A5368",
    },
    borderRadius: 10,
  },
  hover: {},
  selected: {},
  TableRow: {
    color: "#FFFFFF",
  },
  searchByInvoiceNumber: {
    color: "#97A1A9",
    borderBottom: "none",
    border: "1px solid #356680",
    background: "#283A46",
    borderRadius: 10,
    paddingLeft: "10px",
    paddingRight: "10px",
    disableUnderline: true,
    height: "45px",
    borderBottom: "1px solid #356680",
    width: "340px",
  },
  Button: {
    color: "#FFFFFF",
    border: "1px solid #14AFF1",
    borderRadius: 10,
    textTransform: "none",
    height: "45px",
    padding: "15px",
  },
  DisabledButton: {
    color: "#97A1A9",
    border: "1px solid #97A1A9",
    borderRadius: 10,
    textTransform: "none",
    height: "45px",
    padding: "15px",
  },
  checkbox: {
    root: {
      color: "white",
      "&$checked": {
        color: "#14AFF1",
      },
    },
  },
}));

function createData(
  sl_no,
  business_code,
  cust_number,
  clear_date,
  buisness_year,
  doc_id,
  posting_date,
  document_create_date,
  due_in_date,
  invoice_currency,
  document_type,
  posting_id,
  total_open_amount,
  baseline_create_date,
  cust_payment_terms,
  invoice_id
) {
  return {
    id: sl_no,
    business_code,
    cust_number,
    clear_date,
    buisness_year,
    doc_id,
    posting_date,
    document_create_date,
    due_in_date,
    invoice_currency,
    document_type,
    posting_id,
    total_open_amount,
    baseline_create_date,
    cust_payment_terms,
    invoice_id,
  };
}

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { no: 1, id: "sl_no", label: "Sl No.", numeric: true },
  { no: 2, id: "business_code", label: "Business Code", numeric: false },
  { no: 3, id: "cust_number", label: "Customer Number", numeric: true },
  { no: 4, id: "clear_date", label: "Clear Date", numeric: false },
  { no: 5, id: "business_year", label: "Business Year", numeric: true },
  { no: 6, id: "doc_id", label: "Document Id", numeric: true },
  { no: 7, id: "posting_date", label: "Posting Date", numeric: false },
  {
    no: 8,
    id: "document_create_date",
    label: "Document Create Date",
    numeric: false,
  },
  { no: 9, id: "due_in_date", label: "Due Date", numeric: false },
  { no: 10, id: "invoice_currency", label: "Invoice Currency", numeric: false },
  { no: 11, id: "document_type", label: "Document Type", numeric: false },
  { no: 12, id: "posting_id", label: "Posting Id", numeric: true },
  {
    no: 13,
    id: "total_amount_open",
    label: "Total Amount Open",
    numeric: true,
  },
  {
    no: 14,
    id: "baseline_create_date",
    label: "Baseline Create Date",
    numeric: false,
  },
  {
    no: 15,
    id: "cust_payment_terms",
    label: "Cust Payment Terms",
    numeric: false,
  },
  { no: 16, id: "invoice_id", label: "Invoice Id", numeric: true },
  { no: 17, id: "aging_bucket", label: "Aging Bucket", numeric: false },
];

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  const classes = useStyles();

  return (
    <TableHead className={classes.TableHead}>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            style={{ color: "white" }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.no}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
              style={{ color: "white" }}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("sl_no");
  const [search, setSearch] = React.useState("");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [editIndex, setEditIndex] = React.useState();
  const [count, setCount] = React.useState(0);
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState({
    slno: "",
    invoicecurrency: "",
    customerpaymentterms: "",
  });
  const { slno, invoicecurrency, customerpaymentterms } = details
  //fetching data
  const [rows, setRows] = useState([]);
  const [opens, setOpens] = React.useState();
  

  //console.log(rows);
  const CheckHandler = async (e, name) => {
    //console.log(name);
    setEditIndex(name);
  };
  

  //console.log(editIndex)
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.sl_no);

      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);

    // let editInvoice = rows.filter(invoice=>data.sl_no==sl_no)[0];
    // set
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    //sl_no = ;

    setSelected(newSelected);
  };



  const HandleChangePage = async (event, newPage) => {
    setPage(newPage);
  };


  const advSearchHandler = async (customerNumber,
    businessYear,
    documentId,
    InvoiceId) => {
    let response = await advSearch(customerNumber,
        businessYear,
        documentId,
        InvoiceId,
        );
  
      let count = response.data.count;
      setRows(response["data"]);
      setCount(Number(response["count"]));
      setOpens(false);
      
  };


  

  const searchHandler = (event, name) => {
    setSearch(name);
    let str =
      "start=" +
      (page * rowsPerPage) +
      "&limit=" +
      rowsPerPage +
      "&orderBy=" +
      orderBy +
      "&order=" +
      order+
    "&search="+
    search;
    console.log(page + " " + rowsPerPage + " " + orderBy + " " + order);
    axios
      .get(`http://localhost:8080/Highradius_Backend/SendData?${str}`)
      .then((response) => {
       
        if(response.data.count>0){
        let count = response.data.count;
        setRows(response.data.clients);
        setCount(Number(count));

        }
      });
  };

  
  const callpredict = () => {
    //console.log(editIndex)
    axios
    .get(`http://localhost:8080/Highradius_Backend/data?sl_no=${editIndex}`)
    .then((response) => {
      // console.log(response.data)
      // console.log(response.data.clients[0].business_year)
      let str = "business_code=" + response.data.clients[0].business_code +
                "&cust_number=" + response.data.clients[0].cust_number +
                "&clear_date=" + response.data.clients[0].clear_date +
                "&buisness_year=" + response.data.clients[0].business_year+
                "&doc_id="+ response.data.clients[0].doc_id + 
                "&posting_date=" + response.data.clients[0].posting_date +
                "&due_in_date=" + response.data.clients[0].due_in_date +
                "&baseline_create_date=" + response.data.clients[0].baseline_create_date +
                "&cust_payment_terms=" + response.data.clients[0].cust_payment_terms+
                "&converted_usd="+ response.data.clients[0].total_open_amount;
                  
                axios(`http://127.0.0.1:5000/?`+ str,
                {},
                {
                  
                    headers : {'Content-type':'application/json'},
                  
                })
                .then((res) => {
                    //console.log(res)
                })

      })
    };
  

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  
  useEffect(async () => {
    if(search!=null){
    let data = await getData(page, rowsPerPage, orderBy, order,search);
    setRows(data["data"]);
    setCount(Number(data["count"]));
    }
  }, [rowsPerPage, page, order, orderBy, search]);

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - count) : 0;

  return (
    <Box sx={{ width: "100%", background: "#283D4A" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
        <Toolbar
          numSelected={selected.length}
          selectedIndex={editIndex}
          slno={slno}
          invoicecurrency={invoicecurrency}
          customerpaymentterms={customerpaymentterms}
          data={selected}
          searchHandler={searchHandler}
          advSearchHandler={advSearchHandler}
          callpredict={callpredict}
        />

        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={"small"}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={count}

            />
            <TableBody className={classes.TableBody}>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
              {stableSort(rows, getComparator(order, orderBy))
                // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  const isItemSelected = isSelected(row.sl_no);
                  //const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.sl_no)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.sl_no}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          style={{ color: "white" }}
                          // inputProps={{
                          //   "aria-labelledby": labelId,
                          // }}
                          onClick={(e) => CheckHandler(e, row.sl_no)}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        //id={labelId}
                        scope="row"
                        padding="none"
                        style={{ color: "white" }}
                      >
                        {row.sl_no}
                      </TableCell>
                      <TableCell style={{ color: "#F7F7F7" }} align="right">
                        {row.business_code}
                      </TableCell>
                      <TableCell style={{ color: "#F7F7F7" }} align="right">
                        {row.cust_number}
                      </TableCell>
                      <TableCell style={{ color: "#F7F7F7" }} align="right">
                        {row.clear_date}
                      </TableCell>
                      <TableCell style={{ color: "#F7F7F7" }} align="right">
                        {row.business_year}
                      </TableCell>
                      <TableCell style={{ color: "#F7F7F7" }} align="right">
                        {row.doc_id}
                      </TableCell>
                      <TableCell style={{ color: "#F7F7F7" }} align="right">
                        {row.posting_date}
                      </TableCell>
                      <TableCell style={{ color: "#F7F7F7" }} align="right">
                        {row.document_create_date}
                      </TableCell>
                      <TableCell style={{ color: "#F7F7F7" }} align="right">
                        {row.due_in_date}
                      </TableCell>
                      <TableCell style={{ color: "#F7F7F7" }} align="right">
                        {row.invoice_currency}
                      </TableCell>
                      <TableCell style={{ color: "#F7F7F7" }} align="right">
                        {row.document_type}
                      </TableCell>
                      <TableCell style={{ color: "#F7F7F7" }} align="right">
                        {row.posting_id}
                      </TableCell>
                      <TableCell style={{ color: "#F7F7F7" }} align="right">
                        {row.total_open_amount}
                      </TableCell>
                      <TableCell style={{ color: "#F7F7F7" }} align="right">
                        {row.baseline_create_date}
                      </TableCell>
                      <TableCell style={{ color: "#F7F7F7" }} align="right">
                        {row.cust_payment_terms}
                      </TableCell>
                      <TableCell style={{ color: "#F7F7F7" }} align="right">
                        {row.invoice_id}
                      </TableCell>
                      <TableCell style={{ color: "#F7F7F7" }} align="right">
                        {row.aging_bucket}
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25]}
          component="div"
          count={count}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={HandleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          style={{ background: "#2D4250", color: "#f7f7f7" }}
        />
      </Paper>
      {/* <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      /> */}
    </Box>
  );
}
////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////Grid - END/////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
