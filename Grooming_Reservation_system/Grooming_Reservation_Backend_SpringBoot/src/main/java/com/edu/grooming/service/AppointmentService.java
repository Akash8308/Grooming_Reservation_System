package com.edu.grooming.service;

import java.util.List;

import com.edu.grooming.dao.Appointment;


public interface AppointmentService {

	Appointment saveAppointment(Appointment appointment);

	List<Appointment> getAllAppointments();

	Appointment updateAppointmentUser(Integer userid, Integer appointmentId);

	Appointment updateAppointmentSalon(Integer salonid, Integer appointmentId);

	Appointment updateAppointmentStylist(Integer stylistid, Integer appointmentId);

	Appointment updateAppointmentService(Integer serviceid, Integer appointmentId);

	

}
