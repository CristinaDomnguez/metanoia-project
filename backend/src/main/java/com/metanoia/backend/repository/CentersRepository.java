package com.metanoia.backend.repository;

import com.metanoia.backend.models.Centers;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CentersRepository extends JpaRepository<Centers, Long> {
    // Puedes definir métodos personalizados aquí si es necesario
}
