package OnlineShop;

public class AddCard {

	int cardnum;
    String holdername;
    int expmonth;
    int expyear;
    int cvv;
    
    public AddCard() {
    }

    public AddCard(int cardnum, String holdername, int expmonth, int expyear, int cvv) {
        this.cardnum = cardnum;
        this.holdername = holdername;
        this.expmonth = expmonth;
        this.expyear = expyear;
        this.cvv = cvv;
    }
    

    public int getCardnum() {
        return cardnum;
    }

    public void setCardnum(int cardnum) {
        this.cardnum = cardnum;
    }

    public String getHoldername() {
        return holdername;
    }

    public void setHoldername(String holdername) {
        this.holdername = holdername;
    }

    public int getExpmonth() {
        return expmonth;
    }

    public void setExpmonth(int expmonth) {
        this.expmonth = expmonth;
    }
    
    public int getExpyear() {
        return expyear;
    }

    public void setExpyear(int expyear) {
        this.expyear = expyear;
    }

    public int getCvv() {
        return cvv;
    }

    public void setCvv(int cvv) {
        this.cvv = cvv;
    }
    
}
