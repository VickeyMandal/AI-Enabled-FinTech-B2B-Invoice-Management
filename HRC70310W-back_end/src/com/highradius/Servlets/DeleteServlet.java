package com.highradius.Servlets;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.highradius.Entities.Client;
import com.highradius.Helper.ConnectionProvider;

/**
 * Servlet implementation class DeleteServlet
 */
@WebServlet("/DeleteServlet")
public class DeleteServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public DeleteServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		PrintWriter out = response.getWriter();
		String salesOrder = "";
		String Response = "";

		try {
			
			salesOrder = request.getParameter("slNo");
//			System.out.println(salesOrder);
						
			String final_values[] = salesOrder.split(",");
			
			Connection con = ConnectionProvider.getConnection();
			String sql_statement = "DELETE FROM winter_internship WHERE sl_no = ?";
			
			for(int i = 0; i < final_values.length; ++i) {
				//System.out.println(final_values[i]);
				PreparedStatement st = con.prepareStatement(sql_statement);
				st.setString(1, final_values[i]);
				//System.out.println(st);
				st.executeUpdate();
			}
			
			Response = "Deleted";
			
		} catch (Exception e) {
			e.printStackTrace();
		}

		Gson gson = new Gson();
		String jsonResponse = gson.toJson(Response);
		response.setHeader("Access-Control-Allow-Origin", "*");
		response.getWriter().append(jsonResponse);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
