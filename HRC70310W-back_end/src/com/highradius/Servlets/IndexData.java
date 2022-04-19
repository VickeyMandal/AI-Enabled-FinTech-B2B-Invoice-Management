package com.highradius.Servlets;

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
 * Servlet implementation class IndexData
 */
@WebServlet("/IndexData")
public class IndexData extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public IndexData() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		PrintWriter out = response.getWriter();

		HashMap<Object, Object> Response = new HashMap<>();
		List<Client> list = new ArrayList<>();
		try {
			
			String slNo = request.getParameter("slNo");
			String query = "";
			if(slNo=="-1") {
				query = "";
			} else {
				//System.out.println(slNo);
				query = "SELECT sl_no, invoice_currency, cust_payment_terms FROM winter_internship where sl_no="+slNo;
			}
			
			
			Connection con = ConnectionProvider.getConnection();
			PreparedStatement st = con.prepareStatement(query);

			ResultSet set = st.executeQuery();

			while (set.next()) {

				int sl_no = set.getInt("sl_no");
				String invoiceCurrency = set.getString("invoice_currency");
				String customerPaymentTerms = set.getString("cust_payment_terms");

				Client client = new Client(sl_no, invoiceCurrency,customerPaymentTerms);

				list.add(client);

			}
			Response.put("clients", list);
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
