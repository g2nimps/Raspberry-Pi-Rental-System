package com.nimps.rpisystem.rpisystem;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.*;
import java.util.Objects;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

/**
 *
 */
@Entity
@Table(name = "user")
@EntityListeners(AuditingEntityListener.class)
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public long id;

    public String first_name;
    public String last_name;

    public String role;

    @Column(unique=true)
    public String email;

    public String password;

    @Column(unique=true)
    public int pantherId;

    public User(){ }

    public User(long id, String first_name, String last_name, String password, int pantherId, String role){
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.password = password;
        this.pantherId = pantherId;
        this.role = role;
    }

    public void login() {

    }

    public void logout() {

    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
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

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public int getPantherId() {
        return pantherId;
    }

    public void setPantherId(int pantherId) {
        this.pantherId = pantherId;
    }
}
