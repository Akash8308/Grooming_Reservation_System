package com.edu.grooming.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.edu.grooming.dao.Appointment;
import com.edu.grooming.dao.Salon;
import com.edu.grooming.dao.Services;
import com.edu.grooming.dao.Stylist;
import com.edu.grooming.dao.User;
import com.edu.grooming.repository.AppointmentRepository;
import com.edu.grooming.repository.SalonRepository;
import com.edu.grooming.repository.ServicesRepository;
import com.edu.grooming.repository.StylistRepository;
import com.edu.grooming.repository.UserRepository;

@Service
public class AppointmentServiceImpl implements AppointmentService{
	
	@Autowired
	private AppointmentRepository appointmentRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private SalonRepository salonRepository;
	
	@Autowired
	private StylistRepository stylistRepository;
	
	@Autowired
	private ServicesRepository servicesRepository;

	@Override
	public Appointment saveAppointment(Appointment appointment) {
		return appointmentRepository.save(appointment);
	}

	@Override
	public List<Appointment> getAllAppointments() {
		return appointmentRepository.findAll();
	}

	@Override
	public Appointment updateAppointmentUser(Integer userid, Integer appointmentId) {
		
		User user = userRepository.findById(userid).get();
		Appointment appointment =  appointmentRepository.findById(appointmentId).get();
		appointment.updateAppointmentUser(user);
		
		return appointmentRepository.save(appointment);
	}

	@Override
	public Appointment updateAppointmentSalon(Integer salonid, Integer appointmentId) {
		Salon salon = salonRepository.findById(salonid).get();
		Appointment appointment =  appointmentRepository.findById(appointmentId).get();
		appointment.updateAppointmentSalon(salon);
		
		return appointmentRepository.save(appointment);
	}

	@Override
	public Appointment updateAppointmentStylist(Integer stylistid, Integer appointmentId) {
		
		Stylist stylist = stylistRepository.findById(stylistid).get();
		Appointment appointment =  appointmentRepository.findById(appointmentId).get();
		appointment.updateAppointmentStylist(stylist);
		return appointmentRepository.save(appointment);
	}

	@Override
	public Appointment updateAppointmentService(Integer serviceid, Integer appointmentId) {
		Services services = servicesRepository.findById(serviceid).get();
		Appointment appointment =  appointmentRepository.findById(appointmentId).get();
		appointment.updateAppointmentStylist(services);
		return appointmentRepository.save(appointment);
	}

	

}
