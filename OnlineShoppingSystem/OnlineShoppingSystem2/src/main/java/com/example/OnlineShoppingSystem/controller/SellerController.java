package com.example.OnlineShoppingSystem.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.OnlineShoppingSystem.models.Seller;
import com.example.OnlineShoppingSystem.service.SellerService;

import java.util.ArrayList;
import java.util.List;

@RestController
//@RequestMapping("/seller")
@CrossOrigin(origins = "http://localhost:8080", maxAge = 3600)
public class SellerController {
	
	 @Autowired
	    SellerService sellerService;
	@CrossOrigin(origins = "*")
	 @PostMapping("/stocks")
	    public void add(@RequestBody Seller seller) {
	         sellerService.addStocks(seller);
	    }

	@CrossOrigin(origins = "*")
	@GetMapping("/stocks")
	public List<Seller> list() {
		return sellerService.listAllStocks();
	}

	@CrossOrigin(origins = "*")
	@GetMapping("/stocks/women")
	public List<Seller> listWomen() {

		List<Seller> stocks = sellerService.listAllStocks();
		List<Seller> womenStocks = new ArrayList<>();
		for (Seller seller: stocks) {
			if ("women".equalsIgnoreCase(seller.getType())) {
				womenStocks.add(seller);
			}
		}
		return womenStocks;
	}

	@CrossOrigin(origins = "*")
	@GetMapping("/stocks/men")
	public List<Seller> listMen() {

		List<Seller> stocks = sellerService.listAllStocks();
		List<Seller> menStocks = new ArrayList<>();
		for (Seller seller: stocks) {
			if ("men".equalsIgnoreCase(seller.getType())) {
				menStocks.add(seller);
			}
		}
		return menStocks;
	}

	@CrossOrigin(origins = "*")
	@GetMapping("/stocks/kids")
	public List<Seller> listKids() {

		List<Seller> stocks = sellerService.listAllStocks();
		List<Seller> kidsStocks = new ArrayList<>();
		for (Seller seller: stocks) {
			if ("kids".equalsIgnoreCase(seller.getType())) {
				kidsStocks.add(seller);
			}
		}
		return kidsStocks;
	}

	@CrossOrigin(origins = "*")
	@DeleteMapping("/stocks/{id}")
	public void delete(@PathVariable Integer id) {

		sellerService.deleteStocks(id);
	}
	    

}

/**LoginController{
 * LoginService wired
 * @PostMapping("/login")
 * public LoginResponseDTO validate(UserLogin){
 * loginservice.validatUser(userLogin)
*
}

*/