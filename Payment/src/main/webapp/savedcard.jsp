<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.Statement"%>
<%@page import="java.sql.Connection"%>
<%
String id = request.getParameter("cardnum");
String driver = "com.mysql.jdbc.Driver";
String connectionUrl = "jdbc:mysql://localhost:3306/";
String database = "user";
String userid = "root";
String password = "";
try {
Class.forName(driver);
} catch (ClassNotFoundException e) {
e.printStackTrace();
}
Connection connection = null;
Statement statement = null;
ResultSet resultSet = null;
%>
<!DOCTYPE html>
<html>
<body>

<h1><center>Saved Card Details</h1>
<center><table border="1">
<tr>
<td>card_number</td>
<td>card_holder</td>
<td>expiration_mm</td>
<td>expiration_yy</td>
<td>cvv</td>
<td>Edit </td>
<td>Pay </td>

</tr>
<%
try{
connection = DriverManager.getConnection(connectionUrl+database, userid, password);
statement=connection.createStatement();
String sql ="select * from card";
resultSet = statement.executeQuery(sql);
while(resultSet.next()){
%>
<tr>
<td><%=resultSet.getInt("cardnum") %></td>
<td><%=resultSet.getString("holdername") %></td>
<td><%=resultSet.getInt("expmonth") %></td>
<td><%=resultSet.getInt("expyear") %></td>
<td><%=resultSet.getInt("cvv") %></td>
<td><input type="button" value="Delete" onclick="deleteRow(this)"><input type="button" value="Edit" onclick="editRow(this)"></td>
<td><a href="Pay.html"><input type="button" value="Pay" onclick="PayRow(this)"></a></td>

</tr>
<%
}
connection.close();
} catch (Exception e) {
e.printStackTrace();
}

%>

</table> 




</body>
</html>