package com.nimps.rpisystem.rpisystem.Controller;

import com.nimps.rpisystem.rpisystem.Exception.ResourceNotFoundException;
import com.nimps.rpisystem.rpisystem.Settings;
import com.nimps.rpisystem.rpisystem.Repository.SettingsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.List;


@RestController
@RequestMapping("/api")
public class SettingsController {

    @Autowired
    SettingsRepo SettingsRepo;

    public SettingsController(SettingsRepo SettingsRepo){
        this.SettingsRepo = SettingsRepo;
    }

    // Get All Settings
    @GetMapping("/settings")
    public List<Settings> getAllSettings() {
        return SettingsRepo.findAll();
    }

    // Create a new Settings
    @PostMapping("/settings")
    public Settings createSettings(@Valid @RequestBody Settings setting) {
        return SettingsRepo.save(setting);
    }


    // Update a Setting
    @PutMapping("/settings/{id}")
    public Settings updateSettings(@PathVariable(value = "id") long settingsId, @Valid @RequestBody Settings settingsDetails) {

        Settings settings = SettingsRepo.findById(settingsId)
                .orElseThrow(() -> new ResourceNotFoundException("Setting", "id", settingsId));

        settings.setId(settingsDetails.getId());
        settings.setSuperAdminEmail(settingsDetails.getSuperAdminEmail());
        settings.setSemesterDueDate(settingsDetails.getSemesterDueDate());

        Settings updatedSettings = SettingsRepo.save(settings);
        return updatedSettings;
    }
    // Delete a Setting
    @DeleteMapping("/settings/{id}")
    public ResponseEntity<?> deleteSettings(@PathVariable(value = "id") long settingsId) {
        Settings settings = SettingsRepo.findById(settingsId)
                .orElseThrow(() -> new ResourceNotFoundException("Settings", "id", settingsId));

        SettingsRepo.delete(settings);

        return ResponseEntity.ok().build();
    }
}

