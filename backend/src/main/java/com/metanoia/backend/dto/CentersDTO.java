package com.metanoia.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class CentersDTO {
    private Long id;
    private String name;
    private String type;
    private String address;
    private String phone; // Este campo es String debido a la conversión
    private String mail;
    private String webUrl;
}
