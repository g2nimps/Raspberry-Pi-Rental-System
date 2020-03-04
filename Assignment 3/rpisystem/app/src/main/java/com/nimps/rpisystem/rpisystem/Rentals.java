package com.nimps.rpisystem.rpisystem;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Date;

@Entity
@EntityListeners(AuditingEntityListener.class)
public class Rentals extends RpisystemApplication {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int rental_id;

    public int student_panther_id;

    @Column(nullable = false, updatable = false)
    @Temporal(TemporalType.DATE)
    @CreatedDate
    public Date checkout_date;

    @Temporal(TemporalType.DATE)
    public Date check_in_date;

    @Temporal(TemporalType.DATE)
    public Date due_date;
    public int checkout_by;
    public int checkin_by;
    public int kit_barcode;

    public int getRental_id() {
        return rental_id;
    }

    public void setRental_id(int rental_id) {
        this.rental_id = rental_id;
    }

    public int getStudent_panther_id() {
        return student_panther_id;
    }

    public void setStudent_panther_id(int student_panther_id) {
        this.student_panther_id = student_panther_id;
    }

    public Date getCheckout_date() {
        return checkout_date;
    }

    public void setCheckout_date(Date checkout_date) {
        this.checkout_date = checkout_date;
    }

    public Date getCheck_in_date() {
        return check_in_date;
    }

    public void setCheck_in_date(Date check_in_date) {
        this.check_in_date = check_in_date;
    }

    public Date getDue_date() {
        return due_date;
    }

    public void setDue_date(Timestamp due_date) {
        this.due_date = due_date;
    }

    public int getCheckout_by() {
        return checkout_by;
    }

    public void setCheckout_by(int checkout_by) {
        this.checkout_by = checkout_by;
    }

    public int getCheckin_by() {
        return checkin_by;
    }

    public void setCheckin_by(int checkin_by) {
        this.checkin_by = checkin_by;
    }

    public int getKit_barcode() {
        return kit_barcode;
    }

    public void setKit_barcode(int kit_barcode) {
        this.kit_barcode = kit_barcode;
    }


}
