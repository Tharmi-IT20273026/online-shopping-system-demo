package OnlineShop;

import java.sql.*;

    public class AddCardDatabase {
	Connection con ;
	
	public AddCardDatabase(Connection con) {
        this.con = con;
    }
	
	   public boolean saveAddCard(AddCard addcard){
	        boolean set = false;
	        try{
	            //Insert register data to database
	            String query = "insert into card(cardnum,holdername,expmonth,expyear,cvv) values(?,?,?,?,?)";
	           
	           PreparedStatement pt = this.con.prepareStatement(query);
	           pt.setInt(2, addcard.getCardnum());
	           pt.setString(3, addcard.getHoldername());
	           pt.setInt(4, addcard.getExpmonth());
	           pt.setInt(5, addcard.getExpyear());
	           pt.setInt(6, addcard.getCvv());
	           
	           pt.executeUpdate();
	           set = true;
	        }catch(Exception e){
	            e.printStackTrace();
	        }
	        return set;
	    }
    

}
