package com.metanoia.backend.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Column;
import jakarta.persistence.Table;

import lombok.Data;

@Entity // Centers
@Data
@Table(name = "users") // Nombre de la tabla en la base de datos será "resources"
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Estrategia de generación automática basada en identidad
    @Column(name = "id", nullable = false, unique = true) // Especificación del nombre de la columna en la tabla
    private Long id;

    @Column(name = "username", nullable = false, unique = true)
    private String username;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "email", nullable = false, unique = true) // Nuevo campo 'email', obligatorio y único
    private String email;

}
