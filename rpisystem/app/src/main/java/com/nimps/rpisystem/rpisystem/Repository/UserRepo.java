package com.nimps.rpisystem.rpisystem.Repository;

import com.nimps.rpisystem.rpisystem.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository<User, Long> {
    User findById(int id);
    //Optional<User findByEmail(String email);
    //Optional<User> findByPantherId(String pantherId);
    //Boolean existsByPantherId(String pantherId);
    //Boolean existsByEmail(String email);
}
