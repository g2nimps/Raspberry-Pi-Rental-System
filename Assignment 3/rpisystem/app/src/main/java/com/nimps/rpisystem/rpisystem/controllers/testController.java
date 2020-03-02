package com.nimps.rpisystem.rpisystem.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class testController {

    @RequestMapping("/")
    @ResponseBody
    String hello() {
        return "Hello World!";
    }

}