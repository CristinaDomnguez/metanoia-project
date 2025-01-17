package com.metanoia.backend.repository;

import com.metanoia.backend.models.Centers;
import com.metanoia.backend.models.Resources;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CentersRepository extends JpaRepository<Centers, Long> {
    // Puedes agregar métodos personalizados si necesitas búsquedas específicas
    // Resources findByUrl(String url); // Ejemplo de un método personalizado para buscar por URL, en casa de emergencia
}