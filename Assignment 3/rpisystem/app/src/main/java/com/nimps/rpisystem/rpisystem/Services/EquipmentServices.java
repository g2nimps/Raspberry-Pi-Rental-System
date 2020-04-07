package com.nimps.rpisystem.rpisystem.Services;

import com.nimps.rpisystem.rpisystem.Equipment;
import com.nimps.rpisystem.rpisystem.Repository.EquipmentRepo;
import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EquipmentServices implements IEquipmentService{

    @Autowired
    private EquipmentRepo equipmentRepo;

    public List<Equipment> findAll(){
        return (List<Equipment>) equipmentRepo.findAll();
    }
}