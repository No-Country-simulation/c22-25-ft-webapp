package com.webapp.backend.components.clinicalRecord;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ClinicalRecordService {
    private final ClinicalRecordRepository clinicalRecordRepository;

    public List<ClinicalRecordDTOForAdmin> getAllClinicalRecordsForAdmin(){
        List<ClinicalRecord> dbClinicalRecords = clinicalRecordRepository.findAll();
        return dbClinicalRecords.stream().map(ClinicalRecordDTOForAdmin::new).toList();
    }
}
