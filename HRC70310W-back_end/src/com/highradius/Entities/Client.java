package com.highradius.Entities;

import java.sql.Connection;

public class Client {
	
	private Connection con;

	public Client(Connection con) {
		super();
		this.con = con;
	}
	
	private int sl_no;
	private String business_code;
	//private String business_name;
	//private String name_customer;
	private String cust_number;
	private String clear_date;
	private String business_year;
	private String doc_id;
	private String posting_date;
	private String document_create_date;
	//private String document_create_date1;
	private String due_in_date;
	private String invoice_currency;
	private String document_type;
	private String posting_id;
	//private float area_business;
	private String total_open_amount;
	private String baseline_create_date;
	private String cust_payment_terms;
	private String invoice_id;
	private String aging_bucket;
	
	
	
	
	
	//constructors
	

	public Client(String business_code, String cust_number, String clear_date, String business_year, String documentId,
			String posting_date, String document_create_date, String due_in_date, String invoice_currency,
			String document_type, String postingId, String totalAmountOpen, String baseline_create_date,
			String cust_payment_terms, String invoiceId) {
		super();
		this.business_code = business_code;
		this.cust_number = cust_number;
		this.clear_date = clear_date;
		this.business_year = business_year;
		this.doc_id = documentId;
		this.posting_date = posting_date;
		this.document_create_date = document_create_date;
		this.due_in_date = due_in_date;
		this.invoice_currency = invoice_currency;
		this.document_type = document_type;
		this.posting_id = postingId;
		this.total_open_amount = totalAmountOpen;
		this.baseline_create_date = baseline_create_date;
		this.cust_payment_terms = cust_payment_terms;
		this.invoice_id = invoiceId;
	}
	
	public Client(String business_code, String cust_number, String clear_date, String business_year, String documentId,
			String posting_date, String document_create_date, String due_in_date, String invoice_currency,
			String document_type, String postingId, String totalAmountOpen, String baseline_create_date,
			String cust_payment_terms, String invoiceId, String aging_bucket) {
		super();
		this.business_code = business_code;
		this.cust_number = cust_number;
		this.clear_date = clear_date;
		this.business_year = business_year;
		this.doc_id = documentId;
		this.posting_date = posting_date;
		this.document_create_date = document_create_date;
		this.due_in_date = due_in_date;
		this.invoice_currency = invoice_currency;
		this.document_type = document_type;
		this.posting_id = postingId;
		this.total_open_amount = totalAmountOpen;
		this.baseline_create_date = baseline_create_date;
		this.cust_payment_terms = cust_payment_terms;
		this.invoice_id = invoiceId;
		this.aging_bucket = aging_bucket;
	}
	
	
	
	public Client() {
		super();
	}
	
	
	
	
	
	public Client(int sl_no, String business_code, String cust_number, String clear_date, String business_year,
			String doc_id, String posting_date, String document_create_date, String due_in_date,
			String invoice_currency, String document_type, String posting_id, String total_open_amount,
			String baseline_create_date, String cust_payment_terms, String invoice_id, String aging_bucket) {
		super();
		this.sl_no = sl_no;
		this.business_code = business_code;
		this.cust_number = cust_number;
		this.clear_date = clear_date;
		this.business_year = business_year;
		this.doc_id = doc_id;
		this.posting_date = posting_date;
		this.document_create_date = document_create_date;
		this.due_in_date = due_in_date;
		this.invoice_currency = invoice_currency;
		this.document_type = document_type;
		this.posting_id = posting_id;
		this.total_open_amount = total_open_amount;
		this.baseline_create_date = baseline_create_date;
		this.cust_payment_terms = cust_payment_terms;
		this.invoice_id = invoice_id;
		this.aging_bucket = aging_bucket;
	}
	
	
	
	




	public Client(int sl_no) {
		super();
		this.sl_no = sl_no;
	}




	public Client(int sl_no , String invoice_currency, String cust_payment_terms) {
		super();
		this.sl_no = sl_no;
		this.invoice_currency = invoice_currency;
		this.cust_payment_terms = cust_payment_terms;
	}




	//getters and setters
	
	public int getSl_no() {
		return sl_no;
	}
	public void setSl_no(int sl_no) {
		this.sl_no = sl_no;
	}
	public String getBusiness_code() {
		return business_code;
	}
	public void setBusiness_code(String business_code) {
		this.business_code = business_code;
	}
	public String getCust_number() {
		return cust_number;
	}
	public void setCust_number(String cust_number) {
		this.cust_number = cust_number;
	}
	public String getClear_date() {
		return clear_date;
	}
	public void setClear_date(String clear_date) {
		this.clear_date = clear_date;
	}
	public String getBusiness_year() {
		return business_year;
	}
	public void setBusiness_year(String business_year) {
		this.business_year = business_year;
	}
	public String getDoc_id() {
		return doc_id;
	}
	public void setDoc_id(String doc_id) {
		this.doc_id = doc_id;
	}
	public String getPosting_date() {
		return posting_date;
	}
	public void setPosting_date(String posting_date) {
		this.posting_date = posting_date;
	}
	public String getDocument_create_date() {
		return document_create_date;
	}
	public void setDocument_create_date(String document_create_date) {
		this.document_create_date = document_create_date;
	}
	public String getDue_in_date() {
		return due_in_date;
	}
	public void setDue_in_date(String due_in_date) {
		this.due_in_date = due_in_date;
	}
	public String getInvoice_currency() {
		return invoice_currency;
	}
	public void setInvoice_currency(String invoice_currency) {
		this.invoice_currency = invoice_currency;
	}
	public String getDocument_type() {
		return document_type;
	}
	public void setDocument_type(String document_type) {
		this.document_type = document_type;
	}
	public String getPosting_id() {
		return posting_id;
	}
	public void setPosting_id(String posting_id) {
		this.posting_id = posting_id;
	}
	public String getTotal_open_amount() {
		return total_open_amount;
	}
	public void setTotal_open_amount(String total_open_amount) {
		this.total_open_amount = total_open_amount;
	}
	public String getBaseline_create_date() {
		return baseline_create_date;
	}
	public void setBaseline_create_date(String baseline_create_date) {
		this.baseline_create_date = baseline_create_date;
	}
	public String getCust_payment_terms() {
		return cust_payment_terms;
	}
	public void setCust_payment_terms(String cust_payment_terms) {
		this.cust_payment_terms = cust_payment_terms;
	}
	public String getInvoice_id() {
		return invoice_id;
	}
	public void setInvoice_id(String invoice_id) {
		this.invoice_id = invoice_id;
	}




	public String getAgingBucket() {
		return aging_bucket;
	}




	public void setAgingBucket(String aging_bucket) {
		this.aging_bucket = aging_bucket;
	}

	
	
	
	

	
	
	
	
	
	
	
	
}
