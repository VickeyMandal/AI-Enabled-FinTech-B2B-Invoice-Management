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
import com.highradius.Dao.ClientDao;
import com.highradius.Entities.Client;
import com.highradius.Helper.ConnectionProvider;

/**
 * Servlet implementation class ViewServelt
 */
@WebServlet("/SendData")
public class SendData extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public SendData() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		// response.getWriter().append("Served at: ").append(request.getContextPath());


		// fetch all records

		HashMap<Object, Object> Response = new HashMap<>();
		List<Client> list = new ArrayList<>();

		try {
			int start = Integer.parseInt(request.getParameter("start"));
			int limit = Integer.parseInt(request.getParameter("limit"));
			String orderBy = request.getParameter("orderBy");
			String order = request.getParameter("order");
			String search = request.getParameter("search");

			String query = "SELECT * FROM winter_internship where cust_number like '"+search+"%' order by "+orderBy +" "+order +" limit ?,?";
			
			Connection con = ConnectionProvider.getConnection();
			PreparedStatement st = con.prepareStatement(query);
			st.setInt(1, start);
			st.setInt(2, limit);
			//System.out.println(query);
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
			//String sql = "select count(*) invoice_count from winter_internship";
			String sql = "SELECT COUNT(*) invoice_count FROM winter_internship WHERE cust_number like '"+search+"%'";
			st = con.prepareStatement(sql);
			set = st.executeQuery();
			while(set.next()) {
				String count = set.getString("invoice_count");
				Response.put("count",count);
			}

			
		} catch (Exception e) {
			e.printStackTrace();
		}

		Gson gson = new Gson();
		String jsonResponse = gson.toJson(Response);
		response.setHeader("Access-Control-Allow-Origin", "*");
		response.getWriter().append(jsonResponse);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
