package com.webapp.backend.components.clinicalRecord;

import com.webapp.backend.components.patient.PatientDTO;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
public class ClinicalRecordDTOForDoctor {
    private Integer recordId;

    private PatientDTO patient;

    private Date date;

    private String status;

    public ClinicalRecordDTOForDoctor(ClinicalRecord clinicalRecord){
        this.recordId = clinicalRecord.getRecordId();
        this.patient = new PatientDTO(clinicalRecord.getPatient());
        this.date = clinicalRecord.getDate();
        this.status = clinicalRecord.getStatus().name();
    }
}
