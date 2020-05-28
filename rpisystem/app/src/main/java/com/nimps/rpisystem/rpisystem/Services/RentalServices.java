package com.nimps.rpisystem.rpisystem.Services;

import com.nimps.rpisystem.rpisystem.Rentals;
import com.nimps.rpisystem.rpisystem.Repository.RentalRepo;
import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RentalServices implements IRentalService{

    @Autowired
    private RentalRepo rentalRepo;

    public List<Rentals> findAll(){
        return (List<Rentals>) rentalRepo.findAll();
    }
}