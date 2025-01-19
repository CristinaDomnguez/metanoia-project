package com.metanoia.backend.controllers;

import com.metanoia.backend.dto.UsersDTO;
import com.metanoia.backend.models.Users;
import com.metanoia.backend.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/users") // Ruta base para el controlador de usuarios
public class UsersController {

    @Autowired
    private UsersRepository usersRepository;

    // GET: Obtener todos los usuarios
    @GetMapping("/")
    public ResponseEntity<List<UsersDTO>> getAllUsers() {
        List<Users> users = usersRepository.findAll();

        // Convertir a DTO
        List<UsersDTO> usersDTOs = users.stream()
                .map(user -> new UsersDTO(user.getId(), user.getUsername(), user.getEmail()))
                .toList();

        return new ResponseEntity<>(usersDTOs, HttpStatus.OK);
    }


    // GET: Obtener un usuario por ID
    @GetMapping("/{id}")
    public ResponseEntity<Object> getUserById(@PathVariable Long id) {
        Optional<Users> user = usersRepository.findById(id);
        return user.<ResponseEntity<Object>>map(users -> new ResponseEntity<>(users, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND));
    }

    // POST: Crear un nuevo usuario
    @PostMapping("/create")
    public ResponseEntity<Object> createUser(@RequestBody Users user) {
        // Validaciones previas
        if (user.getUsername() == null || user.getUsername().isEmpty()) {
            return new ResponseEntity<>("Username is required", HttpStatus.BAD_REQUEST);
        }
        if (user.getPassword() == null || user.getPassword().isEmpty()) {
            return new ResponseEntity<>("Password is required", HttpStatus.BAD_REQUEST);
        }
        if (user.getEmail() == null || user.getEmail().isEmpty()) {
            return new ResponseEntity<>("Email is required", HttpStatus.BAD_REQUEST);
        }
        if (usersRepository.existsByUsername(user.getUsername())) {
            return new ResponseEntity<>("Username already exists", HttpStatus.CONFLICT);
        }
        if (usersRepository.existsByEmail(user.getEmail())) {
            return new ResponseEntity<>("Email already exists", HttpStatus.CONFLICT);
        }

        // Guardar el usuario
        Users savedUser = usersRepository.save(user);
        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
    }

    // PATCH: Actualizar parcialmente un usuario por ID
    @PatchMapping("/update/{id}")
    public ResponseEntity<Object> updateUser(@PathVariable Long id, @RequestBody Users updatedUser) {
        Optional<Users> existingUser = usersRepository.findById(id);
        if (existingUser.isPresent()) {
            Users user = existingUser.get();

            // Actualiza solo los campos proporcionados
            if (updatedUser.getUsername() != null && !updatedUser.getUsername().isEmpty()) {
                if (usersRepository.existsByUsername(updatedUser.getUsername())) {
                    return new ResponseEntity<>("Username already exists", HttpStatus.CONFLICT);
                }
                user.setUsername(updatedUser.getUsername());
            }
            if (updatedUser.getPassword() != null && !updatedUser.getPassword().isEmpty()) {
                user.setPassword(updatedUser.getPassword());
            }
            if (updatedUser.getEmail() != null && !updatedUser.getEmail().isEmpty()) {
                if (usersRepository.existsByEmail(updatedUser.getEmail())) {
                    return new ResponseEntity<>("Email already exists", HttpStatus.CONFLICT);
                }
                user.setEmail(updatedUser.getEmail());
            }

            Users savedUser = usersRepository.save(user);
            return new ResponseEntity<>(savedUser, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
        }
    }

    // DELETE: Eliminar un usuario por ID
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable Long id) {
        Optional<Users> user = usersRepository.findById(id);
        if (user.isPresent()) {
            usersRepository.deleteById(id);
            return new ResponseEntity<>("User deleted successfully", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
        }
    }
}
