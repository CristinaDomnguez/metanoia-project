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
        // Verificar si la URL ya existe
        Optional<Resources> existingResource = resourcesRepository.findByUrl(resource.getUrl());
        if (existingResource.isPresent()) {
            return new ResponseEntity<>("Resource with this URL already exists", HttpStatus.BAD_REQUEST);
        }

        // Guardar el recurso si no existe
        Resources savedResource = resourcesRepository.save(resource);
        return new ResponseEntity<>(savedResource, HttpStatus.CREATED);
    }

    // PATCH
    @PatchMapping("/update/{id}")
    public ResponseEntity<Object> partiallyUpdateResource(@PathVariable Long id, @RequestBody Resources partialResource) {
        Optional<Resources> existingResource = resourcesRepository.findById(id);

        if (existingResource.isPresent()) {
            Resources resource = existingResource.get();

            // Actualiza solo los campos proporcionados
            if (partialResource.getTitle() != null) {
                resource.setTitle(partialResource.getTitle());
            }
            if (partialResource.getType() != null) {
                resource.setType(partialResource.getType());
            }
            if (partialResource.getDescription() != null) {
                resource.setDescription(partialResource.getDescription());
            }
            if (partialResource.getUrl() != null) {
                resource.setUrl(partialResource.getUrl());
            }
            if (partialResource.getImageUrl() != null) { // Campo adicional
                resource.setImageUrl(partialResource.getImageUrl());
            }

            Resources savedResource = resourcesRepository.save(resource);
            return new ResponseEntity<>(savedResource, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Resource with ID " + id + " not found", HttpStatus.NOT_FOUND);
        }
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