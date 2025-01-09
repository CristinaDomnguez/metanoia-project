package com.metanoia.backend.controllers;

import com.metanoia.backend.models.Resources;
import com.metanoia.backend.repository.ResourcesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/resources") // ruta base
public class ResourcesController {

    @Autowired
    private ResourcesRepository resourcesRepository;

    // GET: Retrieve all resources
    @GetMapping("/")
    public ResponseEntity<List<Resources>> getAllResources() {
        List<Resources> resources = resourcesRepository.findAll(Sort.by(Sort.Order.asc("title"))); // Ordenar por título
        return new ResponseEntity<>(resources, HttpStatus.OK);
    }

    // POST: Add a new resource
    @PostMapping("/create")
    public ResponseEntity<Object> createResource(@RequestBody Resources resource) {
        // Validación básica
        if (resource.getTitle() == null || resource.getTitle().isEmpty()) {
            return new ResponseEntity<>("Title is required", HttpStatus.BAD_REQUEST);
        }
        if (resource.getType() == null || resource.getType().isEmpty()) {
            return new ResponseEntity<>("Type is required", HttpStatus.BAD_REQUEST);
        }
        if (resource.getDescription() == null || resource.getDescription().isEmpty()) {
            return new ResponseEntity<>("Description is required", HttpStatus.BAD_REQUEST);
        }
        if (resource.getUrl() == null || resource.getUrl().isEmpty()) {
            return new ResponseEntity<>("URL is required", HttpStatus.BAD_REQUEST);
        }

        Resources savedResource = resourcesRepository.save(resource);
        return new ResponseEntity<>(savedResource, HttpStatus.CREATED);
    }

    // DELETE: Remove a resource by ID
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteResource(@PathVariable Long id) {
        Optional<Resources> resource = resourcesRepository.findById(id);

        if (resource.isPresent()) {
            resourcesRepository.deleteById(id);
            return new ResponseEntity<>("Resource with ID " + id + " deleted successfully", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Resource with ID " + id + " not found", HttpStatus.NOT_FOUND);
        }
    }
}
