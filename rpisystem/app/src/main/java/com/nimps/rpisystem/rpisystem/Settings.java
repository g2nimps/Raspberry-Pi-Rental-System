package com.nimps.rpisystem.rpisystem;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Date;
import javax.persistence.Table;

@Entity
@Table(name = "`settings`")
@EntityListeners(AuditingEntityListener.class)
public class Settings extends RpisystemApplication {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public long id;

    @Temporal(TemporalType.DATE)
    public Date semester_due_date;

    public String super_admin_email;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Date getSemesterDueDate() {
        return  semester_due_date;
    }
    public void setSemesterDueDate(Date  semester_due_date) {
        this.semester_due_date = semester_due_date ;
    }

    public String getSuperAdminEmail() {
        return super_admin_email;
    }
    public void setSuperAdminEmail(String super_admin_email) {
        this.super_admin_email = super_admin_email;
    }



}