package com.nimps.rpisystem.rpisystem.repository;

import com.nimps.rpisystem.rpisystem.User;
import com.nimps.rpisystem.rpisystem.Equipment;
import com.nimps.rpisystem.rpisystem.Rentals;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository<User, Long> {

}
