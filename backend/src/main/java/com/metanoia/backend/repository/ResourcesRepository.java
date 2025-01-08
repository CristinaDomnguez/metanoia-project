package com.metanoia.backend.repository;

import com.metanoia.backend.models.Resources;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ResourcesRepository extends JpaRepository<Resources, Long> {
}
