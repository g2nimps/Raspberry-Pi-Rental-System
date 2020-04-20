package com.nimps.rpisystem.rpisystem.Controller;

import com.nimps.rpisystem.rpisystem.Exception.ResourceNotFoundException;
import com.nimps.rpisystem.rpisystem.Equipment;
import com.nimps.rpisystem.rpisystem.Repository.EquipmentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.List;


@RestController
@RequestMapping("/api")
public class EquipmentController {

    @Autowired
    EquipmentRepo EquipmentRepo;

    public EquipmentController(EquipmentRepo EquipmentRepo){ this.EquipmentRepo = EquipmentRepo; }

    // Get All Equipment
    @GetMapping("/equipment")
    public List<Equipment> getAllUEquipment() {
        return EquipmentRepo.findAll();
    }

    // Create a new Equipment
    @PostMapping("/equipment")
    public Equipment createEquipment(@Valid @RequestBody Equipment equipment) {
        return EquipmentRepo.save(equipment);
    }

    // Get a Single Equipment
    @GetMapping("/equipment/{id}")
    public Equipment getEquipmentById(@PathVariable(value = "id") long equipmentId) {
        return EquipmentRepo.findById(equipmentId)
                .orElseThrow(() -> new ResourceNotFoundException("Equipment", "id", equipmentId));
    }

    // Update a Equipment
    @PutMapping("/equipment/{id}")
    public Equipment updateEquipment(@PathVariable(value = "id") long equipmentId, @Valid @RequestBody Equipment equipmentDetails) {

        Equipment equipment = EquipmentRepo.findById(equipmentId)
                .orElseThrow(() -> new ResourceNotFoundException("Equipment", "id", equipmentId));

        equipment.setId(equipmentDetails.getId());
        equipment.setBarcode(equipmentDetails.getBarcode());
        equipment.setDescription(equipmentDetails.getDescription());
        equipment.setItem_model(equipmentDetails.getItem_model());
        equipment.setSerial(equipmentDetails.getSerial());
        equipment.setSerial(equipmentDetails.getCondition());
//        user.setPantherId(userDetails.getPantherId());

        Equipment updatedEquipment = EquipmentRepo.save(equipment);
        return updatedEquipment;
    }

    // Delete an Equipment
    @DeleteMapping("/equipment/{id}")
    public ResponseEntity<?> deleteEquipment(@PathVariable(value = "id") long equipmentId) {
        Equipment equipment = EquipmentRepo.findById(equipmentId)
                .orElseThrow(() -> new ResourceNotFoundException("Equipment", "id", equipmentId));

        EquipmentRepo.delete(equipment);

        return ResponseEntity.ok().build();
    }
}

