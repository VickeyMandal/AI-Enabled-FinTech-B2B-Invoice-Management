package com.highradius.Dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import com.highradius.Entities.Client;
import com.highradius.Helper.ConnectionProvider;

public class ClientDao {

	private Connection con;

	public ClientDao(Connection con) {
		super();
		this.con = con;
	}


	// method to insert user in database
	public boolean addClient(Client client) {
		boolean f = false;
		try {

			// user->databse
			String query = "INSERT INTO winter_internship (business_code, cust_number, clear_date, "
					+ "buisness_year, doc_id, posting_date, document_create_date, "
					+ "due_in_date, invoice_currency, document_type, posting_id, total_open_amount, "
					+ "baseline_create_date, cust_payment_terms, invoice_id) "
					+ "values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

			PreparedStatement st = this.con.prepareStatement(query);
			st.setString(1, client.getBusiness_code());
			st.setString(2, client.getCust_number());
			st.setString(3, client.getClear_date());
			st.setString(4, client.getBusiness_year());
			st.setString(5, client.getDoc_id());
			st.setString(6, client.getPosting_date());
			st.setString(7, client.getDocument_create_date());
			//st.setString(8, client.getDocument_create_date());
			st.setString(8, client.getDue_in_date());
			st.setString(9, client.getInvoice_currency());
			st.setString(10, client.getDocument_type());
			st.setString(11, client.getPosting_id());
			st.setString(12, client.getTotal_open_amount());
			st.setString(13, client.getBaseline_create_date());
			st.setString(14, client.getCust_payment_terms());
			st.setString(15, client.getInvoice_id());

			st.executeUpdate();
			f = true;
		} catch (Exception e) {
			e.printStackTrace();
		}

		return f;
	}
	
	
	
	//Get Edit details
	
	public HashMap<Object, Object> GetEditDetails(String sl, String doc) {

		ArrayList<Object> list = new ArrayList<>();
		HashMap<Object, Object> Response = new HashMap<>();

		try {

			String query = "SELECT sl_no, doc_id, invoice_currency, cust_payment_terms FROM winter_internship WHERE sl_no=? AND doc_id=?;";

			Connection con = ConnectionProvider.getConnection();

			PreparedStatement st = con.prepareStatement(query);
			// out.println(con);
			st.setString(1, sl);
			st.setString(2, doc);
			ResultSet set = st.executeQuery();

			while (set.next()) {

				int sl_no = Integer.valueOf(set.getString("sl_no"));
				String doc_id = set.getString("doc_id");
				String inv_cur = set.getString("invoice_currency");
				String cust_payment_term = set.getString("cust_payment_terms");
				
				Client client = new Client(sl_no , inv_cur, cust_payment_term);

				list.add(client); 

			}
			Response.put("client", list);
			

		} catch (Exception e) {
			e.printStackTrace();
		}
		return Response;
	}
	
	
	
	//Edit details
	public boolean Edit(String sl, String inv, String cust) {

		boolean f = false;
		try {

			String query = "UPDATE winter_internship SET invoice_currency = '"+inv+"', cust_payment_terms= '"+cust+"' WHERE sl_no="+sl+";";

			Connection con = ConnectionProvider.getConnection();

			PreparedStatement st = con.prepareStatement(query);
//			System.out.println(con);
//			st.setString(1, inv);
//			st.setString(2, cust);
//			st.setString(3, sl);
//			st.setString(4, doc);
			st.executeUpdate();
			f = true;

		} catch (Exception e) {
			e.printStackTrace();
		}
		return f;
	}
	
	
	
	// Delete
		public boolean Delete(String sl, String doc, String inv, String cust) {

			boolean f = false;
			try {

				String query = "UPDATE winter_internship SET invoice_currency = '"+inv+"', cust_payment_terms= '"+cust+"' WHERE sl_no="+sl+" AND doc_id="+doc+";";

				Connection con = ConnectionProvider.getConnection();

				PreparedStatement st = con.prepareStatement(query);
//				System.out.println(con);
//				st.setString(1, inv);
//				st.setString(2, cust);
//				st.setString(3, sl);
//				st.setString(4, doc);
				st.executeUpdate();
				f = true;

			} catch (Exception e) {
				e.printStackTrace();
			}
			return f;
		}
		

}
