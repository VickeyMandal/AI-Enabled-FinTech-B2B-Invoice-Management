<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>

<form action="EditServlet" method="POST">
	Sl_No : <input type="number" name="slNo"><br>
	Doc Id : <input type="number" name="documentId"><br>
	invoice_currency : <input type="text" name="invoice_currency"><br>
	cust payment : <input type="text" name="cust_payment_terms"><br>
	<input type="submit" name="submit">	
	</form>

</body>
</html>