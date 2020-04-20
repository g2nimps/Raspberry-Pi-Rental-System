package com.nimps.rpisystem.rpisystem.Controller;

import com.nimps.rpisystem.rpisystem.Exception.ResourceNotFoundException;
import com.nimps.rpisystem.rpisystem.Rentals;
import com.nimps.rpisystem.rpisystem.Repository.RentalRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.List;


@RestController
@RequestMapping("/api")
public class RentalController {

    @Autowired
    RentalRepo RentalRepo;

    public RentalController(RentalRepo RentalRepo){
        this.RentalRepo = RentalRepo;
    }

    // Get All Rentals
    @GetMapping("/rentals")
    public List<Rentals> getAllRentals() {
        return RentalRepo.findAll();
    }

    // Get Late Rentals
    @GetMapping("/rentals/late")
    @Query(value = "SELECT r from Rental r where r. =:name ", nativeQuery = true)
    publicList<Rentals> findByNameNative(@Param("name") String name);

    // Create a new Rental
    @PostMapping("/rentals")
    public Rentals createRental(@Valid @RequestBody Rentals rental) {
        return RentalRepo.save(rental);
    }

    // Get a Single Rental
    @GetMapping("/rentals/{id}")
    public Rentals getRentalById(@PathVariable(value = "id") long rentalId) {
        return RentalRepo.findById(rentalId)
                .orElseThrow(() -> new ResourceNotFoundException("Rentals", "id", rentalId));
    }

    // Update a Rental
    @PutMapping("/rentals/{id}")
    public Rentals updateRental(@PathVariable(value = "id") long rentalId, @Valid @RequestBody Rentals rentalDetails) {

        Rentals rental = RentalRepo.findById(rentalId)
                .orElseThrow(() -> new ResourceNotFoundException("Rentals", "id", rentalId));

        rental.setRentalId(rentalDetails.getRentalId());
        rental.setStudentPantherId(rentalDetails.getStudentPantherId());
        rental.setCheckoutDate(rentalDetails.getCheckoutDate());
        rental.setCheckInDate(rentalDetails.getCheckInDate());
        rental.setDueDate(rentalDetails.getDueDate());
        rental.setCheckoutBy(rentalDetails.getCheckoutBy());
        rental.setCheckinBy(rentalDetails.getCheckinBy());
        rental.setKitBarcode(rentalDetails.getKitBarcode());

        Rentals updatedRental = RentalRepo.save(rental);
        return updatedRental;
    }

    // Delete a Rental
    @DeleteMapping("/rentals/{id}")
    public ResponseEntity<?> deleteRental(@PathVariable(value = "id") long rentalId) {
        Rentals rental = RentalRepo.findById(rentalId)
                .orElseThrow(() -> new ResourceNotFoundException("Rentals", "id", rentalId));

        RentalRepo.delete(rental);

        return ResponseEntity.ok().build();
    }
}