package com.webapp.backend.components.clinicalRecord;


import com.webapp.backend.components.consultationRecord.ConsultationRecordDTO;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
public class ClinicalRecordDTOForPatient {
    private Integer recordId;

    private Date date;

    private String status;

    private ConsultationRecordDTO consultationRecord;

    public ClinicalRecordDTOForPatient(ClinicalRecord clinicalRecord){
        this.recordId = clinicalRecord.getRecordId();
        this.date = clinicalRecord.getDate();
        this.status = clinicalRecord.getStatus().name();
        this.consultationRecord = clinicalRecord.getConsultationRecord() == null ?
                new ConsultationRecordDTO() :
                new ConsultationRecordDTO(clinicalRecord.getConsultationRecord());
    }
}
