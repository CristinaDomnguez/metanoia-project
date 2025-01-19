package com.metanoia.backend.controllers;

import com.metanoia.backend.dto.EventsDTO;
import com.metanoia.backend.models.Events;
import com.metanoia.backend.repository.EventsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/events") // Ruta base del recurso
public class EventsController {

    @Autowired
    private EventsRepository eventsRepository;

    // GET: Obtener todos los eventos
    @GetMapping("/")
    public ResponseEntity<List<EventsDTO>> getAllEvents() {
        List<Events> events = eventsRepository.findAll();

        // Convertir a DTO
        List<EventsDTO> eventsDTOs = events.stream()
                .map(event -> new EventsDTO(
                        event.getId(),
                        event.getName(),
                        event.getDescription(),
                        event.getAddress(),
                        event.getImage_url() != null ? event.getImage_url() : "No consta",
                        event.getOrganizer(),
                        event.getCenter() != null ? event.getCenter().getName() : "No consta"
                ))
                .toList();

        return new ResponseEntity<>(eventsDTOs, HttpStatus.OK);
    }


    // GET: Obtener un evento por ID
    @GetMapping("/{id}")
    public ResponseEntity<Object> getEventById(@PathVariable Long id) {
        Optional<Events> event = eventsRepository.findById(id);
        if (event.isPresent()) {
            return new ResponseEntity<>(event.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Event not found", HttpStatus.NOT_FOUND);
        }
    }

    // POST: Crear un nuevo evento
    @PostMapping("/create")
    public ResponseEntity<Events> createEvent(@RequestBody Events event) {
        Events savedEvent = eventsRepository.save(event);
        return new ResponseEntity<>(savedEvent, HttpStatus.CREATED);
    }

    // PATCH: Actualizar parcialmente un evento por ID
    @PatchMapping("/update/{id}")
    public ResponseEntity<Object> updateEvent(@PathVariable Long id, @RequestBody Events updatedEvent) {
        Optional<Events> existingEvent = eventsRepository.findById(id);
        if (existingEvent.isPresent()) {
            Events event = existingEvent.get();

            // Actualiza solo los campos proporcionados
            if (updatedEvent.getName() != null) event.setName(updatedEvent.getName());
            if (updatedEvent.getDescription() != null) event.setDescription(updatedEvent.getDescription());
            if (updatedEvent.getAddress() != null) event.setAddress(updatedEvent.getAddress());
            if (updatedEvent.getImage_url() != null) event.setImage_url(updatedEvent.getImage_url());
            if (updatedEvent.getWeb_url() != null) event.setWeb_url(updatedEvent.getWeb_url());
            if (updatedEvent.getPhone() != null) event.setPhone(updatedEvent.getPhone());
            if (updatedEvent.getMail() != null) event.setMail(updatedEvent.getMail());
            if (updatedEvent.getOrganizer() != null) event.setOrganizer(updatedEvent.getOrganizer());

            Events savedEvent = eventsRepository.save(event);
            return new ResponseEntity<>(savedEvent, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Event not found", HttpStatus.NOT_FOUND);
        }
    }

    // DELETE: Eliminar un evento por ID
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteEvent(@PathVariable Long id) {
        Optional<Events> event = eventsRepository.findById(id);
        if (event.isPresent()) {
            eventsRepository.deleteById(id);
            return new ResponseEntity<>("Event deleted successfully", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Event not found", HttpStatus.NOT_FOUND);
        }
    }
}
