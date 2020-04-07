package com.nimps.rpisystem.rpisystem.Controller;

import com.nimps.rpisystem.rpisystem.Exception.ResourceNotFoundException;
import com.nimps.rpisystem.rpisystem.Equipment;
import com.nimps.rpisystem.rpisystem.Services.IEquipmentService;
import com.nimps.rpisystem.rpisystem.Repository.EquipmentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.List;

@RestController
public class EquipmentController {
    @Autowired
    private IEquipmentService equipmentService;

    // Get All User
    @GetMapping("/api/equipment")
    public List<Equipment> getAllEquipment() {
        return equipmentService.findAll();
    }
}
