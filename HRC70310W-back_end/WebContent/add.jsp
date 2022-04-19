<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<form action="AddServlet" method="POST">
	Business Code : <input type="text" name="businessCode"><br>
	Customer Number : <input type="text" name="customerNumber"><br>
	Clear Date : <input type="date" name="clearDate"><br>
	Business Year : <input type="text" name="businessYear"><br>
	Document Id : <input type="text" name="documentId"><br>
	Posting Date : <input type="date" name="postingDate"><br>
	Document Create Date : <input type="date" name="documentCreateDate"><br>
	Due Date : <input type="date" name="dueDate"><br>
	Invoice currency : <input type="text" name="invoiceCurrency"><br>
	Document Type : <input type="text" name="documentType"><br>
	Posting Id : <input type="text" name="postingId"><br>
	Total Open Amount : <input type="text" name="totalAmountOpen"><br>
	Baseline Create Date : <input type="date" name="baselineCreateDate"><br>
	Customer Payment Terms : <input type="text" name="customerPaymentTerms"><br>
	Invoice Id : <input type="text" name="InvoiceId"><br>
	<input type="submit" name="submit">	
</form>
</body>
</html>