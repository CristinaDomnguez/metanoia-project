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
@Table(name = "centers") // Nombre de la tabla en la base de datos será "resources"
public class Centers{

    // Declaración del campo id como clave primaria con generación automática de valores
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Estrategia de generación automática basada en identidad
    @Column(name = "id") // Especificación del nombre de la columna en la tabla
    private Long id;

    // Declaración del campo title como obligatorio
    @Column(name = "name", nullable = false) // La columna "name" no puede ser nula
    private String name;

    // Declaración del campo type como obligatorio
    @Column(name = "type", nullable = false) // La columna "type" no puede ser nula
    private String type;


    @Column(name = "description", columnDefinition = "TEXT")
    // Especifica que esta columna usará el tipo de datos "TEXT" en la base de datos para almacenar textos largos
    private String description;


    @Column(name = "address") // La columna "direccion" no puede ser nula
    private String address;

    // Declaración del campo teléfono como opcional
    @Column(name = "phone") // La columna "telefono" es opcional (nullable por defecto es true)
    private Long phone;


    @Column(name = "web_url") // La columna "web" no puede ser nula
    private String web_url;

    // Declaración del campo mail como opcional
    @Column(name = "mail") // La columna "mail" es opcional (nullable por defecto es true)
    private String mail;

}
