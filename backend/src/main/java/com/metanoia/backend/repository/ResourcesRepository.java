package com.metanoia.backend.repository;

// Importa la clase de entidad Resources y JpaRepository de Spring Data JPA
import com.metanoia.backend.models.Resources;
import org.springframework.data.jpa.repository.JpaRepository;

// Definición de la interfaz ResourcesRepository que extiende JpaRepository
public interface ResourcesRepository extends JpaRepository<Resources, Long> {
    // Esta interfaz hereda métodos de JpaRepository para realizar operaciones CRUD
}
