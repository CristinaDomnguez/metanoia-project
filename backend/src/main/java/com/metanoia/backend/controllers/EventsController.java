package com.metanoia.backend.controllers;

import com.metanoia.backend.models.Events;
import com.metanoia.backend.repository.EventsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/events")
public class EventsController {

    @Autowired
    private EventsRepository eventsRepository;

    @GetMapping("/")
    public ResponseEntity<List<Events>> getAllEvents() {
        List<Events> events = eventsRepository.findAll(Sort.by(Sort.Order.asc("name")));
        return new ResponseEntity<>(events, HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<Events> createEvent(@RequestBody Events event) {
        if (event.getName() == null || event.getName().isEmpty()) {
            return new ResponseEntity<>("Name is required", HttpStatus.BAD_REQUEST);
        }
        if (event.getDescription() == null || event.getDescription().isEmpty()) {
            return new ResponseEntity<>("Description is required", HttpStatus.BAD_REQUEST);
        }
        if (event.getAddress() == null || event.getAddress().isEmpty()) {
            return new ResponseEntity<>("Address is required", HttpStatus.BAD_REQUEST)
        }
        if (event.getPhone() == null) {
            return new ResponseEntity<>("Phone is required", HttpStatus.BAD_REQUEST);
        }
        if (event.getMail() == null || event.getMail().isEmpty()) {
            return new ResponseEntity<>("Mail is required", HttpStatus.BAD_REQUEST);
        }
        if (event.getOrganizer() == null || event.getOrganizer().isEmpty()) {
            return new ResponseEntity<>("Organizer is required", HttpStatus.BAD_REQUEST);
        }

        Events savedEvent = eventsRepository.save(event);
        return new ResponseEntity<>(savedEvent, HttpStatus.CREATED);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteEvent(@PathVariable Long id) {
        Optional<Events> event = eventsRepository.findById(id);

        if (event.isPresent()) {
            eventsRepository.deleteById(id);
            return new ResponseEntity<>("Event with ID " + id + " deleted successfully", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Event with ID " + id + " not found", HttpStatus.NOT_FOUND);
        }
    }
}