import axios from "axios";
export const getData = async (start, limit, orderBy, order, search) => {
  let str =
    "start=" +
    (start * limit) +
    "&limit=" +
    limit +
    "&orderBy=" +
    orderBy +
    "&order=" +
    order +
    "&search="+
    search;
  let response = await axios({
    method: "get",
    url: `http://localhost:8080/Highradius_Backend/SendData?${str}`,
  });

  
  let data = response.data.clients;
  let count = response.data.count;

  return { data, count };

};

export const advSearch = async (
  customerNumber,
  businessYear,
  documentId,
  InvoiceId,
) => {
  let str =
      "docId=" +
        documentId +
      "&invoiceId=" +
        InvoiceId +
      "&custNum=" +
      customerNumber +
      "&busYear="+
      businessYear;
  let response = await axios.get(
    "http://localhost:8080/Highradius_Backend/SearchServlet?" + str
  );
  //console.log(response.data.clients);
  //console.log(response.data.clients[0].sl_no);
  let data = response.data.clients;
  let count = response.data.count;
  return { data, count };
};

export const addData = async ({
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
}) => {
  let str =
    "businessCode=" +
    businessCode +
    "&customerNumber=" +
    customerNumber +
    "&clearDate=" +
    clearDate +
    "&businessYear=" +
    businessYear +
    "&documentId=" +
    documentId +
    "&postingDate=" +
    postingDate +
    "&documentCreateDate=" +
    documentCreateDate +
    "&dueDate=" +
    dueDate +
    "&invoiceCurrency=" +
    invoiceCurrency +
    "&documentType=" +
    documentType +
    "&postingId=" +
    postingId +
    "&totalAmountOpen=" +
    totalAmountOpen +
    "&baselineCreateDate=" +
    baselineCreateDate +
    "&customerPaymentTerms=" +
    customerPaymentTerms +
    "&InvoiceId=" +
    InvoiceId;

  let response = await axios.get(
    "http://localhost:8080/Highradius_Backend/AddServlet?" + str
  );
  return response.data;
};

getData();
