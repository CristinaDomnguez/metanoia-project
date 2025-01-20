package com.metanoia.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ResourcesDTO {
    private Long id;
    private String title;
    private String type;
    private String description;
    private String url;
    private String imageUrl; // Añadido para incluir la URL de la imagen
    private String userName; // Nombre del usuario asociado
}
