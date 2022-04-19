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
 * Servlet implementation class data
 */
@WebServlet("/data")
public class data extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public data() {
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
			int slno = Integer.parseInt(request.getParameter("sl_no"));
			//System.out.println(slno);
			String query = "SELECT * FROM winter_internship where sl_no="+ slno;
			
			Connection con = ConnectionProvider.getConnection();
			PreparedStatement st = con.prepareStatement(query);

			ResultSet set = st.executeQuery();

			while (set.next()) {

				int sl_no = set.getInt("sl_no");
				String businessCode = set.getString("business_code");
				String customerNumber = set.getString("cust_number");
				String clearDate = set.getString("clear_date") == null ? "" : set.getString("clear_date").substring(0, 10);
				String businessYear = set.getString("buisness_year").substring(0,4);
				String documentId = set.getString("doc_id");
				String postingDate = set.getString("posting_date");
				String documentCreateDate = set.getString("document_create_date");
				String dueDate = set.getString("due_in_date");
				String invoiceCurrency = set.getString("invoice_currency");
				String documentType = set.getString("document_type");
				String postingId = set.getString("posting_id");
				String totalAmountOpen = set.getString("total_open_amount");
				String baselineCreateDate = set.getString("baseline_create_date");
				String customerPaymentTerms = set.getString("cust_payment_terms");
				String InvoiceId = set.getString("invoice_id");
				String agingBucket = set.getString("aging_bucket");

				Client client = new Client(sl_no, businessCode, customerNumber, clearDate, businessYear, documentId,
						postingDate, documentCreateDate, dueDate, invoiceCurrency, documentType, postingId,
						totalAmountOpen, baselineCreateDate, customerPaymentTerms, InvoiceId, agingBucket);

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
