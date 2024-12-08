package com.webapp.backend.components.patient;

import com.webapp.backend.components.clinicalRecord.ClinicalRecord;
import com.webapp.backend.components.clinicalRecord.ClinicalRecordDTOForDoctor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
public class PatientWithDx {
    private final PatientDTO patient;
    private final List<ClinicalRecordDTOForDoctor> clinicalRecordList;

    public PatientWithDx(Patient patient, List<ClinicalRecord> clinicalRecord){
        this.patient = new PatientDTO(patient);
        this.clinicalRecordList = clinicalRecord.stream().map(ClinicalRecordDTOForDoctor::new).toList();
    }
}
