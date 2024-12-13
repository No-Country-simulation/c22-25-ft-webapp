package com.webapp.backend.components.clinicalRecord;

import com.webapp.backend.components.patient.Patient;
import com.webapp.backend.components.patient.PatientRepository;
import com.webapp.backend.user.User;
import com.webapp.backend.user.Repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@AllArgsConstructor
public class ClinicalRecordService {
    private final ClinicalRecordRepository clinicalRecordRepository;
    private final PatientRepository patientRepository;
    private final UserRepository userRepository;

    public List<ClinicalRecordDTOForAdmin> getAllClinicalRecordsForAdmin(){
        List<ClinicalRecord> dbClinicalRecords = clinicalRecordRepository.findAll();
        return dbClinicalRecords.stream().map(ClinicalRecordDTOForAdmin::new).toList();
    }

    public List<ClinicalRecordDTOForDoctor> getAllClinicalRecordsForDoctor(Integer dni){
        List<ClinicalRecord> dbClinicalRecords = clinicalRecordRepository.findAll();
        List<ClinicalRecord> filteredClinicalRecords = dbClinicalRecords.stream().filter(record -> {
            return dni.equals(record.getUser().getDni());
        }).toList();
        return dbClinicalRecords.stream().map(ClinicalRecordDTOForDoctor::new).toList();
    }

    @Transactional
    public ClinicalRecordDTOForDoctor saveClinicalRecord(ClinicalRecordDTO clinicalRecordData, Integer doctorDni, Integer patientDni){
        Patient dbPatient = patientRepository.findByDni(patientDni).orElseThrow(() -> new RuntimeException("Patient not found"));
        User dbDoctor = userRepository.findByDni(doctorDni).orElseThrow(() -> new RuntimeException("Doctor not found"));

        ClinicalRecord clinicalRecord = ClinicalRecord.builder()
                .date(clinicalRecordData.getDate())
                .status(clinicalRecordData.getStatus())
                .patient(dbPatient)
                .user(dbDoctor)
                .build();

        ClinicalRecord savedClinicalRecord = clinicalRecordRepository.save(clinicalRecord);

        return new ClinicalRecordDTOForDoctor(savedClinicalRecord);
    }

    @Transactional
    public ClinicalRecordDTOForDoctor updateClinicalRecord(ClinicalRecordDTO clinicalRecordData, Integer recordId, Integer doctorDni, Integer patientDni){
        ClinicalRecord dbClinicalRecord = clinicalRecordRepository.findById(recordId).orElseThrow(() -> new RuntimeException("Clinical record not found"));

        if(dbClinicalRecord.getUser().getDni() != doctorDni || dbClinicalRecord.getPatient().getDni() != patientDni){
            throw new RuntimeException("The information entered does not match stored information");
        }

        dbClinicalRecord.setDate(clinicalRecordData.getDate());
        dbClinicalRecord.setStatus(clinicalRecordData.getStatus());

        ClinicalRecord savedClinicalRecord = clinicalRecordRepository.save(dbClinicalRecord);

        return new ClinicalRecordDTOForDoctor(savedClinicalRecord);
    }

    @Transactional
    public void deleteClinicalRecord(Integer doctorDni, Integer recordId, Integer patientDni) {
        ClinicalRecord dbClinicalRecord = clinicalRecordRepository.findById(recordId).orElseThrow(() -> new RuntimeException("Clinical record not found"));

        if(dbClinicalRecord.getUser().getDni() != doctorDni || dbClinicalRecord.getPatient().getDni() != patientDni){
            throw new RuntimeException("Los datos no son congruentes");
        }

        clinicalRecordRepository.deleteById(recordId);
    }
}
