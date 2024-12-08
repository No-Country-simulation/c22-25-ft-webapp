package com.webapp.backend.components.consultationRecord;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ConsultationRecordDTO {
    private Integer consultationRecordId;
    private String reason;
    private String currentIllness;
    private String personalBackground;
    private String familiarBackground;
    private String physicalExam;
    private String dx;
    private String treatment;
    private String evolution;
    private String diagnosticTests;
    private String medProcedures;
    private String informedConsent;
    private String aditionalInformation;

    public ConsultationRecordDTO(ConsultationRecord consultationRecord) {
        this.consultationRecordId = consultationRecord.getConsultationRecordId();
        this.reason = consultationRecord.getReason();
        this.currentIllness = consultationRecord.getCurrentIllness();
        this.personalBackground = consultationRecord.getPersonalBackground();
        this.familiarBackground = consultationRecord.getFamiliarBackground();
        this.physicalExam = consultationRecord.getPhysicalExam();
        this.dx = consultationRecord.getDx();
        this.treatment = consultationRecord.getTreatment();
        this.evolution = consultationRecord.getEvolution();
        this.diagnosticTests = consultationRecord.getDiagnosticTests();
        this.medProcedures = consultationRecord.getMedProcedures();
        this.informedConsent = consultationRecord.getInformedConsent();
        this.aditionalInformation = consultationRecord.getAditionalInformation();
    }
}
