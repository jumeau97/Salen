package com.slaen.salen.controller;

import com.slaen.salen.entity.payload.Jour;
import com.slaen.salen.service.JourRecouService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

@RestController
@CrossOrigin("*")
@RequestMapping("/api")
public class JourRecou {

    @Autowired
    JourRecouService jourRecouService;

    @GetMapping("/mydate/{mydate}")
    public @ResponseBody ResponseEntity<?> findJourRecou(@PathVariable(name = "mydate") String mydate) throws ParseException {
        //Date madate=new Date();
        Date madate= new SimpleDateFormat("yyyy-MM-dd").parse(mydate);
        return new ResponseEntity<>(jourRecouService.findDayByDate(madate),HttpStatus.OK);
    }

    @GetMapping("/alldaysRe")
    public @ResponseBody ResponseEntity<?> allDaysRe(){
        return new ResponseEntity<>(jourRecouService.findAllDaysRe(),HttpStatus.OK);
    }
}
