package com.webapp.backend.components.consultationRecord;

import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ConsultationRecordDTO {
    private Integer consultationRecordId;
    @NotEmpty(message = "reason is mandatory")
    private String reason;
    @NotEmpty(message = "currentIllness is mandatory")
    private String currentIllness;
    @NotEmpty(message = "personalBackground is mandatory")
    private String personalBackground;
    @NotEmpty(message = "familiarBackground is mandatory")
    private String familiarBackground;
    @NotEmpty(message = "physical is mandatory")
    private String physicalExam;
    @NotEmpty(message = "dx is mandatory")
    private String dx;
    @NotEmpty(message = "treatment is mandatory")
    private String treatment;
    @NotEmpty(message = "evolution is mandatory")
    private String evolution;
    @NotEmpty(message = "diagnosticTest is mandatory")
    private String diagnosticTests;
    @NotEmpty(message = "medProcedures is mandatory")
    private String medProcedures;
    @NotEmpty(message = "informedConsent is mandatory")
    private String informedConsent;
    @NotEmpty(message = "aditionalInformation is mandatory")
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
