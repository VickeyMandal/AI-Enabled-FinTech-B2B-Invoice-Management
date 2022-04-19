<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@page import="java.sql.*"%>
<%@page import="com.highradius.Helper.ConnectionProvider"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>

	<%
		Connection con = ConnectionProvider.getConnection();
	%>
	<h1><%=con%></h1>

	<ul>
		<li><a href="add.jsp">Add</a></li>
		<li><a href="http://localhost:8080/Highradius_Backend/SendData">SendData</a></li>
		<li><a href="getEditDetails.jsp">GetEdit</a></li>
		<li><a href="edit.jsp">Edit</a></li>
	</ul>




	<script src="https://code.jquery.com/jquery-3.6.0.min.js"
		integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
		crossorigin="anonymous"></script>
</body>
</html>