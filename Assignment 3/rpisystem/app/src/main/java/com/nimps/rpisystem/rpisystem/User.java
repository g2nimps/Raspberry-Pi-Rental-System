package com.nimps.rpisystem.rpisystem;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Objects;
//import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "user")
//@EntityListeners(AuditingEntityListener.class)
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int Id;

    public String first_name;
    public String last_name;

//    @Column(unique=true)
    public String email;

    public String password;

//    @Column(unique=true)
    public int panther_id;

    public User(){}

    public User(int id, String first_name, String last_name, String email, String password, int panther_id){
        this.Id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.password = password;
        this.panther_id = panther_id;
    }

    public void login() {

    }

    public void logout() {

    }

    public int getId() {
        return Id;
    }

    public void setId(int id) {
        this.Id = id;
    }

    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public int getPantherId() {
        return panther_id;
    }

    public void setPantherId(int pantherId) {
        this.panther_id = panther_id;
    }
}
