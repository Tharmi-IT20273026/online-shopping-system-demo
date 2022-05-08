package com.example.OnlineShoppingSystem.service;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.OnlineShoppingSystem.models.Seller;
import com.example.OnlineShoppingSystem.repository.SellerRepository;

import java.util.List;

@Service
@Transactional
public class SellerService {

	 @Autowired
	    private SellerRepository sellerRepository;
	 
	 	public void addStocks(Seller seller) {
	        sellerRepository.save(seller);
	    }

		public List<Seller> listAllStocks() {
			return sellerRepository.findAll();
		}

	public void deleteStocks(Integer id) {
		sellerRepository.deleteById(id);
	}
	    
}
