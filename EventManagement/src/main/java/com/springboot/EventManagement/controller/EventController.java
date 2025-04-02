package com.springboot.EventManagement.controller;

import com.springboot.EventManagement.model.Event;
import com.springboot.EventManagement.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/event")
@CrossOrigin
public class EventController {
    @Autowired
    private EventService eventService;

    @PostMapping("/add")
    public String add(@RequestBody Event event){
        eventService.saveEvent(event);
        return "New Event is added";
    }

    @GetMapping("/getAll")
    public List<Event> getAllEvents(){
        return eventService.getAllEvents();
    }

}
