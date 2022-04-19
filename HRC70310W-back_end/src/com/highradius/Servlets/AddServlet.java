package com.highradius.Servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;

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
 * Servlet implementation class AddServlet
 */
@WebServlet("/AddServlet")
public class AddServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AddServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		// response.getWriter().append("Served at: ").append(request.getContextPath());
		PrintWriter out = response.getWriter();
		HashMap<Object, Object> Response = new HashMap<>();
		
		//fetch all form data
		String businessCode = request.getParameter("businessCode");
		String customerNumber = request.getParameter("customerNumber");
		String clearDate = request.getParameter("clearDate");
		String businessYear = request.getParameter("businessYear");
		String documentId = request.getParameter("documentId");
		String postingDate = request.getParameter("postingDate");
		String documentCreateDate = request.getParameter("documentCreateDate");
		String dueDate = request.getParameter("dueDate");
		String invoiceCurrency = request.getParameter("invoiceCurrency");
		String documentType = request.getParameter("documentType");
		String postingId = request.getParameter("postingId");
		String totalAmountOpen = request.getParameter("totalAmountOpen");
		String baselineCreateDate = request.getParameter("baselineCreateDate");
		String customerPaymentTerms = request.getParameter("customerPaymentTerms");
		String InvoiceId = request.getParameter("InvoiceId");
		
		
		//create use object
		Client client = new Client(businessCode, customerNumber, clearDate, businessYear, 
				documentId, postingDate, documentCreateDate, dueDate, invoiceCurrency,
				documentType, postingId, totalAmountOpen, baselineCreateDate, customerPaymentTerms, InvoiceId);
		
		//create UserDao object
		ClientDao dao = new ClientDao(ConnectionProvider.getConnection());
		if(dao.addClient(client)) {
			//save
			//out.println("Saved");
			Response.put("insert", true);
		} else {
			//out.println("error");
			Response.put("insert", false);
		}
		 
		Gson gson = new Gson();
		String jsonResponse = gson.toJson(Response);
		response.setHeader("Access-Control-Allow-Origin", "*");
		response.getWriter().append(jsonResponse);
	
//		out.println("</body>");
//		out.println("</html>");
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
