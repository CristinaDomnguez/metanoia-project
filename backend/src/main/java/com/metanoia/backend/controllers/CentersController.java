package com.metanoia.backend.controllers;

import com.metanoia.backend.dto.CentersDTO;
import com.metanoia.backend.models.Centers;
import com.metanoia.backend.repository.CentersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/centers") // Ruta base
public class CentersController {

    @Autowired
    private CentersRepository centersRepository;

    @GetMapping("/")
    public ResponseEntity<List<CentersDTO>> getAllCenters() {
        List<Centers> centers = centersRepository.findAll();

        // Convertir a DTO
        List<CentersDTO> centersDTOs = centers.stream()
                .map(center -> new CentersDTO(
                        center.getId(),
                        center.getName(),
                        center.getType(),
                        center.getAddress(),
                        center.getPhone() != null ? center.getPhone().toString() : "No consta",
                        center.getMail(),
                        center.getWeb_url() != null ? center.getWeb_url() : "No consta"
                ))
                .toList();

        return new ResponseEntity<>(centersDTOs, HttpStatus.OK);
    }


    // POST: Crear un nuevo centro
    @PostMapping("/create")
    public ResponseEntity<Centers> createCenter(@RequestBody Centers center) {
        Centers savedCenter = centersRepository.save(center);
        return new ResponseEntity<>(savedCenter, HttpStatus.CREATED);
    }

    // PATCH: Actualizar parcialmente un centro por ID
    @PatchMapping("/update/{id}")
    public ResponseEntity<Object> updateCenter(@PathVariable Long id, @RequestBody Centers updatedCenter) {
        Optional<Centers> existingCenter = centersRepository.findById(id);
        if (existingCenter.isPresent()) {
            Centers center = existingCenter.get();

            // Actualiza solo los campos proporcionados
            if (updatedCenter.getName() != null) center.setName(updatedCenter.getName());
            if (updatedCenter.getType() != null) center.setType(updatedCenter.getType());
            if (updatedCenter.getDescription() != null) center.setDescription(updatedCenter.getDescription());
            if (updatedCenter.getAddress() != null) center.setAddress(updatedCenter.getAddress());
            if (updatedCenter.getPhone() != null) center.setPhone(updatedCenter.getPhone());
            if (updatedCenter.getWeb_url() != null) center.setWeb_url(updatedCenter.getWeb_url());
            if (updatedCenter.getMail() != null) center.setMail(updatedCenter.getMail());

            Centers savedCenter = centersRepository.save(center);
            return new ResponseEntity<>(savedCenter, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Center not found", HttpStatus.NOT_FOUND);
        }
    }

    // DELETE: Eliminar un centro por ID
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteCenter(@PathVariable Long id) {
        Optional<Centers> center = centersRepository.findById(id);
        if (center.isPresent()) {
            centersRepository.deleteById(id);
            return new ResponseEntity<>("Center deleted successfully", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Center not found", HttpStatus.NOT_FOUND);
        }
    }
}
