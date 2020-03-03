package com.nimps.rpisystem.rpisystem;

public class Rentals extends RpisystemApplication {
    public int rental_id;
    public int student_panther_id;
    public org.springframework.format.annotation.DateTimeFormat checkout_date;
    public org.springframework.format.annotation.DateTimeFormat check_in_date;
    public org.springframework.format.annotation.DateTimeFormat due_date;
    public int checkout_by;
    public int checkin_by;
    public int kit_barcode;
}
