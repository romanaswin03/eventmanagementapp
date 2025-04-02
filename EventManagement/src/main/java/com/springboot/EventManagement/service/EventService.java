package com.springboot.EventManagement.service;

import com.springboot.EventManagement.model.Event;

import java.util.List;

public interface EventService {
    public Event saveEvent(Event event);
    public List<Event> getAllEvents();
}
