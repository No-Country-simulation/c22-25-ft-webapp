package com.webapp.backend.components.clinicalRecord;

import com.webapp.backend.components.patient.PatientDTO;
import com.webapp.backend.user.UserDTO;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
public class ClinicalRecordDTOForAdmin {
    private Integer recordId;

    private PatientDTO patient;

    private UserDTO user;

    private Date date;

    private String status;

    ClinicalRecordDTOForAdmin(ClinicalRecord clinicalRecord){
        this.recordId = clinicalRecord.getRecordId();
        this.patient = new PatientDTO(clinicalRecord.getPatient());
        this.user = new UserDTO(clinicalRecord.getUser());
        this.date = clinicalRecord.getDate();
        this.status = clinicalRecord.getStatus().name();
    }
}
