package com.webapp.backend.components.consultationRecord;

import com.webapp.backend.components.clinicalRecord.ClinicalRecord;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "consultation_record")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ConsultationRecord {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int consultationRecordId;

    @OneToOne
    @JoinColumn(name = "record_id", referencedColumnName = "recordId")
    private ClinicalRecord clinicalRecord;

    @Column(name= "reason", nullable = false, columnDefinition = "TEXT")
    private String reason;

    @Column(name= "current_illness", nullable = false, columnDefinition = "TEXT")
    private String currentIllness;

    @Column(name= "personal_background", nullable = false, columnDefinition = "TEXT")
    private String personalBackground;

    @Column(name= "Familiar_background", nullable = false, columnDefinition = "TEXT")
    private String familiarBackground;

    @Column(name= "physical_exam", nullable = false, columnDefinition = "TEXT")
    private String physicalExam;

    @Column(name= "dx", nullable = false, columnDefinition = "TEXT")
    private String dx;

    @Column(name= "treatment", nullable = false, columnDefinition = "TEXT")
    private String treatment;

    @Column(name= "evolution", nullable = false, columnDefinition = "TEXT")
    private String evolution;

    @Column(name= "diagnostic_tests", nullable = false, columnDefinition = "TEXT")
    private String diagnosticTests;

    @Column(name= "med_procedures", nullable = false, columnDefinition = "TEXT")
    private String medProcedures;

    @Column(name= "informed_consent", nullable = false, columnDefinition = "TEXT")
    private String informedConsent;

    @Column(name= "aditional_information", nullable = false, columnDefinition = "TEXT")
    private String aditionalInformation;

    @Override
    public String toString() {
        return "ConsultationRecord{" +
                "consultationRecordId=" + consultationRecordId +
                ", clinicalRecord=" + clinicalRecord +
                ", reason='" + reason + '\'' +
                ", currentIllness='" + currentIllness + '\'' +
                ", personalBackground='" + personalBackground + '\'' +
                ", familiarBackground='" + familiarBackground + '\'' +
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