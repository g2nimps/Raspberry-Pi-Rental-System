package com.nimps.rpisystem.rpisystem;

public class RaspberryPi extends Equipment {
    public int device_id;
    public String item_model;
    public String description;
    public String serial;
    public String barcode;
    public enum device_condition {GOOD, DAMAGED, LOST};
}
