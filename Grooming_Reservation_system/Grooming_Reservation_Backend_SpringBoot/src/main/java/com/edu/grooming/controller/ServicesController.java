package com.edu.grooming.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.edu.grooming.dao.Services;
import com.edu.grooming.service.ServicesService;
import com.edu.grooming.error.NotFoundException;




@RestController
public class ServicesController {

	@Autowired
	private ServicesService servicesService;

	@PostMapping("/saveservices")	//http://localhost:8990/saveservices
	public Services saveServices(@RequestBody Services services){
		return servicesService.saveServices(services);
	}


	@PutMapping("/updateservicesSalon/{servicesid}/{salonid}") // http://localhost:8990/updateservicesSalon/
	public Services updateServicesSalon(@PathVariable("servicesid") Integer servicesid, @PathVariable("salonid") Integer salonid) {
		return servicesService.updateServicesSalon(servicesid, salonid);
	}

	@GetMapping("/getAllservices") // http://localhost:8990/getAllservices
	public List<Services> getAllServices(){
		return servicesService.getAllServices();
	}

	@GetMapping("/getServicesById/{servicesid}")	// http://localhost:8990/getServicesById
	public Services getServicesById(@PathVariable("servicesid") Integer servicesid) throws NotFoundException {
		return servicesService.getServicesById(servicesid);
	}

	@GetMapping("/getServicesByGender/{servicesgendertype}")	// http://localhost:8990/getServicesByGender/
	public List<Services> getServicesByGender(@PathVariable("servicesgendertype") String servicesgendertype){
		return servicesService.getServicesByGender(servicesgendertype);
	}
	

	
}
