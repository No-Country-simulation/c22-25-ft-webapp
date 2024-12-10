package com.webapp.backend.components.patient;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface PatientRepository extends JpaRepository<Patient, Integer> {
    Optional<Patient> findByDni(Integer dni);
    List<Patient> findByClinicalRecordUserDni(Integer dni);

    void deleteByDni (Integer dni);
}
