package com.metanoia.backend.repository;

import com.metanoia.backend.models.Resources;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ResourcesRepository extends JpaRepository<Resources, Long> {
    Optional<Resources> findByUrl(String url); // Método para buscar recursos por URL
}
