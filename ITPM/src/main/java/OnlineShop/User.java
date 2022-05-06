package OnlineShop;

public class User {
    String email;
    String newpassword;
    String confirmpassword;

    public User() {
    }

    public User(String email, String newpassword, String confirmpassword) {
        this.email = email;
        this.newpassword = newpassword;
        this.confirmpassword = confirmpassword;
    }

  

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getNewpassword() {
        return newpassword;
    }

    public void setNewpassword(String newpassword) {
        this.newpassword = newpassword;
    }

    public String getConfirmpassword() {
        return confirmpassword;
    }

    public void setConfirmpassword(String confirmpassword) {
        this.confirmpassword = confirmpassword;
    }
    
    
    
}

