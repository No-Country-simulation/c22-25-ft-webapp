package com.webapp.backend.components.consultationRecord;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ConsultationRecordDTO {
  private Integer consultationRecordId;
  @NotNull(message = "reason is mandatory")
  private String reason;
  @NotNull(message = "currentIllness is mandatory")
  private String currentIllness;
  @NotNull(message = "personalBackground is mandatory")
  private String personalBackground;
  @NotNull(message = "familiarBackground is mandatory")
  private String familiarBackground;
  @NotNull(message = "physical is mandatory")
  private String physicalExam;
  @NotNull(message = "dx is mandatory")
  private String dx;
  @NotNull(message = "treatment is mandatory")
  private String treatment;
  @NotNull(message = "evolution is mandatory")
  private String evolution;
  @NotNull(message = "diagnosticTest is mandatory")
  private String diagnosticTests;
  @NotNull(message = "medProcedures is mandatory")
  private String medProcedures;
  @NotNull(message = "informedConsent is mandatory")
  private String informedConsent;
  @NotNull(message = "aditionalInformation is mandatory")
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
