package com.metanoia.backend.models;

// Importación de anotaciones y clases necesarias para JPA
import jakarta.persistence.*;

// Declaración de la clase como una entidad que representa una tabla en la base de datos
    @Entity
    @Table(name = "resources") // Nombre de la tabla en la base de datos será "resources"
    public class Resources {

    // Declaración del campo id como clave primaria con generación automática de valores
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Estrategia de generación automática basada en identidad
    @Column(name = "id") // Especificación del nombre de la columna en la tabla
    private Long id;

    // Declaración del campo title como obligatorio
    @Column(name = "title", nullable = false) // La columna "title" no puede ser nula
    private String title;

    // Declaración del campo type como obligatorio
    @Column(name = "type", nullable = false) // La columna "type" no puede ser nula
    private String type;

    // Declaración del campo description como obligatorio
    @Column(name = "description", nullable = false, columnDefinition = "TEXT")
    // Especifica que esta columna usará el tipo de datos "TEXT" en la base de datos para almacenar textos largos
    private String description;

    // Declaración del campo url como obligatorio y único
    @Column(name = "url", nullable = false, unique = true)
    // La columna "url" no puede ser nula y debe tener valores únicos en la tabla
    private String url;

    // Getters y Setters para encapsular los campos y permitir acceso/control a los valores de los atributos

    public Long getId() {
        return id; // Devuelve el valor del campo id
    }

    public void setId(Long id) {
        this.id = id; // Establece un valor para el campo id
    }

    public String getTitle() {
        return title; // Devuelve el valor del campo title
    }

    public void setTitle(String title) {
        this.title = title; // Establece un valor para el campo title
    }

    public String getType() {
        return type; // Devuelve el valor del campo type
    }

    public void setType(String type) {
        this.type = type; // Establece un valor para el campo type
    }

    public String getDescription() {
        return description; // Devuelve el valor del campo description
    }

    public void setDescription(String description) {
        this.description = description; // Establece un valor para el campo description
    }

    public String getUrl() {
        return url; // Devuelve el valor del campo url
    }

    public void setUrl(String url) {
        this.url = url; // Establece un valor para el campo url
    }
}
