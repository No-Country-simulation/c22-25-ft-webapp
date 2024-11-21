package com.webapp.backend.components.consultationRecord;

import com.webapp.backend.components.clinicalRecord.ClinicalRecord;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ConsultationRecordRepository extends JpaRepository<ConsultationRecord, Integer> {
}
