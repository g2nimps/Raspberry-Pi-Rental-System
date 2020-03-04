package com.nimps.rpisystem.rpisystem.Repository;
import com.nimps.rpisystem.rpisystem.Rentals;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RentalRepo  extends JpaRepository<Rentals, Long> {

}
