package com.metanoia.backend.models;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "events")
public class Events {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Estrategia de generación automática basada en identidad
    @Column(name = "id") // Especificación del nombre de la columna en la tabla
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "description", nullable = false, columnDefinition = "TEXT")
    private String description;

    @Column(name = "address")
    private String address;

    @Column(name = "image_url")
    private String image_url;

    @Column(name = "web_url")
    private String web_url;

    @Column(name = "phone")
    private Long phone;

    @Column(name = "mail")
    private String mail;

    @Column(name = "organizer")
    private String organizer;

    // Relación con la entidad Users (Muchos eventos pueden ser creados por un usuario)
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false) // Clave foránea que enlaza con la tabla de usuarios
    private Users user;

    // Relación con la entidad Centers (Cada evento puede estar asociado a un centro)
    @ManyToOne
    @JoinColumn(name = "center_id", nullable = false) // Clave foránea que enlaza con la tabla de centros
    private Centers center;
}
