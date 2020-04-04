package com.nimps.rpisystem.rpisystem.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;
import com.nimps.rpisystem.rpisystem.Exception.ResourceNotFoundException;

@RestController
public class homeController {
    @GetMapping("/api/home")
    @ResponseBody
    public String hello() {
        return "Hello World!";
    }
}
