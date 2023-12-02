package com.edu.grooming.dao;

import javax.persistence.Column;
import java.time.LocalDate;
import java.time.LocalTime;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.FutureOrPresent;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Entity
public class Appointment {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer appointmentId;

	@NotNull(message = "Appointment Date should not be empty")
	@FutureOrPresent
	@Column(name = "appointmentDate", nullable = false)
	private LocalDate appointmentDate;

	@NotNull(message = "Appointment Starttime should not be empty")
	@Column(name = "appointmentStartTime", nullable = false)
	private LocalTime appointmentStartTime;

	@NotNull(message = "Appointment Endtime should not be empty")
	@Column(name = "appointmentEndTime", nullable = false)
	private LocalTime appointmentEndTime;

	@NotBlank(message = "Appointment Status Should not be empty")
	@Column(name = "appointmentStatus", nullable = false)
	private String appointmentStatus;
	
	@NotBlank(message = "Appointment Type Should not be empty")
	@Column(name = "appointmentType" , nullable = false)
    private String appointmentType;
	
	@ManyToOne
	@JoinColumn(name = "userid")
	private User user;
	
	@ManyToOne
	@JoinColumn(name = "salonid")
	private Salon salon;
	
	@ManyToOne
	@JoinColumn(name = "stylistid")
	private Stylist stylist;
	
	@ManyToOne
	@JoinColumn(name = "servicesid")
	private Services services;

	public Appointment() {
		super();
	}


	public Appointment(
			 LocalDate appointmentDate,
			 LocalTime appointmentStartTime,
			 LocalTime appointmentEndTime,
			 String appointmentStatus,
			 String appointmentType) {
		super();
		this.appointmentDate = appointmentDate;
		this.appointmentStartTime = appointmentStartTime;
		this.appointmentEndTime = appointmentEndTime;
		this.appointmentStatus = appointmentStatus;
		this.appointmentType = appointmentType;
	}


	public Integer getAppointmentId() {
		return appointmentId;
	}
	public void setAppointmentId(Integer appointmentId) {
		this.appointmentId = appointmentId;
	}

	public LocalDate getAppointmentDate() {
		return appointmentDate;
	}
	public void setAppointmentDate(LocalDate appointmentDate) {
		this.appointmentDate = appointmentDate;
	}

	public LocalTime getAppointmentStartTime() {
		return appointmentStartTime;
	}
	public void setAppointmentStartTime(LocalTime appointmentStartTime) {
		this.appointmentStartTime = appointmentStartTime;
	}

	public LocalTime getAppointmentEndTime() {
		return appointmentEndTime;
	}
	public void setAppointmentEndTime(LocalTime appointmentEndTime) {
		this.appointmentEndTime = appointmentEndTime;
	}

	public String getAppointmentStatus() {
		return appointmentStatus;
	}
	public void setAppointmentStatus(String appointmentStatus) {
		this.appointmentStatus = appointmentStatus;
	}
	
	
	public String getAppointmentType() {
		return appointmentType;
	}
	public void setAppointmentType(String appointmentType) {
		this.appointmentType = appointmentType;
	}
	
	public User getUser() {
		return user;
	}


	public void setUser(User user) {
		this.user = user;
	}


	public Salon getSalon() {
		return salon;
	}


	public void setSalon(Salon salon) {
		this.salon = salon;
	}


	public Stylist getStylist() {
		return stylist;
	}


	public void setStylist(Stylist stylist) {
		this.stylist = stylist;
	}


	public Services getServices() {
		return services;
	}


	public void setServices(Services services) {
		this.services = services;
	}


	@Override
	public String toString() {
		return "Appointment [appointmentId=" + appointmentId + ", appointmentDate=" + appointmentDate
				+ ", appointmentStartTime=" + appointmentStartTime + ", appointmentEndTime=" + appointmentEndTime
				+ ", appointmentStatus=" + appointmentStatus + ", appointmentType=" + appointmentType + "]";
	}


	public void updateAppointmentUser(User user2) {
	
		this.user = user2;
	}


	public void updateAppointmentSalon(Salon salon2) {
		
		this.salon = salon2;
		
	}


	public void updateAppointmentStylist(Stylist stylist2) {
		this.stylist = stylist2;
		
	}


	public void updateAppointmentStylist(Services services2) {
		this.services = services2;
		
	}


	
}
