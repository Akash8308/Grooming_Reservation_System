package com.edu.grooming.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.edu.grooming.dao.Salon;
import com.edu.grooming.dao.Services;
import com.edu.grooming.error.BadRequestException;
import com.edu.grooming.error.ConflictException;
import com.edu.grooming.error.NotFoundException;
import com.edu.grooming.repository.SalonRepository;
import com.edu.grooming.service.SalonService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class SalonController {

	@Autowired
	private SalonService salonService;
	
	@Autowired
	private SalonRepository salonRepository;

	@PostMapping("/saveSalon") //http://localhost:8990/saveSalon
	public ResponseEntity<Salon> saveSalon(@Valid @RequestBody Salon salon) throws ConflictException {
		Salon salon1 = salonRepository.findBySalonemailidOrSalonphone(salon.getSalonemailid(),salon.getSalonphone());
		if(salon1!=null) {
			
			throw new ConflictException("The provided email address is already registered. Please use a different email.");
		}
		
		Salon salon2 = salonService.saveSalon(salon);
		return new ResponseEntity<Salon>(salon2,HttpStatus.CREATED);
		
	}

	@GetMapping("/getAllSalon")  // http://localhost:8990/getSalon
	public List<Salon> getAllSalon(){
		return salonService.getAllSalon();
	}
	
	@GetMapping("/getSalonByName/name/{name}") // http://localhost:8990/getSalonByName/name/
	public Salon getSalonByName(@PathVariable("name") String salonname) {
		return salonService.getSalonByName(salonname);
	}
	
	@GetMapping("/getSalonByEmailPassword/{email}/{password}") //http://localhost:8990/getSalonByEmail/{email}/{password}
	public ResponseEntity<Salon> getSalonByEmailPassword(@PathVariable("email") String salonemailid,@PathVariable("password") String salonpassword) {
		
		Salon salon = salonRepository.getSalonByEmail(salonemailid, salonpassword);
		if(salon==null) {
			return ResponseEntity.badRequest().body(null);
		}
		else if((salon.getSalonstatus()).equals("Disabled") || (salon.getSalonstatus()).equals("Applied")){
			return ResponseEntity.badRequest().body(null);
		}else {
			return ResponseEntity.status(HttpStatus.ACCEPTED).body(salon); 
		}
		
	}
	@DeleteMapping("/deleteSalonByid/{id}") // http://localhost:8990/deleteSalonByid/{id}
	public Salon deleteSalonByid(@PathVariable("id") Integer salonid) throws NotFoundException {
		return salonService.deleteSalonByid(salonid);
	}
	
	@PutMapping("/updateSalonById/{id}")  // http://localhost:8990/updateSalonById/{id}
	public Salon updateSalonById(@PathVariable("id") Integer salonid,@Valid @RequestBody Salon salon) throws NotFoundException {
		return salonService.updateSalonById(salonid,salon);
		
	}
	
	@PostMapping("/saveServicesBySalonId/{id}") 	 //http://localhost:8990/saveServicesBySalonId/{id}
	public Salon saveServicesBySalonId(@Valid @RequestBody Services services, @PathVariable("id") Integer salonid) throws NotFoundException
	{
		return salonService.saveServicesBySalonId(services,salonid);
//		return salonRepository.findById(salonid).get();
	}
	
	@GetMapping("/getSalonById/{id}")//http://localhost:8990/getSalonById/{id}
	public Salon getSalonById(@PathVariable("id") Integer salonId) {
		return salonRepository.getSalonById(salonId);
	}
	
	@GetMapping("/searchSalonlike/{value}")//http://localhost:8990/searchSalonlike/{value}
	public List<Salon> searchSalon(@PathVariable("value") String value){
		return salonService.searchSalon(value);
	}
	
	@GetMapping("/searchSalonByStatus/{value}")//http://localhost:8990/searchSalonByStatus/{value}
	public List<Salon> searchSalonByStatus(@PathVariable("value") String value){
		return salonService.searchSalonByStatus(value);
	}
	
}
