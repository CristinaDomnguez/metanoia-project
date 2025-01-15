package com.metanoia.backend.controllers;

// Importa las clases necesarias para trabajar con entidades, repositorios, solicitudes y respuestas HTTP
import com.metanoia.backend.models.Resources;
import com.metanoia.backend.repository.ResourcesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

// Define esta clase como un controlador REST
@RestController
@RequestMapping("/api/resources") // Define la ruta base para este controlador
public class ResourcesController {

    // Inyección de dependencia del repositorio
    @Autowired
    private ResourcesRepository resourcesRepository;

    //  Get
    @GetMapping("/")
    public ResponseEntity<List<Resources>> getAllResources() {
        // Obtiene todos los recursos ordenados alfabéticamente por título
        List<Resources> resources = resourcesRepository.findAll(Sort.by(Sort.Order.asc("title")));
        // Devuelve la lista de recursos con un estado HTTP 200 (OK)
        return new ResponseEntity<>(resources, HttpStatus.OK);
    }

    //  POST
    @PostMapping("/create")
    public ResponseEntity<Object> createResource(@RequestBody Resources resource) {
        // Validación básica de los campos requeridos antes de guardar
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

        // Guarda el recurso en la base de datos
        Resources savedResource = resourcesRepository.save(resource);
        // Devuelve el recurso creado con un estado HTTP 201 (CREATED)
        return new ResponseEntity<>(savedResource, HttpStatus.CREATED);
    }

    // DELETE
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteResource(@PathVariable Long id) {
        // Busca el recurso en la base de datos
        Optional<Resources> resource = resourcesRepository.findById(id);

        if (resource.isPresent()) {
            // Si existe, elimina el recurso por su ID
            resourcesRepository.deleteById(id);
            return new ResponseEntity<>("Resource with ID " + id + " deleted successfully", HttpStatus.OK);
        } else {
            // Si no existe, devuelve un error 404 (NOT FOUND)
            return new ResponseEntity<>("Resource with ID " + id + " not found", HttpStatus.NOT_FOUND);
        }
    }
}