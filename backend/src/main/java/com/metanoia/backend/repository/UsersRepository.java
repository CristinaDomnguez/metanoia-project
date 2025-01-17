package com.metanoia.backend.repository;

import com.metanoia.backend.models.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface UsersRepository extends JpaRepository<Users, Long> {
    // Puedes agregar métodos personalizados si necesitas búsquedas específicas
    // Resources findByUrl(String url); // Ejemplo de un método personalizado para buscar por URL, en casa de emergencia
}