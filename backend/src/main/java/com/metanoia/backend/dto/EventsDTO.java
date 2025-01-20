package com.metanoia.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data // Genera getters, setters, toString, equals, y hashCode
@AllArgsConstructor // Genera un constructor con todos los campos
@NoArgsConstructor  // Genera un constructor vacío
public class EventsDTO {
    private Long id;
    private String name;
    private String description;
    private String address;
    private String imageUrl;   // Nombre ajustado a camelCase
    private String organizer;
    private String centerName; // Nombre del centro asociado
    private String phone;      // Teléfono
    private String mail;       // Email
}
