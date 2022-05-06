package OnlineShop;

import java.sql.*;

public class ConnectionPro {

    private static Connection con;
    
    public static Connection getConnection(){
        try{
            Class.forName("com.mysql.jdbc.Driver");
            con=DriverManager.getConnection("jdbc:mysql://localhost:3306/test","root","");
            
        }catch(Exception e){
            e.printStackTrace();
        }
        return con;
    }
}

