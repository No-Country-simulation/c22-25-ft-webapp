package com.webapp.backend.components.clinicalRecord;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ClinicalRecordRepository extends JpaRepository<ClinicalRecord, Integer> {
}
