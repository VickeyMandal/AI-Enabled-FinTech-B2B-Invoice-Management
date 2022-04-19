<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>edit</title>
</head>
<body>
	<form action="GetEditDetailsServlet" method="POST">
	Sl_No : <input type="number" name="slNo"><br>
	Doc Id : <input type="number" name="documentId"><br>
	<input type="submit" name="submit">	
	</form>
</body>
</html>