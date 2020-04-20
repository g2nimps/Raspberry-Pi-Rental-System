package com.nimps.rpisystem.rpisystem;
import javax.persistence.*;

@Entity
public class Equipment extends RpisystemApplication {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public long id;
    public String item_model;
    public String description;
    public String serial;
    public String condition;
    @Column(unique=true)
    public int barcode;
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getItem_model() {
        return item_model;
    }

    public void setItem_model(String item_model) {
        this.item_model = item_model;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getSerial() {
        return serial;
    }

    public void setSerial(String serial) {
        this.serial = serial;
    }

    public int getBarcode() {
        return barcode;
    }

    public void setBarcode(int barcode) {
        this.barcode = barcode;
    }

    public String getCondition(){return condition;}
    public void setCondition(String condition) {this.condition = condition;}

}
