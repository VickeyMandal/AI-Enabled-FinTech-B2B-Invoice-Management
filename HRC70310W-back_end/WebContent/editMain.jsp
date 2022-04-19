<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<form action='EditServlet' method='POST'>
		Sl_No : <input type="number" disabled name="slNo" value='slNo'><br>
		Doc Id : <input type="number" disabled name="documentId"><br>
		Invoice Currency : <input type='text' name='invoice_currency'
			value='"+ list.get(0) +"'>
		Cust payment : <input type='text'
			name='cust_payment_terms' value='"+ list.get(1) +"'>

	</form>

</body>
</html>