package com.servlet.onlineshopping;

	import java.io.IOException;
	import java.io.PrintWriter;
	import java.sql.Connection;
	import java.sql.DriverManager;
	import java.sql.PreparedStatement;
	import java.sql.SQLException;


	import jakarta.servlet.ServletException;
	import jakarta.servlet.annotation.WebServlet;
	import jakarta.servlet.http.HttpServlet;
	import jakarta.servlet.http.HttpServletRequest;
	import jakarta.servlet.http.HttpServletResponse;

	@WebServlet("/card")
	public class CardServlet  extends HttpServlet{
		
		/**
		 * 
		 */
		private static final long serialVersionUID = 1L;
		//create the query
		private static final String INSERT_QUERY ="INSERT INTO card(cardnum,holdername,expmonth,expyear,cvv) VALUES(?,?,?,?,?)";
		
		@Override
		protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
			//get PrintWriter
			PrintWriter pw = res.getWriter();
			//set Content type
			res.setContentType("text/html");
			//read the form values
			int card_number = Integer.parseInt(req.getParameter("cardnum"));
			String card_holder = req.getParameter("holdername");
			int expiration_mm = Integer.parseInt(req.getParameter("expmonth"));
			int expiration_yy= Integer.parseInt(req.getParameter("expyear"));
			int cvv = Integer.parseInt(req.getParameter("cvv"));
			
			//load the jdbc driver
			try {
				Class.forName("com.mysql.cj.jdbc.Driver");
			} 
			catch (ClassNotFoundException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			//create the connection
			try(Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/user","root","");
					PreparedStatement ps = con.prepareStatement(INSERT_QUERY);){
				//set the values
				ps.setInt(1, card_number);
				ps.setString(2, card_holder);
				ps.setInt(3, expiration_mm);
				ps.setInt(4, expiration_yy);
				ps.setInt(5, cvv);
				
				//execute the query
				int count = ps.executeUpdate();
				
				if(count==0) {
					pw.println("Record not stored into database");
				}else {
					pw.println("Record Stored into Database");
				}
			}catch(SQLException se) {
				pw.println(se.getMessage());
				se.printStackTrace();
			}catch(Exception e) {
				pw.println(e.getMessage());
				e.printStackTrace();
			}
			
			//close the stream
			pw.close();
		}
		
		@Override
		protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
			// TODO Auto-generated method stub
			doGet(req, resp);
		}
	}







