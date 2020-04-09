package com.nimps.rpisystem.rpisystem.Repository;
import com.nimps.rpisystem.rpisystem.Equipment;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EquipmentRepo  extends JpaRepository<Equipment, Long> {
    Equipment findById(int id);
}