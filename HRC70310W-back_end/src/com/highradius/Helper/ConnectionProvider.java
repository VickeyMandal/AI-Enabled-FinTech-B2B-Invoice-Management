package com.highradius.Helper;

import java.sql.Connection;
import java.sql.DriverManager;

public class ConnectionProvider {
	private static Connection con;

	// JDBC Driver Name and Database URL
	static final String JDBC_DRIVER = "com.mysql.cj.jdbc.Driver";
	//Self : dont forget to change database name
	static final String DB_URL = "jdbc:mysql://localhost/hrccopy";

	// Database credentials
	static final String USER = "root";
	static final String PASS = "vickey";

	public static Connection getConnection() {

		try {

			if (con == null) {

				// load class

				Class.forName(JDBC_DRIVER);

				// create a connection

				con = DriverManager.getConnection(DB_URL, USER, PASS);

			}

		} catch (Exception e) {
			e.printStackTrace();
		}

		return con;
	}
}
