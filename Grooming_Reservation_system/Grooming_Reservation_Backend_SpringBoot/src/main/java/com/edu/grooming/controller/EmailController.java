package com.edu.grooming.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.edu.grooming.dao.EmailRequest;
import com.edu.grooming.service.EmailSenderService;

@RestController
//@RequestMapping("/api/email")
@CrossOrigin(origins = "http://localhost:8990")
public class EmailController {

    @Autowired
    private EmailSenderService emailSenderService;

    @PostMapping("/send") //http://localhost:8990/send
    public String sendEmail(@RequestBody EmailRequest emailRequest) {
    	emailSenderService.sendEmail(emailRequest.getTo(), emailRequest.getSubject(), emailRequest.getBody());
    	System.out.println("Mail: Sent");
        return "Email sent successfully!";
    }
}
