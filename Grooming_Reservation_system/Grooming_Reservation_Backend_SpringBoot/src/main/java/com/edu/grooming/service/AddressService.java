package com.edu.grooming.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.edu.grooming.dao.Address;
import com.edu.grooming.error.NotFoundException;

@Service
public interface AddressService {

	public Address addAddress(Address address);

	public List<Address> getAllAddress();

	public List<Address> deleteAddressById(Integer addressid) throws NotFoundException;

	public Address getAddressById(Integer addressid) throws NotFoundException;

	public Address updateAddressById(Integer addressid, Address address) throws NotFoundException;

}
