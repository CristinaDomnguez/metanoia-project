package com.metanoia.backend.repository;

import com.metanoia.backend.models.Events;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventsRepository extends JpaRepository<Events, Long> {
    // Puedes definir métodos personalizados aquí si es necesario
}
