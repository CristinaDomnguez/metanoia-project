package com.metanoia.backend.models;

// Importación de anotaciones y clases necesarias para JPA
import jakarta.persistence.*;
import lombok.Data;

// Declaración de la clase como una entidad que representa una tabla en la base de datos
@Entity // Recursos
@Data
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
    @Column(name = "image_url", nullable = false) // Columna para almacenar la URL de la imagen
    private String imageUrl;

}
