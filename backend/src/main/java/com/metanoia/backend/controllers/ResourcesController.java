package com.metanoia.backend.controllers;

// Importa las clases necesarias para trabajar con entidades, repositorios, solicitudes y respuestas HTTP
import com.metanoia.backend.dto.ResourcesDTO;
import com.metanoia.backend.models.Resources;
import com.metanoia.backend.repository.ResourcesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

// Define esta clase como un controlador REST
@RestController
@RequestMapping("/api/resources") // Define la ruta base para este controlador
public class ResourcesController {

    // Inyección de dependencia del repositorio
    @Autowired
    private ResourcesRepository resourcesRepository;

    //  Get
    @GetMapping("/")
    public ResponseEntity<List<ResourcesDTO>> getAllResources() {
        List<Resources> resourcesList = resourcesRepository.findAll();

        // Mapear las entidades Resources a ResourcesDTO
        List<ResourcesDTO> resourcesDTOList = resourcesList.stream()
                .map(resource -> new ResourcesDTO(
                        resource.getId(),
                        resource.getTitle(),
                        resource.getType(),
                        resource.getDescription(),
                        resource.getUrl(),
                        resource.getImageUrl(), // Incluye la URL de la imagen
                        resource.getUser().getUsername() // Obtén el nombre del usuario asociado
                ))
                .collect(Collectors.toList());

        return new ResponseEntity<>(resourcesDTOList, HttpStatus.OK);
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

    // PATCH: Actualizar parcialmente un recurso por ID
    @PatchMapping("/update/{id}")
    public ResponseEntity<Object> updateResource(@PathVariable Long id, @RequestBody Resources updatedResource) {
        Optional<Resources> existingResource = resourcesRepository.findById(id);
        if (existingResource.isPresent()) {
            Resources resource = existingResource.get();
            HashMap<Object, Object> updatedFields = new HashMap<>();

            // Actualiza solo los campos proporcionados
            if (updatedResource.getTitle() != null) {
                resource.setTitle(updatedResource.getTitle());
                updatedFields.put("title", updatedResource.getTitle());
            }
            if (updatedResource.getType() != null) {
                resource.setType(updatedResource.getType());
                updatedFields.put("type", updatedResource.getType());
            }
            if (updatedResource.getDescription() != null) {
                resource.setDescription(updatedResource.getDescription());
                updatedFields.put("description", updatedResource.getDescription());
            }
            if (updatedResource.getUrl() != null) {
                resource.setUrl(updatedResource.getUrl());
                updatedFields.put("url", updatedResource.getUrl());
            }
            if (updatedResource.getImageUrl() != null) {
                resource.setImageUrl(updatedResource.getImageUrl());
                updatedFields.put("imageUrl", updatedResource.getImageUrl());
            }

            // Guarda los cambios
            resourcesRepository.save(resource);

            // Devuelve solo los campos actualizados
            return new ResponseEntity<>(updatedFields, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Resource not found", HttpStatus.NOT_FOUND);
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