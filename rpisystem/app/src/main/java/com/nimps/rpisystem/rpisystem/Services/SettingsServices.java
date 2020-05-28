package com.nimps.rpisystem.rpisystem.Services;

import com.nimps.rpisystem.rpisystem.Settings;
import com.nimps.rpisystem.rpisystem.Repository.SettingsRepo;
import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SettingsServices implements ISettingsService{

    @Autowired
    private SettingsRepo settingsRepo;

    public List<Settings> findAll(){
        return (List<Settings>) settingsRepo.findAll();
    }

}