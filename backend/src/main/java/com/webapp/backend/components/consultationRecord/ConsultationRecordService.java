package com.webapp.backend.components.consultationRecord;

import com.webapp.backend.components.clinicalRecord.ClinicalRecord;
import com.webapp.backend.components.clinicalRecord.ClinicalRecordRepository;
import jakarta.persistence.criteria.CriteriaBuilder;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@AllArgsConstructor
public class ConsultationRecordService {
    private ConsultationRecordRepository consultationRecordRepository;
    private ClinicalRecordRepository clinicalRecordRepository;

    @Transactional
    public ConsultationRecordDTO saveConsultationRecord(ConsultationRecordDTO consultationRecordData, Integer recordId){
        ClinicalRecord dbClinicalRecord = clinicalRecordRepository.findById(recordId).orElseThrow(() -> new RuntimeException("Clinical Record not found"));

        ConsultationRecord consultationRecord  = ConsultationRecord.builder()
                .reason(consultationRecordData.getReason())
                .currentIllness(consultationRecordData.getCurrentIllness())
                .personalBackground(consultationRecordData.getPersonalBackground())
                .familiarBackground(consultationRecordData.getFamiliarBackground())
                .physicalExam(consultationRecordData.getPhysicalExam())
                .dx(consultationRecordData.getDx())
                .treatment(consultationRecordData.getTreatment())
                .evolution(consultationRecordData.getEvolution())
                .diagnosticTests(consultationRecordData.getDiagnosticTests())
                .medProcedures(consultationRecordData.getMedProcedures())
                .informedConsent(consultationRecordData.getMedProcedures())
                .aditionalInformation(consultationRecordData.getAditionalInformation())
                .clinicalRecord(dbClinicalRecord)
                .build();

        ConsultationRecord savedConsultationRecord = consultationRecordRepository.save(consultationRecord);

        return new ConsultationRecordDTO(savedConsultationRecord);
    }

    @Transactional
    public ConsultationRecordDTO updateConsultationRecord(ConsultationRecordDTO consultationRecordData, Integer consultationId){
        ConsultationRecord dbConsultationRecord = consultationRecordRepository.findById(consultationId).orElseThrow(() -> new RuntimeException("Consultation Record not found"));

        dbConsultationRecord.setReason(consultationRecordData.getReason());
        dbConsultationRecord.setCurrentIllness(consultationRecordData.getCurrentIllness());
        dbConsultationRecord.setPersonalBackground(consultationRecordData.getPersonalBackground());
        dbConsultationRecord.setFamiliarBackground(consultationRecordData.getFamiliarBackground());
        dbConsultationRecord.setPhysicalExam(consultationRecordData.getPhysicalExam());
        dbConsultationRecord.setDx(consultationRecordData.getDx());
        dbConsultationRecord.setTreatment(consultationRecordData.getTreatment());
        dbConsultationRecord.setEvolution(consultationRecordData.getEvolution());
        dbConsultationRecord.setDiagnosticTests(consultationRecordData.getDiagnosticTests());
        dbConsultationRecord.setMedProcedures(consultationRecordData.getMedProcedures());
        dbConsultationRecord.setInformedConsent(consultationRecordData.getInformedConsent());
        dbConsultationRecord.setAditionalInformation(consultationRecordData.getAditionalInformation());

        ConsultationRecord savedConsultationRecord = consultationRecordRepository.save(dbConsultationRecord);

        return new ConsultationRecordDTO(savedConsultationRecord);
    }

    @Transactional
    public void deleteConsultationRecord(Integer consultationId){
        consultationRecordRepository.deleteById(consultationId);
    }
}
