package com.webapp.backend.components.consultationRecord;

import com.webapp.backend.components.clinicalRecord.ClinicalRecord;
import jakarta.persistence.*;

@Entity
@Table(name = "consultation_record")
public class ConsultationRecord {

    @Id
    @OneToOne
    @JoinColumn(name = "record_id", referencedColumnName = "recordId")
    private ClinicalRecord clinicalRecord;

    @Column(name= "reason", nullable = false)
    private String reason;

    @Column(name= "current_illness", nullable = false)
    private String currentIllness;

    @Column(name= "personal_background", nullable = false)
    private String personalBackground;

    @Column(name= "Familiar_backgroundt", nullable = false)
    private String FamiliarBackgroundt;

    @Column(name= "physical_exam", nullable = false)
    private String physicalExam;

    @Column(name= "dx", nullable = false)
    private String dx;

    @Column(name= "treatment", nullable = false)
    private String treatment;

    @Column(name= "evolution", nullable = false)
    private String evolution;

    @Column(name= "diagnostic_tests", nullable = false)
    private String diagnosticTests;

    @Column(name= "med_procedures", nullable = false)
    private String medProcedures;

    @Column(name= "informed_consent", nullable = false)
    private String informedConsent;

    @Column(name= "aditional_information", nullable = false)
    private String aditionalInformation;

    public ConsultationRecord() {
    }

    public ConsultationRecord(ClinicalRecord clinicalRecord, String reason, String currentIllness, String personalBackground, String familiarBackgroundt, String physicalExam, String dx, String treatment, String evolution, String diagnosticTests, String medProcedures, String informedConsent, String aditionalInformation) {
        this.clinicalRecord = clinicalRecord;
        this.reason = reason;
        this.currentIllness = currentIllness;
        this.personalBackground = personalBackground;
        FamiliarBackgroundt = familiarBackgroundt;
        this.physicalExam = physicalExam;
        this.dx = dx;
        this.treatment = treatment;
        this.evolution = evolution;
        this.diagnosticTests = diagnosticTests;
        this.medProcedures = medProcedures;
        this.informedConsent = informedConsent;
        this.aditionalInformation = aditionalInformation;
    }

    public ClinicalRecord getClinicalRecord() {
        return clinicalRecord;
    }

    public void setClinicalRecord(ClinicalRecord clinicalRecord) {
        this.clinicalRecord = clinicalRecord;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public String getCurrentIllness() {
        return currentIllness;
    }

    public void setCurrentIllness(String currentIllness) {
        this.currentIllness = currentIllness;
    }

    public String getPersonalBackground() {
        return personalBackground;
    }

    public void setPersonalBackground(String personalBackground) {
        this.personalBackground = personalBackground;
    }

    public String getFamiliarBackgroundt() {
        return FamiliarBackgroundt;
    }

    public void setFamiliarBackgroundt(String familiarBackgroundt) {
        FamiliarBackgroundt = familiarBackgroundt;
    }

    public String getPhysicalExam() {
        return physicalExam;
    }

    public void setPhysicalExam(String physicalExam) {
        this.physicalExam = physicalExam;
    }

    public String getDx() {
        return dx;
    }

    public void setDx(String dx) {
        this.dx = dx;
    }

    public String getTreatment() {
        return treatment;
    }

    public void setTreatment(String treatment) {
        this.treatment = treatment;
    }

    public String getEvolution() {
        return evolution;
    }

    public void setEvolution(String evolution) {
        this.evolution = evolution;
    }

    public String getDiagnosticTests() {
        return diagnosticTests;
    }

    public void setDiagnosticTests(String diagnosticTests) {
        this.diagnosticTests = diagnosticTests;
    }

    public String getMedProcedures() {
        return medProcedures;
    }

    public void setMedProcedures(String medProcedures) {
        this.medProcedures = medProcedures;
    }

    public String getInformedConsent() {
        return informedConsent;
    }

    public void setInformedConsent(String informedConsent) {
        this.informedConsent = informedConsent;
    }

    public String getAditionalInformation() {
        return aditionalInformation;
    }

    public void setAditionalInformation(String aditionalInformation) {
        this.aditionalInformation = aditionalInformation;
    }

    @Override
    public String toString() {
        return "ConsultationRecord{" +
                "clinicalRecord=" + clinicalRecord +
                ", reason='" + reason + '\'' +
                ", currentIllness='" + currentIllness + '\'' +
                ", personalBackground='" + personalBackground + '\'' +
                ", FamiliarBackgroundt='" + FamiliarBackgroundt + '\'' +
                ", physicalExam='" + physicalExam + '\'' +
                ", dx='" + dx + '\'' +
                ", treatment='" + treatment + '\'' +
                ", evolution='" + evolution + '\'' +
                ", diagnosticTests='" + diagnosticTests + '\'' +
                ", medProcedures='" + medProcedures + '\'' +
                ", informedConsent='" + informedConsent + '\'' +
                ", aditionalInformation='" + aditionalInformation + '\'' +
                '}';
    }
}