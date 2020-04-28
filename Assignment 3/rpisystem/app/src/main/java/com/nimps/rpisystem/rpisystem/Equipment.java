package com.nimps.rpisystem.rpisystem;
import javax.persistence.*;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "equipment")
@EntityListeners(AuditingEntityListener.class)
public class Equipment extends RpisystemApplication {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public long id;
    public String item_model;
    public String description;
    public String serial;
    @Column(name="\"condition\"")
    public String condition;
    @Column(unique=true)
    public String barcode;

    public Equipment(){ }

    public Equipment(long id, String item_model, String description, String serial, String condition, String barcode){
        this.id = id;
        this.item_model = item_model;
        this.description = description;
        this.serial = serial;
        this.condition = condition;
        this.barcode = barcode;
    }

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

    public String getBarcode() {
        return barcode;
    }

    public void setBarcode(String barcode) {
        this.barcode = barcode;
    }

    public String getCondition(){return condition;}
    public void setCondition(String condition) {this.condition = condition;}

}
