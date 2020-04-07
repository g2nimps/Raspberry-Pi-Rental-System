package com.nimps.rpisystem.rpisystem.Controller;

import com.nimps.rpisystem.rpisystem.Exception.ResourceNotFoundException;
import com.nimps.rpisystem.rpisystem.Rentals;
import com.nimps.rpisystem.rpisystem.Services.IRentalService;
import com.nimps.rpisystem.rpisystem.Repository.RentalRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.List;

@RestController
public class RentalController {
    @Autowired
    private IRentalService rentalService;

    // Get All Rentals
    @GetMapping("/api/rentals")
    public List<Rentals> getAllRentals() {
        return rentalService.findAll();
    }
}
