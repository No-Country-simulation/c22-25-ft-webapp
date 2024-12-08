package com.webapp.backend.components.patient;

import com.webapp.backend.components.clinicalRecord.ClinicalRecord;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class PatientService {
    private final PatientRepository patientRepository;

    public List<PatientDTO> getAllPatientsForAdmin(){
        List<Patient> dbPatients = patientRepository.findAll();

        return dbPatients.stream().map(PatientDTO::new).toList();
    }

    public List<PatientDTO> getAllPatientsForDoctor(Integer doctorDni){
        List<Patient> dbPatients = patientRepository.findByClinicalRecordUserDni(doctorDni);
        return dbPatients.stream().map(PatientDTO::new).toList();
    }
}
