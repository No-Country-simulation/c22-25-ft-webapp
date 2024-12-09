package com.webapp.backend.components.patient;

import com.webapp.backend.components.clinicalRecord.ClinicalRecord;
import com.webapp.backend.components.clinicalRecord.ClinicalRecordDTOForPatient;
import lombok.Getter;

import java.util.List;

@Getter
public class PatientWithDxsDTO {
    private final PatientDTO patient;
    private final List<ClinicalRecordDTOForPatient> clinicalRecordList;

    public PatientWithDxsDTO(Patient patient, List<ClinicalRecord> clinicalRecord){
        this.patient = new PatientDTO(patient);
        this.clinicalRecordList = clinicalRecord.stream().map(ClinicalRecordDTOForPatient::new).toList();
    }
}
