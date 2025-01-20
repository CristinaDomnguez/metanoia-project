package com.metanoia.backend.models;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
@Table(name = "centers")
public class Centers {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "type", nullable = false)
    private String type;

    @Column(name = "description", columnDefinition = "TEXT")
    private String description;

    @Column(name = "address")
    private String address;

    @Column(name = "phone")
    private String phone;

    @Column(name = "web_url")
    private String web_url;

    @Column(name = "mail")
    private String mail;

    // Relación con eventos (Un centro puede tener muchos eventos)
    @OneToMany(mappedBy = "center", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Events> events;

    // Relación opcional con Users (Un centro puede tener un usuario relacionado)
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = true) // Relación opcional
    private Users user;
}
