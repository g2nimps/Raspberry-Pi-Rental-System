package com.nimps.rpisystem.rpisystem;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Date;
import javax.persistence.Table;

@Entity
@Table(name = "rentals")
@EntityListeners(AuditingEntityListener.class)
public class Rentals extends RpisystemApplication {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public long id;

    public int student_panther_id;

    @Column(nullable = false, updatable = false)
    @Temporal(TemporalType.DATE)
    @CreatedDate
    public Date checkout_date;

    @Column(nullable = true)
    @Temporal(TemporalType.DATE)
    public Date check_in_date;

    @Temporal(TemporalType.DATE)
    public Date due_date;
    public int checkout_by;
    @Column(nullable = true)
    public int checkin_by;
    public int kit_barcode;

    public long getRentalId() {
        return id;
    }

    public void setRentalId(long id) {
        this.id = id;
    }

    public int getStudentPantherId() {
        return student_panther_id;
    }

    public void setStudentPantherId(int student_panther_id) {
        this.student_panther_id = student_panther_id;
    }

    public Date getCheckoutDate() {
        return checkout_date;
    }

    public void setCheckoutDate(Date checkout_date) {
        this.checkout_date = checkout_date;
    }

    public Date getCheckInDate() {
        return check_in_date;
    }

    public void setCheckInDate(Date check_in_date) {
        this.check_in_date = check_in_date;
    }

    public Date getDueDate() {
        return due_date;
    }

    public void setDueDate(Date due_date) {
        this.due_date = due_date;
    }

    public int getCheckoutBy() {
        return checkout_by;
    }

    public void setCheckoutBy(int checkout_by) {
        this.checkout_by = checkout_by;
    }

    public int getCheckinBy() {
        return checkin_by;
    }

    public void setCheckinBy(int checkin_by) {
        this.checkin_by = checkin_by;
    }

    public int getKitBarcode() {
        return kit_barcode;
    }

    public void setKitBarcode(int kit_barcode) {
        this.kit_barcode = kit_barcode;
    }
}