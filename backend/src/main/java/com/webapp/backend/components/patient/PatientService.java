package com.webapp.backend.components.patient;

import com.webapp.backend.components.clinicalRecord.ClinicalRecord;
import com.webapp.backend.components.clinicalRecord.ClinicalRecordRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@AllArgsConstructor
public class PatientService {
    private final PatientRepository patientRepository;
    private final ClinicalRecordRepository clinicalRecordRepository;

    public List<PatientDTO> getAllPatientsForAdmin(){
        List<Patient> dbPatients = patientRepository.findAll();

        return dbPatients.stream().map(PatientDTO::new).toList();
    }

    public List<PatientDTO> getAllPatientsForDoctor(Integer doctorDni){
        List<Patient> dbPatients = patientRepository.findByClinicalRecordUserDni(doctorDni);
        return dbPatients.stream().map(PatientDTO::new).toList();
    }

    public PatientWithDxsDTO getPatientWithDx(Integer doctorDni, Integer patientDni){
        List<ClinicalRecord> clinicalRecords = clinicalRecordRepository.findAll().stream().filter(record -> {
            return doctorDni.equals(record.getUser().getDni()) && patientDni.equals(record.getPatient().getDni());
        }).toList();

        Patient dbPatient = patientRepository.findByDni(patientDni).orElseThrow(() -> new RuntimeException("Patient not found"));

        return new PatientWithDxsDTO(dbPatient, clinicalRecords);
    }

    @Transactional
    public PatientDTO savePatient(PatientDTO patientData){
        Patient newPatient = Patient.builder()
                .dni(patientData.getDni())
                .firstName(patientData.getFirstName())
                .lastName(patientData.getLastName())
                .gender(patientData.getGender())
                .birthday(patientData.getBirthday())
                .email(patientData.getEmail())
                .address(patientData.getAddress())
                .cellphone(patientData.getCellphone())
                .build();

        Patient savedPatient = patientRepository.save(newPatient);

        return new PatientDTO(savedPatient);
    }

    @Transactional
    public PatientDTO updatePatient(PatientDTO patientDTO, Integer dni){
        Patient dbPatient = patientRepository.findByDni(dni).orElseThrow(() -> new RuntimeException("Patient not found"));

        dbPatient.setDni(patientDTO.getDni());
        dbPatient.setBirthday(patientDTO.getBirthday());
        dbPatient.setFirstName(patientDTO.getFirstName());
        dbPatient.setLastName(patientDTO.getLastName());
        dbPatient.setGender(patientDTO.getGender());
        dbPatient.setAddress(patientDTO.getAddress());
        dbPatient.setCellphone(patientDTO.getCellphone());
        dbPatient.setEmail(patientDTO.getEmail());

        Patient savedPatient = patientRepository.save(dbPatient);

        return new PatientDTO(savedPatient);
    }

    @Transactional
    public void deletePatient(Integer dni){
        patientRepository.deleteByDni(dni);
    }
}
