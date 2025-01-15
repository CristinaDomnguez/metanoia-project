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

    @Column (name = "name", nullable = false)
    private String name;

    @Column(name = "description", nullable = false, columnDefinition = "TEXT")
    private String description;

    @Column(name = "address", nullable = false)
    private String address;

    @Column(name = "image_url", nullable = false)
    private String image_url;

    @Column(name = "web_url", nullable = false)
    private String web_url;

    @Column(name = "phone", nullable = false)
    private Long phone;

    @Column(name = "mail", nullable = false)
    private String mail;

    @Column(name = "organizer", nullable = false)
    private String organizer;
}
