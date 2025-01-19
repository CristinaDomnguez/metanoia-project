package com.metanoia.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class EventsDTO {
    private Long id;
    private String name;
    private String description;
    private String address;
    private String imageUrl;
    private String organizer;
    private String centerName; // Nombre del centro asociado
}
