package com.metanoia.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class UsersDTO {
    private Long id;
    private String username;
    private String email;
}
