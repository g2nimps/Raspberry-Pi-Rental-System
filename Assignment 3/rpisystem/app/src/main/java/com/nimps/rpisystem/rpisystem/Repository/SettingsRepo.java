package com.nimps.rpisystem.rpisystem.Repository;

import com.nimps.rpisystem.rpisystem.Settings;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SettingsRepo extends JpaRepository<Settings, Long> {
    Settings findById(int id);
}
