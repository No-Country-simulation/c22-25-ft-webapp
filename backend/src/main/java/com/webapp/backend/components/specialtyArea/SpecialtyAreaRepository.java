package com.webapp.backend.components.specialtyArea;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface SpecialtyAreaRepository extends JpaRepository<SpecialtyArea, Integer> {
    Optional<SpecialtyArea> findByName (String name);
}
