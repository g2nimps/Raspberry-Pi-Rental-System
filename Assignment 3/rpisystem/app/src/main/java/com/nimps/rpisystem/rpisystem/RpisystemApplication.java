package com.nimps.rpisystem.rpisystem;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
public class RpisystemApplication {

    public static void main(String[] args) {
        SpringApplication.run(RpisystemApplication.class, args);
    }

}
